import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Clock,
  Package,
  AlertTriangle,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  Sliders,
  DollarSign,
  Edit2
} from "lucide-react";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";

export function JobCard({
  jobData,
  onEdit,
  selectedMaterials = [],
  onToggleMaterial
}) {
  if (!jobData) return null;

  const isEmergency = jobData.urgency === "EMERGENCY" || jobData.urgency === "HIGH";

  const getTradeIcon = (trade) => {
    switch (trade) {
      case "Plumber": return "🔧";
      case "Electrician": return "⚡";
      case "Carpenter": return "🪚";
      case "Maid / Cleaner": return "🧹";
      case "AC Technician": return "❄️";
      case "Cook": return "🍳";
      case "Painter": return "🎨";
      default: return "🛠️";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  const minPrice = jobData.priceBand?.min || 300;
  const maxPrice = jobData.priceBand?.max || 600;
  const fairPrice = Math.round((minPrice + maxPrice) / 2);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Emergency Alert Banner if detected */}
      {isEmergency && (
        <motion.div
          variants={itemVariants}
          className="bg-red-50 border-2 border-red-200 text-red-900 p-3.5 rounded-2xl flex items-start gap-3 shadow-sm animate-soft-pulse"
        >
          <div className="p-1.5 rounded-xl bg-red-600 text-white shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xs uppercase tracking-wider text-red-700">
                {jobData.urgency} Priority Detected
              </span>
              <span className="text-[10px] bg-red-200 text-red-800 font-bold px-1.5 rounded">
                30-Min Fast Track
              </span>
            </div>
            <p className="text-xs font-semibold text-red-800 mt-0.5">
              {jobData.urgencyReason || "Immediate containment advised"}
            </p>
          </div>
        </motion.div>
      )}

      {/* Main Review Card */}
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-3xl border border-orange-100 shadow-soft overflow-hidden"
      >
        {/* Header with Trade & Confidence */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50/50 to-orange-50 p-4 border-b border-orange-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl p-2 rounded-2xl bg-white shadow-sm border border-orange-100">
              {getTradeIcon(jobData.trade)}
            </span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                Identified Trade / पेशा
              </span>
              <h3 className="text-base font-extrabold text-textDark">
                {jobData.trade}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-right">
              <span className="text-[10px] text-textMuted block font-medium">Confidence</span>
              <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {jobData.confidence || 87}% Match
              </span>
            </div>
            {onEdit && (
              <button
                onClick={onEdit}
                className="p-2 rounded-xl text-textMuted hover:text-textDark hover:bg-white transition-colors"
                title="Edit Details"
              >
                <Edit2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="p-4 sm:p-5 space-y-4">
          {/* Issue & Hindi Description */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-textMuted block">
              Problem Description / समस्या का विवरण
            </span>
            <p className="text-sm font-extrabold text-textDark mt-0.5">
              {jobData.issue}
            </p>
            {jobData.hindiDescription && (
              <p className="text-xs text-textMuted mt-1 bg-orange-50/50 p-2 rounded-xl border border-orange-100/60 font-medium">
                🇮🇳 {jobData.hindiDescription}
              </p>
            )}
          </div>

          {/* Duration & Scope */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-orange-50">
            <div className="p-3 rounded-2xl bg-orange-50/30 border border-orange-100/60">
              <div className="flex items-center gap-1.5 text-textMuted text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>Estimated Time</span>
              </div>
              <span className="text-sm font-black text-textDark block mt-1">
                {jobData.estimatedDuration || "45-60 min"}
              </span>
            </div>

            <div className="p-3 rounded-2xl bg-orange-50/30 border border-orange-100/60">
              <div className="flex items-center gap-1.5 text-textMuted text-xs font-medium">
                <Sliders className="w-3.5 h-3.5 text-secondary" />
                <span>Fair Price Band</span>
              </div>
              <span className="text-sm font-black text-textDark block mt-1">
                ₹{minPrice} – ₹{maxPrice}
              </span>
            </div>
          </div>

          {/* Visual Range Slider with Fair Price Marker */}
          <div className="bg-orange-50/40 p-3.5 rounded-2xl border border-orange-100">
            <div className="flex justify-between text-xs text-textMuted font-bold mb-1.5">
              <span>Floor: ₹{minPrice}</span>
              <span className="text-primary font-black">Fair Midpoint: ₹{fairPrice}</span>
              <span>Ceiling: ₹{maxPrice}</span>
            </div>
            <div className="relative w-full h-3 bg-orange-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-amber-500 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-textMuted mt-1.5 font-medium">
              <span>Rate Compass reference for your area</span>
              <span className="text-emerald-700 font-bold">✓ No Overcharging Guarantee</span>
            </div>
          </div>

          {/* Probable Materials Checklist */}
          {jobData.materials && jobData.materials.length > 0 && (
            <div className="pt-2 border-t border-orange-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-textDark flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-secondary" />
                  Probable Materials Needed / आवश्यक सामान
                </span>
                <span className="text-[10px] text-textMuted">
                  Worker brings or you provide
                </span>
              </div>
              <div className="space-y-1.5">
                {jobData.materials.map((item, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-orange-50/60 transition-colors cursor-pointer text-xs text-textDark font-medium"
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={() => onToggleMaterial && onToggleMaterial(item)}
                      className="w-4 h-4 text-primary rounded border-orange-300 focus:ring-primary"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Safety Notes */}
          {jobData.safetyNotes && jobData.safetyNotes.length > 0 && (
            <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs">
              <span className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                Immediate Safety Advice for Customer:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-amber-950 font-normal">
                {jobData.safetyNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default JobCard;
