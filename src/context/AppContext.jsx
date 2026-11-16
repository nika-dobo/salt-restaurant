import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [lang, setLang] = useState("ka");
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [preselectedZone, setPreselectedZone] = useState("terrace");
  const [preselectedNotes, setPreselectedNotes] = useState("");
  const [tastingList, setTastingList] = useState([]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "ka" ? "en" : "ka"));
  };

  const openReservationModal = (options = {}) => {
    if (options.zone) setPreselectedZone(options.zone);
    if (options.notes !== undefined) setPreselectedNotes(options.notes);
    setIsReserveModalOpen(true);
  };

  const closeReservationModal = () => {
    setIsReserveModalOpen(false);
  };

  const toggleTastingItem = (item) => {
    setTastingList((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const clearTastingList = () => setTastingList([]);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isReserveModalOpen,
        openReservationModal,
        closeReservationModal,
        preselectedZone,
        setPreselectedZone,
        preselectedNotes,
        setPreselectedNotes,
        tastingList,
        toggleTastingItem,
        clearTastingList
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}

