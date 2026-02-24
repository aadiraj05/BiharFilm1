// src/pages/UserDashboard.jsx
import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Logo1 from "/src/assets/Logo1.png";
import UserAvatar from "/src/assets/UserAvtar.svg";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import ProducerRegistration from "./ProducerRegistration";
import Annexure1 from "./Annexure1";
import ApplyNOCForm from "./Annexure2";
import AnnexureA from "./AnnexureA";
import UndertakingForm from "./UndertakingForm";
import ArtistRegistrationForm from "./AddArtistForm";
import ShootingPermissionDocuments from "./ShootingPermissionDocuments";

import ArtistProfile from "./ArtistProfile";
import FilmmakerOverview from "./FilmmakerOverview";
import VendorDashboard from "./VendorDashboard";
import UserProfile from "./UserProfile";
import AlertBox from "../Components/AlertBox";

import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  FileText,
  LayoutDashboard,
  User,
  Clapperboard,
  FileCheck,
  FileSignature,
  FileStack,
  Check,
  Key,
} from "lucide-react";

import api from "../Components/axios"; // ✅ Using api instance

const UserDashboard = () => {
  console.log("User Dashboard rendered");

  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [producerRegistrationStatus, setProducerRegistrationStatus] =
    useState(false);

  const [activeSection, setActiveSection] = useState("Dashboard");
  const [nocList, setNocList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [nocExpanded, setNocExpanded] = useState(false);
  const [isCreatingNOC, setIsCreatingNOC] = useState(false);

  const [selectedAppId, setSelectedAppId] = useState(null);
  const [expandedAppId, setExpandedAppId] = useState(null);

  // ✅ FIX: click-based account dropdown for mobile
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);

  const navigate = useNavigate();

  // Alert state
  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    type: "info",
    title: "",
    message: "",
    confirmText: "OK",
    showCancel: false,
    onConfirm: null,
    autoClose: false,
  });

  // Alert helper function
  const showAlert = (config) => {
    setAlertConfig({
      isOpen: true,
      type: config.type || "info",
      title: config.title || "",
      message: config.message || "",
      confirmText: config.confirmText || "OK",
      cancelText: config.cancelText || "Cancel",
      showCancel: config.showCancel || false,
      onConfirm: config.onConfirm || null,
      autoClose: config.autoClose || false,
      duration: config.duration || 3000,
    });
  };

  const closeAlert = () => {
    setAlertConfig((prev) => ({ ...prev, isOpen: false }));
  };

  // ✅ close account dropdown on outside click / ESC
  useEffect(() => {
    const onDocClick = (e) => {
      if (!accountRef.current) return;
      if (!accountRef.current.contains(e.target)) setAccountOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setAccountOpen(false);
    };

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick, { passive: true });
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const fetchUserProfile = async () => {
    try {
      console.log("📡 Fetching user profile...");

      // ✅ Use /api/auth/me to verify authentication
      const authResponse = await api.get("/api/auth/me");

      console.log("✅ Auth response:", authResponse.data);

      if (!authResponse.data.success || !authResponse.data.user) {
        throw new Error("Not authenticated");
      }

      const authenticatedUser = authResponse.data.user;

      // Set user data from auth response
      setUserId(authenticatedUser.id);
      setUserEmail(authenticatedUser.email);
      setUserRole(authenticatedUser.role?.toLowerCase());
      if (authenticatedUser.name) {
        setUserName(authenticatedUser.name);
      } else {
        console.warn(
          "User name not found in auth response, waiting for profile data..."
        );
      }

      // Fetch detailed profile data based on role
      try {
        let profileResponse;
        const role = authenticatedUser.role?.toLowerCase();

        if (role === "filmmaker") {
          // Fetch Filmmaker Profile (Best effort)
          try {
            profileResponse = await api.get(
              "/api/filmmakerProfile/filmmakerProfile"
            );
          } catch (pError) {
            console.warn("Could not fetch filmmaker profile:", pError);
          }

          // ✅ CHECK PRODUCER REGISTRATION (Critical for Access)
          try {
            const userIdToUse = authenticatedUser.id || authenticatedUser._id;
            const prodRegResponse = await api.get(
              `/api/producer-registration/getProducerRegistrationFormById/${userIdToUse}`
            );

            if (prodRegResponse.data.success && prodRegResponse.data.data) {
              console.log("✅ Producer Registration Found - Unlocking Dashboard");
              setProducerRegistrationStatus(true);

              // ✅ FETCH APPLICATIONS
              try {
                const appsResponse = await api.get("/api/applications/my");
                if (appsResponse.data.success) {
                  const appsData = appsResponse.data.data;
                  const appsList = Array.isArray(appsData)
                    ? appsData
                    : [appsData];
                  setNocList(appsList);
                }
              } catch (appFetchError) {
                console.warn("Could not fetch applications:", appFetchError);
              }
            } else {
              console.log("⚠️ No Producer Registration Found - Locking Dashboard");
              setProducerRegistrationStatus(false);
              setActiveSection("Producer Registration Form");
              showAlert({
                type: "info",
                title: "Welcome!",
                message: "Please complete your Producer Registration to proceed.",
                confirmText: "Start Registration",
              });
            }
          } catch (err) {
            console.warn("Could not fetch producer registration:", err);
            setProducerRegistrationStatus(false);
            setActiveSection("Producer Registration Form");

            if (err.response?.status === 404) {
              showAlert({
                type: "info",
                title: "Welcome!",
                message: "Please complete your Producer Registration to proceed.",
                confirmText: "Start Registration",
              });
            }
          }
        } else if (role === "vendor") {
          try {
            profileResponse = await api.get("/api/vendor/myVendorProfile", {
              validateStatus: () => true,
            });
          } catch (e) {
            // ignore
          }
        } else {
          // artist/others skip
        }

        if (
          profileResponse &&
          profileResponse.status >= 200 &&
          profileResponse.status < 300
        ) {
          console.log("✅ Profile response:", profileResponse.data);
          const data = profileResponse.data.data || {};

          if (role === "filmmaker") {
            const { user, nocForms } = data;
            if (user) {
              const { id, name, email } = user;
              if (name) setUserName(name);
              if (id) setUserId(id);
              if (email) setUserEmail(email);
            }
            if (nocForms && Array.isArray(nocForms)) {
              setNocList(nocForms);
            }
          } else if (role === "vendor") {
            if (data.vendorName) setUserName(data.vendorName);
            if (data.id) setUserId(data.id);
          }
        } else {
          // fallback to auth values already set
        }
      } catch (profileError) {
        console.warn(
          "⚠️ Profile fetch failed or skipped, using basic auth data:",
          profileError
        );
        setUserName(authenticatedUser.email);
      }
    } catch (error) {
      console.error("❌ Authentication failed:", error);

      showAlert({
        type: "error",
        title: "Authentication Required",
        message: "Please login to access your dashboard.",
        confirmText: "Login",
        onConfirm: () => {
          navigate("/login", { replace: true });
        },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const handleLogout = async () => {
    showAlert({
      type: "warning",
      title: "Logout Confirmation",
      message: "Are you sure you want to logout?",
      confirmText: "Yes, Logout",
      cancelText: "Cancel",
      showCancel: true,
      onConfirm: async () => {
        try {
          await api.post("/api/auth/logout");
          showAlert({
            type: "success",
            title: "Logged Out",
            message: "You have been successfully logged out.",
            confirmText: "OK",
            autoClose: true,
            duration: 2000,
            onConfirm: () => {
              navigate("/login", { replace: true });
            },
          });

          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 2000);
        } catch (error) {
          console.error("❌ Logout error:", error);
          navigate("/login", { replace: true });
        }
      },
    });
  };

  const handleSubmitNOC = () => {
    fetchUserProfile();

    showAlert({
      type: "success",
      title: "NOC Submitted!",
      message: "Your NOC application has been submitted successfully.",
      confirmText: "Great!",
      autoClose: true,
      duration: 3000,
    });
  };

  const handleArtistClick = () => {
    setActiveSection("Artist Registration");
  };

  const sidebarItems = {
    filmmaker: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Producer Registration Form", icon: Clapperboard },
      { name: "Profile", icon: User },
    ],
    artist: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Profile", icon: User },
    ],
    vendor: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Profile", icon: User },
    ],
  };

  const renderSection = () => {
    // safety net
    if (
      userRole === "filmmaker" &&
      !producerRegistrationStatus &&
      activeSection !== "Producer Registration Form" &&
      !loading
    ) {
      setActiveSection("Producer Registration Form");
      return null;
    }

    // active application
    let activeApplication = null;
    if (selectedAppId) {
      activeApplication = nocList.find(
        (app) => (app.applicationId || app.id || app._id) === selectedAppId
      );
    }
    if (!activeApplication && nocList.length > 0) {
      activeApplication = nocList[0];
    }

    if (activeSection === "Dashboard") {
      if (userRole === "filmmaker") return <FilmmakerOverview nocList={nocList} />;
      if (userRole === "artist") return <ArtistProfile />;
      if (userRole === "vendor") return <VendorDashboard />;
    }

    if (activeSection === "Annexure 2") {
      return (
        <ApplyNOCForm
          onSubmit={() => {
            handleSubmitNOC();
            fetchUserProfile();
          }}
          activeApplication={activeApplication}
        />
      );
    }

    if (activeSection === "Profile") return <UserProfile />;

    if (activeSection === "Annexure 1") {
      return <Annexure1 activeApplication={activeApplication} />;
    }

    if (activeSection === "Annexure A") {
      return (
        <AnnexureA
          activeApplication={activeApplication}
          refreshData={fetchUserProfile}
        />
      );
    }

    if (activeSection === "Undertaking") {
      return (
        <UndertakingForm
          activeApplication={activeApplication}
          refreshData={fetchUserProfile}
        />
      );
    }

    if (activeSection === "Producer Registration Form") {
      return (
        <ProducerRegistration onSuccess={() => setActiveSection("Dashboard")} />
      );
    }

    if (activeSection === "Artist Registration") return <ArtistRegistrationForm />;

    if (activeSection === "Upload Documents") {
      return (
        <ShootingPermissionDocuments
          applicationId={selectedAppId}
          onSuccess={() => {
            fetchUserProfile();
            setActiveSection("Dashboard");
          }}
        />
      );
    }

    return (
      <div className="p-4">
        <p className="text-red-500 font-bold">Invalid section</p>
        <p className="text-sm text-gray-500">Active Section: {activeSection}</p>
        <p className="text-sm text-gray-500">User Role: {userRole}</p>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#a92b43] mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-white font-sans">
      <AlertBox {...alertConfig} onClose={closeAlert} />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 transform md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={Logo1} alt="Logo" className="h-10 w-auto" />
              <span className="text-[9px] font-bold text-gray-700 leading-tight uppercase max-w-[120px]">
                BIHAR STATE FILM DEVELOPMENT & FINANCE CO. LTD
              </span>
            </div>
            <button
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(false)}
              type="button"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <nav className="flex-1 px-4 py-2 overflow-y-auto">
          <ul className="space-y-1">
            {(sidebarItems[userRole] || []).map((item, idx) => {
              const Icon = item.icon;
              const isActive = item.name === activeSection;

              return (
                <li key={idx}>
                  <button
                    type="button"
                    className={`w-full px-4 py-2 flex items-center justify-between text-[13px] font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-rose-600 bg-rose-50/80"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/60"
                    }`}
                    onClick={() => {
                      setAccountOpen(false);
                      if (item.name === "Artist Registration") {
                        handleArtistClick();
                      } else {
                        setActiveSection(item.name);
                      }
                      setIsSidebarOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className={isActive ? "text-rose-600" : "text-gray-500"}
                      />
                      <span className="truncate whitespace-nowrap">{item.name}</span>
                    </div>
                  </button>
                </li>
              );
            })}

            {/* Filmmaker NOC Menu */}
            {userRole === "filmmaker" && producerRegistrationStatus && (
              <li>
                <button
                  type="button"
                  disabled={isCreatingNOC}
                  className={`w-full px-4 py-2 flex items-center justify-between text-[13px] font-medium rounded-xl transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50/60 ${
                    isCreatingNOC ? "opacity-70 cursor-wait" : ""
                  }`}
                  onClick={async () => {
                    setAccountOpen(false);
                    if (isCreatingNOC) return;

                    if (nocExpanded) {
                      setNocExpanded(false);
                      return;
                    }

                    const latestApp = nocList.length > 0 ? nocList[0] : null;

                    if (!latestApp) {
                      try {
                        setIsCreatingNOC(true);
                        const response = await api.post("/api/applications");
                        if (response.data.success) {
                          setNocList([response.data.data, ...nocList]);
                          setNocExpanded(true);
                          setActiveSection("Annexure 1");
                        }
                      } catch (error) {
                        console.error("❌ Error creating application:", error);
                        if (error.response && error.response.status === 409) {
                          setNocExpanded(true);
                        } else {
                          showAlert({
                            type: "error",
                            title: "Error",
                            message: "Failed to start application. Please try again.",
                          });
                        }
                      } finally {
                        setIsCreatingNOC(false);
                      }
                    } else {
                      setNocExpanded(true);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    {isCreatingNOC ? (
                      <div className="h-4 w-4 border-2 border-gray-300 border-t-rose-600 rounded-full animate-spin" />
                    ) : (
                      <FileCheck size={18} strokeWidth={1.5} className="text-gray-500" />
                    )}
                    <span>NOC Forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {nocExpanded ? (
                      <ChevronDown size={14} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={14} className="text-gray-400" />
                    )}
                  </div>
                </button>

                {nocExpanded && (
                  <div className="mt-1 relative">
                    <div className="absolute left-[26px] top-0 bottom-6 w-[1px] bg-gray-200" />

                    <div className="pl-9 pr-4 pt-2">
                      <button
                        type="button"
                        onClick={async () => {
                          setAccountOpen(false);
                          if (isCreatingNOC) return;
                          try {
                            setIsCreatingNOC(true);
                            const response = await api.post("/api/applications");
                            if (response.data.success) {
                              const newApp = response.data.data;
                              setNocList([newApp, ...nocList]);
                              const newId = newApp.applicationId || newApp._id;
                              setExpandedAppId(newId);
                              setSelectedAppId(newId);
                              setActiveSection("Annexure 1");
                            }
                          } catch (error) {
                            console.error("❌ Error creating application:", error);
                            showAlert({
                              type: "error",
                              title: "Error",
                              message:
                                "Failed to create new application. Please try again.",
                            });
                          } finally {
                            setIsCreatingNOC(false);
                          }
                        }}
                        disabled={isCreatingNOC}
                        className="w-full mb-3 flex items-center justify-center gap-2 py-1.5 px-2 bg-gray-50 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50"
                      >
                        {isCreatingNOC ? (
                          <div className="h-3 w-3 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span className="text-lg leading-none">+</span> Apply New NOC
                          </>
                        )}
                      </button>

                      <div className="space-y-3">
                        {nocList.map((app, index) => {
                          const appId =
                            app.applicationId || app.id || app._id || `temp-${index}`;

                          const isAppExpanded = expandedAppId === appId;
                          const isAppSelected =
                            selectedAppId === appId && appId != null;

                          const statusColors = {
                            PENDING:
                              "bg-yellow-100 text-yellow-700 border-yellow-200",
                            APPROVED:
                              "bg-green-100 text-green-700 border-green-200",
                            REJECTED: "bg-red-100 text-red-700 border-red-200",
                            PROCESSING:
                              "bg-blue-100 text-blue-700 border-blue-200",
                          };

                          const appStatus = app.status || "PENDING";
                          const badgeClass =
                            statusColors[String(appStatus).toUpperCase()] ||
                            "bg-green-200 text-green-800 border-green-200";

                          return (
                            <div key={appId} className="relative group">
                              <button
                                type="button"
                                onClick={() => {
                                  setAccountOpen(false);
                                  const isExpanding = !isAppExpanded;
                                  setExpandedAppId(isExpanding ? appId : null);
                                  setSelectedAppId(appId);
                                }}
                                className={`w-full flex items-center justify-between text-xs font-medium py-2 px-2 rounded-lg transition-colors ${
                                  isAppSelected
                                    ? "bg-rose-50 text-rose-700"
                                    : "text-gray-600 hover:bg-gray-50"
                                }`}
                              >
                                <div className="flex flex-col items-start gap-0.5 overflow-hidden">
                                  <span className="truncate font-bold text-[11px]">
                                    {app.applicationNumber ||
                                      (app.applicationId
                                        ? `#${app.applicationId}`
                                        : `Application ${index + 1}`)}
                                  </span>

                                  {(() => {
                                    const forms = app.forms || {};
                                    const progress = app.progress || {};

                                    const isAnnexure1Done =
                                      progress.annexureOneCompleted ||
                                      !!forms.annexureOne;

                                    const isAnnexure2Done =
                                      progress.nocFormCompleted || !!forms.nocForm;

                                    const isUndertakingDone =
                                      progress.undertakingUploaded || !!forms.undertaking;

                                    const isAnnexureADone =
                                      progress.annexureAFilledOrNot === true;

                                    const allDone =
                                      isAnnexure1Done &&
                                      isAnnexure2Done &&
                                      isAnnexureADone &&
                                      isUndertakingDone;

                                    if (allDone) {
                                      return (
                                        <span
                                          className={`text-[9px] px-1.5 py-0.5 rounded-full border uppercase tracking-wider ${badgeClass}`}
                                        >
                                          {appStatus}
                                        </span>
                                      );
                                    }
                                    return null;
                                  })()}
                                </div>

                                {isAppExpanded ? (
                                  <ChevronDown size={14} className="text-gray-400" />
                                ) : (
                                  <ChevronRight size={14} className="text-gray-400" />
                                )}
                              </button>

                              {isAppExpanded && (
                                <ul className="mt-1 space-y-0.5 pl-2 border-l-2 border-gray-100 ml-2">
                                  {[
                                    { name: "Upload Documents", icon: FileText },
                                    { name: "Annexure 1", icon: FileStack },
                                    { name: "Annexure 2", icon: FileCheck },
                                    { name: "Annexure A", icon: FileStack },
                                    { name: "Undertaking", icon: FileSignature },
                                  ].map((subItem) => {
                                    const progress = app.progress || {};

                                    let isCompleted = false;

                                    if (subItem.name === "Annexure 1")
                                      isCompleted =
                                        progress.annexureOneCompleted ||
                                        !!app.forms?.annexureOne;

                                    if (subItem.name === "Annexure 2")
                                      isCompleted =
                                        progress.nocFormCompleted || !!app.forms?.nocForm;

                                    if (subItem.name === "Annexure A")
                                      isCompleted =
                                        progress.annexureAFilledOrNot === true;

                                    if (subItem.name === "Undertaking")
                                      isCompleted =
                                        progress.undertakingUploaded ||
                                        !!app.forms?.undertaking;

                                    if (subItem.name === "Upload Documents") {
                                      isCompleted =
                                        progress.nocDocumentsSubmitted === true ||
                                        app.nocDocumentsSubmitted === true ||
                                        progress.shootingPermissionUploaded ||
                                        !!app.forms?.shootingPermission ||
                                        !!app.documents;
                                    }

                                    const isLocked =
                                      isCompleted && app.status !== "REJECTED";

                                    const isActiveSub =
                                      isAppSelected && activeSection === subItem.name;

                                    return (
                                      <li key={subItem.name}>
                                        <button
                                          type="button"
                                          className={`w-full py-2 px-2 flex items-center justify-between text-[11px] rounded-md transition-all ${
                                            isActiveSub
                                              ? "bg-gray-100/80 text-rose-600 font-bold"
                                              : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                                          }`}
                                          onClick={() => {
                                            setAccountOpen(false);
                                            if (isLocked) {
                                              showAlert({
                                                type: "success",
                                                title: "Submitted",
                                                message:
                                                  "Form already submitted for this active application.",
                                                confirmText: "View Status",
                                                onConfirm: () => {
                                                  setActiveSection("Dashboard");
                                                  setSelectedAppId(appId);
                                                },
                                              });
                                            } else {
                                              setSelectedAppId(appId);
                                              setActiveSection(subItem.name);
                                              setIsSidebarOpen(false);
                                            }
                                          }}
                                        >
                                          <div className="flex items-center gap-2 overflow-hidden flex-1">
                                            <subItem.icon
                                              size={14}
                                              strokeWidth={isActiveSub ? 2 : 1.5}
                                              className={`flex-shrink-0 ${
                                                isCompleted ? "text-green-600" : ""
                                              }`}
                                            />
                                            <span className="truncate">{subItem.name}</span>
                                          </div>

                                          {isCompleted ? (
                                            <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded-full text-[7px] text-green-700 font-medium">
                                              <Check size={10} strokeWidth={3} />
                                              <span>Done</span>
                                            </div>
                                          ) : (
                                            <span className="bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full text-[7px] font-medium">
                                              Pending
                                            </span>
                                          )}
                                        </button>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
            <p className="text-[11px] font-semibold text-gray-500 mb-1">
              Need help?
            </p>
            <a
              href="mailto:support.biharfilm@gov.in"
              className="text-[11px] font-medium text-rose-600 hover:rose-700 transition-colors block mb-4"
            >
              biharfilmnigam@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-white">
        {/* Topbar */}
        <div className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm relative z-20">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="md:hidden p-1 text-gray-500 hover:bg-gray-100 rounded-lg"
              onClick={() => {
                setAccountOpen(false);
                setIsSidebarOpen(true);
              }}
            >
              <Menu size={24} />
            </button>

            <div>
              <h2 className="text-xl font-bold text-gray-800 tracking-tight">
                {activeSection}
              </h2>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                {new Date().toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-sm font-bold text-gray-700">
                Welcome,{" "}
                <span className="text-rose-600">{userName || "User"}</span>
              </p>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                {userRole === "filmmaker"
                  ? "Producer"
                  : userRole === "artist"
                  ? "Artist"
                  : userRole === "vendor"
                  ? "Vendor"
                  : "Guest"}
              </p>
            </div>

            {/* ✅ Account dropdown (click, mobile-safe) */}
            <div className="relative" ref={accountRef}>
              <button
                type="button"
                onClick={() => setAccountOpen((v) => !v)}
                className="flex items-center gap-2 p-1 pr-2 rounded-full border border-gray-200 hover:border-rose-200 transition-colors focus:outline-none"
                aria-haspopup="menu"
                aria-expanded={accountOpen}
              >
                <img
                  src={UserAvatar}
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover bg-gray-100"
                />
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform ${
                    accountOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {accountOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50"
                  role="menu"
                >
                  <div className="p-4 border-b border-gray-50 bg-gray-50/50 rounded-t-xl">
                    <p className="text-sm font-bold text-gray-800 truncate">
                      {userName || "User Name"}
                    </p>
                    <p className="text-xs text-gray-500 capitalize">
                      {userRole === "filmmaker"
                        ? "Producer"
                        : userRole === "artist"
                        ? "Artist"
                        : userRole === "vendor"
                        ? "Vendor"
                        : "Guest"}
                    </p>
                  </div>

                  <div className="p-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveSection("Profile");
                        setAccountOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      role="menuitem"
                    >
                      <Key size={16} />
                      <span>Update Password</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setAccountOpen(false);
                        handleLogout();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      role="menuitem"
                    >
                      <IoIosLogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* ✅ end account dropdown */}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-white">{renderSection()}</div>
      </div>
    </div>
  );
};

export default UserDashboard;