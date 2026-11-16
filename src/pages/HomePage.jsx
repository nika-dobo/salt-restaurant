import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import {
  RESTAURANT_INFO,
  MENU_ITEMS,
  GOOGLE_REVIEWS,
  TERRACE_EVENTS
} from "../data/restaurantData";

export default function HomePage() {
  const { lang, openReservationModal } = useApp();

  const featuredMenu = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="space-y-0">
      {/* Architectural Split & Panoramic Hero */}
      <section className="relative min-h-[86vh] flex items-end overflow-hidden border-b border-salt-50/10">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/hero-terrace.jpg"
            alt={
              lang === "ka"
                ? "Salt Restaurant Terrace & Bar — მე-7 სართულის პანორამული ტერასა თბილისში"
                : "Salt Restaurant Terrace & Bar — 7th-floor panoramic terrace in Tbilisi"
            }
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #090B0E 4%, rgba(9, 11, 14, 0.78) 46%, rgba(9, 11, 14, 0.35) 100%)"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-28 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              {/* Location & Google Maps Rating Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-basalt-900/90 border border-brass-400/40 text-xs font-medium text-salt-50 hover:border-brass-300 transition-colors backdrop-blur-md"
                >
                  <span className="text-brass-400 font-semibold tabular-nums">
                    ★ {RESTAURANT_INFO.rating} Google Maps
                  </span>
                  <span className="text-salt-50/30">•</span>
                  <span>
                    {lang === "ka"
                      ? "სააკაძის დაღმართი 11, მე-7 სართული"
                      : "11 Saakadze Descent, 7th Floor"}
                  </span>
                </a>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-basalt-900/80 border border-salt-50/15 text-xs text-salt-200 backdrop-blur-md tabular-nums">
                  {lang === "ka" ? "საშუალო ჩეკი: ₾50–₾60" : "Avg. Spend: ₾50–₾60"}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-salt-50 leading-[1.08] tracking-tight">
                {lang === "ka"
                  ? "გემო, ქალაქის პანორამა და საღამოს რიტმი მე-7 სართულზე"
                  : "Culinary Craft, Skyline Views & Evening Rhythm on the 7th Floor"}
              </h1>

              <p className="text-base sm:text-lg text-salt-300 max-w-2xl leading-relaxed">
                {lang === "ka"
                  ? "Salt Restaurant | Terrace & Bar აერთიანებს ქართულ კულინარიულ მემკვიდრეობასა და ევროპულ გასტრონომიას, Liquid Art-ის საავტორო კოქტეილებსა და ცოცხალ მუსიკას ღამის თბილისის ჰორიზონტზე."
                  : "Salt Restaurant | Terrace & Bar pairs elevated Georgian and European dining with Liquid Art mixology and live music overlooking the illuminated Tbilisi skyline."}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openReservationModal({ zone: "terrace" })}
                  className="min-h-[48px] px-7 py-3.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm sm:text-base transition-all active:scale-[0.98]"
                >
                  {lang === "ka" ? "ტერასაზე მაგიდის დაჯავშნა" : "Reserve Terrace Table"}
                </button>
                <Link
                  to="/menu"
                  className="min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-basalt-900/90 hover:bg-basalt-800 border border-salt-50/20 hover:border-brass-400/50 text-salt-50 font-semibold text-sm sm:text-base transition-all"
                >
                  {lang === "ka" ? "მენიუსა და ბარის ნახვა" : "Explore Menu & Bar"}
                </Link>
              </div>
            </div>

            {/* Right Architectural Info Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-xl bg-basalt-900/90 border border-salt-50/15 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between border-b border-salt-50/10 pb-3">
                  <span className="font-serif text-lg font-semibold text-salt-50">
                    {lang === "ka" ? "დღეს Salt-ში" : "Today at Salt"}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium tabular-nums">
                    12:00 – 01:00
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-2">
                    <span className="text-salt-400">
                      {lang === "ka" ? "ბიზნეს ლანჩი:" : "Business Lunch:"}
                    </span>
                    <span className="text-salt-50 font-medium tabular-nums">12:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-salt-400">
                      {lang === "ka" ? "Sunset & კოქტეილები:" : "Sunset Aperitivo:"}
                    </span>
                    <span className="text-salt-50 font-medium tabular-nums">17:30 – 20:30</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-salt-400">
                      {lang === "ka" ? "Live მუსიკა & DJ:" : "Live Music & DJ:"}
                    </span>
                    <span className="text-brass-300 font-medium tabular-nums">20:30 – 01:00</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-salt-50/10 flex items-center justify-between text-xs">
                  <span className="text-salt-400">
                    {lang === "ka" ? "Kani Aesthetics-ის შენობა" : "Kani Aesthetics Building"}
                  </span>
                  <Link to="/terrace-events" className="text-brass-400 hover:underline font-medium">
                    {lang === "ka" ? "კვირის აფიშა" : "Weekly Lineup"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Three Pillars Section */}
      <section className="py-20 lg:py-24 bg-basalt-950 border-b border-salt-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-salt-50">
                {lang === "ka"
                  ? "სამი ელემენტი, რომელიც Salt-ის ხასიათს ქმნის"
                  : "Three Expressions of Salt"}
              </h2>
              <p className="text-salt-300 text-base leading-relaxed">
                {lang === "ka"
                  ? "შუადღის მშვიდი ბიზნეს-ლანჩიდან დაწყებული, საღამოს სანთლებით განათებული ვახშმითა და ღამის DJ სეტებით დასრულებული."
                  : "From sunlit midday business lunches to candlelit rooftop dinners and nocturnal mixology sessions."}
              </p>
            </div>
            <Link
              to="/terrace-events"
              className="inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400 text-sm font-medium text-salt-50 transition-colors self-start md:self-auto"
            >
              {lang === "ka" ? "სივრცისა და ივენთების ნახვა" : "Discover Terrace & Events"}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="group rounded-xl bg-basalt-900 border border-salt-50/10 hover:border-brass-400/40 overflow-hidden flex flex-col transition-colors">
              <div className="aspect-[16/10] overflow-hidden bg-basalt-800">
                <img
                  src="assets/georgian-feast.jpg"
                  alt="Georgian and European Cuisine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="font-serif text-lg font-semibold text-brass-400 tabular-nums">
                    01 / {lang === "ka" ? "გასტრონომია" : "CULINARY"}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-salt-50">
                    {lang === "ka" ? "ქართულ-ევროპული სამზარეულო" : "Georgian & European Fusion"}
                  </h3>
                  <p className="text-sm text-salt-300 leading-relaxed">
                    {lang === "ka"
                      ? "აჭარული ხაჭაპური, შქმერული კეცზე, რუკოლას სალათი ნადუღით და საქონლის სუკის მედალიონები საფერავის სოუსში — ტრადიციული გემოების თანამედროვე ინტერპრეტაცია."
                      : "Artisanal Adjarian Khachapuri, clay-pan Shkmeruli, wild arugula with whipped Nadughi, and prime beef tenderloin in Saperavi reduction."}
                  </p>
                </div>
                <Link to="/menu" className="text-sm font-semibold text-brass-400 hover:text-brass-300 pt-2">
                  {lang === "ka" ? "სრული მენიუს ნახვა" : "Explore Full Menu"}
                </Link>
              </div>
            </article>

            <article className="group rounded-xl bg-basalt-900 border border-salt-50/10 hover:border-brass-400/40 overflow-hidden flex flex-col transition-colors">
              <div className="aspect-[16/10] overflow-hidden bg-basalt-800">
                <img
                  src="assets/hero-terrace.jpg"
                  alt="7th Floor Panoramic Terrace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="font-serif text-lg font-semibold text-brass-400 tabular-nums">
                    02 / {lang === "ka" ? "პანორამა" : "THE ROOFTOP"}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-salt-50">
                    {lang === "ka" ? "მე-7 სართულის ღია ტერასა" : "7th-Floor Panoramic Terrace"}
                  </h3>
                  <p className="text-sm text-salt-300 leading-relaxed">
                    {lang === "ka"
                      ? "სააკაძის დაღმართიდან გაშლილი ხედი მთაწმინდის ანძაზე, სამებასა და ნარიყალაზე. იდეალური გარემო პაემნისთვის, დაბადების დღისა და მეგობრული შეკრებისთვის."
                      : "Sweeping views of Mtatsminda TV Tower and Old Tbilisi from Saakadze Descent — designed for sunset aperitifs, date nights, and celebrations."}
                  </p>
                </div>
                <Link to="/gallery" className="text-sm font-semibold text-brass-400 hover:text-brass-300 pt-2">
                  {lang === "ka" ? "ტერასის კადრები" : "View Terrace Gallery"}
                </Link>
              </div>
            </article>

            <article className="group rounded-xl bg-basalt-900 border border-salt-50/10 hover:border-brass-400/40 overflow-hidden flex flex-col transition-colors">
              <div className="aspect-[16/10] overflow-hidden bg-basalt-800">
                <img
                  src="assets/signature-cocktail.jpg"
                  alt="Liquid Art Cocktail Bar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <span className="font-serif text-lg font-semibold text-brass-400 tabular-nums">
                    03 / {lang === "ka" ? "მიქსოლოგია & მუსიკა" : "LIQUID ART"}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-salt-50">
                    {lang === "ka" ? "Liquid Art & ცოცხალი მუსიკა" : "Liquid Art & Live Sessions"}
                  </h3>
                  <p className="text-sm text-salt-300 leading-relaxed">
                    {lang === "ka"
                      ? "ზღვის მარილის რკალით დამშვენებული საავტორო კოქტეილები, ქართული ქვევრის ღვინოები, ცოცხალი ბენდები და DJ სეტები ყოველ უქმეებზე."
                      : "Sea-salt rimmed signature cocktails, curated Georgian Qvevri wines, live vocal bands, and weekend rooftop DJ sets."}
                  </p>
                </div>
                <Link to="/terrace-events" className="text-sm font-semibold text-brass-400 hover:text-brass-300 pt-2">
                  {lang === "ka" ? "მუსიკალური პროგრამა" : "See Live Schedule"}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Curated Menu Signatures Preview */}
      <section className="py-20 lg:py-24 bg-basalt-900 border-b border-salt-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-salt-50">
                {lang === "ka" ? "შეფ-მზარეულისა და ბარმენის რჩეული" : "Chef's & Mixologist's Signatures"}
              </h2>
              <p className="text-salt-300 text-base">
                {lang === "ka"
                  ? "ყველაზე მოთხოვნადი კერძები და კოქტეილები ჩვენი მენიუდან."
                  : "Guest-favorite dishes and signature cocktails from the Salt kitchen and bar."}
              </p>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center min-h-[44px] px-6 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors self-start md:self-auto"
            >
              {lang === "ka" ? "მთლიანი მენიუს გახსნა (15+ კერძი)" : "View Complete Menu (15+ Items)"}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMenu.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-basalt-950 border border-salt-50/10 hover:border-brass-400/40 flex flex-col sm:flex-row gap-5 transition-colors"
              >
                <img
                  src={item.image}
                  alt={lang === "ka" ? item.nameKa : item.nameEn}
                  className="w-full sm:w-36 h-40 sm:h-36 rounded-lg object-cover shrink-0 border border-salt-50/10"
                  loading="lazy"
                />
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-medium text-brass-400">
                        {lang === "ka" ? item.tagKa : item.tagEn}
                      </span>
                      <span className="font-serif text-xl font-bold text-salt-50 tabular-nums">
                        ₾{item.price}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-salt-50 mt-1">
                      {lang === "ka" ? item.nameKa : item.nameEn}
                    </h3>
                    <p className="text-sm text-salt-300 mt-1.5 line-clamp-2">
                      {lang === "ka" ? item.descKa : item.descEn}
                    </p>
                  </div>
                  <div className="text-xs text-salt-400 pt-2 border-t border-salt-50/10 flex items-center justify-between">
                    <span>{lang === "ka" ? item.pairingKa : item.pairingEn}</span>
                    <span className="tabular-nums">{item.weight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Live Nights Highlight */}
      <section className="py-20 lg:py-24 bg-basalt-950 border-b border-salt-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-salt-50">
                {lang === "ka" ? "საღამოს რიტმი და კვირის განრიგი" : "Evening Rhythm & Weekly Lineup"}
              </h2>
              <p className="text-salt-300 text-base">
                {lang === "ka"
                  ? "ცოცხალი მუსიკა, DJ სეტები და დღის ბიზნეს-ლანჩი მე-7 სართულზე."
                  : "Live vocal nights, rooftop DJ sessions, and weekday executive lunches."}
              </p>
            </div>
            <Link
              to="/terrace-events"
              className="inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400 text-sm font-medium text-salt-50 transition-colors self-start md:self-auto"
            >
              {lang === "ka" ? "ჯგუფური პაკეტები და ივენთები" : "Group Packages & Events"}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TERRACE_EVENTS.slice(0, 2).map((ev) => (
              <div
                key={ev.id}
                className="p-6 sm:p-8 rounded-xl bg-basalt-900 border border-salt-50/10 flex flex-col justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-brass-400/15 text-brass-300 text-xs font-semibold">
                      {lang === "ka" ? ev.badgeKa : ev.badgeEn}
                    </span>
                    <span className="text-xs text-salt-300 tabular-nums">
                      {lang === "ka" ? ev.dayKa : ev.dayEn}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-salt-50">
                    {lang === "ka" ? ev.titleKa : ev.titleEn}
                  </h3>
                  <p className="text-sm text-salt-300 leading-relaxed">
                    {lang === "ka" ? ev.descKa : ev.descEn}
                  </p>
                </div>
                <div className="pt-4 border-t border-salt-50/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      openReservationModal({
                        zone: ev.zone,
                        notes: lang === "ka" ? `ივენთი: ${ev.titleKa}` : `Event: ${ev.titleEn}`
                      })
                    }
                    className="min-h-[44px] px-5 py-2 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    {lang === "ka" ? "მაგიდის დაჯავშნა ამ საღამოსთვის" : "Book Table for This Night"}
                  </button>
                  <Link to="/terrace-events" className="text-xs text-salt-300 hover:text-brass-400">
                    {lang === "ka" ? "დეტალურად" : "Learn More"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Reviews Section */}
      <section className="py-20 lg:py-24 bg-basalt-900 border-b border-salt-50/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-salt-50/10">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-salt-50">
                {lang === "ka" ? "სტუმრების შთაბეჭდილებები Google Maps-დან" : "Guest Voices on Google Maps"}
              </h2>
              <p className="text-salt-300 text-sm sm:text-base">
                {lang === "ka"
                  ? "რას აღნიშნავენ სტუმრები ჩვენს ტერასაზე, სამზარეულოსა და მომსახურებაზე."
                  : "Real feedback from guests visiting our 7th-floor rooftop in Tbilisi."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 p-5 rounded-xl bg-basalt-950 border border-salt-50/15">
              <div className="flex items-center gap-4">
                <span className="font-serif text-4xl font-bold text-brass-400 tabular-nums">
                  {RESTAURANT_INFO.rating}
                </span>
                <div>
                  <div className="text-brass-400 tracking-widest text-sm" aria-hidden="true">
                    ★★★★☆
                  </div>
                  <div className="text-xs text-salt-300 mt-0.5">
                    {lang === "ka" ? "Google Maps-ის ოფიციალური რეიტინგი" : "Verified Google Maps Rating"}
                  </div>
                </div>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center px-4 py-2 rounded-md bg-basalt-900 hover:bg-basalt-800 border border-brass-400/40 text-xs font-semibold text-brass-300 transition-colors"
              >
                {lang === "ka" ? "Google Maps-ზე გახსნა" : "View on Google Maps"}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((rev) => (
              <blockquote
                key={rev.id}
                className="p-6 rounded-xl bg-basalt-950 border border-salt-50/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-salt-400">
                    <span className="text-brass-400 tracking-wider">
                      {"★".repeat(rev.rating)}
                    </span>
                    <span>{lang === "ka" ? rev.dateKa : rev.dateEn}</span>
                  </div>
                  <p className="text-sm text-salt-100 leading-relaxed">
                    {lang === "ka" ? rev.textKa : rev.textEn}
                  </p>
                </div>
                <footer className="pt-3 border-t border-salt-50/10">
                  <div className="font-semibold text-sm text-salt-50">
                    {lang === "ka" ? rev.authorKa : rev.authorEn}
                  </div>
                  <div className="text-xs text-salt-400">
                    {lang === "ka" ? rev.roleKa : rev.roleEn}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final Architectural Banner */}
      <section className="py-20 bg-basalt-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-gradient-to-br from-basalt-900 via-basalt-900 to-basalt-800 border border-brass-400/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-brass-400">
                {lang === "ka"
                  ? "სააკაძის დაღმართი 11 • მე-7 სართული"
                  : "11 GIORGI SAAKADZE DESCENT • 7TH FLOOR"}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-salt-50">
                {lang === "ka"
                  ? "დაგეგმეთ თქვენი საღამო თბილისის პანორამული ხედის ფონზე"
                  : "Reserve Your Evening Above the Tbilisi Skyline"}
              </h2>
              <p className="text-salt-300 text-sm sm:text-base">
                {lang === "ka"
                  ? "აირჩიეთ ღია ტერასა, მარმარილოს კოქტეილ-ბარი ან მყუდრო დარბაზი. ჯავშანი უფასოა და მყისიერად მუშავდება."
                  : "Choose our open-air panoramic terrace, black marble cocktail bar, or indoor lounge."}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                to="/reserve"
                className="min-h-[48px] inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm sm:text-base transition-colors"
              >
                {lang === "ka" ? "ჯავშნის გვერდზე გადასვლა" : "Go to Reservations"}
              </Link>
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="min-h-[48px] inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-basalt-950 hover:bg-basalt-800 border border-salt-50/20 text-salt-50 font-semibold text-sm sm:text-base tabular-nums transition-colors"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

