import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Radio,
  MapPin,
  TrendingUp,
  Clock,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

export function ChowkPulse() {
  const [selectedTrade, setSelectedTrade] = useState("Plumber");

  // Grid-based neighborhood map cells with live demand intensity:
  // "high" (red), "medium" (yellow), "low" (teal/blue)
  const gridCells = [
    { name: "Lokhandwala", tradeDemand: { Plumber: "high", Electrician: "medium", "Maid / Cleaner": "high", Carpenter: "low", "AC Technician": "high" }, workersOnline: 9, jobsActive: 6 },
    { name: "7 Bungalows", tradeDemand: { Plumber: "high", Electrician: "high", "Maid / Cleaner": "medium", Carpenter: "medium", "AC Technician": "medium" }, workersOnline: 8, jobsActive: 5 },
    { name: "Versova", tradeDemand: { Plumber: "medium", Electrician: "low", "Maid / Cleaner": "high", Carpenter: "low", "AC Technician": "medium" }, workersOnline: 5, jobsActive: 3 },
    { name: "DN Nagar", tradeDemand: { Plumber: "high", Electrician: "high", "Maid / Cleaner": "medium", Carpenter: "medium", "AC Technician": "low" }, workersOnline: 7, jobsActive: 4 },
    { name: "Oshiwara", tradeDemand: { Plumber: "medium", Electrician: "medium", "Maid / Cleaner": "high", Carpenter: "high", "AC Technician": "high" }, workersOnline: 11, jobsActive: 7 },
    { name: "Juhu Scheme", tradeDemand: { Plumber: "high", Electrician: "medium", "Maid / Cleaner": "high", Carpenter: "medium", "AC Technician": "high" }, workersOnline: 6, jobsActive: 5 },
    { name: "JVPD Circle", tradeDemand: { Plumber: "medium", Electrician: "low", "Maid / Cleaner": "medium", Carpenter: "low", "AC Technician": "medium" }, workersOnline: 4, jobsActive: 2 },
    { name: "Bandra West", tradeDemand: { Plumber: "high", Electrician: "high", "Maid / Cleaner": "high", Carpenter: "high", "AC Technician": "high" }, workersOnline: 12, jobsActive: 9 },
    { name: "Goregaon W", tradeDemand: { Plumber: "low", Electrician: "medium", "Maid / Cleaner": "medium", Carpenter: "medium", "AC Technician": "low" }, workersOnline: 6, jobsActive: 3 }
  ];

  const getHeatmapColor = (intensity) => {
    switch (intensity) {
      case "high":
        return "bg-gradient-to-br from-red-500 to-rose-600 text-white border-red-300 shadow-md";
      case "medium":
        return "bg-gradient-to-br from-amber-400 to-orange-400 text-dark border-amber-300";
      case "low":
      default:
        return "bg-gradient-to-br from-teal-500 to-cyan-600 text-white border-teal-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>Real-Time Supply & Demand Map</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Chowk Pulse • चौक पल्स
        </h1>
        <p className="text-xs text-textMuted">
          Live supply heatmap across micro-markets. Guides workers to high-earning spots and powers the 30-Minute Promise Engine.
        </p>
      </div>

      {/* Trade Selector */}
      <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-none">
        {["Plumber", "Electrician", "Maid / Cleaner", "Carpenter", "AC Technician"].map((trade) => (
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

      {/* Demand Alert Hero */}
      <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-4 sm:p-5 rounded-3xl shadow-lg space-y-2">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-300 animate-bounce" />
          <span className="text-[10px] font-black uppercase tracking-wider text-red-200">
            Surge Supply Opportunity
          </span>
        </div>
        <h3 className="text-base font-extrabold leading-snug">
          High demand for {selectedTrade}s in Andheri West (Lokhandwala & 7 Bungalows)!
        </h3>
        <p className="text-xs text-red-100">
          6 unassigned customer requests in queue. Workers ready in this zone get dispatched within ~8 minutes.
        </p>
      </div>

      {/* CSS Grid-Based Heatmap (Crucial requirement from prompt) */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-sm text-textDark">
              Hyperlocal Demand Grid (Mumbai West)
            </h3>
            <p className="text-[11px] text-textMuted">
              Cells reflect active searches vs Ready Now supply
            </p>
          </div>

          <Badge variant="primary" size="sm">
            Live Stream
          </Badge>
        </div>

        {/* 3x3 Heatmap Matrix */}
        <div className="grid grid-cols-3 gap-2.5">
          {gridCells.map((cell, idx) => {
            const intensity = cell.tradeDemand[selectedTrade] || "medium";
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className={`p-3 rounded-2xl border flex flex-col justify-between min-h-[90px] ${getHeatmapColor(
                  intensity
                )}`}
              >
                <div>
                  <span className="text-xs font-black block leading-tight">
                    {cell.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider opacity-90 block mt-0.5 font-bold">
                    {intensity} Demand
                  </span>
                </div>

                <div className="pt-2 text-[10px] opacity-90 flex justify-between font-medium">
                  <span>{cell.workersOnline} Ready</span>
                  <span>{cell.jobsActive} Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold pt-2 border-t border-orange-50">
          <span className="flex items-center gap-1.5 text-red-600">
            <span className="w-3 h-3 rounded-md bg-red-500" /> High Demand (Surge)
          </span>
          <span className="flex items-center gap-1.5 text-amber-700">
            <span className="w-3 h-3 rounded-md bg-amber-400" /> Balanced
          </span>
          <span className="flex items-center gap-1.5 text-teal-700">
            <span className="w-3 h-3 rounded-md bg-teal-500" /> Steady Supply
          </span>
        </div>
      </Card>

      {/* Demand Forecast Box */}
      <Card className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-secondary" />
          <h3 className="font-extrabold text-xs text-textDark">
            Upcoming Demand Forecast (AI Prediction)
          </h3>
        </div>

        <div className="space-y-2 text-xs">
          <div className="p-3 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-center justify-between">
            <div>
              <span className="font-bold text-textDark block">
                Tomorrow 8:00 AM – 11:00 AM
              </span>
              <span className="text-[11px] text-textMuted">
                Diwali deep cleaning & dusting rush predicted
              </span>
            </div>
            <span className="font-black text-primary text-xs">
              +45% Demand Surge
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-center justify-between">
            <div>
              <span className="font-bold text-textDark block">
                Sunday Evening 4:00 PM – 8:00 PM
              </span>
              <span className="text-[11px] text-textMuted">
                Plumbing & water heater maintenance peak
              </span>
            </div>
            <span className="font-black text-secondary text-xs">
              High Match Rate
            </span>
          </div>
        </div>
      </Card>

      {/* Neighbourhood Batching Opportunities */}
      <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-3xl border border-orange-200/80 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <h4 className="font-bold text-xs text-textDark">
            Active Neighbourhood Batching (Society Days)
          </h4>
        </div>
        <p className="text-xs text-textMuted leading-relaxed">
          3 households booked AC servicing together in Hiranandani Complex. Bundled dispatch gives technicians zero travel downtime and gives residents a 20% discount.
        </p>
      </div>
    </div>
  );
}

export default ChowkPulse;
