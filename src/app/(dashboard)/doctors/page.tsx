"use client";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology Specialist",
      experience: "12 Years",
      rating: 4.9,
      status: "Available Today",
      statusColor: "green",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGyHPK6HjHSdYURDDwjIOc23BIFSrV3SZoTTPfVu7ytFMn0-IVzEBjMFqkho94vyrfBPUBE68mhQJ3k_ke0T8fiylkyU-qlZgEDU0NoyLJgICjn0K7fVNecP_T42Pzk_qtFNKBsg7LDITnE4kbqq1VsWyLdp9qzxw1pH76kA5DQCnu5AsvhFEuWNewXfhmDp9yH_JxHtS2k5ZBTccSkPZ6cbxGkO-HiSrCIi8KdqnPy-KJI9L8GXdCib4cravykhRuXmeisBdgD8n",
    },
    {
      name: "Dr. Emily Carter",
      specialty: "Pediatrics",
      experience: "8 Years",
      rating: 4.8,
      status: "Busy with Patients",
      statusColor: "yellow",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJymq-dZZjupcubilQlYK3iiIEjwyfgFn_JgvZAgcOOaZ_Fkf7Aht_wYQ4mg2O-eCdSfdpjoaO3m7Ij--DNSEcaCXHeHYU7SX862K5uYqSjSpIUjlpXV6WowD71_aYqi---h4eeIVJFaoFcCPqNj1VhxLqE68-4qdM12X1J9fMOs6LtLuFrFsd5a62GJX2uBXCRp6J0dYJA2b6LF_Sb5waaTjyNAKjo5iqqYXj7e5XCOjI8R9n6uIgx2sfUBWdG2xn8_fjYV1_7Hy3",
    },
    {
      name: "Dr. Michael Lee",
      specialty: "Neurology Surgeon",
      experience: "15 Years",
      rating: 5.0,
      status: "Available Today",
      statusColor: "green",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRS0J2OuiY3awG8dTwLG0_bIMPDmGeBuZJzXmt0IKjEc9kuqB5yiLqpGl6XrZb-uxMDENM-nEiNXdBkH9jZZ7zrGm2KoPuZCgsF9DTPdfXej8IzzuAKz8JBcFdc9l0i9CNtOfq4NVd9Jqkf7w4yq94I4xfsi1D9WG4uPSczYkIGOnAVUXuMs1e40V5xE4IJy1XgoIHgxBAEn5WkR7VF-YqkPiCr91x2dM4b8-4qTQ9JabpYoWTeiJiqzfn7vmtbpRYN7bg1YCJyUdP",
    },
    {
      name: "Dr. David Kim",
      specialty: "Internal Medicine",
      experience: "20 Years",
      rating: 4.7,
      status: "Off-duty",
      statusColor: "gray",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzWhzP8ramzPIo7E_8hsPeNfacJcdJWfOORYGorHhfyDU4HktVt_cuR_0h8SB1cMnKEPCGLNa3M1Oy-ezlZhtPn7ULO7XSDWs31VXDndo-quDYJMXUNJCUmvsVRPIu-1m38vOkw3pQFP9lCpQc1GYTsWqwqF1XPF8Hy-A3MWIjaI7gfrq4xFLzPkek04cj8E4LFkBciMY4L2C6BZTL4ramQnyFFYaAgTVDaGK_S0JDIX2xQrbI7Ube05PtpD28Evid9HRT_Pi-j3KC",
    },
  ];

  return (
    <div className="space-y-gutter">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Our Specialists</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
            Manage and monitor our clinical team. View doctor availability, specializations, and years of professional service at ClinCare.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-xl border border-outline-variant text-primary font-label-md hover:bg-surface-container-low transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
          <button className="px-6 py-3 rounded-xl bg-primary text-white font-label-md hover:bg-primary/90 shadow-sm transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person_add</span>
            Add Doctor
          </button>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {doctors.map((doctor, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest rounded-[24px] doctor-card-shadow p-6 flex flex-col items-center text-center transition-all duration-300 doctor-card-hover border border-white/40"
          >
            <div className="relative w-28 h-28 mb-4">
              <img
                alt={doctor.name}
                className="w-full h-full rounded-full object-cover border-4 border-primary-container/20"
                src={doctor.img}
              />
              <span
                className={`absolute bottom-1 right-1 w-6 h-6 bg-${doctor.statusColor === "green" ? "green-500" : doctor.statusColor === "yellow" ? "yellow-500" : "gray-400"} rounded-full border-4 border-white`}
                title={doctor.status}
              ></span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{doctor.name}</h3>
            <p className="font-label-md text-label-md text-primary mt-1">{doctor.specialty}</p>

            <div className="w-full mt-6 grid grid-cols-2 gap-2">
              <div className="bg-surface-container-low p-3 rounded-2xl">
                <p className="text-[10px] text-outline uppercase font-bold">Experience</p>
                <p className="font-label-md text-on-surface">{doctor.experience}</p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-2xl">
                <p className="text-[10px] text-outline uppercase font-bold">Rating</p>
                <p className="font-label-md text-on-surface flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-yellow-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  {doctor.rating}
                </p>
              </div>
            </div>

            <div className={`mt-6 flex items-center gap-2 ${
              doctor.statusColor === "green" ? "bg-green-100 text-green-700" :
              doctor.statusColor === "yellow" ? "bg-yellow-100 text-yellow-700" :
              "bg-surface-container-low text-outline"
            } px-4 py-1 rounded-full`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                doctor.statusColor === "green" ? "bg-green-600" :
                doctor.statusColor === "yellow" ? "bg-yellow-600" :
                "bg-outline"
              }`}></span>
              <span className="text-[12px] font-bold">{doctor.status}</span>
            </div>

            <button className="mt-8 w-full py-4 border border-outline-variant rounded-xl font-label-md text-primary hover:bg-primary-container/10 transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Analytics Preview */}
      <div className="mt-margin-desktop grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-[24px] doctor-card-shadow p-8 border border-white/40">
          <div className="flex justify-between items-center mb-8">
            <h4 className="font-headline-md text-on-surface">Department Overview</h4>
            <button className="text-primary font-label-md flex items-center gap-1">
              View Report
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-surface-container-low" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
                <circle className="text-primary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="150" strokeWidth="12"></circle>
                <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502" strokeDashoffset="350" strokeWidth="12"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-headline-lg text-on-surface">42</span>
                <span className="text-[10px] text-outline uppercase font-bold tracking-widest">Doctors</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="font-body-md text-on-surface">Specialists</span>
                </div>
                <span className="font-label-md">65%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%]"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span>
                  <span className="font-body-md text-on-surface">General Practitioners</span>
                </div>
                <span className="font-label-md">35%</span>
              </div>
              <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[35%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-[24px] doctor-card-shadow p-8 border border-white/40">
          <h4 className="font-headline-md text-on-surface mb-6">Staff Updates</h4>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">emergency</span>
              </div>
              <div>
                <p className="font-label-md text-on-surface">Emergency Shift Rotation</p>
                <p className="text-[12px] text-on-surface-variant">Updated by Admin • 2h ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary-container/20 text-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
              <div>
                <p className="font-label-md text-on-surface">Credential Verification</p>
                <p className="text-[12px] text-on-surface-variant">Dr. Sarah Johnson • 5h ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-sm">groups</span>
              </div>
              <div>
                <p className="font-label-md text-on-surface">Internal Team Sync</p>
                <p className="text-[12px] text-on-surface-variant">Tomorrow • 09:00 AM</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-10 py-3 rounded-xl bg-surface-container-low text-on-surface font-label-md hover:bg-surface-container transition-all">
            View All Activity
          </button>
        </div>
      </div>
    </div>
  );
}