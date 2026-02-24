// src/NavigationCards/Vr.jsx
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Video list (urls only — titles/descriptions come from i18n)
const videoList = [
  {
    high: "/vrvideos/VrvideoHQ.mp4",
    low: "/vrvideos/VrvideoHQ2.mp4",
    titleKey: "vr.title_1",
    descKey: "vr.desc_1",
  },
  {
    high: "/vrvideos/VrvideoHQ2.mp4",
    low: "/vrvideos/VrvideoLQ2.mp4",
    titleKey: "vr.title_2",
    descKey: "vr.desc_2",
  },
  {
    high: "/vrvideos/VrvideoHQ3.mp4",
    low: "/vrvideos/VrvideoLQ3.mp4",
    titleKey: "vr.title_3",
    descKey: "vr.desc_3",
  },
  {
    high: "/vrvideos/VrvideoHQ4.mp4",
    low: "/vrvideos/VrvideoLQ4.mp4",
    titleKey: "vr.title_4",
    descKey: "vr.desc_4",
  },
  {
    high: "/vrvideos/VrvideoHQ5.mp4",
    low: "/vrvideos/VrvideoLQ5.mp4",
    titleKey: "vr.title_5",
    descKey: "vr.desc_5",
  },
  {
    high: "/vrvideos/VrvideoHQ6.mp4",
    low: "/vrvideos/VrvideoLQ6.mp4",
    titleKey: "vr.title_6",
    descKey: "vr.desc_6",
  },
  {
    high: "/vrvideos/VrvideoHQ.mp4",
    low: "/vrvideos/VrvideoLQ.mp4",
    titleKey: "vr.title_1",
    descKey: "vr.desc_1",
  },
  {
    high: "/vrvideos/VrvideoHQ2.mp4",
    low: "/vrvideos/VrvideoLQ2.mp4",
    titleKey: "vr.title_2",
    descKey: "vr.desc_2",
  },
  {
    high: "/vrvideos/VrvideoHQ3.mp4",
    low: "/vrvideos/VrvideoLQ3.mp4",
    titleKey: "vr.title_3",
    descKey: "vr.desc_3",
  },
  {
    high: "/vrvideos/VrvideoHQ4.mp4",
    low: "/vrvideos/VrvideoLQ4.mp4",
    titleKey: "vr.title_4",
    descKey: "vr.desc_4",
  },
  {
    high: "/vrvideos/VrvideoHQ5.mp4",
    low: "/vrvideos/VrvideoLQ5.mp4",
    titleKey: "vr.title_5",
    descKey: "vr.desc_5",
  },
  {
    high: "/vrvideos/VrvideoHQ6.mp4",
    low: "/vrvideos/VrvideoLQ6.mp4",
    titleKey: "vr.title_6",
    descKey: "vr.desc_6",
  },
];

function Vr() {
  const { t } = useTranslation();
  const [mainVideo, setMainVideo] = useState(videoList[0].high);
  const [mainIndex, setMainIndex] = useState(0);
  const navigate = useNavigate();

  const handleVideoClick = (video, index) => {
    setMainVideo(video.high);
    setMainIndex(index);
  };

  return (
    <div
      id="Vr"
      className="bg-[#190108] pt-16 px-4 md:px-10 pb-24 relative overflow-hidden"
    >
      {/* Background Gradient Orb for depth */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4f0419] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <h2 className="text-white text-2xl sm:text-3xl md:text-6xl bebas-neue-regular pl-4 md:pl-24 relative z-10 mb-8 drop-shadow-xl">
        {t("vr.heading")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 mb-12 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pl-4 md:pl-24"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="text-gray-300 text-base leading-relaxed text-justify relative z-10">
              <strong className="text-white block mb-3 text-xl tracking-wide">
                {t("vr.experience_prefix")} {t(videoList[mainIndex].titleKey)}{" "}
                {t("vr.experience_suffix")}
              </strong>
              {t(videoList[mainIndex].descKey)}
            </p>

            <button
              type="button"
              onClick={() => navigate("/vrpage")}
              className="group mt-8 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#4f0419] hover:border-[#4f0419] transition-all duration-300 flex items-center gap-3 backdrop-blur-md shadow-lg hover:shadow-[#4f0419]/30"
            >
              <span className="text-white font-medium tracking-wide">
                {t("vr.learn_more")}
              </span>
              <IoIosArrowRoundForward className="text-white text-2xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Main Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[25rem] rounded-2xl shadow-2xl overflow-hidden bg-black border border-white/10 relative group mx-auto md:mx-0 max-w-[95%]"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#4f0419] to-purple-900 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

          <video
            className="w-full h-full object-cover relative z-10"
            src={mainVideo}
            autoPlay
            muted
            loop
            controls
          />
        </motion.div>
      </div>

      {/* Scrolling Thumbnails */}
      <div className="overflow-hidden group mt-12 px-4 relative z-10">
        <div className="flex w-max space-x-6 animate-scrollVideos group-hover:pause-scroll py-4 pl-4">
          {videoList.map(
            (vid, index) =>
              index !== mainIndex && (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-lg border border-white/10 w-64 h-40 relative flex-shrink-0"
                  onClick={() => handleVideoClick(vid, index)}
                >
                  <video
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    src={vid.low}
                    muted
                    loop
                    autoPlay
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xs font-medium truncate">
                      {t(vid.titleKey)}
                    </p>
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Vr;
