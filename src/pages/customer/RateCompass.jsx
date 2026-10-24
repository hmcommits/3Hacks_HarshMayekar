import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend
} from "recharts";
import {
  TrendingUp,
  MapPin,
  ShieldCheck,
  Package,
  Layers,
  Info,
  Sliders,
  DollarSign
} from "lucide-react";
import { mockPriceBands } from "../../data/mockPrices";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export function RateCompass() {
  const [selectedTrade, setSelectedTrade] = useState("Plumber");

  const tradeData = mockPriceBands[selectedTrade] || mockPriceBands["Plumber"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Price Intelligence • भाव कम्पास
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Rate Compass
        </h1>
        <p className="text-xs text-textMuted">
          Hyperlocal 25th, 50th & 75th percentile market benchmarks from real completed jobs. Prevents overcharging & worker undercutting.
        </p>
      </div>

      {/* Trade Selector Pills */}
      <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none">
        {Object.keys(mockPriceBands).map((trade) => (
          <button
            key={trade}
            onClick={() => setSelectedTrade(trade)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedTrade === trade
                ? "bg-primary text-white shadow-soft"
                : "bg-white text-textDark border border-orange-100 hover:border-orange-200"
            }`}
          >
            {trade}
          </button>
        ))}
      </div>

      {/* Highlight Box: Current Location (Andheri West) */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-3xl p-5 shadow-soft space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-orange-100 font-semibold">
            <MapPin className="w-4 h-4 text-white" />
            <span>You're in: Andheri West (Mumbai)</span>
          </div>
          <span className="text-[10px] bg-white/20 font-black px-2 py-0.5 rounded-full uppercase">
            Active Chowk Hub
          </span>
        </div>

        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-3xl font-black">
            ₹{tradeData.neighbourhoods[0]?.p25} – ₹{tradeData.neighbourhoods[0]?.p75}
          </span>
          <span className="text-xs text-orange-100 font-medium">
            (Median: ₹{tradeData.neighbourhoods[0]?.p50})
          </span>
        </div>

        <p className="text-xs text-orange-100 leading-snug">
          Recommended anti-undercutting floor for workers:{" "}
          <strong>₹{tradeData.recommendedFloor}</strong>. Covers basic travel, tool amortisation & minimum fair wage.
        </p>
      </div>

      {/* Neighbourhood Comparison Bar Chart (Recharts) */}
      <Card className="p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-textDark">
              Price Bands by Neighbourhood (p25 / p50 / p75)
            </h3>
            <p className="text-[11px] text-textMuted">
              Across Mumbai western suburbs for {selectedTrade}
            </p>
          </div>
          <Badge variant="secondary" size="sm">
            Live Intelligence
          </Badge>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={tradeData.neighbourhoods}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5ECE5" />
              <XAxis
                dataKey="area"
                tick={{ fontSize: 10, fill: "#6B6B6B" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#6B6B6B" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid #FFD3B3",
                  fontSize: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                }}
                formatter={(val) => [`₹${val}`, ""]}
              />
              <Legend
                wrapperStyle={{ fontSize: "11px", paddingTop: "8px" }}
              />
              <Bar dataKey="p25" name="25th (Budget)" fill="#FFB627" radius={[4, 4, 0, 0]} />
              <Bar dataKey="p50" name="50th (Median)" fill="#FF6B35" radius={[4, 4, 0, 0]} />
              <Bar dataKey="p75" name="75th (Premium)" fill="#0B4F6C" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Historical Trend Sparkline / LineChart */}
      <Card className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-textDark">
              Seasonal Price Trends (Last 6 Months)
            </h3>
            <p className="text-[11px] text-textMuted">
              Monsoon and festival season impact on {selectedTrade} charges
            </p>
          </div>
          <TrendingUp className="w-4 h-4 text-primary" />
        </div>

        <div className="h-44 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={tradeData.trend}
              margin={{ top: 10, right: 15, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5ECE5" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10, fill: "#6B6B6B" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#6B6B6B" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid #FFD3B3",
                  fontSize: "12px"
                }}
                formatter={(val) => [`₹${val}`, "Avg Rate"]}
              />
              <Line
                type="monotone"
                dataKey="avgPrice"
                stroke="#FF6B35"
                strokeWidth={3}
                dot={{ r: 4, fill: "#FF6B35", stroke: "#FFFFFF", strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Common Tasks Benchmarks */}
      <Card className="p-4 space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
          Common Job Task Benchmarks
        </h3>

        <div className="space-y-2 text-xs divide-y divide-orange-50">
          {tradeData.commonJobs.map((job, idx) => (
            <div key={idx} className="pt-2 flex items-center justify-between">
              <div>
                <span className="font-bold text-textDark block">{job.name}</span>
                <span className="text-[10px] text-textMuted">
                  Standard duration ~45 min
                </span>
              </div>
              <div className="text-right">
                <span className="font-extrabold text-primary text-xs">
                  ₹{job.p25} – ₹{job.p75}
                </span>
                <span className="text-[10px] text-textMuted block">
                  Midpoint ₹{job.p50}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Materials Cost Transparency Breakdown */}
      <Card className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-secondary" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
            Hardware Store Spares Transparency
          </h3>
        </div>
        <p className="text-[11px] text-textMuted">
          Verified average prices from partner hardware stores in Andheri. Workers cannot charge arbitrary margins on parts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
          {tradeData.materialsBreakdown.map((mat, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 flex items-center justify-between"
            >
              <span className="font-medium text-textDark">{mat.item}</span>
              <span className="font-black text-secondary">{mat.range}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default RateCompass;
