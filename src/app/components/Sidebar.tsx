"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { path: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { path: "/patients", icon: "group", label: "Patients" },
  { path: "/appointments", icon: "event", label: "Appointments" },
  { path: "/doctors", icon: "medical_services", label: "Doctors" },
  { path: "/billing", icon: "payments", label: "Billing" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[280px] z-50
          bg-surface-container-lowest border-r border-outline-variant/30
          flex flex-col transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-stack-lg py-10">
          <h1 className="font-headline-md text-headline-md font-bold text-primary">ClinCare</h1>
          <p className="font-label-md text-label-md text-on-surface-variant mt-1">Medical Management</p>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  flex items-center gap-stack-md rounded-xl mx-4 my-1 p-3 transition-all
                  ${isActive
                    ? "bg-primary-container text-on-primary-container translate-x-1"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                  }
                `}
              >
                <span
                  className="material-symbols-outlined"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                <span className="font-label-md text-label-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-stack-lg space-y-4">
          <button className="primary-gradient-btn w-full py-4 px-6 rounded-xl text-white font-label-md shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">add</span>
            New Appointment
          </button>

          <div className="pt-6 border-t border-outline-variant/30 space-y-1">
            <Link
              href="#"
              className="flex items-center gap-stack-md text-on-surface-variant hover:bg-surface-container-high rounded-xl p-3 transition-all"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-md text-label-md">Settings</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-stack-md text-on-surface-variant hover:bg-surface-container-high rounded-xl p-3 transition-all"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md text-label-md">Logout</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}