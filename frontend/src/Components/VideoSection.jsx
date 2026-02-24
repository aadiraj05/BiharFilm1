import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";
import "../App.css";

const videoData = [
  {
    url: "/HeroVideos/BuddhaSamyak.webm",
    overlays: [
      {
        title: "The Director's Canvas",
        description:
          "Raw, authentic locations that breathe life into your narrative.",
        top: "35%",
        left: "25%",
      },
      {
        title: "Heritage Meets Horizon",
        description:
          "A blank slate of natural wonder for your next masterpiece.",
        top: "60%",
        left: "75%",
      },
    ],
  },
  {
    url: "/HeroVideos/Snow.webm",
    overlays: [
      {
        title: "Rolling Reels. Living Landscapes.",
        description:
          "From rivers to highways, Bihar opens up as one continuous tracking shot.",
        top: "25%",
        left: "10%",
      },
      {
        title: "Every Road Is a Storyboard",
        description:
          "Highways, village paths, misty mornings — your next scene is already waiting here.",
        top: "50%",
        left: "50%",
      },
    ],
  },
  {
    url: "/HeroVideos/beach.webm",
    overlays: [
      {
        title: "Where the River Writes the First Line",
        description:
          "Quiet banks, soft light, endless horizon — a natural set for your opening frame.",
        top: "30%",
        left: "20%",
      },
      {
        title: "River Rhythms of Bihar",
        description:
          "Crystal water, sand, and laughter — the kind of texture cameras love to linger on.",
        top: "55%",
        left: "70%",
      },
    ],
  },
  {
    url: "/HeroVideos/Snow_1.webm",
    overlays: [
      {
        title: "Rohtas in Reflection",
        description:
          "Still waters, rugged hills — a mirror for every mood from romance to rebellion.",
        top: "60%",
        left: "25%",
      },
      {
        title: "A Frame for Every Genre",
        description:
          "Thriller, drama, docu or dreamscape — this blue expanse bends to your story.",
        top: "30%",
        left: "82%",
      },
    ],
  },
  {
    url: "/HeroVideos/karamchat.webm",
    overlays: [
      {
        title: "Plateaus that Feel Like Sets",
        description:
          "Wind, rock, horizon — minimal, powerful, and made for wide-angle storytelling.",
        top: "45%",
        left: "30%",
      },
      {
        title: "Roots of Bihar. Scale of Cinema.",
        description:
          "Ancient plateaus and emerald ridges that turn every frame into a poster shot.",
        top: "75%",
        left: "60%",
      },
    ],
  },
  {
    url: "/vrvideos/VrvideoHQ6.mp4",
    overlays: [
      {
        title: "New Perspectives Unfold",
        description: "Fresh angles and unseen corners waiting to be captured.",
        top: "40%",
        left: "15%",
      },
      {
        title: "Cinematic Horizons",
        description:
          "Expand your visual vocabulary with these stunning vistas.",
        top: "65%",
        left: "65%",
      },
    ],
  },
];

