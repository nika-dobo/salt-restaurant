import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { RESTAURANT_INFO } from "../data/restaurantData";

export default function Footer() {
  const { lang, openReservationModal } = useApp();

  return (
    <footer className="bg-basalt-950 border-t border-salt-50/10 text-salt-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-salt-50/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-[0.18em] text-salt-50 block">
                SALT
              </span>
              <span className="text-xs tracking-[0.16em] text-brass-400 block mt-1">
                RESTAURANT • TERRACE & BAR
              </span>
            </Link>
            <p className="text-sm text-salt-300 max-w-sm leading-relaxed">
              {lang === "ka"
                ? "მე-7 სართულის პანორამული ტერასა და რესტორანი თბილისის გულში. ქართულ-ევროპული საავტორო სამზარეულო, Liquid Art მიქსოლოგია და ცოცხალი მუსიკა ღამის ქალაქის ფონზე."
                : "7th-floor panoramic rooftop terrace and restaurant in midtown Tbilisi. Georgian-European culinary craft, Liquid Art mixology, and live music overlooking the city lights."}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[40px] px-3.5 py-1.5 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400 text-xs font-medium text-salt-50 transition-colors"
              >
                <span className="text-brass-400">★ {RESTAURANT_INFO.rating}</span>
                <span>Google Maps</span>
              </a>
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400 text-xs font-medium text-salt-50 transition-colors"
              >
                Instagram
              </a>
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[40px] px-3.5 py-1.5 rounded-md bg-basalt-900 border border-salt-50/15 hover:border-brass-400 text-xs font-medium text-salt-50 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Multi-Page Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-salt-50">
              {lang === "ka" ? "გვერდები" : "Explore"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brass-400 transition-colors">
                  {lang === "ka" ? "მთავარი გვერდი" : "Home"}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brass-400 transition-colors">
                  {lang === "ka" ? "მენიუ და კოქტეილ-ბარი" : "Menu & Liquid Art Bar"}
                </Link>
              </li>
              <li>
                <Link to="/terrace-events" className="hover:text-brass-400 transition-colors">
                  {lang === "ka" ? "ტერასა, ლაივ მუსიკა და ივენთები" : "Terrace, Live Music & Events"}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brass-400 transition-colors">
                  {lang === "ka" ? "ვიზუალური გალერეა" : "Atmosphere Gallery"}
                </Link>
              </li>
              <li>
                <Link to="/reserve" className="hover:text-brass-400 transition-colors">
                  {lang === "ka" ? "მაგიდის დაჯავშნა და რუკა" : "Reservations & Location"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Experiences */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-salt-50">
              {lang === "ka" ? "სამუშაო დრო" : "Hours"}
            </h3>
            <dl className="space-y-2.5 text-sm tabular-nums">
              <div>
                <dt className="text-salt-400 text-xs">
                  {lang === "ka" ? "რესტორანი და ტერასა" : "Restaurant & Terrace"}
                </dt>
                <dd className="text-salt-50 font-medium">
                  {lang === "ka" ? "ყოველდღე: 12:00 – 01:00" : "Daily: 12:00 – 01:00"}
                </dd>
              </div>
              <div>
                <dt className="text-salt-400 text-xs">
                  {lang === "ka" ? "ბიზნეს ლანჩი" : "Business Lunch"}
                </dt>
                <dd className="text-salt-50 font-medium">
                  {lang === "ka" ? "ორშ–პარ: 12:00 – 16:00" : "Mon–Fri: 12:00 – 16:00"}
                </dd>
              </div>
              <div>
                <dt className="text-salt-400 text-xs">
                  {lang === "ka" ? "Live მუსიკა & DJ" : "Live Music & DJ Sets"}
                </dt>
                <dd className="text-brass-400 font-medium">
                  {lang === "ka" ? "პარ–კვ: 20:30 – 01:00" : "Fri–Sun: 20:30 – 01:00"}
                </dd>
              </div>
            </dl>
          </div>

          {/* Location & Direct CTA */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg font-semibold text-salt-50">
              {lang === "ka" ? "მისამართი და კონტაქტი" : "Location & Contact"}
            </h3>
            <p className="text-sm leading-relaxed">
              {lang === "ka"
                ? "გიორგი სააკაძის დაღმართი 11, მე-7 სართული (Kani Aesthetics-ის შენობა), თბილისი 0136"
                : "11 Giorgi Saakadze Descent, 7th Floor (Kani Aesthetics Building), Tbilisi 0136"}
            </p>
            <div className="space-y-1 text-sm tabular-nums">
              <p>
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-brass-400 hover:underline font-medium">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-salt-300 hover:text-salt-50">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openReservationModal()}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-md bg-brass-400/15 border border-brass-400/40 hover:bg-brass-400 hover:text-basalt-950 text-brass-300 font-semibold text-sm transition-all"
              >
                {lang === "ka" ? "სწრაფი დაჯავშნა" : "Quick Table Reserve"}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-salt-400">
          <p>
            {lang === "ka"
              ? "© 2026 Salt Restaurant | Terrace & Bar Tbilisi. ყველა უფლება დაცულია."
              : "© 2026 Salt Restaurant | Terrace & Bar Tbilisi. All rights reserved."}
          </p>
          <p className="tabular-nums">
            {lang === "ka"
              ? "საშუალო ჩეკი სტუმარზე: ₾50–₾60 • პანორამული ტერასა მე-7 სართულზე"
              : "Average spend: ₾50–₾60 per guest • 7th-Floor Rooftop"}
          </p>
        </div>
      </div>
    </footer>
  );
}

