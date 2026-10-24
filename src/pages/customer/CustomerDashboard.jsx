import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  AlertTriangle,
  Calendar,
  Clock,
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Users,
  CheckCircle2,
  Wrench,
  Flame,
  Star,
  MapPin,
  CalendarCheck
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { TrustScoreRing } from "../../components/ui/TrustScoreRing";

export function CustomerDashboard() {
  const navigate = useNavigate();
  const { jobs, workers } = useAppStore();

  // Find any active job
  const activeJob = jobs.find(
    (j) => j.status === "IN_PROGRESS" || j.status === "DISPATCHING" || j.status === "SCOPE_CHANGE"
  );

  const completedJobs = jobs.filter((j) => j.status === "COMPLETED");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Top Greeting Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-textMuted font-medium">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Andheri West, Mumbai • 7 Bungalows</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
            Hello, Priya! <span className="text-sm font-normal text-primary">(नमस्ते)</span>
          </h1>
          <p className="text-xs text-textMuted">
            What help does your home need today?
          </p>
        </div>

        <Link
          to="/safety"
          className="p-2 rounded-2xl bg-orange-50 border border-orange-200/60 text-secondary hover:bg-orange-100 transition-colors"
          title="Safety Settings"
        >
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
        </Link>
      </div>

      {/* Quick Action Row */}
      <div className="grid grid-cols-3 gap-2.5">
        <button
          onClick={() => navigate("/customer/book")}
          className="bg-gradient-to-br from-primary to-primary-600 text-white p-3 sm:p-4 rounded-2xl shadow-soft hover:shadow-glow-primary transition-all flex flex-col items-center text-center group"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold leading-tight">Book Now</span>
          <span className="text-[10px] text-orange-100 mt-0.5">AI Describe</span>
        </button>

        <button
          onClick={() => navigate("/emergency")}
          className="bg-gradient-to-br from-red-600 to-rose-700 text-white p-3 sm:p-4 rounded-2xl shadow-soft hover:shadow-lg transition-all flex flex-col items-center text-center group animate-soft-pulse"
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <span className="text-xs font-bold leading-tight">Emergency</span>
          <span className="text-[10px] text-red-100 mt-0.5">30-Min Fast</span>
        </button>

        <button
          onClick={() => navigate("/customer/monthly")}
          className="bg-white border border-orange-100 text-textDark p-3 sm:p-4 rounded-2xl shadow-soft hover:border-primary/40 transition-all flex flex-col items-center text-center group"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
            <CalendarCheck className="w-5 h-5 text-secondary" />
          </div>
          <span className="text-xs font-bold leading-tight">Monthly</span>
          <span className="text-[10px] text-textMuted mt-0.5">Regular Staff</span>
        </button>
      </div>

      {/* Active Job Card (if present) */}
      {activeJob && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Active Job in Progress
            </h2>
            <Link
              to={`/customer/track/${activeJob.id}`}
              className="text-xs font-bold text-secondary hover:underline flex items-center gap-0.5"
            >
              Track Live <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <Card
            interactive
            onClick={() => navigate(`/customer/track/${activeJob.id}`)}
            className="p-4 border-2 border-primary/30 bg-gradient-to-r from-orange-50/40 via-white to-orange-50/20"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {activeJob.trade}
                  </Badge>
                  <span className="text-xs text-textMuted font-mono">
                    #{activeJob.id}
                  </span>
                </div>
                <h3 className="font-extrabold text-sm text-textDark mt-1">
                  {activeJob.issue}
                </h3>
                <p className="text-xs text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeJob.eta}
                </p>
              </div>

              {activeJob.workerPhoto ? (
                <div className="text-center shrink-0">
                  <img
                    src={activeJob.workerPhoto}
                    alt={activeJob.workerName}
                    className="w-12 h-12 rounded-2xl object-cover border-2 border-primary shadow-sm"
                  />
                  <span className="text-[10px] font-bold text-textDark block mt-1">
                    {activeJob.workerName?.split(" ")[0]}
                  </span>
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-primary font-black text-xs shrink-0 animate-pulse">
                  Chowk
                </div>
              )}
            </div>

            {/* OTP and Status banner */}
            <div className="mt-3 pt-3 border-t border-orange-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-textMuted">Start OTP:</span>
                <span className="font-mono font-black text-sm bg-orange-100 text-primary px-2 py-0.5 rounded-lg tracking-wider">
                  {activeJob.otp}
                </span>
              </div>
              <div className="font-bold text-textDark">
                ₹{activeJob.price} (Sealed)
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Kaam Guarantee 7-Day Banner */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 p-3.5 rounded-2xl border border-emerald-200/80 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-extrabold text-xs text-emerald-950 uppercase tracking-wide">
              काम गारंटी / Kaam Guarantee
            </h3>
            <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-1.5 rounded">
              7 Days
            </span>
          </div>
          <p className="text-[11px] text-emerald-800 mt-0.5 leading-snug">
            All work backed by free re-service or full refund. Transparent material bills with zero hidden markup.
          </p>
        </div>
      </div>

      {/* Rate Compass Teaser Card */}
      <Card interactive onClick={() => navigate("/customer/rates")} className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                Rate Compass • भाव दिशा
              </span>
              <h3 className="text-xs font-bold text-textDark">
                Plumber in Andheri: ₹250 – ₹500
              </h3>
            </div>
          </div>
          <span className="text-xs font-bold text-secondary flex items-center">
            View All <ChevronRight className="w-4 h-4 ml-0.5" />
          </span>
        </div>
        <p className="text-[11px] text-textMuted mt-2">
          Crowdsourced fair price bands from 1,200+ completed jobs. Protects you against overcharging.
        </p>
      </Card>

      {/* Chowk Pulse Mini-Preview Heatmap */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-textMuted flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-primary" />
            Chowk Pulse • Live Availability
          </h2>
          <Link
            to="/chowkpulse"
            className="text-xs font-bold text-primary hover:underline flex items-center gap-0.5"
          >
            Live Map <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft">
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="text-[10px] text-emerald-800 font-semibold block">Plumbers</span>
              <span className="text-base font-black text-emerald-700">18 Ready</span>
              <span className="text-[9px] text-emerald-600 block mt-0.5">ETA ~10m</span>
            </div>
            <div className="p-2 rounded-xl bg-amber-50 border border-amber-100">
              <span className="text-[10px] text-amber-800 font-semibold block">Electricians</span>
              <span className="text-base font-black text-amber-700">12 Ready</span>
              <span className="text-[9px] text-amber-600 block mt-0.5">ETA ~15m</span>
            </div>
            <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="text-[10px] text-emerald-800 font-semibold block">Cleaners</span>
              <span className="text-base font-black text-emerald-700">24 Ready</span>
              <span className="text-[9px] text-emerald-600 block mt-0.5">ETA ~12m</span>
            </div>
          </div>
          <p className="text-[10px] text-textMuted text-center mt-2">
            Supply high in Andheri West. Dispatches running on 30-minute promise.
          </p>
        </div>
      </div>

      {/* Neighbourhood Batching Promotion */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-2xl shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] bg-white/20 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Neighbourhood Batching
            </span>
            <h3 className="font-extrabold text-sm mt-1">
              Sea Green Apts: AC Servicing Day
            </h3>
            <p className="text-xs text-orange-100 mt-0.5">
              3 neighbours already booked for Saturday. Join & save 20%!
            </p>
          </div>
          <button
            onClick={() => navigate("/customer/book")}
            className="bg-white text-primary text-xs font-bold px-3 py-2 rounded-xl shadow-sm shrink-0"
          >
            Join Batch
          </button>
        </div>
      </div>

      {/* Recent Completed Jobs */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-textMuted">
          Recent Jobs & Receipts
        </h2>

        {completedJobs.map((job) => (
          <Card key={job.id} className="p-3.5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <Badge variant="neutral" size="sm">
                    {job.trade}
                  </Badge>
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                  </span>
                </div>
                <h4 className="font-bold text-xs text-textDark mt-1">
                  {job.issue}
                </h4>
                <p className="text-[11px] text-textMuted mt-0.5">
                  Serviced by {job.workerName} • ₹{job.price}
                </p>
              </div>

              {job.rating && (
                <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-bold text-amber-900">
                    {job.rating}.0
                  </span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}

export default CustomerDashboard;
