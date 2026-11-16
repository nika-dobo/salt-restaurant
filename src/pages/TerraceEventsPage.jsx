import React from "react";
import { useApp } from "../context/AppContext";
import {
  TERRACE_EVENTS,
  GROUP_PACKAGES,
  SEATING_ZONES,
  RESTAURANT_INFO
} from "../data/restaurantData";

export default function TerraceEventsPage() {
  const { lang, openReservationModal } = useApp();

  return (
    <div className="py-12 lg:py-20 bg-basalt-950 min-h-screen space-y-20">
      {/* Page Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold tracking-wider text-brass-400">
              {lang === "ka"
                ? "მე-7 სართულის პანორამული სივრცე • ცოცხალი მუსიკა & ივენთები"
                : "7TH-FLOOR ROOFTOP • LIVE MUSIC & PRIVATE EVENTS"}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-salt-50 leading-tight">
              {lang === "ka"
                ? "ტერასა, საღამოს მუსიკალური სესიები და წვეულებები"
                : "The Rooftop Terrace, Live Sessions & Celebrations"}
            </h1>
            <p className="text-salt-300 text-base leading-relaxed">
              {lang === "ka"
                ? "Kani Aesthetics-ის შენობის მე-7 სართულზე განთავსებული Salt-ის ტერასა აერთიანებს ღია ცის ქვეშ სადილს, მარმარილოს კოქტეილ-ბარსა და ცოცხალი მუსიკის სცენას მთაწმინდის ანძისა და ძველი თბილისის ხედით."
                : "Perched on the 7th floor at Saakadze Descent, Salt's rooftop combines open-air dining, a black veined marble cocktail bar, and live musical evenings with panoramic Tbilisi views."}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => openReservationModal({ zone: "terrace" })}
                className="min-h-[48px] px-6 py-3 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors"
              >
                {lang === "ka" ? "ტერასის მაგიდის დაჯავშნა" : "Reserve Terrace Table"}
              </button>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] inline-flex items-center px-5 py-3 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400 text-salt-50 text-sm font-medium transition-colors"
              >
                {lang === "ka" ? "Instagram Reels (@salt_restaurant_)" : "Watch Live Reels on Instagram"}
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-salt-50/15 shadow-2xl">
              <img
                src="assets/hero-terrace.jpg"
                alt="Salt Rooftop Terrace Night View"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="p-5 bg-basalt-900 border-t border-salt-50/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="text-salt-200 font-medium">
                  {lang === "ka"
                    ? "ხედი მთაწმინდაზე, სამებასა და ნარიყალაზე"
                    : "Panoramic view of Mtatsminda, Sameba & Narikala"}
                </span>
                <span className="text-brass-400 font-semibold tabular-nums">
                  {lang === "ka" ? "მე-7 სართული • 12:00 – 01:00" : "7th Floor • 12:00 – 01:00"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Zones Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-semibold text-salt-50">
            {lang === "ka" ? "ოთხი განსხვავებული ზონა ერთ სივრცეში" : "Four Distinct Architectural Zones"}
          </h2>
          <p className="text-salt-300 text-sm sm:text-base">
            {lang === "ka"
              ? "აირჩიეთ თქვენი განწყობის შესაბამისი გარემო ჯავშნის გაფორმებისას."
              : "Select the atmosphere that fits your evening when booking your table."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SEATING_ZONES.map((zone) => (
            <div
              key={zone.id}
              className="p-6 rounded-xl bg-basalt-900 border border-salt-50/10 hover:border-brass-400/40 flex flex-col justify-between space-y-5 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-brass-400/15 text-brass-300 text-[11px] font-semibold">
                    {lang === "ka" ? zone.badgeKa : zone.badgeEn}
                  </span>
                  <span className="text-xs text-salt-400 tabular-nums">
                    {lang === "ka" ? zone.capacityKa : zone.capacityEn}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-salt-50">
                  {lang === "ka" ? zone.nameKa : zone.nameEn}
                </h3>
                <p className="text-xs sm:text-sm text-salt-300 leading-relaxed">
                  {lang === "ka" ? zone.descKa : zone.descEn}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openReservationModal({ zone: zone.id })}
                className="w-full min-h-[42px] px-4 py-2 rounded-md bg-basalt-950 hover:bg-brass-400 hover:text-basalt-950 border border-salt-50/15 text-xs font-semibold text-salt-50 transition-colors"
              >
                {lang === "ka" ? "ამ ზონის დაჯავშნა" : "Book This Zone"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Live Music & DJ Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-semibold text-salt-50">
            {lang === "ka" ? "კვირის მუსიკალური და გასტრონომიული განრიგი" : "Weekly Musical & Dining Cadence"}
          </h2>
          <p className="text-salt-300 text-sm sm:text-base">
            {lang === "ka"
              ? "ცოცხალი ბენდები, DJ სეტები და სამუშაო დღეების ბიზნეს-ლანჩი."
              : "Live vocal bands, rooftop DJ sets, and weekday executive lunches."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TERRACE_EVENTS.map((ev) => (
            <article
              key={ev.id}
              className="rounded-xl bg-basalt-900 border border-salt-50/10 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-brass-400/15 text-brass-300 text-xs font-semibold">
                    {lang === "ka" ? ev.badgeKa : ev.badgeEn}
                  </span>
                  <span className="text-xs font-medium text-salt-300 tabular-nums">
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
              <div className="px-6 sm:px-8 py-4 bg-basalt-950/70 border-t border-salt-50/10 flex items-center justify-between">
                <span className="text-xs text-salt-400">
                  {lang === "ka" ? "სააკაძის დაღმართი 11 • მე-7 სართული" : "11 Saakadze Descent • 7th Floor"}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    openReservationModal({
                      zone: ev.zone,
                      notes: lang === "ka" ? `ივენთი: ${ev.titleKa}` : `Event: ${ev.titleEn}`
                    })
                  }
                  className="min-h-[40px] px-4 py-2 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 text-xs font-semibold transition-colors"
                >
                  {lang === "ka" ? "მაგიდის დაჯავშნა" : "Reserve Table"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Group Celebrations & Private Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-semibold text-salt-50">
            {lang === "ka"
              ? "ჯგუფური შეთავაზებები, დაბადების დღე და კორპორატიული საღამოები"
              : "Group Packages, Birthdays & Private Receptions"}
          </h2>
          <p className="text-salt-300 text-sm sm:text-base">
            {lang === "ka"
              ? "სპეციალური სადღესასწაულო მენიუები და პერსონალური მომსახურება 6-დან 50 სტუმრამდე."
              : "Curated sharing menus and dedicated service for groups from 6 to 50 guests."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {GROUP_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 sm:p-8 rounded-xl bg-basalt-900 border border-brass-400/30 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-salt-50/10">
                  <div>
                    <span className="text-xs font-semibold text-brass-400 tabular-nums">
                      {lang === "ka" ? pkg.guestsKa : pkg.guestsEn}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-salt-50 mt-0.5">
                      {lang === "ka" ? pkg.nameKa : pkg.nameEn}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-md bg-basalt-950 border border-brass-400/40 font-serif text-lg font-semibold text-brass-300 tabular-nums">
                    {lang === "ka" ? pkg.priceKa : pkg.priceEn}
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm text-salt-200">
                  {(lang === "ka" ? pkg.featuresKa : pkg.featuresEn).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-brass-400 font-bold mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  openReservationModal({
                    zone: "vip-group",
                    notes: lang === "ka" ? `პაკეტი: ${pkg.nameKa}` : `Package: ${pkg.nameEn}`
                  })
                }
                className="w-full min-h-[46px] px-5 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors"
              >
                {lang === "ka" ? "ჯგუფური ჯავშნის მოთხოვნა" : "Request Group Package"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

