"use client";

import { useState } from "react";

interface TopBarProps {
  onMenuClick: () => void;
  title?: string;
}

export default function TopBar({ onMenuClick, title = "Welcome Back, Dr. Sarah Johnson" }: TopBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="glass-header sticky top-0 flex justify-between items-center px-stack-lg lg:px-margin-desktop h-20 z-40">
      {/* Left section with hamburger (mobile only) */}
      <div className="flex items-center gap-4 lg:hidden">
        <button onClick={onMenuClick} className="p-2 rounded-lg hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">{title}</h2>
      </div>

      {/* Desktop title (hidden on mobile) */}
      <div className="hidden lg:block">
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface">{title}</h2>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-4 lg:mx-0">
        <div
          className={`
            flex items-center gap-4 bg-surface-container-low px-4 py-2 rounded-full 
            border border-outline-variant/20 transition-all
            ${searchFocused ? "ring-2 ring-primary/20" : ""}
          `}
        >
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-label-md w-full outline-none"
            placeholder="Search for doctors, specialists..."
            type="text"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 mr-4">
          <button className="hover:bg-surface-container-high rounded-full p-2 transition-colors relative">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-background"></span>
          </button>
          <button className="hover:bg-surface-container-high rounded-full p-2 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">chat</span>
          </button>
          <button className="hover:bg-surface-container-high rounded-full p-2 transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">help</span>
          </button>
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-label-md text-on-surface">Andri Setiawan</p>
            <p className="text-[10px] text-outline uppercase tracking-wider font-bold">Admin Panel</p>
          </div>
          <img
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-primary-container object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB-INMektrgl_0UCRiLJaWydEH7b2HXqhqjy6TQmuDQCooUSdVZVY54tK-d-uglV51m1Wy19HSMHYVnj722BLOko-pzAanr9vPLJpxBIYBDkW22izBhJs8UJn4s3LaMBuAys2GMFcjYOGLAJR4fip16d7s3xr8rYZoF4z3GObCvqvAaNWgi-xbc4QjHjgRtH3KV9AOoL6nvGGaqIJGgxx50MlwzBaE4OEMoTlm6jEWlT3edrXz8qlWpa8ywTrvHFeU4A62MxxPU5X5"
          />
        </div>
      </div>
    </header>
  );
}