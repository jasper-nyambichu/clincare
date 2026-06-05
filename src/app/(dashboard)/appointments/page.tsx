"use client";

import { useState } from "react";

export default function AppointmentsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const appointments = [
    {
      id: 1,
      patient: "Andri Setiawan",
      patientId: "PT-90210",
      doctor: "Dr. Sarah Johnson",
      date: "Jan 24, 2024",
      time: "09:30 AM",
      type: "General Consultation",
      status: "Scheduled",
      statusColor: "primary",
      borderColor: "#006688",
    },
    {
      id: 2,
      patient: "Maya Angelou",
      patientId: "PT-88321",
      doctor: "Dr. James Wilson",
      date: "Jan 24, 2024",
      time: "11:00 AM",
      type: "Blood Test Follow-up",
      status: "Confirmed",
      statusColor: "teal",
      borderColor: "#5AE6C7",
    },
  ];

  return (
    <div className="space-y-gutter">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Appointments</h2>
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl font-label-md shadow-lg hover:opacity-90 transition-all flex items-center gap-2 self-start sm:self-auto whitespace-nowrap">
          <span className="material-symbols-outlined">add</span>
          New Appointment
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 md:p-6 rounded-3xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)]">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {["All", "Scheduled", "Completed", "Cancelled"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-label-md text-label-md transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 gap-4">

        {/* Main appointment cards */}
        {appointments.map((apt) => (
          <div
            key={apt.id}
            className="group bg-white p-5 md:p-6 rounded-3xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] hover:shadow-[0px_12px_30px_rgba(26,31,54,0.08)] transition-all border-l-4 flex flex-col gap-4"
            style={{ borderLeftColor: apt.borderColor }}
          >
            {/* Top row: avatar + name + status + menu */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
                  {apt.patient.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-label-md font-bold text-on-surface truncate">{apt.patient}</h3>
                  <p className="text-label-sm text-on-surface-variant">ID: {apt.patientId}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap
                  ${apt.statusColor === "primary" ? "bg-primary/10 text-primary" : "bg-teal-50 text-teal-700"}`}>
                  {apt.status}
                </span>
                <button className="w-9 h-9 rounded-full hover:bg-surface-container-high flex items-center justify-center transition-colors shrink-0">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
              </div>
            </div>

            {/* Detail pills — wrap on mobile, row on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">medical_services</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-outline uppercase tracking-wider">Doctor</p>
                  <p className="font-label-md text-label-md text-on-surface truncate">{apt.doctor}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-outline uppercase tracking-wider">Date &amp; Time</p>
                  <p className="font-label-md text-label-md text-on-surface">{apt.date} • {apt.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">clinical_notes</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-outline uppercase tracking-wider">Type</p>
                  <p className="font-label-md text-label-md text-on-surface truncate">{apt.type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Compact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest p-5 md:p-6 rounded-3xl border border-outline-variant/20 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary shrink-0">
              <span className="material-symbols-outlined">emergency</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <h4 className="font-label-md text-label-md text-on-surface">Urgent Check-up</h4>
                  <p className="text-xs text-on-surface-variant">Patient: Marcus Aurelius</p>
                </div>
                <span className="bg-error/10 text-error px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase shrink-0">
                  High Priority
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  Today, 02:45 PM
                </span>
                <button className="text-primary font-bold text-xs hover:underline">Details</button>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-5 md:p-6 rounded-3xl border border-outline-variant/20 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-tertiary/10 p-3 rounded-2xl text-tertiary shrink-0">
              <span className="material-symbols-outlined">radiology</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0">
                  <h4 className="font-label-md text-label-md text-on-surface">MRI Scan Radiology</h4>
                  <p className="text-xs text-on-surface-variant">Patient: Elena Petrova</p>
                </div>
                <span className="bg-outline-variant/20 text-on-surface-variant px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase shrink-0">
                  Standard
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  Tomorrow, 10:00 AM
                </span>
                <button className="text-primary font-bold text-xs hover:underline">Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="relative overflow-hidden bg-primary rounded-3xl p-6 md:p-8 text-white">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-headline-md text-headline-md mb-2">Daily Summary</h3>
              <p className="opacity-80 font-body-md">You have 12 appointments remaining for today.</p>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-xs opacity-70 uppercase font-bold tracking-widest">Efficiency</p>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div>
                  <p className="text-2xl font-bold">04</p>
                  <p className="text-xs opacity-70 uppercase font-bold tracking-widest">Completed</p>
                </div>
              </div>
            </div>
            <button className="bg-white text-primary px-6 py-3 rounded-2xl font-bold hover:bg-primary-container hover:text-on-primary-container transition-all shadow-xl shadow-black/10 self-start md:self-auto whitespace-nowrap">
              Download Schedule
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}