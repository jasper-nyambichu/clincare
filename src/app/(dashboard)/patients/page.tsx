"use client";

import { useState } from "react";

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState(0);

  const patients = [
    { id: "P-12093", name: "James Wilson", email: "james.w@email.com", age: 42, gender: "Male", condition: "Hypertension", status: "Active", lastVisit: "12 Oct 2023", statusColor: "green" },
    { id: "P-12094", name: "Sarah Jenkins", email: "sarah.j@email.com", age: 29, gender: "Female", condition: "Check-up", status: "Pending", lastVisit: "08 Nov 2023", statusColor: "amber" },
    { id: "P-12095", name: "Marcus Brown", email: "marcus.b@email.com", age: 56, gender: "Male", condition: "Diabetes Type II", status: "Critical", lastVisit: "15 Nov 2023", statusColor: "rose" },
    { id: "P-12096", name: "Emily Davis", email: "emily.d@email.com", age: 31, gender: "Female", condition: "Post-Op Recovery", status: "Active", lastVisit: "18 Nov 2023", statusColor: "green" },
    { id: "P-12097", name: "Robert King", email: "rob.king@email.com", age: 48, gender: "Male", condition: "Cardiology Check", status: "Active", lastVisit: "20 Nov 2023", statusColor: "green" },
  ];

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-gutter">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Patients Management</h2>
        <div className="flex gap-2 shrink-0">
          <button className="px-4 py-2.5 bg-white border border-outline-variant text-on-surface-variant rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
            <span className="hidden sm:inline">Export</span>
          </button>
          <button className="px-4 py-2.5 bg-secondary text-white rounded-xl font-label-md text-label-md flex items-center gap-2 shadow-lg hover:opacity-90 active:scale-95 transition-all whitespace-nowrap">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            <span className="hidden sm:inline">Add New Patient</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs + Search */}
      <div className="flex flex-col gap-3">
        {/* Tabs row — scrollable on mobile */}
        <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
          <div className="flex gap-2 overflow-x-auto pb-1 w-full md:w-auto scrollbar-hide">
            {["All Patients", "Active Cases", "Critical Care", "Pending"].map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(idx)}
                className={`px-5 py-2 rounded-full font-label-md text-label-md transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === idx
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-on-surface-variant border border-outline-variant hover:bg-surface-container-low"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          {/* Search — full width on mobile */}
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-outline-variant rounded-full text-label-md focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] overflow-hidden border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/30">
                <th className="px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Patient ID</th>
                <th className="px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Name</th>
                {/* Age & Gender hidden on small table widths, visible from md */}
                <th className="hidden md:table-cell px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider text-center">Age</th>
                <th className="hidden md:table-cell px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider text-center">Gender</th>
                <th className="px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Condition</th>
                <th className="px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Status</th>
                <th className="hidden lg:table-cell px-4 md:px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Last Visit</th>
                <th className="px-4 md:px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-4 md:px-6 py-4 font-label-md text-label-md text-primary font-bold">{patient.id}</td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0 text-sm">
                        {patient.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="min-w-0">
                        <p className="font-label-md text-label-md text-on-surface truncate">{patient.name}</p>
                        <p className="text-[12px] text-on-surface-variant truncate hidden sm:block">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 md:px-6 py-4 text-center font-body-md text-body-md text-on-surface">{patient.age}</td>
                  <td className="hidden md:table-cell px-4 md:px-6 py-4 text-center font-body-md text-body-md text-on-surface">{patient.gender}</td>
                  <td className="px-4 md:px-6 py-4">
                    <span className="px-2 md:px-3 py-1 bg-surface-container rounded-full text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap">
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className={`inline-flex items-center gap-1.5 px-2 md:px-3 py-1 rounded-full font-label-md text-label-md whitespace-nowrap
                      ${patient.statusColor === "green" ? "bg-green-50 text-emerald-600" : patient.statusColor === "amber" ? "bg-amber-50 text-amber-600" : "bg-rose-50 text-rose-600"}`}>
                      <span className={`w-2 h-2 rounded-full shrink-0
                        ${patient.statusColor === "green" ? "bg-emerald-600" : patient.statusColor === "amber" ? "bg-amber-600" : "bg-rose-500"}
                        ${patient.status === "Active" ? "animate-pulse" : ""}`}
                      />
                      {patient.status}
                    </div>
                  </td>
                  <td className="hidden lg:table-cell px-4 md:px-6 py-4 font-body-md text-body-md text-on-surface whitespace-nowrap">{patient.lastVisit}</td>
                  {/* Action button always visible on touch, hover-only on desktop */}
                  <td className="px-4 md:px-6 py-4 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors lg:opacity-0 lg:group-hover:opacity-100 opacity-100">
                      <span className="material-symbols-outlined text-outline">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant/30 bg-surface-container-lowest">
          <p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1–5 of 1,248 patients</p>
          <div className="flex items-center gap-1.5">
            <button className="p-1.5 text-outline-variant hover:text-primary transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-lg font-label-md text-label-md flex items-center justify-center transition-colors
                    ${page === 1 ? "bg-primary text-white" : "hover:bg-surface-container text-on-surface-variant"}`}
                >
                  {page}
                </button>
              ))}
              <span className="px-1 text-outline-variant">…</span>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant font-label-md text-label-md flex items-center justify-center transition-colors">
                250
              </button>
            </div>
            <button className="p-1.5 text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[
          {
            color: "primary", icon: "groups", fill: true,
            label: "Total Patients", value: "1,248",
            sub: "+12% this month", subColor: "text-emerald-600", subIcon: "trending_up",
          },
          {
            color: "secondary", icon: "calendar_month", fill: true,
            label: "Appointments", value: "42",
            sub: "Scheduled for today", subColor: "text-on-surface-variant", subIcon: null,
          },
          {
            color: "error", icon: "warning", fill: true,
            label: "Critical Cases", value: "08",
            sub: "Requires immediate action", subColor: "text-error", subIcon: null,
          },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/10 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-${stat.color}/10 flex items-center justify-center text-${stat.color} shrink-0`}>
              <span
                className="material-symbols-outlined text-[28px]"
                style={stat.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {stat.icon}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest truncate">{stat.label}</p>
              <h3 className="text-[28px] md:text-[32px] font-bold text-on-surface leading-tight">{stat.value}</h3>
              <p className={`text-[12px] font-semibold flex items-center gap-1 ${stat.subColor}`}>
                {stat.subIcon && <span className="material-symbols-outlined text-[14px]">{stat.subIcon}</span>}
                {stat.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}