"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    setAnimatedBars(true);
  }, []);

  return (
    <div className="space-y-gutter">

      {/* Hero Card & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <section className="lg:col-span-2 medical-gradient p-6 md:p-stack-lg rounded-3xl relative overflow-hidden text-on-primary shadow-xl flex flex-col justify-center min-h-[260px] md:min-h-[320px]">
          <div className="relative z-10 max-w-lg">
            <span className="px-3 py-1 bg-white/20 rounded-full text-label-sm mb-3 md:mb-4 inline-block backdrop-blur-sm">
              System Update: V2.4.0
            </span>
            <h3 className="font-display-lg text-headline-md md:text-headline-lg mb-3 md:mb-4">
              Manage Your Clinic Efficiently
            </h3>
            <p className="font-body-md md:font-body-lg text-white/90 mb-6 md:mb-8">
              Monitor patients, appointments, doctors, and real-time billing performance from a centralized hub.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/patients"
                className="bg-white text-primary px-5 py-3 md:px-6 md:py-4 rounded-2xl font-label-md shadow-lg hover:scale-95 transition-all"
              >
                View Patients
              </Link>
              <button className="bg-white/10 border border-white/30 backdrop-blur-md px-5 py-3 md:px-6 md:py-4 rounded-2xl font-label-md hover:bg-white/20 transition-all">
                Create Appointment
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Small Calendar */}
        <section className="bg-white p-5 md:p-6 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <h4 className="font-headline-md text-body-lg font-bold">Upcoming Check Up</h4>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-surface-container-low rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="p-1 hover:bg-surface-container-low rounded-lg transition-colors">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-4 mb-5">
            <div className="flex justify-between items-center mb-4">
              <span className="font-label-md">January 2024</span>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                <span key={idx} className="text-label-sm text-outline py-1">{day}</span>
              ))}
              {[29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((date, idx) => (
                <span
                  key={idx}
                  className={`text-label-sm py-1 rounded-lg ${
                    date === 8 ? "font-bold bg-primary text-white" : "hover:bg-surface-container-high"
                  }`}
                >
                  {date}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3 p-3 border border-outline-variant/20 rounded-2xl hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">stethoscope</span>
              </div>
              <div className="min-w-0">
                <p className="text-label-md font-bold truncate">General Checkup</p>
                <p className="text-label-sm text-on-surface-variant">10:30 AM • Room 402</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-gutter">
        {[
          { icon: "person", label: "Total Patients", value: "2,458", trend: "+12%", trendUp: true, color: "primary" },
          { icon: "calendar_today", label: "Appointments", value: "324", trend: "+8%", trendUp: true, color: "secondary" },
          { icon: "medical_information", label: "Doctors Active", value: "68", trend: "Stable", trendUp: false, color: "tertiary" },
          { icon: "payments", label: "Monthly Revenue", value: "$124,500", trend: "+24%", trendUp: true, color: "green" },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white p-4 md:p-6 rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-colors
                ${kpi.color === "green" ? "bg-green-100 group-hover:bg-green-500" :
                  kpi.color === "primary" ? "bg-primary/10 group-hover:bg-primary" :
                  kpi.color === "secondary" ? "bg-secondary/10 group-hover:bg-secondary" :
                  "bg-tertiary/10 group-hover:bg-tertiary"}
                group-hover:text-white`}>
                <span className="material-symbols-outlined text-[20px] md:text-[24px]">{kpi.icon}</span>
              </div>
              <span className={`flex items-center text-label-sm px-2 py-1 rounded-lg whitespace-nowrap
                ${kpi.trendUp ? "text-green-600 bg-green-50" : "text-outline bg-surface-container"}`}>
                {kpi.trendUp && <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>}
                {kpi.trend}
              </span>
            </div>
            <p className="text-label-sm md:text-label-md text-on-surface-variant leading-tight">{kpi.label}</p>
            <h4 className="text-body-lg md:text-headline-md font-bold mt-1 leading-tight">{kpi.value}</h4>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">

        {/* Bar Chart */}
        <section className="lg:col-span-8 bg-white p-5 md:p-stack-lg rounded-3xl border border-outline-variant/30 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 md:mb-8">
            <div>
              <h4 className="font-headline-md text-headline-md mb-1">Patient Growth</h4>
              <p className="text-label-md text-on-surface-variant">Monthly enrollment trends for 2023</p>
            </div>
            <div className="flex bg-surface-container-low p-1 rounded-xl self-start sm:self-auto shrink-0">
              <button className="px-3 md:px-4 py-2 bg-white rounded-lg text-label-sm shadow-sm">Last 6 Months</button>
              <button className="px-3 md:px-4 py-2 text-label-sm text-on-surface-variant">Yearly</button>
            </div>
          </div>
          <div className="h-48 md:h-64 flex items-end justify-between gap-1 md:gap-2">
            {[
              { month: "Jul", height: "60%", value: "1.2k" },
              { month: "Aug", height: "45%", value: "900" },
              { month: "Sep", height: "75%", value: "1.5k" },
              { month: "Oct", height: "55%", value: "1.1k" },
              { month: "Nov", height: "90%", value: "1.8k" },
              { month: "Dec", height: "100%", value: "2.1k", isCurrent: true },
            ].map((bar, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 md:gap-2">
                <div
                  className={`w-full ${bar.isCurrent ? "bg-primary" : "bg-primary-container/20"} rounded-t-xl hover:bg-primary-container transition-all duration-300 relative group`}
                  style={{ height: animatedBars ? bar.height : "0%", transition: "height 0.5s ease-out" }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-label-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    {bar.value}
                  </div>
                </div>
                <span className={`text-[10px] md:text-label-sm ${bar.isCurrent ? "font-bold text-primary" : "text-on-surface-variant"}`}>
                  {bar.month}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Donut Chart */}
        <section className="lg:col-span-4 bg-white p-5 md:p-stack-lg rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col">
          <h4 className="font-headline-md text-headline-md mb-4 md:mb-6">Appointment Distribution</h4>
          <div className="flex-1 flex flex-col items-center justify-center py-2 md:py-4">
            <div className="relative w-36 h-36 md:w-48 md:h-48 mb-5 md:mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f3f2ff" strokeWidth="12" />
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#006688" strokeDasharray="251.2" strokeDashoffset="100" strokeWidth="12" />
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#4453c3" strokeDasharray="251.2" strokeDashoffset="180" strokeWidth="12" />
                <circle cx="50" cy="50" fill="transparent" r="40" stroke="#f9ab51" strokeDasharray="251.2" strokeDashoffset="230" strokeWidth="12" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-headline-md font-bold">324</span>
                <span className="text-label-sm text-on-surface-variant">Total</span>
              </div>
            </div>
            <div className="w-full space-y-2 md:space-y-3">
              {[
                { color: "bg-primary", label: "Consultation", percent: "45%" },
                { color: "bg-secondary", label: "Follow-Up", percent: "30%" },
                { color: "bg-tertiary-container", label: "Emergency", percent: "15%" },
                { color: "bg-surface-container-high", label: "Telehealth", percent: "10%" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${item.color}`} />
                    <span className="text-label-sm">{item.label}</span>
                  </div>
                  <span className="text-label-sm font-bold">{item.percent}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Upcoming Appointments Table */}
      <div className="bg-white rounded-3xl border border-outline-variant/30 shadow-sm overflow-hidden">
        <div className="p-4 md:p-stack-lg flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-outline-variant/20 gap-3">
          <h4 className="font-headline-md text-headline-md">Upcoming Appointments</h4>
          <div className="flex gap-2 shrink-0">
            <button className="px-3 md:px-4 py-2 text-label-md text-primary border border-primary/20 rounded-xl hover:bg-primary-container/10 transition-colors whitespace-nowrap">
              <span className="hidden sm:inline">View All Schedule</span>
              <span className="sm:hidden">View All</span>
            </button>
            <button className="bg-primary text-white px-3 md:px-4 py-2 rounded-xl font-label-md hover:scale-95 transition-all whitespace-nowrap">
              Add New
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[560px]">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-4 md:px-6 py-4 font-label-md text-on-surface-variant">Patient Name</th>
                <th className="hidden md:table-cell px-4 md:px-6 py-4 font-label-md text-on-surface-variant">Specialist</th>
                <th className="px-4 md:px-6 py-4 font-label-md text-on-surface-variant">Date &amp; Time</th>
                <th className="hidden sm:table-cell px-4 md:px-6 py-4 font-label-md text-on-surface-variant">Type</th>
                <th className="px-4 md:px-6 py-4 font-label-md text-on-surface-variant">Status</th>
                <th className="px-4 md:px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {[
                { name: "Alex Westwood", id: "P-12903", doctor: "Dr. Emily Carter", date: "Dec 24, 09:30 AM", type: "Consultation", status: "Confirmed", statusColor: "green" },
                { name: "Marcus Smith", id: "P-12911", doctor: "Dr. Michael Lee", date: "Dec 24, 11:15 AM", type: "Emergency", status: "In Waiting", statusColor: "gray" },
                { name: "Sarah Jenkins", id: "P-12895", doctor: "Dr. Sarah Johnson", date: "Dec 24, 02:00 PM", type: "Follow-Up", status: "Confirmed", statusColor: "green" },
              ].map((apt, idx) => (
                <tr key={idx} className="hover:bg-surface-container-lowest transition-colors cursor-pointer group">
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary-container/20 flex items-center justify-center font-bold text-primary text-sm shrink-0">
                        {apt.name.charAt(0)}{apt.name.split(" ")[1]?.charAt(0) || ""}
                      </div>
                      <div className="min-w-0">
                        <p className="font-label-md truncate">{apt.name}</p>
                        <p className="text-label-sm text-on-surface-variant">{apt.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-4 md:px-6 py-4 text-label-md text-on-surface whitespace-nowrap">{apt.doctor}</td>
                  <td className="px-4 md:px-6 py-4 text-label-md text-on-surface whitespace-nowrap">{apt.date}</td>
                  <td className="hidden sm:table-cell px-4 md:px-6 py-4">
                    <span className={`px-2 py-1 text-label-sm rounded-lg whitespace-nowrap
                      ${apt.type === "Emergency" ? "bg-tertiary-container/20 text-on-tertiary-container" :
                        apt.type === "Follow-Up" ? "bg-secondary/10 text-secondary" :
                        "bg-primary/10 text-primary"}`}>
                      {apt.type}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <span className={`px-2 py-1 text-label-sm rounded-lg whitespace-nowrap
                      ${apt.statusColor === "green" ? "bg-green-100 text-green-700" : "bg-surface-container-high text-on-surface-variant"}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-right">
                    <button className="p-2 text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}