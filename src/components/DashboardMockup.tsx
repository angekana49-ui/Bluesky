import type { SiteConfig } from "./LandingPage";

export default function DashboardMockup({ config }: { config: SiteConfig }) {
  const { stats } = config;
  const activeTab = 0;
  const activeBar = 5;
  const activeStat = 0;

  const barData = [
    { month: "Jan", messenger: 6000, sales: 4000, revenue: 2000 },
    { month: "Feb", messenger: 7500, sales: 5500, revenue: 3000 },
    { month: "Mar", messenger: 5000, sales: 6000, revenue: 4000 },
    { month: "Apr", messenger: 8000, sales: 5000, revenue: 3500 },
    { month: "May", messenger: 9000, sales: 7000, revenue: 5000 },
    { month: "Jun", messenger: 11000, sales: 9000, revenue: 7000 },
    { month: "Jul", messenger: 8500, sales: 10000, revenue: 6000 },
    { month: "Aug", messenger: 10000, sales: 8000, revenue: 5500 },
  ];
  const maxVal = 12000;

  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/92 shadow-[0_32px_90px_rgba(15,23,42,0.16)] backdrop-blur-2xl sm:rounded-[34px] sm:shadow-[0_42px_120px_rgba(15,23,42,0.16)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_20%,rgba(255,255,255,0)_38%)] bg-[length:220%_100%] animate-shine opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0)_45%)] opacity-80" />

      <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-200/80 bg-white/82 px-3 py-3 sm:gap-3 sm:px-4">
        <div className="flex min-w-max items-center gap-1.5">
          {["Overview", "Inbox", "Leads", "Stats", "Flows"].map((tab, i) => (
            <button
              key={tab}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-[10px] font-medium transition sm:px-3.5 sm:text-[11px] ${
                i === activeTab
                  ? "bg-slate-950 text-white shadow-[0_10px_22px_rgba(15,23,42,0.16)]"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  i === activeTab ? "bg-white/75 shadow-[0_0_12px_rgba(255,255,255,0.8)]" : "bg-slate-300"
                }`}
              />
              {tab}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-400 md:flex">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <circle cx="4.5" cy="4.5" r="3.5" stroke="#94a3b8" strokeWidth="1.2" />
              <line x1="7" y1="7" x2="10" y2="10" stroke="#94a3b8" strokeWidth="1.2" />
            </svg>
            Search threads, contacts...
          </div>
          <button className="h-8 w-8 rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-600">
            EM
          </button>
        </div>
      </div>

      <div className="grid gap-3 p-3 sm:gap-4 sm:p-4 lg:grid-cols-[1.75fr_0.95fr] lg:p-5">
        <div className="grid gap-4 lg:grid-cols-[72px_minmax(0,1fr)]">
          <div className="hidden flex-col items-center gap-3 rounded-[24px] border border-slate-200 bg-white px-2 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.04)] lg:flex">
            {["H", "M", "L", "S", "F", "C"].map((icon, i) => (
              <button
                key={icon}
                className={`flex h-9 w-9 items-center justify-center rounded-xl text-[11px] font-semibold transition-transform duration-300 ${
                  i === 0 ? "bg-slate-950 text-white shadow-sm" : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                } hover:-translate-y-0.5`}
              >
                {icon}
              </button>
            ))}
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:rounded-[28px] sm:p-5">
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-[16px] font-semibold tracking-tight text-slate-950 sm:text-[18px]">Business overview</h2>
                <p className="mt-1 text-[11px] text-slate-500 sm:text-[12px]">Real-time signals from every channel you sell on.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-600">
                  7 days
                </button>
                <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600">
                  Export
                </button>
                <button className="rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-medium text-white shadow-[0_10px_20px_rgba(15,23,42,0.14)]">
                  Share
                </button>
              </div>
            </div>

            <div className="mb-4 grid gap-2.5 sm:grid-cols-2 sm:gap-3 xl:grid-cols-4">
              {[
                { label: "Messages today", value: stats.messages, trend: stats.messagesTrend, tone: "emerald" },
                { label: "Pending replies", value: stats.pendingReplies, trend: stats.pendingTrend, tone: "slate" },
                { label: "Avg. response", value: stats.avgResponse, trend: stats.responseTrend, tone: "slate" },
                { label: "Revenue from chat", value: stats.revenue, trend: stats.revenueTrend, tone: "emerald" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-[18px] border p-3 transition-all duration-500 sm:rounded-[20px] ${
                    i === activeStat
                      ? "border-slate-300 bg-white shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
                      : "border-slate-200 bg-slate-50/80"
                  }`}
                >
                  <div className={`absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.28)_18%,rgba(255,255,255,0)_34%)] bg-[length:220%_100%] animate-shine transition-opacity ${i === activeStat ? "opacity-70" : "opacity-30"}`} />
                  <p className="relative text-[10px] text-slate-500">{stat.label}</p>
                  <p className="relative mt-1 text-[22px] font-semibold tracking-tight text-slate-950">{stat.value}</p>
                  <p className={`relative mt-1 text-[9px] ${stat.tone === "emerald" ? "text-emerald-500" : "text-slate-400"}`}>
                    {stat.trend}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[20px] border border-slate-200 bg-white p-3 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:rounded-[22px] sm:p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[12px] font-semibold tracking-tight text-slate-950">Messages vs. sales</p>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    { label: "Messenger", color: "#4f46e5" },
                    { label: "Sales", color: "#f97316" },
                    { label: "Renewals", color: "#22c55e" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-sm shadow-[0_0_10px_rgba(79,70,229,0.35)]" style={{ background: item.color }} />
                      <span className="text-[10px] text-slate-400">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex h-32 items-end gap-1 sm:h-36 sm:gap-1.5">
                {barData.map((d, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div className="flex h-[116px] w-full items-end gap-1">
                      <div
                        className="flex-1 rounded-t-md shadow-[0_0_18px_rgba(79,70,229,0.08)]"
                        style={{
                          height: `${(d.messenger / maxVal) * 100}%`,
                          background:
                            i === activeBar
                              ? "linear-gradient(180deg, #8b5cf6 0%, #4f46e5 100%)"
                              : "linear-gradient(180deg, #e7e9ff 0%, #dfe3fb 100%)",
                        }}
                      />
                      <div
                        className="flex-1 rounded-t-md shadow-[0_0_18px_rgba(249,115,22,0.08)]"
                        style={{
                          height: `${(d.sales / maxVal) * 100}%`,
                          background:
                            i === activeBar
                              ? "linear-gradient(180deg, #fb923c 0%, #f97316 100%)"
                              : "linear-gradient(180deg, #ffe7d4 0%, #fde4cf 100%)",
                        }}
                      />
                      <div
                        className="flex-1 rounded-t-md shadow-[0_0_18px_rgba(34,197,94,0.08)]"
                        style={{
                          height: `${(d.revenue / maxVal) * 100}%`,
                          background:
                            i === activeBar
                              ? "linear-gradient(180deg, #4ade80 0%, #22c55e 100%)"
                              : "linear-gradient(180deg, #e0f8ea 0%, #d8f3e3 100%)",
                        }}
                      />
                    </div>
                    <span className="text-[7px] text-slate-300 sm:text-[8px]">{d.month}</span>
                  </div>
                ))}
              </div>

              <div className="mt-2 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-[9px] font-medium text-white shadow-[0_10px_24px_rgba(15,23,42,0.2)]">
                  <span>June 2026</span>
                  <span className="opacity-60">-</span>
                  <span className="text-orange-300">{activeBar === 5 ? "Sales up" : "Traffic shifting"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:rounded-[24px] sm:p-4">
            <div className="rounded-[18px] bg-slate-50 p-3">
              <p className="text-[11px] leading-5 text-slate-500">You have to be replying to chats faster.</p>
              <p className="mt-1 text-[11px] font-medium text-slate-950">This is the perfect comment.</p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-semibold text-white shadow-[0_0_18px_rgba(79,70,229,0.3)] animate-pulse-soft">
                AI
              </span>
              <div>
                <p className="text-[12px] font-semibold text-slate-950">AI reply suggestions</p>
                <p className="text-[11px] text-slate-500">
                  Drafts a tone-matched response in two seconds when the queue starts to breathe.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-[18px] border border-slate-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-slate-950">Generating reply...</p>
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[68%] rounded-full bg-slate-950 shadow-[0_0_16px_rgba(15,23,42,0.15)]" />
              </div>
            </div>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-3 shadow-[0_12px_28px_rgba(15,23,42,0.05)] sm:rounded-[24px] sm:p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[12px] font-semibold text-slate-950">Lead quality</p>
              <span className="text-[10px] text-slate-400">Updated just now</span>
            </div>
            <div className="relative mx-auto h-24 w-36 sm:h-28 sm:w-40">
              <svg viewBox="0 0 160 96" className="h-full w-full">
                <defs>
                  <linearGradient id="gaugeFill" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="55%" stopColor="#fb923c" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <path
                  d="M 20 84 A 60 60 0 0 1 140 84"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="12"
                  strokeLinecap="round"
                />
                <path
                  d="M 20 84 A 60 60 0 0 1 140 84"
                  fill="none"
                  stroke="url(#gaugeFill)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="188"
                  strokeDashoffset="50"
                />
                <text x="80" y="64" textAnchor="middle" fontSize="24" fontWeight="700" fill="#0f172a">
                  1,000
                </text>
                <text x="80" y="79" textAnchor="middle" fontSize="8" fill="#94a3b8">
                  total leads
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
