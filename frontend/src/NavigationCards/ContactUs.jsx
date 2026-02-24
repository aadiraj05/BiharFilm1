import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import Logo1 from "/src/assets/Logo1.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLinkClick = (path, id) => {
    if (path) {
      navigate(path);
    } else if (id) {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className="relative overflow-hidden bg-[#190108] text-gray-100 border-t border-[#190108]"
      id="about"
    >
      {/* Low-opacity cinema doodles background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-3 bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${"/doodles.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main content wrapper to sit above background */}
      <div className="relative">
        {/* Top section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-12 space-y-8 lg:space-y-0">
            {/* About */}
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold mb-4">
                {t("contact.about_heading")}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                {t("contact.about_text")}
              </p>
            </div>

            {/* Links */}
            <div className="lg:w-1/3 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t("contact.quick_links")}
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: t("contact.link_home"), path: "/" },
                    { label: t("contact.link_about"), path: "/about-us" },
                    { label: t("contact.link_vr"), path: "/vrpage" },
                    {
                      label: t("contact.link_film_policy"),
                      path: "/document/film-policy",
                    },
                    {
                      label: t("contact.link_shooting_location"),
                      path: "/ShootingLocation",
                    },
                  ].map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleLinkClick(link.path)}
                        className="hover:text-red-300 transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t("contact.documents")}
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    {
                      label: t("contact.link_notification"),
                      path: "/notification",
                    },
                    { label: t("contact.link_tender"), path: "/tender" },
                    {
                      label: t("contact.link_bihar_bioscope"),
                      path: "/document/bihar-baiscop",
                    },
                    {
                      label: t("contact.link_promotion_policy"),
                      path: "/document/promotion-policy",
                    },
                    // { label: "Privacy Policy", path: "/privacy-policy" }
                  ].map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleLinkClick(link.path)}
                        className="hover:text-red-300 transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:w-1/3">
              <h3 className="text-xl font-bold mb-2">
                {t("contact.contact_heading")}
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="">
                    The Bihar State Film Development & Finance Corporation Ltd.
                  </a>
                  <br />
                  <span>
                    Morisson Building, Near Golghar <br />
                    Patna-800001, Bihar, India
                  </span>
                </li>
                <li className="flex items-center gap-2"></li>
                <li className="flex items-center gap-2">
                  <CiMail className="text-lg" />
                  <span>biharfilmnigam@gmail.com</span>
                </li>
                <li className="cursor-pointer">
                  <a
                    href="https://maps.app.goo.gl/fyEtuxLv422Kz8s2A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-300 hover:text-red-100 transition-colors"
                  >
                    <FaLocationArrow />
                    <span>{t("contact.get_location")}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Bottom row */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <img
                src={Logo1}
                alt="Logo"
                className="h-16 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              />
            </div>

            <div className="w-full md:w-2/3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  {t("contact.follow_us")}
                </h4>
                <div className="flex space-x-4 text-2xl">
                  <a
                    href="https://www.facebook.com/BSFDFCL/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500 transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/artcultureyouth?igsh=YWI1aG9rNGOyaTZy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-pink-400 transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://x.com/bfilmnigam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.youtube.com/@ArtCultureYouth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-red-400 transition"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

              {/* Language Toggle */}
              <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                <button
                  onClick={() => {
                    i18n.changeLanguage("en");
                    localStorage.setItem("lang", "en");
                  }}
                  className={`px-1.5 py-0.5 rounded transition-all ${i18n.language === "en" ? "text-white opacity-100" : "opacity-50 hover:opacity-80"}`}
                >
                  EN
                </button>
                <span className="opacity-30">|</span>
                <button
                  onClick={() => {
                    i18n.changeLanguage("hi");
                    localStorage.setItem("lang", "hi");
                  }}
                  className={`px-1.5 py-0.5 rounded transition-all ${i18n.language === "hi" ? "text-white opacity-100" : "opacity-50 hover:opacity-80"}`}
                >
                  हिंदी
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
