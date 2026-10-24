import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Power,
  Flame,
  Award,
  Wallet,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  Umbrella,
  Zap,
  MapPin
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import { TrustScoreRing } from "../../components/ui/TrustScoreRing";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";

export function WorkerDashboard() {
  const navigate = useNavigate();
  const { isWorkerReady, toggleWorkerReady, jobs, workers } = useAppStore();

  const currentWorker = workers[0]; // Ramesh Kumar (Plumber)

  const activeWorkerJob = jobs.find(
    (j) => j.status === "IN_PROGRESS" || j.status === "SCOPE_CHANGE"
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Top Header & Greeting */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-textMuted font-medium">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Chowk: Andheri West Station Naka</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
            नमस्ते, {currentWorker.name} Bhai!
          </h1>
          <p className="text-xs text-textMuted">
            {currentWorker.trade} • {currentWorker.experience} experience
          </p>
        </div>

        <Link
          to="/worker/passport"
          className="flex flex-col items-center"
          title="View Digital Work Passport"
        >
          <TrustScoreRing score={currentWorker.trustScore} size={54} showLabel={false} />
          <span className="text-[10px] text-emerald-700 font-bold mt-1">
            Score: {currentWorker.trustScore}
          </span>
        </Link>
      </div>

      {/* BIG "Kaam Ke Liye Taiyaar" Toggle (Crucial requirement from prompt) */}
      <div
        className={`p-5 rounded-3xl transition-all duration-300 border-2 shadow-soft ${
          isWorkerReady
            ? "bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white border-orange-400 shadow-glow-primary"
            : "bg-white text-textDark border-orange-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-black uppercase tracking-wider block opacity-90">
              {isWorkerReady ? "● LIVE AT CHOWK" : "○ OFFLINE"}
            </span>
            <h2 className="text-lg sm:text-xl font-black">
              काम के लिए तैयार
            </h2>
            <p className="text-xs opacity-90">
              {isWorkerReady
                ? "Ready for Work — Parallel dispatch active within 3 km"
                : "Turn ON to receive instant high-match jobs"}
            </p>
          </div>

          <button
            onClick={toggleWorkerReady}
            className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform transform active:scale-95 shadow-md ${
              isWorkerReady
                ? "bg-white text-primary"
                : "bg-orange-100 text-primary hover:bg-orange-200"
            }`}
          >
            <Power className="w-8 h-8 stroke-[2.5]" />
          </button>
        </div>

        {isWorkerReady && (
          <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
            <span className="text-orange-100">Private Floor Rate: ₹{currentWorker.floor}/hr</span>
            <Link to="/customer/rates" className="text-white font-bold underline">
              Check Rate Compass
            </Link>
          </div>
        )}
      </div>

      {/* Earnings Overview Cards (3 Numbers) */}
      <div className="grid grid-cols-3 gap-2.5">
        <Link
          to="/worker/khata"
          className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft text-center hover:border-primary/40 transition-colors"
        >
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            Today (आज)
          </span>
          <span className="text-base sm:text-lg font-black text-primary block mt-0.5">
            ₹1,150
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
            3 jobs done
          </span>
        </Link>

        <Link
          to="/worker/khata"
          className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft text-center hover:border-primary/40 transition-colors"
        >
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            This Week
          </span>
          <span className="text-base sm:text-lg font-black text-secondary block mt-0.5">
            ₹8,450
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
            +18% vs avg
          </span>
        </Link>

        <Link
          to="/worker/khata"
          className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft text-center hover:border-primary/40 transition-colors"
        >
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            This Month
          </span>
          <span className="text-base sm:text-lg font-black text-textDark block mt-0.5">
            ₹34,200
          </span>
          <span className="text-[10px] text-primary font-bold block mt-0.5">
            UPI Settled
          </span>
        </Link>
      </div>

      {/* Chowk Pulse Live Demand Nudge */}
      <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-3xl border border-orange-200/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-2xl bg-primary text-white shadow-sm">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-primary tracking-wider block">
              Chowk Pulse Alert
            </span>
            <h4 className="text-xs font-black text-textDark mt-0.5">
              High demand for Plumbers in Andheri West!
            </h4>
            <p className="text-[11px] text-textMuted">
              4 customers waiting. Average settlement ₹420.
            </p>
          </div>
        </div>
        <Link
          to="/worker/offer/JOB-1085"
          className="bg-primary text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm shrink-0"
        >
          View Offers
        </Link>
      </div>

      {/* Active Job in Progress (if any) */}
      {activeWorkerJob && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-primary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Your Active Job
            </h3>
            <Link
              to={`/customer/track/${activeWorkerJob.id}`}
              className="text-xs font-bold text-secondary hover:underline"
            >
              Open Job Panel →
            </Link>
          </div>

          <Card className="p-4 border-2 border-primary/40 bg-white">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-textDark block">
                  {activeWorkerJob.issue}
                </span>
                <p className="text-xs text-textMuted mt-0.5">
                  📍 {activeWorkerJob.address}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs font-black text-primary bg-orange-100 px-2 py-0.5 rounded-lg">
                    ₹{activeWorkerJob.price} Payout
                  </span>
                  <span className="text-xs text-emerald-700 font-semibold">
                    Customer OTP Verified
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Quick Navigation 4-Grid: Khata, Passport, Upskill, Insurance */}
      <div className="space-y-2">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          Worker Tools & Benefits
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/worker/khata"
            className="p-4 bg-white rounded-2xl border border-orange-100 shadow-soft hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-primary flex items-center justify-center mb-2">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-textDark">काम खाता / Ledger</h4>
              <p className="text-[10px] text-textMuted mt-0.5">
                Income, expenses & instant daily UPI payouts
              </p>
            </div>
          </Link>

          <Link
            to="/worker/passport"
            className="p-4 bg-white rounded-2xl border border-orange-100 shadow-soft hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-100 text-secondary flex items-center justify-center mb-2">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-textDark">Work Passport</h4>
              <p className="text-[10px] text-textMuted mt-0.5">
                Shareable digital ID with skills & credit eligibility
              </p>
            </div>
          </Link>

          <Link
            to="/worker/upskilling"
            className="p-4 bg-white rounded-2xl border border-orange-100 shadow-soft hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-textDark">सीखो और बढ़ो</h4>
              <p className="text-[10px] text-textMuted mt-0.5">
                Video lessons, NSDC certificates & +Score
              </p>
            </div>
          </Link>

          <Link
            to="/worker/insurance"
            className="p-4 bg-white rounded-2xl border border-orange-100 shadow-soft hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
              <Umbrella className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-xs text-textDark">Micro-Insurance</h4>
              <p className="text-[10px] text-textMuted mt-0.5">
                ₹3/job cover pool for accident & health
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Pending Verifications Nudge */}
      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="font-extrabold text-xs text-textDark">
              Trust Score Booster Checklist
            </h3>
          </div>
          <span className="text-[10px] font-black text-primary bg-orange-100 px-2 py-0.5 rounded-full">
            +13 pts possible
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between p-2 rounded-xl bg-orange-50/60 border border-orange-100">
            <span className="text-textDark font-medium">
              Upload Advanced Pipe Fitting Skill Video
            </span>
            <Link
              to="/worker/trust"
              className="text-[11px] font-bold text-primary hover:underline"
            >
              +8 pts →
            </Link>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-orange-50/60 border border-orange-100">
            <span className="text-textDark font-medium">
              Request Vouch from Hardware Store
            </span>
            <Link
              to="/worker/trust"
              className="text-[11px] font-bold text-secondary hover:underline"
            >
              +5 pts →
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default WorkerDashboard;
