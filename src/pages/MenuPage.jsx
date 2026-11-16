import React, { useState, useMemo } from "react";
import { useApp } from "../context/AppContext";
import { MENU_ITEMS } from "../data/restaurantData";

export default function MenuPage() {
  const {
    lang,
    tastingList,
    toggleTastingItem,
    clearTastingList,
    openReservationModal
  } = useApp();

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDietary, setActiveDietary] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState(null);

  const categories = [
    { id: "all", labelKa: "ყველა კატეგორია", labelEn: "All Categories" },
    { id: "georgian", labelKa: "ქართული კლასიკა", labelEn: "Georgian Heritage" },
    { id: "salads", labelKa: "სალათები & დაფები", labelEn: "Salads & Boards" },
    { id: "mains", labelKa: "ცხელი კერძები", labelEn: "Mains & Grill" },
    { id: "lunch", labelKa: "ბიზნეს ლანჩი (12:00–16:00)", labelEn: "Business Lunch" },
    { id: "drinks", labelKa: "Liquid Art ბარი", labelEn: "Liquid Art & Bar" }
  ];

  const dietaryFilters = [
    { id: "all", labelKa: "ყველა", labelEn: "All" },
    { id: "signature", labelKa: "საფირმო / შეფის რჩეული", labelEn: "Signature" },
    { id: "vegetarian", labelKa: "ვეგეტარიანული", labelEn: "Vegetarian" },
    { id: "shareable", labelKa: "გასაზიარებელი", labelEn: "To Share" }
  ];

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchCat = activeCategory === "all" || item.category === activeCategory;
      const matchDiet =
        activeDietary === "all" || (item.dietary && item.dietary.includes(activeDietary));
      const text = `${item.nameKa} ${item.nameEn} ${item.descKa} ${item.descEn} ${item.pairingKa} ${item.pairingEn}`.toLowerCase();
      const matchSearch = !q || text.includes(q);
      return matchCat && matchDiet && matchSearch;
    });
  }, [activeCategory, activeDietary, searchQuery]);

  const totalTastingPrice = tastingList.reduce((acc, item) => acc + item.price, 0);

  const resetFilters = () => {
    setActiveCategory("all");
    setActiveDietary("all");
    setSearchQuery("");
  };

  return (
    <div className="py-12 lg:py-20 bg-basalt-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Page Header */}
        <div className="border-b border-salt-50/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-brass-400">
              {lang === "ka"
                ? "გასტრონომია და მიქსოლოგია • SALT TBILISI"
                : "GASTRONOMY & MIXOLOGY • SALT TBILISI"}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-salt-50">
              {lang === "ka" ? "რესტორნის მენიუ და Liquid Art ბარი" : "Restaurant Menu & Liquid Art Bar"}
            </h1>
            <p className="text-salt-300 text-base leading-relaxed">
              {lang === "ka"
                ? "შეარჩიეთ სასურველი კერძები და კოქტეილები, შეადგინეთ თქვენი სუფრის წინასწარი სია და დაურთეთ მაგიდის ჯავშანს."
                : "Browse our Georgian-European kitchen and mixology bar. Add favorites to your Table Tasting Selection to attach directly to your reservation."}
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-80">
            <label htmlFor="menu-page-search" className="sr-only">
              {lang === "ka" ? "კერძის ძიება" : "Search menu"}
            </label>
            <div className="relative">
              <input
                id="menu-page-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === "ka"
                    ? "მოძებნეთ კერძი, ღვინო, ინგრედიენტი..."
                    : "Search dish, cocktail, ingredient..."
                }
                className="w-full min-h-[44px] pl-4 pr-10 py-2.5 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-salt-50/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 text-sm text-salt-50 placeholder-salt-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-salt-400 hover:text-salt-50 px-1.5"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs & Dietary Filter Bar */}
        <div className="space-y-4">
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label={lang === "ka" ? "მენიუს კატეგორიები" : "Menu Categories"}
          >
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`min-h-[44px] px-4 py-2 rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                    active
                      ? "bg-brass-400 text-basalt-950 font-semibold shadow-sm"
                      : "bg-basalt-900 text-salt-300 border border-salt-50/10 hover:border-brass-400/40 hover:text-salt-50"
                  }`}
                >
                  {lang === "ka" ? cat.labelKa : cat.labelEn}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-salt-400 mr-1">
                {lang === "ka" ? "ფილტრი:" : "Filter:"}
              </span>
              {dietaryFilters.map((df) => {
                const active = activeDietary === df.id;
                return (
                  <button
                    key={df.id}
                    type="button"
                    onClick={() => setActiveDietary(df.id)}
                    className={`min-h-[36px] px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      active
                        ? "bg-brass-400/20 border-brass-400 text-brass-300"
                        : "bg-basalt-900/60 border-salt-50/10 text-salt-300 hover:border-salt-50/25"
                    }`}
                  >
                    {lang === "ka" ? df.labelKa : df.labelEn}
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-salt-400 tabular-nums">
              {lang === "ka"
                ? `ნაჩვენებია ${filteredItems.length} პოზიცია`
                : `Showing ${filteredItems.length} item(s)`}
            </div>
          </div>
        </div>

        {/* Interactive Tasting Selection Drawer / Bar */}
        {tastingList.length > 0 && (
          <div className="p-5 rounded-xl bg-basalt-900 border border-brass-400/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-brass-400 text-basalt-950 tabular-nums">
                  {tastingList.length}
                </span>
                <h2 className="font-serif text-lg font-semibold text-salt-50">
                  {lang === "ka"
                    ? "თქვენი შერჩეული სუფრა (Tasting Selection)"
                    : "Your Table Tasting Selection"}
                </h2>
                <span className="text-sm font-semibold text-brass-300 tabular-nums">
                  • ₾{totalTastingPrice}
                </span>
              </div>
              <p className="text-xs text-salt-300">
                {tastingList.map((i) => (lang === "ka" ? i.nameKa : i.nameEn)).join(" • ")}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={clearTastingList}
                className="min-h-[40px] px-3.5 py-1.5 rounded-md bg-basalt-950 border border-salt-50/15 text-xs text-salt-300 hover:text-salt-50"
              >
                {lang === "ka" ? "გასუფთავება" : "Clear"}
              </button>
              <button
                type="button"
                onClick={() => openReservationModal()}
                className="min-h-[40px] px-4 py-2 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 text-xs font-semibold transition-colors"
              >
                {lang === "ka" ? "ჯავშანზე მიბმა" : "Attach to Table Reservation"}
              </button>
            </div>
          </div>
        )}

        {/* Menu Grid or Actionable Empty State */}
        {filteredItems.length === 0 ? (
          <div className="p-12 rounded-xl bg-basalt-900 border border-salt-50/10 text-center space-y-4">
            <p className="font-serif text-2xl text-salt-50">
              {lang === "ka"
                ? "მოთხოვნილი კერძი ან სასმელი ვერ მოიძებნა"
                : "No matching dishes or drinks found"}
            </p>
            <p className="text-sm text-salt-400 max-w-md mx-auto">
              {lang === "ka"
                ? "სცადეთ სხვა საძიებო სიტყვა ან გაასუფთავეთ არჩეული კატეგორიის ფილტრი."
                : "Try searching for another ingredient or reset the active category filters."}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="min-h-[44px] px-6 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors"
            >
              {lang === "ka" ? "ყველა კერძის ჩვენება" : "Reset All Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const inList = tastingList.some((i) => i.id === item.id);
              return (
                <article
                  key={item.id}
                  className="rounded-xl bg-basalt-900 border border-salt-50/10 hover:border-brass-400/40 overflow-hidden flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-basalt-800 overflow-hidden">
                      <img
                        src={item.image}
                        alt={lang === "ka" ? item.nameKa : item.nameEn}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-basalt-950/90 border border-salt-50/15 text-[11px] font-medium text-brass-300 backdrop-blur-sm">
                        {lang === "ka" ? item.tagKa : item.tagEn}
                      </span>
                      <span className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-basalt-950/90 border border-brass-400/40 font-serif text-lg font-bold text-salt-50 tabular-nums backdrop-blur-sm">
                        ₾{item.price}
                      </span>
                    </div>

                    <div className="p-6 space-y-3">
                      <h2 className="font-serif text-xl font-semibold text-salt-50 leading-snug">
                        {lang === "ka" ? item.nameKa : item.nameEn}
                      </h2>
                      <p className="text-sm text-salt-300 leading-relaxed">
                        {lang === "ka" ? item.descKa : item.descEn}
                      </p>
                      <div className="pt-2 text-xs text-brass-400/90 flex items-center justify-between gap-2 border-t border-salt-50/10">
                        <span className="truncate">{lang === "ka" ? item.pairingKa : item.pairingEn}</span>
                        <span className="text-salt-400 shrink-0 tabular-nums">{item.weight}</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => toggleTastingItem(item)}
                      className={`flex-1 min-h-[44px] px-4 py-2 rounded-md text-xs font-semibold transition-all active:scale-[0.98] ${
                        inList
                          ? "bg-emerald-500/20 border border-emerald-400 text-emerald-300"
                          : "bg-basalt-950 hover:bg-basalt-800 border border-salt-50/15 text-salt-50"
                      }`}
                    >
                      {inList
                        ? lang === "ka"
                          ? "✓ არჩეულია სუფრისთვის"
                          : "✓ Added to Selection"
                        : lang === "ka"
                        ? "+ სუფრის სიაში დამატება"
                        : "+ Add to Tasting List"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDish(item)}
                      className="min-h-[44px] px-3.5 py-2 rounded-md bg-basalt-950 hover:border-brass-400 border border-salt-50/15 text-xs text-salt-300 hover:text-salt-50 transition-colors"
                    >
                      {lang === "ka" ? "დეტალები" : "Details"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-basalt-950/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDish(null);
          }}
        >
          <div className="w-full max-w-lg rounded-xl bg-basalt-900 border border-salt-50/15 overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/10]">
              <img
                src={selectedDish.image}
                alt={lang === "ka" ? selectedDish.nameKa : selectedDish.nameEn}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedDish(null)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-basalt-950/85 border border-salt-50/20 text-salt-50 flex items-center justify-center text-lg"
                aria-label="Close details"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-semibold text-brass-400">
                  {lang === "ka" ? selectedDish.tagKa : selectedDish.tagEn}
                </span>
                <span className="font-serif text-2xl font-bold text-salt-50 tabular-nums">
                  ₾{selectedDish.price}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-salt-50">
                {lang === "ka" ? selectedDish.nameKa : selectedDish.nameEn}
              </h3>
              <p className="text-sm text-salt-300 leading-relaxed">
                {lang === "ka" ? selectedDish.descKa : selectedDish.descEn}
              </p>
              <div className="p-3.5 rounded-lg bg-basalt-950 border border-salt-50/10 text-xs space-y-1">
                <div className="text-brass-300 font-medium">
                  {lang === "ka" ? selectedDish.pairingKa : selectedDish.pairingEn}
                </div>
                <div className="text-salt-400 tabular-nums">
                  {lang === "ka" ? `პორციის წონა/მოცულობა: ${selectedDish.weight}` : `Portion: ${selectedDish.weight}`}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    toggleTastingItem(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="flex-1 min-h-[44px] px-4 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors"
                >
                  {tastingList.some((i) => i.id === selectedDish.id)
                    ? lang === "ka"
                      ? "სიიდან ამოღება"
                      : "Remove from Selection"
                    : lang === "ka"
                    ? "სუფრის სიაში დამატება"
                    : "Add to Table Selection"}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDish(null)}
                  className="min-h-[44px] px-5 py-2.5 rounded-md bg-basalt-950 border border-salt-50/15 text-sm text-salt-300"
                >
                  {lang === "ka" ? "დახურვა" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

