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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">Billing &amp; Finance</h2>
          <p className="text-on-surface-variant font-medium">Monday, 24 Jan 2022</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant/40 rounded-xl text-label-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            <span className="hidden sm:inline">Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-label-md font-bold hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined text-sm">download</span>
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-gutter">
        {[
          { icon: "payments", label: "Monthly Revenue", value: "$124,500", trend: "+12.5%", trendColor: "green", iconBg: "primary" },
          { icon: "pending_actions", label: "Outstanding", value: "$12,300", trend: "-2.4%", trendColor: "tertiary", iconBg: "tertiary" },
          { icon: "verified_user", label: "Insurance Claims", value: "142", trend: "85% Processed", trendColor: "secondary", iconBg: "secondary" },
          { icon: "trending_up", label: "Net Profit", value: "$84,210", trend: "+8.1%", trendColor: "green", iconBg: "green" },
        ].map((metric, idx) => (
          <div key={idx} className="bg-surface-container-lowest p-5 md:p-stack-lg rounded-2xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-white hover:translate-y-[-4px] transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center
                ${metric.iconBg === "green" ? "bg-green-100 text-green-600" :
                  metric.iconBg === "primary" ? "bg-primary-container/20 text-primary" :
                  metric.iconBg === "secondary" ? "bg-secondary-container/20 text-secondary" :
                  "bg-tertiary-container/20 text-tertiary"}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{metric.icon}</span>
              </div>
              <span className={`px-2 py-1 rounded-lg text-xs font-bold
                ${metric.trendColor === "green" ? "text-green-600 bg-green-50" :
                  metric.trendColor === "tertiary" ? "text-tertiary bg-tertiary-container/10" :
                  "text-secondary bg-secondary-container/10"}`}>
                {metric.trend}
              </span>
            </div>
            <h4 className="text-on-surface-variant font-medium text-label-md">{metric.label}</h4>
            <p className="text-[24px] md:text-[28px] font-bold text-on-surface mt-1 leading-tight">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-gutter">

        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-[0px_4px_20px_rgba(26,31,54,0.05)] border border-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Revenue Growth</h3>
              <p className="text-on-surface-variant font-medium text-sm">Last 6 months</p>
            </div>
            <select className="bg-surface-container-low border-none rounded-xl text-label-md font-bold px-4 py-2 focus:ring-2 focus:ring-primary/20 self-start sm:self-auto">
              <option>Monthly</option>
              <option>Quarterly</option>
            </select>
          </div>
          <div className="relative h-[220px] md:h-[280px] w-full flex items-end justify-between gap-2 md:gap-4">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="border-b border-outline-variant/10 w-full h-0" />
              ))}
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
                  className={`w-full rounded-t-xl transition-all
                    ${bar.active
                      ? "bg-primary-container shadow-lg shadow-primary/20"
                      : bar.color === "primary" ? "bg-primary-container hover:bg-primary-container" : "bg-secondary-container/40 hover:bg-secondary-container"
                    }`}
                  style={{ height: bar.height }}
                />
                <p className={`text-center text-[10px] md:text-xs mt-3 font-bold ${bar.active ? "text-primary" : "text-on-surface-variant"}`}>
                  {bar.month}
                </p>
                {bar.tooltip && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-inverse-surface text-white px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {bar.tooltip}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Distribution */}
        <div className="bg-surface-container-highest/30 p-6 md:p-8 rounded-2xl border border-white flex flex-col justify-between overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-container/20 blur-[60px] rounded-full pointer-events-none" />
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Payment Distribution</h3>
            <div className="space-y-5">
              {[
                { label: "Insurance Reimbursement", percent: "62%", color: "bg-primary-container" },
                { label: "Self-Pay / Cash", percent: "28%", color: "bg-secondary-container" },
                { label: "Government Grants", percent: "10%", color: "bg-tertiary-container" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-label-md font-bold text-on-surface-variant">{item.label}</span>
                    <span className="text-label-md font-bold text-on-surface">{item.percent}</span>
                  </div>
                  <div className="h-2 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: item.percent }} />
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
        <div className="p-5 md:p-8 border-b border-outline-variant/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="font-headline-md text-headline-md text-on-surface">Recent Invoices</h3>
          <div className="flex gap-2 shrink-0">
            <button className="flex items-center gap-2 px-3 md:px-4 py-2 border border-outline-variant/40 rounded-xl text-label-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span className="hidden sm:inline">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-3 md:px-4 py-2 border border-outline-variant/40 rounded-xl text-label-md font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-sm">file_download</span>
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[520px]">
            <thead className="bg-surface-container-low/50">
              <tr>
                <th className="px-5 md:px-8 py-4 md:py-5 text-label-md text-on-surface-variant font-bold">Invoice ID</th>
                <th className="px-5 md:px-8 py-4 md:py-5 text-label-md text-on-surface-variant font-bold">Patient</th>
                <th className="hidden md:table-cell px-5 md:px-8 py-4 md:py-5 text-label-md text-on-surface-variant font-bold">Date</th>
                <th className="px-5 md:px-8 py-4 md:py-5 text-label-md text-on-surface-variant font-bold">Amount</th>
                <th className="px-5 md:px-8 py-4 md:py-5 text-label-md text-on-surface-variant font-bold">Status</th>
                <th className="px-5 md:px-8 py-4 md:py-5 text-label-md text-on-surface-variant font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-surface-container-high/30 transition-colors group">
                  <td className="px-5 md:px-8 py-4 md:py-5 font-bold text-primary whitespace-nowrap">{invoice.id}</td>
                  <td className="px-5 md:px-8 py-4 md:py-5">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0
                        ${invoice.statusColor === "green" ? "bg-primary-container/20 text-primary" :
                          invoice.statusColor === "tertiary" ? "bg-tertiary-container/10 text-tertiary" :
                          "bg-error-container/30 text-error"}`}>
                        {invoice.initials}
                      </div>
                      <span className="font-medium text-on-surface truncate">{invoice.patient}</span>
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-5 md:px-8 py-4 md:py-5 text-on-surface-variant whitespace-nowrap">{invoice.date}</td>
                  <td className="px-5 md:px-8 py-4 md:py-5 font-bold whitespace-nowrap">{invoice.amount}</td>
                  <td className="px-5 md:px-8 py-4 md:py-5">
                    <span className={`px-2 md:px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap
                      ${invoice.statusColor === "green" ? "bg-green-50 text-green-600" :
                        invoice.statusColor === "tertiary" ? "bg-tertiary-container/10 text-tertiary" :
                        "bg-error-container/30 text-error"}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-5 md:px-8 py-4 md:py-5">
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
        <div className="p-4 md:p-6 bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-sm font-medium text-on-surface-variant">Showing 1 to 4 of 1,248 entries</span>
          <div className="flex gap-1.5">
            <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {[1, 2, 3].map((page) => (
              <button key={page} className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-colors
                ${page === 1 ? "bg-primary text-white" : "border border-outline-variant/30 text-on-surface hover:bg-surface-container-high"}`}>
                {page}
              </button>
            ))}
            <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl border border-outline-variant/30 text-on-surface hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="fixed -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed -top-20 -right-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}