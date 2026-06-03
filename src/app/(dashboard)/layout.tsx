"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false); // Auto-close mobile sidebar on resize to desktop
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 lg:ml-0 min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />
        <div className="p-stack-lg lg:p-margin-desktop">{children}</div>
        {/* Floating Action Button for Mobile */}
        <button className="fixed bottom-8 right-8 lg:hidden primary-gradient-btn w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center z-50">
          <span className="material-symbols-outlined">add</span>
        </button>
      </main>
    </div>
  );
}