import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReservationModal from "./components/ReservationModal";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import TerraceEventsPage from "./pages/TerraceEventsPage";
import GalleryPage from "./pages/GalleryPage";
import ReserveContactPage from "./pages/ReserveContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-basalt-950 text-salt-50 font-sans selection:bg-brass-400 selection:text-basalt-950">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/terrace-events" element={<TerraceEventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reserve" element={<ReserveContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ReservationModal />
    </div>
  );
}

