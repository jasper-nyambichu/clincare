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

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar is fixed-positioned internally; this wrapper reserves the desktop column */}
      <div className="hidden lg:block w-[280px] shrink-0" />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — fills remaining space, scrolls independently */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex-1 p-stack-lg lg:p-margin-desktop overflow-y-auto">
          {children}
        </div>

        {/* Mobile FAB */}
        <button className="fixed bottom-8 right-8 lg:hidden primary-gradient-btn w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center z-50">
          <span className="material-symbols-outlined">add</span>
        </button>
      </main>
    </div>
  );
}