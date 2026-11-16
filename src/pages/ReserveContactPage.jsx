import React from "react";
import { useApp } from "../context/AppContext";
import ReservationForm from "../components/ReservationForm";
import { RESTAURANT_INFO } from "../data/restaurantData";

export default function ReserveContactPage() {
  const { lang } = useApp();

  return (
    <div className="py-12 lg:py-20 bg-basalt-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {/* Header */}
        <div className="border-b border-salt-50/10 pb-8 max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider text-brass-400">
            {lang === "ka"
              ? "მაგიდის დაჯავშნა და მდებარეობა • სააკაძის დაღმართი 11"
              : "RESERVATIONS & LOCATION • 11 SAAKADZE DESCENT"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-salt-50">
            {lang === "ka"
              ? "დაჯავშნეთ მაგიდა ან დაგვიკავშირდით"
              : "Reserve Your Table & Find Us in Tbilisi"}
          </h1>
          <p className="text-salt-300 text-base leading-relaxed">
            {lang === "ka"
              ? "აირჩიეთ ღია პანორამული ტერასა, მარმარილოს ბარი ან შიდა დარბაზი. გვეწვიეთ გიორგი სააკაძის დაღმართის 11-ში, Kani Aesthetics-ის შენობის მე-7 სართულზე."
              : "Book a table on our 7th-floor open panoramic terrace, at the marble mixology bar, or in the indoor lounge at 11 Giorgi Saakadze Descent."}
          </p>
        </div>

        {/* Main 2-Column Layout: Form + Location/Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Reservation Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-basalt-900 border border-salt-50/15 space-y-6">
            <div className="border-b border-salt-50/10 pb-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-salt-50">
                {lang === "ka" ? "ონლაინ დაჯავშნის ფორმა" : "Online Table Reservation"}
              </h2>
              <p className="text-xs sm:text-sm text-salt-400 mt-1">
                {lang === "ka"
                  ? "შეავსეთ მონაცემები და მიიღეთ ჯავშნის კოდი მყისიერად."
                  : "Complete your details below for instant reservation reference."}
              </p>
            </div>

            <ReservationForm />
          </div>

          {/* Direct Contact & Google Maps Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-basalt-900 border border-salt-50/15 space-y-6">
              <h2 className="font-serif text-2xl font-semibold text-salt-50">
                {lang === "ka" ? "საკონტაქტო ინფორმაცია" : "Direct Contact & Address"}
              </h2>

              <dl className="space-y-4 text-sm">
                <div className="pb-4 border-b border-salt-50/10">
                  <dt className="text-xs text-salt-400 mb-1">
                    {lang === "ka" ? "მისამართი" : "Address"}
                  </dt>
                  <dd className="text-salt-50 font-medium leading-relaxed">
                    {lang === "ka"
                      ? "გიორგი სააკაძის დაღმართი 11, მე-7 სართული (Kani Aesthetics-ის შენობა), თბილისი 0136"
                      : "11 Giorgi Saakadze Descent, 7th Floor (Kani Aesthetics Building), Tbilisi 0136"}
                  </dd>
                </div>

                <div className="pb-4 border-b border-salt-50/10">
                  <dt className="text-xs text-salt-400 mb-1">
                    {lang === "ka" ? "სამუშაო საათები" : "Opening Hours"}
                  </dt>
                  <dd className="text-salt-50 font-medium tabular-nums">
                    {lang === "ka"
                      ? "ყოველდღე: 12:00 – 01:00 (ბიზნეს ლანჩი: 12:00 – 16:00)"
                      : "Daily: 12:00 – 01:00 (Business Lunch: 12:00 – 16:00)"}
                  </dd>
                </div>

                <div className="pb-4 border-b border-salt-50/10">
                  <dt className="text-xs text-salt-400 mb-1">
                    {lang === "ka" ? "ტელეფონი (ჯავშნები და ღონისძიებები)" : "Phone (Reservations & Events)"}
                  </dt>
                  <dd className="tabular-nums">
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-lg font-semibold text-brass-400 hover:underline"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs text-salt-400 mb-1">
                    {lang === "ka" ? "ელ-ფოსტა" : "Email"}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="text-salt-200 hover:text-brass-400 underline"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 font-semibold text-sm transition-colors text-center"
                >
                  {lang === "ka" ? "Google Maps-ში გახსნა" : "Open in Google Maps"}
                </a>
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-basalt-950 border border-salt-50/15 hover:border-brass-400 text-salt-50 text-sm font-medium transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Interactive Google Map Card */}
            <div className="rounded-2xl overflow-hidden border border-salt-50/15 bg-basalt-900">
              <div className="p-4 border-b border-salt-50/10 flex items-center justify-between text-xs">
                <span className="font-medium text-salt-50">
                  Salt Restaurant | Terrace & Bar — Google Maps
                </span>
                <span className="text-brass-400 font-semibold tabular-nums">
                  ★ {RESTAURANT_INFO.rating}
                </span>
              </div>
              <iframe
                title="Salt Restaurant Tbilisi Google Map"
                src={RESTAURANT_INFO.googleMapsEmbed}
                className="w-full h-80 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

