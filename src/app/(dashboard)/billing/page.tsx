"use client";

export default function BillingPage() {
  const invoices = [
    { id: "#INV-8821", patient: "Sarah Mitchell", initials: "SM", date: "Jan 22, 2022", amount: "$1,250.00", status: "Paid", statusColor: "green" },
    { id: "#INV-8820", patient: "James Cooper", initials: "JC", date: "Jan 21, 2022", amount: "$480.00", status: "Pending", statusColor: "tertiary" },
    { id: "#INV-8819", patient: "Emma Lawrence", initials: "EL", date: "Jan 20, 2022", amount: "$2,100.00", status: "Overdue", statusColor: "error" },
    { id: "#INV-8818", patient: "Olivia Wilson", initials: "OW", date: "Jan 18, 2022", amount: "$850.00", status: "Paid", statusColor: "green" },
  ];

  return (
    <div className="space-y-gutter">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Billing &amp; Finance</h2>
          <p className="text-on-surface-variant font-medium">Monday, 24 Jan 2022</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/40 rounded-xl text-label-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-label-md font-bold hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-sm">download</span>
            Export
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {[
          { icon: "payments", label: "Monthly Revenue", value: "$124,500", trend: "+12.5%", trendColor: "green", iconBg: "primary" },
          { icon: "pending_actions", label: "Outstanding Payments", value: "$12,300", trend: "-2.4%", trendColor: "tertiary", iconBg: "tertiary" },
          { icon: "verified_user", label: "Insurance Claims", value: "142", trend: "85% Processed", trendColor: "secondary", iconBg: "secondary" },
          { icon: "trending_up", label: "Net Profit", value: "$84,210", trend: "+8.1%", trendColor: "green", iconBg: "green" },
        ].map((metric, idx) => (
          <div key={idx} className="bg-surface-container-lowest p-stack-lg rounded-2xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-white hover:translate-y-[-4px] transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl bg-${metric.iconBg === "green" ? "green-100" : `${metric.iconBg}-container/20`} flex items-center justify-center text-${metric.iconBg === "green" ? "green-600" : metric.iconBg}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{metric.icon}</span>
              </div>
              <span className={`text-${metric.trendColor === "green" ? "green-600" : metric.trendColor === "tertiary" ? "tertiary" : "secondary"} bg-${metric.trendColor === "green" ? "green-50" : metric.trendColor === "tertiary" ? "tertiary-container/10" : "secondary-container/10"} px-2 py-1 rounded-lg text-xs font-bold`}>
                {metric.trend}
              </span>
            </div>
            <h4 className="text-on-surface-variant font-medium text-label-md">{metric.label}</h4>
            <p className="text-[28px] font-bold text-on-surface mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-white">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Revenue Growth</h3>
              <p className="text-on-surface-variant font-medium">Trends for the last 6 months</p>
            </div>
            <select className="bg-surface-container-low border-none rounded-xl text-label-md font-bold px-4 py-2 focus:ring-2 focus:ring-primary/20">
              <option>Monthly</option>
              <option>Quarterly</option>
            </select>
          </div>
          <div className="relative h-[280px] w-full flex items-end justify-between gap-4">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
              <div className="border-b border-outline-variant/10 w-full h-0"></div>
            </div>
            {[
              { month: "AUG", height: "45%", color: "secondary" },
              { month: "SEP", height: "60%", color: "primary" },
              { month: "OCT", height: "55%", color: "secondary" },
              { month: "NOV", height: "80%", color: "primary" },
              { month: "DEC", height: "72%", color: "secondary" },
              { month: "JAN", height: "95%", color: "primary", active: true, tooltip: "$124.5k" },
            ].map((bar, idx) => (
              <div key={idx} className="relative flex-1 group flex flex-col justify-end">
                <div
                  className={`w-full bg-${bar.color === "primary" ? "primary-container" : "secondary-container/40"} rounded-t-xl hover:bg-${bar.color === "primary" ? "primary-container" : "secondary-container"} transition-all ${bar.active ? "shadow-lg shadow-primary/20" : ""}`}
                  style={{ height: bar.height }}
                ></div>
                <p className={`text-center text-xs mt-4 font-bold ${bar.active ? "text-primary" : "text-on-surface-variant"}`}>
                  {bar.month}
                </p>
                {bar.tooltip && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-inverse-surface text-white px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {bar.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-highest/30 p-8 rounded-2xl border border-white flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-container/20 blur-[60px] rounded-full"></div>
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Payment Distribution</h3>
            <div className="space-y-6">
              {[
                { label: "Insurance Reimbursement", percent: "62%" },
                { label: "Self-Pay / Cash", percent: "28%" },
                { label: "Government Grants", percent: "10%" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-label-md font-bold text-on-surface-variant">{item.label}</span>
                    <span className="text-label-md font-bold text-on-surface">{item.percent}</span>
                  </div>
                  <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${idx === 0 ? "bg-primary-container" : idx === 1 ? "bg-secondary-container" : "bg-tertiary-container"} rounded-full`}
                      style={{ width: item.percent }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full mt-8 py-4 border border-primary text-primary font-bold rounded-2xl hover:bg-primary/5 transition-colors">
            Download Full Statement
          </button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-white overflow-hidden">
        <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
          <h3 className="font-headline-md text-headline-md text-on-surface">Recent Invoices</h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/40 rounded-xl text-label-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/40 rounded-xl text-label-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-sm">file_download</span>
              Export CSV
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low/50">
              <tr>
                <th className="px-8 py-5 text-label-md text-on-surface-variant font-bold">Invoice ID</th>
                <th className="px-8 py-5 text-label-md text-on-surface-variant font-bold">Patient</th>
                <th className="px-8 py-5 text-label-md text-on-surface-variant font-bold">Date</th>
                <th className="px-8 py-5 text-label-md text-on-surface-variant font-bold">Amount</th>
                <th className="px-8 py-5 text-label-md text-on-surface-variant font-bold">Status</th>
                <th className="px-8 py-5 text-label-md text-on-surface-variant font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-surface-container-high/30 transition-colors group">
                  <td className="px-8 py-5 font-bold text-primary">{invoice.id}</td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-${invoice.statusColor === "green" ? "primary-container/20" : invoice.statusColor === "tertiary" ? "tertiary-container/10" : "error-container/30"} flex items-center justify-center font-bold text-${invoice.statusColor === "green" ? "primary" : invoice.statusColor === "tertiary" ? "tertiary" : "error"} text-xs`}>
                        {invoice.initials}
                      </div>
                      <span className="font-medium text-on-surface">{invoice.patient}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-on-surface-variant">{invoice.date}</td>
                  <td className="px-8 py-5 font-bold">{invoice.amount}</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 ${
                      invoice.statusColor === "green" ? "bg-green-50 text-green-600" :
                      invoice.statusColor === "tertiary" ? "bg-tertiary-container/10 text-tertiary" :
                      "bg-error-container/30 text-error"
                    } rounded-full text-xs font-bold`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="p-2 rounded-lg hover:bg-surface-container-high transition-colors group-hover:text-primary">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-surface-container-low/50 flex items-center justify-between">
          <span className="text-sm font-medium text-on-surface-variant">Showing 1 to 4 of 1,248 entries</span>
          <div className="flex gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors">3</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorative Blurs */}
      <div className="fixed -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed -top-20 -right-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    </div>
  );
}