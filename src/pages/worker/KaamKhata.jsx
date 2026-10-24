import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import {
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Download,
  Award,
  Umbrella,
  Target,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

export function KaamKhata() {
  const [timeframe, setTimeframe] = useState("month"); // "today" | "week" | "month" | "year"

  const weeklyEarningsData = [
    { name: "Mon", income: 1100, platformFee: 40 },
    { name: "Tue", income: 1450, platformFee: 60 },
    { name: "Wed", income: 850, platformFee: 30 },
    { name: "Thu", income: 1600, platformFee: 65 },
    { name: "Fri", income: 1200, platformFee: 50 },
    { name: "Sat", income: 2100, platformFee: 90 },
    { name: "Sun", income: 1800, platformFee: 80 }
  ];

  const pieData = [
    { name: "Take-Home Earnings", value: 96, color: "#22C55E" },
    { name: "Micro-Insurance Pool", value: 1.5, color: "#0B4F6C" },
    { name: "Platform Guarantee Fee", value: 2.5, color: "#FF6B35" }
  ];

  const recentTransactions = [
    {
      id: "TXN-8821",
      customer: "Priya Sharma (Andheri West)",
      trade: "Pipe leak under sink",
      gross: 420,
      fee: 15,
      net: 405,
      date: "Today, 11:15 AM",
      mode: "UPI to Bank"
    },
    {
      id: "TXN-8818",
      customer: "Kiran Rathi (Lokhandwala)",
      trade: "Angle cock replacement",
      gross: 350,
      fee: 12,
      net: 338,
      date: "Today, 09:30 AM",
      mode: "UPI to Bank"
    },
    {
      id: "TXN-8809",
      customer: "Anand Verma (Juhu)",
      trade: "Geyser inlet pipe connection",
      gross: 550,
      fee: 20,
      net: 530,
      date: "Yesterday",
      mode: "UPI to Bank"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
            Financial Ledger • काम खाता
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
            Kaam Khata & Earnings
          </h1>
          <p className="text-xs text-textMuted">
            Bank-verified income record, instant UPI settlements & micro-savings tracking.
          </p>
        </div>

        <button
          onClick={() => alert("Downloading bank-grade Kaam Khata income statement (PDF)...")}
          className="p-2.5 rounded-2xl bg-white border border-orange-100 text-textDark hover:bg-orange-50 transition-colors shadow-sm flex items-center gap-1.5 text-xs font-bold"
          title="Download statement"
        >
          <Download className="w-4 h-4 text-primary" />
          <span className="hidden sm:inline">Export PDF</span>
        </button>
      </div>

      {/* Hero Balance Card */}
      <div className="bg-gradient-to-br from-primary via-orange-500 to-amber-500 text-white p-6 rounded-3xl shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-orange-100 font-bold uppercase tracking-wider">
            Total Net Earnings (October 2026)
          </span>
          <span className="text-[10px] bg-white/20 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Instant UPI Payout
          </span>
        </div>

        <div className="text-4xl sm:text-5xl font-black tracking-tight">
          ₹34,200
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/20 text-xs">
          <div>
            <span className="text-orange-100 block">Completed Jobs:</span>
            <span className="font-extrabold text-base">78 Jobs</span>
          </div>
          <div>
            <span className="text-orange-100 block">Average Per Job:</span>
            <span className="font-extrabold text-base">₹438 / job</span>
          </div>
        </div>
      </div>

      {/* Milestone Badge: Bank-Linked Record */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-4 rounded-3xl border border-emerald-200/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-extrabold text-xs text-emerald-950">
            Bank-Linked Formal Credit Profile Active 🏆
          </h3>
          <p className="text-[11px] text-emerald-800 mt-0.5 leading-snug">
            Your 6-month continuous Kaam Khata qualifies you for ₹50,000 tool & vehicle micro-loans with partner public sector banks.
          </p>
        </div>
      </div>

      {/* Savings Goal & Insurance Pool Progress */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Savings Goal */}
        <Card className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              <h4 className="font-bold text-xs text-textDark">
                Diwali Savings Goal (₹40,000)
              </h4>
            </div>
            <span className="text-xs font-black text-primary">85%</span>
          </div>
          <div className="w-full bg-orange-100 h-2 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: "85%" }} />
          </div>
          <span className="text-[10px] text-textMuted block">
            ₹34,200 saved of ₹40,000 goal
          </span>
        </Card>

        {/* Insurance Contribution */}
        <Card className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Umbrella className="w-4 h-4 text-secondary" />
              <h4 className="font-bold text-xs text-textDark">
                Micro-Insurance Pool (₹3/job)
              </h4>
            </div>
            <span className="text-xs font-black text-secondary">₹234</span>
          </div>
          <div className="w-full bg-teal-100 h-2 rounded-full overflow-hidden">
            <div className="bg-secondary h-full rounded-full" style={{ width: "100%" }} />
          </div>
          <span className="text-[10px] text-textMuted block">
            78 contributions • ₹3,00,000 active accident cover
          </span>
        </Card>
      </div>

      {/* Earnings Chart (Recharts) */}
      <Card className="p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-textDark">
              Weekly Earnings Velocity
            </h3>
            <p className="text-[11px] text-textMuted">
              Net take-home after transparent 2-3% platform fee
            </p>
          </div>
          <Badge variant="primary" size="sm">
            Live Khata
          </Badge>
        </div>

        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyEarningsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#6B6B6B" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: "#6B6B6B" }} axisLine={false} tickLine={false} />
              <Tooltip formatter={(val) => [`₹${val}`, "Net Payout"]} />
              <Bar dataKey="income" fill="#FF6B35" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Recent Ledger Entries */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          Recent Completed Payouts
        </h3>

        <div className="space-y-2">
          {recentTransactions.map((txn) => (
            <Card key={txn.id} className="p-3.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                  <ArrowDownLeft className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-textDark">{txn.trade}</h5>
                  <span className="text-[11px] text-textMuted block">
                    {txn.customer} • {txn.date}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-black text-emerald-700 block">
                  +₹{txn.net}
                </span>
                <span className="text-[10px] text-textMuted">
                  {txn.mode}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KaamKhata;
