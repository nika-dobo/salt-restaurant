import React, { useEffect } from "react";
import { useApp } from "../context/AppContext";
import ReservationForm from "./ReservationForm";

export default function ReservationModal() {
  const { lang, isReserveModalOpen, closeReservationModal } = useApp();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isReserveModalOpen) {
        closeReservationModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReserveModalOpen, closeReservationModal]);

  if (!isReserveModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-basalt-950/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-reserve-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeReservationModal();
      }}
    >
      <div className="relative w-full max-w-2xl rounded-xl bg-basalt-900 border border-salt-50/15 shadow-2xl p-6 sm:p-8 my-8 max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-salt-50/10">
          <div>
            <span className="text-xs font-medium text-brass-400">
              {lang === "ka"
                ? "SALT TERRACE & BAR • მე-7 სართული"
                : "SALT TERRACE & BAR • 7TH FLOOR"}
            </span>
            <h2 id="modal-reserve-title" className="font-serif text-2xl sm:text-3xl font-semibold text-salt-50 mt-0.5">
              {lang === "ka" ? "მაგიდის დაჯავშნა" : "Reserve Your Table"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeReservationModal}
            aria-label={lang === "ka" ? "ფანჯრის დახურვა" : "Close modal"}
            className="w-11 h-11 rounded-md bg-basalt-950 border border-salt-50/15 hover:border-brass-400 flex items-center justify-center text-salt-300 hover:text-salt-50 text-xl transition-colors"
          >
            ×
          </button>
        </div>

        <ReservationForm compact onSuccessClose={closeReservationModal} />
      </div>
    </div>
  );
}

