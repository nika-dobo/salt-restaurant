import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { SEATING_ZONES, RESTAURANT_INFO } from "../data/restaurantData";

export default function ReservationForm({ compact = false, onSuccessClose }) {
  const { lang, preselectedZone, preselectedNotes, tastingList } = useApp();
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: 2,
    date: todayStr,
    time: "20:00",
    zone: preselectedZone || "terrace",
    occasion: "dinner",
    notes: preselectedNotes || ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [bookingCode, setBookingCode] = useState("");

  useEffect(() => {
    if (preselectedZone) {
      setFormData((prev) => ({ ...prev, zone: preselectedZone }));
    }
  }, [preselectedZone]);

  useEffect(() => {
    if (preselectedNotes) {
      setFormData((prev) => ({ ...prev, notes: preselectedNotes }));
    }
  }, [preselectedNotes]);

  const validate = () => {
    const nextErrors = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name =
        lang === "ka"
          ? "გთხოვთ მიუთითოთ თქვენი სახელი და გვარი (მინ. 2 სიმბოლო)"
          : "Please enter your full name (min. 2 characters)";
    }
    const digits = formData.phone.replace(/\D/g, "");
    if (digits.length < 9) {
      nextErrors.phone =
        lang === "ka"
          ? "გთხოვთ მიუთითოთ ვალიდური ტელეფონის ნომერი (მაგ. 595 33 55 33)"
          : "Please enter a valid phone number (at least 9 digits)";
    }
    const g = Number(formData.guests);
    if (!Number.isFinite(g) || g < 1 || g > 40) {
      nextErrors.guests =
        lang === "ka"
          ? "სტუმრების რაოდენობა უნდა იყოს 1-დან 40-მდე"
          : "Number of guests must be between 1 and 40";
    }
    if (!formData.date) {
      nextErrors.date =
        lang === "ka" ? "გთხოვთ აირჩიოთ თარიღი" : "Please select a reservation date";
    }
    if (!formData.time) {
      nextErrors.time =
        lang === "ka" ? "გთხოვთ აირჩიოთ სასურველი დრო" : "Please select a preferred time";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      const randomCode = `SLT-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingCode(randomCode);
      setStatus("success");
    }, 550);
  };

  const selectedZoneObj =
    SEATING_ZONES.find((z) => z.id === formData.zone) || SEATING_ZONES[0];

  if (status === "success") {
    return (
      <div
        className="p-6 sm:p-8 rounded-xl bg-basalt-900 border border-emerald-500/40 text-salt-50 space-y-6"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300 text-xl font-bold shrink-0">
            ✓
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider text-emerald-400 tabular-nums">
              {lang === "ka" ? `ჯავშნის კოდი: ${bookingCode}` : `BOOKING REF: ${bookingCode}`}
            </span>
            <h3 className="font-serif text-2xl font-semibold text-salt-50">
              {lang === "ka" ? "ჯავშნის მოთხოვნა მიღებულია" : "Reservation Request Confirmed"}
            </h3>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-basalt-950 border border-salt-50/10 space-y-2 text-sm tabular-nums">
          <div className="flex justify-between py-1 border-b border-salt-50/10">
            <span className="text-salt-400">{lang === "ka" ? "სტუმარი:" : "Guest:"}</span>
            <span className="font-medium text-salt-50">{formData.name}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-salt-50/10">
            <span className="text-salt-400">{lang === "ka" ? "თარიღი და დრო:" : "Date & Time:"}</span>
            <span className="font-medium text-brass-300">
              {formData.date} • {formData.time}
            </span>
          </div>
          <div className="flex justify-between py-1 border-b border-salt-50/10">
            <span className="text-salt-400">{lang === "ka" ? "სტუმრები:" : "Party Size:"}</span>
            <span className="font-medium text-salt-50">
              {formData.guests} {lang === "ka" ? "სტუმარი" : "Guests"}
            </span>
          </div>
          <div className="flex justify-between py-1">
            <span className="text-salt-400">{lang === "ka" ? "არჩეული ზონა:" : "Seating Zone:"}</span>
            <span className="font-medium text-salt-50">
              {lang === "ka" ? selectedZoneObj.nameKa : selectedZoneObj.nameEn}
            </span>
          </div>
          {tastingList.length > 0 && (
            <div className="pt-2 border-t border-salt-50/10">
              <span className="text-xs text-brass-400 block mb-1">
                {lang === "ka" ? "წინასწარ შერჩეული კერძები:" : "Pre-selected Menu Items:"}
              </span>
              <p className="text-xs text-salt-300">
                {tastingList.map((i) => (lang === "ka" ? i.nameKa : i.nameEn)).join(", ")}
              </p>
            </div>
          )}
        </div>

        <p className="text-xs text-salt-300 leading-relaxed">
          {lang === "ka"
            ? "ჩვენი ჰოსტესი დაგიკავშირდებათ მითითებულ ნომერზე დეტალების დასადასტურებლად. მყისიერი კონსულტაციისთვის დაგვირეკეთ: "
            : "Our host team will contact you shortly to finalize your table. For immediate assistance, call us at "}
          <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-brass-400 font-semibold underline tabular-nums">
            {RESTAURANT_INFO.phone}
          </a>
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="min-h-[44px] px-5 py-2.5 rounded-md bg-basalt-800 hover:bg-basalt-700 border border-salt-50/15 text-sm font-medium text-salt-50 transition-colors"
          >
            {lang === "ka" ? "ახალი ჯავშანი" : "Modify / New Booking"}
          </button>
          {onSuccessClose && (
            <button
              type="button"
              onClick={onSuccessClose}
              className="min-h-[44px] px-5 py-2.5 rounded-md bg-brass-400 hover:bg-brass-300 text-basalt-950 text-sm font-semibold transition-colors"
            >
              {lang === "ka" ? "დახურვა" : "Done"}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Interactive Seating Zone Selector */}
      <div>
        <label className="block text-xs font-medium text-salt-300 mb-2">
          {lang === "ka" ? "აირჩიეთ სასურველი სივრცე (მე-7 სართული)" : "Select Seating Zone (7th Floor)"}
        </label>
        <div className={`grid gap-2.5 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
          {SEATING_ZONES.map((zone) => {
            const active = formData.zone === zone.id;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, zone: zone.id }))}
                className={`text-left p-3.5 rounded-lg border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                  active
                    ? "bg-brass-400/15 border-brass-400 text-salt-50"
                    : "bg-basalt-950/90 border-salt-50/10 text-salt-300 hover:border-salt-50/25"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-sm text-salt-50">
                    {lang === "ka" ? zone.nameKa : zone.nameEn}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-basalt-900 text-brass-400 border border-brass-400/30 tabular-nums">
                    {lang === "ka" ? zone.capacityKa : zone.capacityEn}
                  </span>
                </div>
                <p className="text-xs text-salt-400 line-clamp-2">
                  {lang === "ka" ? zone.descKa : zone.descEn}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="res-name" className="block text-xs font-medium text-salt-300 mb-1.5">
            {lang === "ka" ? "სახელი და გვარი *" : "Full Name *"}
          </label>
          <input
            id="res-name"
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, name: e.target.value }));
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            placeholder={lang === "ka" ? "მაგ: გიორგი ბერიძე" : "e.g. Giorgi Beridze"}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "err-res-name" : undefined}
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-basalt-950 border text-sm text-salt-50 placeholder-salt-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
              errors.name ? "border-red-400" : "border-salt-50/15 hover:border-salt-50/30"
            }`}
          />
          {errors.name && (
            <p id="err-res-name" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="res-phone" className="block text-xs font-medium text-salt-300 mb-1.5">
            {lang === "ka" ? "ტელეფონის ნომერი *" : "Phone Number *"}
          </label>
          <input
            id="res-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, phone: e.target.value }));
              if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
            }}
            placeholder="+995 5XX XX XX XX"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "err-res-phone" : undefined}
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-basalt-950 border text-sm text-salt-50 tabular-nums placeholder-salt-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
              errors.phone ? "border-red-400" : "border-salt-50/15 hover:border-salt-50/30"
            }`}
          />
          {errors.phone && (
            <p id="err-res-phone" className="mt-1.5 text-xs text-red-400">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Guests, Date, Time */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="res-guests" className="block text-xs font-medium text-salt-300 mb-1.5">
            {lang === "ka" ? "სტუმრების რაოდენობა *" : "Guests *"}
          </label>
          <input
            id="res-guests"
            type="number"
            min="1"
            max="40"
            value={formData.guests}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, guests: e.target.value }));
              if (errors.guests) setErrors((prev) => ({ ...prev, guests: "" }));
            }}
            aria-invalid={Boolean(errors.guests)}
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-basalt-950 border text-sm text-salt-50 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
              errors.guests ? "border-red-400" : "border-salt-50/15 hover:border-salt-50/30"
            }`}
          />
          {errors.guests && <p className="mt-1.5 text-xs text-red-400">{errors.guests}</p>}
        </div>

        <div>
          <label htmlFor="res-date" className="block text-xs font-medium text-salt-300 mb-1.5">
            {lang === "ka" ? "თარიღი *" : "Date *"}
          </label>
          <input
            id="res-date"
            type="date"
            min={todayStr}
            value={formData.date}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, date: e.target.value }));
              if (errors.date) setErrors((prev) => ({ ...prev, date: "" }));
            }}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-basalt-950 border border-salt-50/15 hover:border-salt-50/30 text-sm text-salt-50 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
          />
          {errors.date && <p className="mt-1.5 text-xs text-red-400">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="res-time" className="block text-xs font-medium text-salt-300 mb-1.5">
            {lang === "ka" ? "დრო (12:00 – 00:30) *" : "Time (12:00 – 00:30) *"}
          </label>
          <select
            id="res-time"
            value={formData.time}
            onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-md bg-basalt-950 border border-salt-50/15 hover:border-salt-50/30 text-sm text-salt-50 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
          >
            {[
              "12:30",
              "13:30",
              "14:30",
              "16:00",
              "18:00",
              "19:00",
              "20:00",
              "20:30",
              "21:00",
              "21:30",
              "22:00",
              "23:00"
            ].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Special Requests / Pre-selected Tasting items */}
      <div>
        <label htmlFor="res-notes" className="block text-xs font-medium text-salt-300 mb-1.5">
          {lang === "ka"
            ? "დამატებითი სურვილი (დაბადების დღე, პანორამული კუთხის მაგიდა, ალერგია)"
            : "Special Requests (Birthday table, panoramic edge seat, dietary notes)"}
        </label>
        <textarea
          id="res-notes"
          rows={compact ? 2 : 3}
          value={formData.notes}
          onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
          placeholder={
            lang === "ka"
              ? "მაგ: გვსურს მაგიდა მთაწმინდის ხედით..."
              : "e.g. Window/railing edge table overlooking Mtatsminda..."
          }
          className="w-full px-3.5 py-2.5 rounded-md bg-basalt-950 border border-salt-50/15 hover:border-salt-50/30 text-sm text-salt-50 placeholder-salt-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
        />
      </div>

      {tastingList.length > 0 && (
        <div className="p-3 rounded-md bg-brass-400/10 border border-brass-400/30 text-xs text-salt-100">
          <span className="font-semibold text-brass-300 block mb-1">
            {lang === "ka"
              ? `მენიუდან არჩეულია ${tastingList.length} კერძი ჯავშანთან დასართავად:`
              : `${tastingList.length} menu item(s) attached to this reservation:`}
          </span>
          <span>
            {tastingList.map((i) => (lang === "ka" ? i.nameKa : i.nameEn)).join(" • ")}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-disabled={status === "submitting"}
        className="w-full min-h-[48px] px-6 py-3 rounded-md bg-brass-400 hover:bg-brass-300 disabled:opacity-50 disabled:pointer-events-none text-basalt-950 font-semibold text-base transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-300"
      >
        {status === "submitting"
          ? lang === "ka"
            ? "ჯავშანი მუშავდება..."
            : "Confirming Table..."
          : lang === "ka"
          ? "მაგიდის დაჯავშნის დადასტურება"
          : "Confirm Table Reservation"}
      </button>
    </form>
  );
}

