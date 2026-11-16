import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { RESTAURANT_INFO } from "../data/restaurantData";

export default function Navbar() {
  const { lang, toggleLang, openReservationModal, tastingList } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { path: "/", labelKa: "მთავარი", labelEn: "Home" },
    { path: "/menu", labelKa: "მენიუ & ბარი", labelEn: "Menu & Bar", badge: tastingList.length || null },
    { path: "/terrace-events", labelKa: "ტერასა & ივენთები", labelEn: "Terrace & Events" },
    { path: "/gallery", labelKa: "გალერეა", labelEn: "Gallery" },
    { path: "/reserve", labelKa: "დაჯავშნა & კონტაქტი", labelEn: "Reserve & Contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        scrolled
          ? "bg-basalt-950/95 backdrop-blur-md border-salt-50/15 shadow-2xl"
          : "bg-basalt-950/80 backdrop-blur-sm border-salt-50/10"
      }`}
    >
      {/* Top Architectural Info Strip */}
      <div className="hidden md:block border-b border-salt-50/10 bg-basalt-900/70 text-xs text-salt-300">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="tabular-nums">
                {lang === "ka"
                  ? "ღიაა ყოველდღე • 12:00 – 01:00"
                  : "Open Daily • 12:00 – 01:00"}
              </span>
            </span>
            <span className="text-salt-50/20" aria-hidden="true">|</span>
            <span>
              {lang === "ka"
                ? "გ. სააკაძის დაღმართი 11, მე-7 სართული, თბილისი"
                : "11 G. Saakadze Descent, 7th Floor, Tbilisi"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brass-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 rounded px-1 tabular-nums"
            >
              ★ {RESTAURANT_INFO.rating} Google Maps
            </a>
            <span className="text-salt-50/20" aria-hidden="true">|</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="hover:text-brass-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 rounded px-1 tabular-nums font-medium text-salt-50"
            >
              {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <Link
          to="/"
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 rounded-sm py-1"
          aria-label="Salt Restaurant Terrace & Bar Home"
        >
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-salt-50 group-hover:text-brass-300 transition-colors leading-none">
            SALT
          </span>
          <span className="text-[11px] tracking-[0.16em] text-brass-400 mt-1">
            {lang === "ka" ? "რესტორანი • ტერასა & ბარი" : "RESTAURANT • TERRACE & BAR"}
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative px-3.5 py-2.5 text-sm font-medium rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                  isActive
                    ? "text-brass-300 bg-salt-50/[0.06]"
                    : "text-salt-300 hover:text-salt-50 hover:bg-salt-50/[0.03]"
                }`
              }
            >
              {({ isActive }) => (
                <span className="inline-flex items-center gap-2">
                  <span>{lang === "ka" ? item.labelKa : item.labelEn}</span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold rounded-full bg-brass-400 text-basalt-950 tabular-nums">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brass-400 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="min-h-[44px] px-3 py-2 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400/50 text-xs font-semibold tracking-wider transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
            aria-label={lang === "ka" ? "Switch language to English" : "ენის შეცვლა ქართულზე"}
          >
            <span className={lang === "ka" ? "text-brass-400" : "text-salt-400"}>ქარ</span>
            <span className="mx-1.5 text-salt-50/20">/</span>
            <span className={lang === "en" ? "text-brass-400" : "text-salt-400"}>ENG</span>
          </button>

          <button
            type="button"
            onClick={() => openReservationModal()}
            className="hidden sm:inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300 focus-visible:ring-offset-2 focus-visible:ring-offset-basalt-950"
          >
            {lang === "ka" ? "მაგიდის დაჯავშნა" : "Book a Table"}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden inline-flex flex-col items-center justify-center w-11 h-11 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
          >
            <span
              className={`block w-5 h-0.5 bg-salt-50 transition-transform duration-200 ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-salt-50 my-1 transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-salt-50 transition-transform duration-200 ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-basalt-950/98 border-t border-salt-50/10 px-4 pt-4 pb-8 space-y-6"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center justify-between min-h-[48px] px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brass-400/15 text-brass-300 border-l-2 border-brass-400"
                      : "text-salt-100 hover:bg-basalt-900"
                  }`
                }
              >
                <span>{lang === "ka" ? item.labelKa : item.labelEn}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-brass-400 text-basalt-950 tabular-nums">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-salt-50/10 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openReservationModal();
              }}
              className="w-full min-h-[48px] py-3 px-5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-base transition-all active:scale-[0.98]"
            >
              {lang === "ka" ? "მაგიდის დაჯავშნა" : "Book a Table"}
            </button>
            <div className="flex items-center justify-between text-xs text-salt-300 px-1 pt-2">
              <span>
                {lang === "ka"
                  ? "სააკაძის დაღმართი 11 • მე-7 სართული"
                  : "11 Saakadze Descent • 7th Floor"}
              </span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="text-brass-400 font-medium tabular-nums"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