function App() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [visibleTexts, setVisibleTexts] = useState([false, false]);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  // Refs
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const containerRef = useRef(null);
  const [renderOffset, setRenderOffset] = useState({ x: 0, y: 0 });

  /* ─── Parallax (optimised: uses ref, only updates state when needed) ─── */
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    targetRef.current = {
      x: (clientX / width - 0.5) * 50,
      y: (clientY / height - 0.5) * 25,
    };
  }, []);

  useEffect(() => {
    let running = true;
    const animate = () => {
      if (!running) return;
      const prev = offsetRef.current;
      const target = targetRef.current;
      const nx = prev.x + (target.x - prev.x) * 0.1;
      const ny = prev.y + (target.y - prev.y) * 0.1;
      // Only update React state when there's meaningful movement
      if (Math.abs(nx - prev.x) > 0.05 || Math.abs(ny - prev.y) > 0.05) {
        offsetRef.current = { x: nx, y: ny };
        setRenderOffset({ x: nx, y: ny });
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ─── Overlay text timers ─── */
  useEffect(() => {
    setVisibleTexts([false, false]);
    const t1 = setTimeout(() => setVisibleTexts([true, false]), 800);
    const t2 = setTimeout(() => setVisibleTexts([true, true]), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [currentVideoIndex]);

  /* ─── Smart preload of the NEXT video ─── */
  useEffect(() => {
    const nextIdx = (currentVideoIndex + 1) % videoData.length;
    const nextUrl = videoData[nextIdx].url;

    // Use idle time to preload next video via a hidden <video> element
    const preload = () => {
      if (nextVideoRef.current) {
        nextVideoRef.current.src = nextUrl;
        nextVideoRef.current.load(); // triggers metadata + partial download
      }
    };

    // Delay preload so it doesn't compete with current video
    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preload, { timeout: 3000 });
      } else {
        preload();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  /* ─── Video event handlers ─── */
  const handleCanPlay = useCallback(() => {
    setIsVideoReady(true);
    setIsBuffering(false);
  }, []);

  const handleWaiting = useCallback(() => {
    setIsBuffering(true);
  }, []);

  const handlePlaying = useCallback(() => {
    setIsBuffering(false);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideoReady(false);
    setIsBuffering(true);
    setCurrentVideoIndex((prev) => (prev + 1) % videoData.length);
  }, []);

  /* ─── Attempt play when video source changes ─── */
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    setIsVideoReady(false);
    setIsBuffering(true);

    // Reset and load the new source
    vid.load();

    const playAttempt = () => {
      vid.play().catch(() => {
        // Autoplay blocked — try again on user interaction
        const retryPlay = () => {
          vid.play().catch(() => {});
          document.removeEventListener("click", retryPlay);
        };
        document.addEventListener("click", retryPlay, { once: true });
      });
    };

    // Play as soon as enough data is buffered
    vid.addEventListener("canplay", playAttempt, { once: true });
    return () => vid.removeEventListener("canplay", playAttempt);
  }, [currentVideoIndex]);

  return (
    <motion.div className="min-h-screen flex flex-col bg-black scroll-hidden">
      <Navbar />

      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Video layer */}
        <div
          className="absolute w-[150vw] h-[150vh] md:w-[120vw] md:h-[120vh] -top-[10vh] -left-[10vw]"
          style={{
            transform: `translate(${renderOffset.x}px, ${renderOffset.y}px)`,
            willChange: "transform",
          }}
        >
          <video
            ref={videoRef}
            key={currentVideoIndex}
            className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            src={videoData[currentVideoIndex].url}
            preload="auto"
            muted
            playsInline
            onCanPlay={handleCanPlay}
            onWaiting={handleWaiting}
            onPlaying={handlePlaying}
            onEnded={handleVideoEnd}
          />

          {/* Hidden preloader for NEXT video — only loads metadata + initial chunks */}
          <video
            ref={nextVideoRef}
            className="hidden"
            preload="metadata"
            muted
            playsInline
          />
        </div>

        {/* Text Overlays */}
        {videoData[currentVideoIndex].overlays.map((item, index) => (
          <div
            key={`${currentVideoIndex}-${index}`}
            className={`absolute text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-opacity duration-500 group z-10 max-w-[80%] md:max-w-[30%] text-center sm:text-left ${
              visibleTexts[index] && isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: item.top,
              left: item.left,
              transform: `translate(${renderOffset.x}px, ${renderOffset.y}px)`,
              transition: "transform 0.2s ease-out, opacity 0.5s",
              willChange: "transform, opacity",
            }}
          >
            {item.title}
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 p-2 bg-black/70 text-xs sm:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-300">
              {item.description}
            </div>
          </div>
        ))}

        {/* Dot Navigation */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {videoData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsVideoReady(false);
                setIsBuffering(true);
                setCurrentVideoIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentVideoIndex === index
                  ? "bg-white scale-125 shadow-lg shadow-white/30"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default App;
