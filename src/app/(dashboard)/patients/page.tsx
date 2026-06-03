"use client";

import { useState } from "react";

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

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
      <div className="flex justify-between items-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Patients Management</h2>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-outline-variant text-on-surface-variant rounded-xl font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
            Export
          </button>
          <button className="px-5 py-2.5 bg-secondary text-white rounded-xl font-label-md text-label-md flex items-center gap-2 shadow-lg hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Add New Patient
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-stack-md">
        <div className="flex flex-wrap gap-stack-sm">
          {["All Patients", "Active Cases", "Critical Care", "Pending"].map((filter, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-full font-label-md text-label-md transition-colors ${
                idx === 0
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-on-surface-variant border border-outline-variant hover:bg-surface-container-low"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
          <input
            type="text"
            placeholder="Search patients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white border border-outline-variant rounded-full text-label-md focus:ring-2 focus:ring-primary/20 transition-all outline-none w-64"
          />
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] overflow-hidden border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50 border-b border-outline-variant/30">
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Patient ID</th>
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider text-center">Age</th>
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider text-center">Gender</th>
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Condition</th>
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Last Visit</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="px-6 py-5 font-label-md text-label-md text-primary font-bold">{patient.id}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {patient.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface">{patient.name}</p>
                        <p className="text-[12px] text-on-surface-variant">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center font-body-md text-body-md text-on-surface">{patient.age}</td>
                  <td className="px-6 py-5 text-center font-body-md text-body-md text-on-surface">{patient.gender}</td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-surface-container rounded-full text-on-surface-variant font-label-sm text-label-sm">
                      {patient.condition}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-${patient.statusColor === "green" ? "green-50" : patient.statusColor === "amber" ? "amber-50" : "rose-50"} text-${patient.statusColor === "green" ? "emerald-600" : patient.statusColor === "amber" ? "amber-600" : "error"} font-label-md text-label-md`}>
                      <span className={`w-2 h-2 rounded-full bg-${patient.statusColor === "green" ? "emerald-600" : patient.statusColor === "amber" ? "amber-600" : "error"} ${patient.status === "Active" ? "animate-pulse" : ""}`}></span>
                      {patient.status}
                    </div>
                  </td>
                  <td className="px-6 py-5 font-body-md text-body-md text-on-surface">{patient.lastVisit}</td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined text-outline">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-outline-variant/30 bg-surface-container-lowest">
          <p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-5 of 1,248 patients</p>
          <div className="flex items-center gap-2">
            <button className="p-2 text-outline-variant hover:text-primary transition-colors disabled:opacity-30" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded-lg ${page === 1 ? "bg-primary text-white" : "hover:bg-surface-container text-on-surface-variant"} font-label-md text-label-md flex items-center justify-center transition-colors`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 text-outline-variant">...</span>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface-variant font-label-md text-label-md flex items-center justify-center transition-colors">
                250
              </button>
            </div>
            <button className="p-2 text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
          </div>
          <div>
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">Total Patients</p>
            <h3 className="text-[32px] font-bold text-on-surface">1,248</h3>
            <p className="text-[12px] text-emerald-600 font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">trending_up</span>
              +12% this month
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
          </div>
          <div>
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">Appointments</p>
            <h3 className="text-[32px] font-bold text-on-surface">42</h3>
            <p className="text-[12px] text-on-surface-variant font-semibold">Scheduled for today</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-[24px] shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-error/10 flex items-center justify-center text-error">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
          </div>
          <div>
            <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">Critical Cases</p>
            <h3 className="text-[32px] font-bold text-on-surface">08</h3>
            <p className="text-[12px] text-error font-semibold flex items-center gap-1">Requires immediate action</p>
          </div>
        </div>
      </div>
    </div>
  );
}