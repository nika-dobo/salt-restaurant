import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { GALLERY_ITEMS, RESTAURANT_INFO } from "../data/restaurantData";

export default function GalleryPage() {
  const { lang, openReservationModal } = useApp();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = [
    { id: "all", labelKa: "ყველა კადრი", labelEn: "All Moments" },
    { id: "terrace", labelKa: "მე-7 სართულის ტერასა", labelEn: "7th-Floor Terrace" },
    { id: "culinary", labelKa: "კულინარია", labelEn: "Culinary Craft" },
    { id: "bar", labelKa: "Liquid Art & ბარი", labelEn: "Liquid Art & Bar" }
  ];

  const visibleItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % visibleItems.length);
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, visibleItems.length]);

  const currentLightboxItem =
    lightboxIndex !== null && visibleItems[lightboxIndex] ? visibleItems[lightboxIndex] : null;

  return (
    <div className="py-12 lg:py-20 bg-basalt-950 min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-salt-50/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-brass-400">
              {lang === "ka" ? "ვიზუალური ისტორია • SALT TBILISI" : "VISUAL STORY • SALT TBILISI"}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-salt-50">
              {lang === "ka" ? "გალერეა და საღამოს ატმოსფერო" : "Gallery & Nocturnal Atmosphere"}
            </h1>
            <p className="text-salt-300 text-base">
              {lang === "ka"
                ? "დაათვალიერეთ ჩვენი ღია ტერასა, კერძების სერვირება და მარმარილოს კოქტეილ-ბარი. დააწკაპუნეთ ფოტოზე სრულ ეკრანზე გასახსნელად."
                : "Explore our 7th-floor rooftop views, plated culinary creations, and black marble cocktail bar. Click any photograph to inspect full-screen."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(f.id);
                    setLightboxIndex(null);
                  }}
                  className={`min-h-[42px] px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    active
                      ? "bg-brass-400 text-basalt-950 font-semibold"
                      : "bg-basalt-900 border border-salt-50/15 text-salt-300 hover:border-brass-400/50 hover:text-salt-50"
                  }`}
                >
                  {lang === "ka" ? f.labelKa : f.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <figure
              key={item.id}
              className={`group rounded-xl bg-basalt-900 border border-salt-50/10 hover:border-brass-400/50 overflow-hidden cursor-pointer flex flex-col justify-between transition-all ${
                item.span === "wide" && activeFilter === "all" ? "md:col-span-2" : ""
              }`}
              onClick={() => setLightboxIndex(idx)}
              tabIndex={0}
              role="button"
              aria-label={lang === "ka" ? item.titleKa : item.titleEn}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxIndex(idx);
                }
              }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-basalt-800">
                <img
                  src={item.src}
                  alt={lang === "ka" ? item.titleKa : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-basalt-950/0 group-hover:bg-basalt-950/30 transition-colors flex items-end justify-end p-4">
                  <span className="px-3 py-1 rounded-md bg-basalt-950/85 border border-salt-50/20 text-xs text-brass-300 opacity-90 group-hover:opacity-100">
                    {lang === "ka" ? "გადიდება" : "Inspect"}
                  </span>
                </div>
              </div>
              <figcaption className="p-5 flex items-center justify-between gap-4 border-t border-salt-50/10">
                <div>
                  <h2 className="font-serif text-lg font-semibold text-salt-50">
                    {lang === "ka" ? item.titleKa : item.titleEn}
                  </h2>
                  <p className="text-xs text-salt-400 mt-0.5">
                    {lang === "ka" ? item.subtitleKa : item.subtitleEn}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Social Video & Reels Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-basalt-900 border border-brass-400/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-semibold text-brass-400">
              TERRACE LIVE • INSTAGRAM & FACEBOOK
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-salt-50">
              {lang === "ka"
                ? "უყურეთ ცოცხალი მუსიკისა და საღამოს წვეულებების ვიდეოებს"
                : "Watch Live Terrace Sessions & Evening Reels"}
            </h2>
            <p className="text-sm text-salt-300">
              {lang === "ka"
                ? "ყოველკვირეული ვიდეო-მიმოხილვები, ახალი კოქტეილების პრეზენტაცია და აფიშა ჩვენს ოფიციალურ გვერდებზე."
                : "Weekly video highlights, mixology reels, and live band announcements on our social channels."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center px-5 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors"
            >
              Instagram (@salt_restaurant_)
            </a>
            <a
              href={RESTAURANT_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center px-5 py-2.5 rounded-md bg-basalt-950 hover:bg-basalt-800 border border-salt-50/15 text-salt-50 font-medium text-sm transition-colors"
            >
              Facebook
            </a>
            <button
              type="button"
              onClick={() => openReservationModal()}
              className="min-h-[44px] px-5 py-2.5 rounded-md bg-basalt-950 hover:border-brass-400 border border-salt-50/15 text-brass-300 font-medium text-sm transition-colors"
            >
              {lang === "ka" ? "მაგიდის დაჯავშნა" : "Book a Table"}
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-basalt-950/95 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setLightboxIndex(null);
          }}
        >
          <div className="max-w-5xl w-full space-y-4">
            <div className="flex items-center justify-between text-sm text-salt-300">
              <span className="tabular-nums">
                {lightboxIndex + 1} / {visibleItems.length}
              </span>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="min-h-[40px] px-4 py-1.5 rounded-md bg-basalt-900 border border-salt-50/20 text-salt-50 hover:border-brass-400"
              >
                {lang === "ka" ? "დახურვა (Esc)" : "Close (Esc)"}
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-salt-50/15 bg-basalt-900">
              <img
                src={currentLightboxItem.src}
                alt={lang === "ka" ? currentLightboxItem.titleKa : currentLightboxItem.titleEn}
                className="w-full max-h-[72vh] object-contain mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-basalt-900 border border-salt-50/10">
              <div>
                <h3 className="font-serif text-xl font-semibold text-salt-50">
                  {lang === "ka" ? currentLightboxItem.titleKa : currentLightboxItem.titleEn}
                </h3>
                <p className="text-xs text-salt-400">
                  {lang === "ka" ? currentLightboxItem.subtitleKa : currentLightboxItem.subtitleEn}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxIndex((prev) => (prev - 1 + visibleItems.length) % visibleItems.length)
                  }
                  className="min-h-[40px] px-4 py-2 rounded-md bg-basalt-950 border border-salt-50/15 text-xs font-medium text-salt-50 hover:border-brass-400"
                >
                  {lang === "ka" ? "წინა" : "Prev"}
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % visibleItems.length)}
                  className="min-h-[40px] px-4 py-2 rounded-md bg-basalt-950 border border-salt-50/15 text-xs font-medium text-salt-50 hover:border-brass-400"
                >
                  {lang === "ka" ? "შემდეგი" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

