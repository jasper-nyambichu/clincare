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
      borderColor: "primary",
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
      <div className="flex justify-between items-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Appointments</h2>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-label-md shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          New Appointment
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 bg-white p-6 rounded-3xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)]">
        {["All", "Scheduled", "Completed", "Cancelled"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-xl font-label-md text-label-md transition-all ${
              activeFilter === filter
                ? "bg-primary text-white shadow-md shadow-primary/10"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 gap-4">
        {appointments.map((apt) => (
          <div
            key={apt.id}
            className="group bg-white p-6 rounded-3xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] hover:shadow-[0px_12px_30px_rgba(26,31,54,0.08)] transition-all flex flex-col md:flex-row items-center gap-6 border-l-4"
            style={{ borderLeftColor: apt.borderColor === "primary" ? "#006688" : apt.borderColor }}
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                {apt.patient.charAt(0)}
              </div>
              <div>
                <h3 className="font-headline-md text-label-md font-bold text-on-surface">{apt.patient}</h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant">ID: {apt.patientId}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 flex-[2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider">Doctor</p>
                  <p className="font-label-md text-label-md text-on-surface">{apt.doctor}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider">Date &amp; Time</p>
                  <p className="font-label-md text-label-md text-on-surface">{apt.date} • {apt.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">clinical_notes</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider">Type</p>
                  <p className="font-label-md text-label-md text-on-surface">{apt.type}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className={`bg-${apt.statusColor === "primary" ? "primary/10" : apt.statusColor === "teal" ? "teal/10" : "surface-container-high"} text-${apt.statusColor === "primary" ? "primary" : apt.statusColor === "teal" ? "teal-700" : "on-surface-variant"} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide`}>
                {apt.status}
              </span>
              <button className="w-10 h-10 rounded-full hover:bg-surface-container-high flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
        ))}

        {/* Compact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-primary/10 p-3 rounded-2xl text-primary">
              <span className="material-symbols-outlined">emergency</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">Urgent Check-up</h4>
                  <p className="text-xs text-on-surface-variant">Patient: Marcus Aurelius</p>
                </div>
                <span className="bg-error/10 text-error px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase">High Priority</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  Today, 02:45 PM
                </span>
                <button className="text-primary font-bold text-xs hover:underline transition-all">Details</button>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-tertiary/10 p-3 rounded-2xl text-tertiary">
              <span className="material-symbols-outlined">radiology</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-label-md text-label-md text-on-surface">MRI Scan Radiology</h4>
                  <p className="text-xs text-on-surface-variant">Patient: Elena Petrova</p>
                </div>
                <span className="bg-outline-variant/20 text-on-surface-variant px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase">Standard</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-outline flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                  Tomorrow, 10:00 AM
                </span>
                <button className="text-primary font-bold text-xs hover:underline transition-all">Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="relative overflow-hidden bg-primary rounded-3xl p-8 text-white flex items-center justify-between">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="font-headline-md text-headline-md mb-2">Daily Summary</h3>
            <p className="opacity-80 font-body-md">You have 12 appointments remaining for today.</p>
            <div className="mt-6 flex gap-8">
              <div>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-xs opacity-70 uppercase font-bold tracking-widest">Efficiency</p>
              </div>
              <div className="h-10 w-px bg-white/20"></div>
              <div>
                <p className="text-2xl font-bold">04</p>
                <p className="text-xs opacity-70 uppercase font-bold tracking-widest">Completed</p>
              </div>
            </div>
          </div>
          <div className="relative z-10 hidden md:block">
            <button className="bg-white text-primary px-6 py-3 rounded-2xl font-bold hover:bg-primary-container hover:text-on-primary-container transition-all shadow-xl shadow-black/10">
              Download Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}