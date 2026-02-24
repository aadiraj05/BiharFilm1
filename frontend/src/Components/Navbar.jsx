// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import Logo1 from "/src/assets/Logo1.png";
import { X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

/* ═══ Mobile Accordion Section ═══ */
const MobileAccordion = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) setHeight(contentRef.current.scrollHeight);
    else setHeight(0);
  }, [isOpen]);

  return (
    <div className="rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-[15px] font-medium tracking-wide transition-all duration-200 ${
          isOpen
            ? "bg-white/[0.06] text-white"
            : "text-white/90 hover:bg-white/[0.04] active:bg-white/[0.08]"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`text-white/40 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        style={{ maxHeight: `${height}px` }}
        className="transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
      >
        <div ref={contentRef} className="pl-8 pr-4 pb-2 pt-1 flex flex-col gap-0.5">
          {items.map((item, idx) =>
            item.href ? (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2.5 px-3 rounded-lg text-[14px] text-white/50 hover:text-white/90 hover:bg-white/[0.04] transition-all duration-200"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={idx}
                type="button"
                onClick={item.action}
                className="w-full text-left py-2.5 px-3 rounded-lg text-[14px] text-white/50 hover:text-white/90 hover:bg-white/[0.04] transition-all duration-200"
              >
                {item.label}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

/* ═══ Language Toggle (Footer-like, no dropdown) ═══ */
const LangToggle = ({ i18n, darkMode }) => {
  // darkMode => navbar is white/bg, so text should be black like other items
  const baseText = darkMode ? "text-black" : "text-white";
  const inactive = darkMode ? "opacity-60 hover:opacity-100" : "opacity-60 hover:opacity-100";

  return (
    <div className={`flex items-center gap-1.5 text-[11px] font-semibold ${baseText}`}>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage("en");
          localStorage.setItem("lang", "en");
        }}
        className={`px-1.5 py-0.5 rounded transition-all hover:text-red-600 ${
          i18n.language === "en" ? "opacity-100" : inactive
        }`}
      >
        EN
      </button>
      <span className={darkMode ? "opacity-40" : "opacity-50"}>|</span>
      <button
        type="button"
        onClick={() => {
          i18n.changeLanguage("hi");
          localStorage.setItem("lang", "hi");
        }}
        className={`px-1.5 py-0.5 rounded transition-all hover:text-red-600 ${
          i18n.language === "hi" ? "opacity-100" : inactive
        }`}
      >
        हिंदी
      </button>
    </div>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [showNavbar, setShowNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [isDocumentsDropdownOpen, setIsDocumentsDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPolicyDropdownOpen, setIsPolicyDropdownOpen] = useState(false);
  const [isImpactDropdownOpen, setIsImpactDropdownOpen] = useState(false);
  const [isCinemaEcosystemDropdownOpen, setIsCinemaEcosystemDropdownOpen] = useState(false);

  // ✅ needed to make language toggle behave like menu: black on hover
  const [isNavHover, setIsNavHover] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Apply stored language (same behavior as footer)
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToElementSmoothly = (element, duration = 1200) => {
    const start = window.pageYOffset;
    const end = element.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    const easeInOutQuad = (tt) => (tt < 0.5 ? 2 * tt * tt : -1 + (4 - 2 * tt) * tt);

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easing = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * easing);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const handleLocationClick = (id) => {
    if (id === "notice" || id === "documents" || id === "home") return;

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) scrollToElementSmoothly(section, 2200);
    }

    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") navigate("/");
    else window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleApplyClick = () => {
    if (location.pathname !== "/apply-noc") {
      navigate("/login");
    } else {
      const formSection = document.getElementById("FilmPolicy");
      if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setTimeout(() => setShowNavbar(true), 1000);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (currentScrollPos === 0) {
        setNavbarVisible(true);
        setHasScrolled(false);
      } else {
        setNavbarVisible(isScrollingUp);
        setHasScrolled(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // 🔒 Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const menuItems = [{ id: "Vr", label: "VR" }];

  // ✅ when navbar is white OR user hovers navbar -> menu becomes black
  const isDarkText = (navbarVisible && hasScrolled) || isNavHover;

  return (
    <nav
      onMouseEnter={() => setIsNavHover(true)}
      onMouseLeave={() => setIsNavHover(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${
        showNavbar ? "opacity-100" : "opacity-0"
      } ${navbarVisible ? "transform-none" : "-translate-y-full"} group`}
    >
      <div
        className={`px-4 sm:px-6 lg:px-8 xl:px-16 py-2 md:py-2.5 relative transition-colors duration-300 ${
          navbarVisible && hasScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        {/* hover white background */}
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 z-0 pointer-events-none transition-opacity duration-300" />

        <div className="flex justify-between items-center relative z-10">
          <div className="flex items-center cursor-pointer" onClick={handleHomeClick}>
            <img src={Logo1} alt="logo" className="h-12 w-16 md:h-14 md:w-20" />
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex items-center gap-4 lg:gap-6 xl:gap-9 text-[13px] lg:text-sm xl:text-base relative z-10 transition-colors duration-300 ${
              navbarVisible && hasScrolled ? "text-black" : "text-white"
            } group-hover:text-black`}
          >
            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onClick={handleHomeClick}
            >
              {t("nav.home")}
            </li>

            {/* Home Dropdown */}
            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              {t("nav.about_us")} <ChevronDown size={16} className="ml-1" />
              {isHomeDropdownOpen && (
                <ul className="absolute top-full left-0 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                  <li
                    onClick={() => {
                      navigate("/about-us");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.bsfdfc_profile")}
                  </li>
                  <li
                    onClick={() => handleLocationClick("GoverningBody")}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.board_of_directors")}
                  </li>
                  <li
                    onClick={() => handleLocationClick("GoverningBody")}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.org_structure")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/contact-bsfdfc");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.contact_us")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/gallery");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.gallery")}
                  </li>
                </ul>
              )}
            </li>

            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleLocationClick(item.id)}
                className="cursor-pointer hover:text-red-600 font-semibold transition"
              >
                {item.label}
              </li>
            ))}

            {/* Policy Dropdown */}
            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onMouseEnter={() => setIsPolicyDropdownOpen(true)}
              onMouseLeave={() => setIsPolicyDropdownOpen(false)}
            >
              {t("nav.policy_forms")}
              <ChevronDown size={16} className="ml-1" />
              {isPolicyDropdownOpen && (
                <ul className="absolute top-full left-0 w-56 bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                  <li
                    onClick={() => {
                      navigate("/document/film-policy");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.film_policy")}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 hover:text-red-600">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSddl9uk7rqu-_fl6N4U_vgYXlrL_pwUTQaY5Mm8AqjB4NRSYQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full h-full"
                    >
                      {t("nav.producer_reg")}
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      navigate("/document/op-guidelines");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.op_guidelines")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/howToShootingPermission");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.shooting_permission")}
                  </li>
                  <li
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/moa.pdf";
                      link.download = "moa.pdf";
                      link.click();
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.moa")}
                  </li>
                </ul>
              )}
            </li>

            {/* Cinema Ecosystem Dropdown */}
            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onMouseEnter={() => setIsCinemaEcosystemDropdownOpen(true)}
              onMouseLeave={() => setIsCinemaEcosystemDropdownOpen(false)}
            >
              {t("nav.cinema_ecosystem")} <ChevronDown size={16} className="ml-1" />
              {isCinemaEcosystemDropdownOpen && (
                <ul className="absolute top-full left-0 w-56 bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                  <li
                    onClick={() => {
                      navigate("/", {
                        state: { scrollTo: "Cinemaecosystem", openPopup: "map" },
                      });
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.production_assets")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/", {
                        state: { scrollTo: "Cinemaecosystem", openPopup: "localArtist" },
                      });
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.local_artist")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/", {
                        state: { scrollTo: "Cinemaecosystem", openPopup: "security" },
                      });
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.local_technicians")}
                  </li>
                </ul>
              )}
            </li>

            {/* Impact Dropdown */}
            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onMouseEnter={() => setIsImpactDropdownOpen(true)}
              onMouseLeave={() => setIsImpactDropdownOpen(false)}
            >
              {t("nav.impact")} <ChevronDown size={16} className="ml-1" />
              {isImpactDropdownOpen && (
                <ul className="absolute top-full left-0 w-56 bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                  <li
                    onClick={() => {
                      navigate("/shooting-in-bihar");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.shooting_in_bihar")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/scholarship");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.scholarship")}
                  </li>
                </ul>
              )}
            </li>

            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onClick={() => {
                navigate("/ShootingLocation");
                setIsMobileMenuOpen(false);
              }}
            >
              {t("nav.shooting_location")}
            </li>

            {/* Documents Dropdown */}
            <li
              className="relative cursor-pointer hover:text-red-600 font-semibold transition flex items-center"
              onMouseEnter={() => setIsDocumentsDropdownOpen(true)}
              onMouseLeave={() => setIsDocumentsDropdownOpen(false)}
            >
              {t("nav.documents")} <ChevronDown size={16} className="ml-1" />
              {isDocumentsDropdownOpen && (
                <ul className="absolute top-full left-0 w-56 bg-white text-black shadow-lg rounded-md overflow-hidden z-50">
                  <li
                    onClick={() => {
                      navigate("/notification");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.notification")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/tender");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.tender")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/document/bihar-baiscope");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.bihar_bioscope")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/document/goa-film-brochure");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.goa_brochure")}
                  </li>
                  <li
                    onClick={() => {
                      navigate("/document/promotion-policy");
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 hover:text-red-600"
                  >
                    {t("nav.promotion_policy")}
                  </li>
                </ul>
              )}
            </li>

            {/* ✅ Language toggle (Desktop) */}
            <li className="flex items-center">
              <LangToggle i18n={i18n} darkMode={isDarkText} />
            </li>

            <li
              onClick={handleApplyClick}
              className="flex items-center gap-1 cursor-pointer hover:text-red-600 font-semibold transition"
            >
              {t("nav.register")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </li>
          </ul>

          {/* ═══ Mobile Right Side (Language + Hamburger) ═══ */}
          <div className="md:hidden relative z-[60] flex items-center gap-2">
            {/* ✅ Language toggle visible in navbar (mobile) */}
            <LangToggle i18n={i18n} darkMode={isDarkText} />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`p-2 rounded-lg focus:outline-none transition-all duration-300 ${
                navbarVisible && hasScrolled
                  ? "text-black hover:bg-black/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                    navbarVisible && hasScrolled ? "bg-black" : "bg-white"
                  } ${isMobileMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
                />
                <span
                  className={`block h-[2px] rounded-full transition-all duration-200 ${
                    navbarVisible && hasScrolled ? "bg-black" : "bg-white"
                  } ${isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`}
                />
                <span
                  className={`block h-[2px] rounded-full transition-all duration-300 origin-center ${
                    navbarVisible && hasScrolled ? "bg-black" : "bg-white"
                  } ${isMobileMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* ═══ Mobile Menu Overlay + Panel ═══ */}
        <div
          className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`md:hidden fixed top-0 right-0 w-[85%] max-w-[380px] h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a0a10] z-[50] shadow-2xl overflow-hidden transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/10">
            <img
              src={Logo1}
              alt="BSFDFC"
              className="h-10 w-auto opacity-90 cursor-pointer"
              onClick={handleHomeClick}
            />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto overscroll-contain h-[calc(100vh-80px)] pb-32 px-5 pt-4">
            <nav className="flex flex-col gap-1">
              <button
                type="button"
                onClick={handleHomeClick}
                className="w-full text-left px-5 py-3.5 rounded-xl text-white/90 hover:bg-white/[0.04] active:bg-white/[0.08] transition-all duration-200 text-[15px] font-medium tracking-wide"
              >
                {t("nav.home")}
              </button>

              <MobileAccordion
                label={t("nav.about_us")}
                items={[
                  {
                    label: t("nav.bsfdfc_profile"),
                    action: () => {
                      navigate("/about-us");
                      setIsMobileMenuOpen(false);
                    },
                  },
                  { label: t("nav.board_of_directors"), action: () => handleLocationClick("GoverningBody") },
                  { label: t("nav.org_structure"), action: () => handleLocationClick("GoverningBody") },
                  {
                    label: t("nav.contact_us"),
                    action: () => {
                      navigate("/contact-bsfdfc");
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.gallery"),
                    action: () => {
                      navigate("/gallery");
                      setIsMobileMenuOpen(false);
                    },
                  },
                ]}
              />

              <button
                type="button"
                onClick={() => handleLocationClick("Vr")}
                className="w-full text-left px-5 py-3.5 rounded-xl text-white/90 hover:bg-white/[0.04] active:bg-white/[0.08] transition-all duration-200 text-[15px] font-medium tracking-wide"
              >
                {t("nav.vr")}
              </button>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

              <MobileAccordion
                label={t("nav.policy_forms")}
                items={[
                  {
                    label: t("nav.film_policy"),
                    action: () => {
                      navigate("/document/film-policy");
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.producer_reg"),
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSddl9uk7rqu-_fl6N4U_vgYXlrL_pwUTQaY5Mm8AqjB4NRSYQ/viewform",
                  },
                  {
                    label: t("nav.op_guidelines"),
                    action: () => {
                      navigate("/document/op-guidelines");
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.shooting_permission"),
                    action: () => {
                      navigate("/howToShootingPermission");
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.moa"),
                    action: () => {
                      const a = document.createElement("a");
                      a.href = "/moa.pdf";
                      a.download = "moa.pdf";
                      a.click();
                      setIsMobileMenuOpen(false);
                    },
                  },
                ]}
              />

              <MobileAccordion
                label={t("nav.cinema_ecosystem")}
                items={[
                  {
                    label: t("nav.production_assets"),
                    action: () => {
                      navigate("/", { state: { scrollTo: "Cinemaecosystem", openPopup: "map" } });
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.local_artist"),
                    action: () => {
                      navigate("/", { state: { scrollTo: "Cinemaecosystem", openPopup: "localArtist" } });
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.local_technicians"),
                    action: () => {
                      navigate("/", { state: { scrollTo: "Cinemaecosystem", openPopup: "security" } });
                      setIsMobileMenuOpen(false);
                    },
                  },
                ]}
              />

              <MobileAccordion
                label={t("nav.impact")}
                items={[
                  {
                    label: t("nav.shooting_in_bihar"),
                    action: () => {
                      navigate("/shooting-in-bihar");
                      setIsMobileMenuOpen(false);
                    },
                  },
                  {
                    label: t("nav.scholarship"),
                    action: () => {
                      navigate("/scholarship");
                      setIsMobileMenuOpen(false);
                    },
                  },
                ]}
              />

              <button
                type="button"
                onClick={() => {
                  navigate("/ShootingLocation");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-5 py-3.5 rounded-xl text-white/90 hover:bg-white/[0.04] active:bg-white/[0.08] transition-all duration-200 text-[15px] font-medium tracking-wide"
              >
                {t("nav.shooting_location")}
              </button>

              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

              <MobileAccordion
                label={t("nav.documents")}
                items={[
                  { label: t("nav.notification"), action: () => { navigate("/notification"); setIsMobileMenuOpen(false); } },
                  { label: t("nav.tender"), action: () => { navigate("/tender"); setIsMobileMenuOpen(false); } },
                  { label: t("nav.bihar_bioscope"), action: () => { navigate("/document/bihar-baiscope"); setIsMobileMenuOpen(false); } },
                  { label: t("nav.goa_brochure"), action: () => { navigate("/document/goa-film-brochure"); setIsMobileMenuOpen(false); } },
                  { label: t("nav.promotion_policy"), action: () => { navigate("/document/promotion-policy"); setIsMobileMenuOpen(false); } },
                ]}
              />
            </nav>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  handleApplyClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#891737] to-[#6b102a] text-white font-semibold text-[13px] tracking-wide shadow-md shadow-[#891737]/20 hover:shadow-[#891737]/40 active:scale-[0.98] transition-all duration-200"
              >
                {t("nav.login")} / {t("nav.register")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;