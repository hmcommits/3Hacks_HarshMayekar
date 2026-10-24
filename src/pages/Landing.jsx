import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Handshake,
  FileCheck2,
  PhoneCall,
  MessageSquare,
  Store,
  ChevronRight,
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Users
} from "lucide-react";
import { useAppStore } from "../store/appStore";
import { TrustScoreRing } from "../components/ui/TrustScoreRing";
import { mockWorkers } from "../data/mockWorkers";

export function Landing() {
  const navigate = useNavigate();
  const { setUserRole } = useAppStore();

  const handleCustomerClick = () => {
    setUserRole("customer");
    navigate("/customer");
  };

  const handleWorkerClick = () => {
    setUserRole("worker");
    navigate("/worker");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] -mx-4 -mt-4 pb-12 overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#E8531D] to-[#0B4F6C] text-white pt-8 pb-16 px-4 sm:px-6 rounded-b-[2.5rem] shadow-xl">
        {/* Decorative background glow circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-0 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10 text-center">
          {/* Logo Pill */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 mb-4 shadow-sm"
          >
            <img src="/sahayak-logo.svg" alt="Sahayak Logo" className="w-5 h-5" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Digital Chowk Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
          >
            हर पड़ोस में एक चौक।
            <span className="block text-amber-300 font-extrabold text-2xl sm:text-3xl md:text-4xl mt-1">
              Every neighbourhood, a trusted marketplace.
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base text-orange-50 max-w-lg mx-auto font-normal leading-relaxed"
          >
            No price gouging. No idle waiting. Connect instantly with verified local plumbers, electricians, maids & technicians with fair, sealed pricing.
          </motion.p>

          {/* Two Big CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-col sm:flex-row gap-3.5 justify-center max-w-md mx-auto"
          >
            <button
              onClick={handleCustomerClick}
              className="flex-1 bg-white hover:bg-orange-50 text-[#2D1B00] font-bold py-4 px-6 rounded-2xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-orange-100 group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
                🏠
              </div>
              <div className="text-left">
                <span className="text-xs text-primary font-bold block uppercase tracking-wider">
                  मुझे मदद चाहिए
                </span>
                <span className="text-base font-extrabold text-[#2D1B00]">
                  I Need Help
                </span>
              </div>
              <ChevronRight className="w-5 h-5 ml-auto text-primary group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWorkerClick}
              className="flex-1 bg-[#0B4F6C] hover:bg-[#083b52] text-white font-bold py-4 px-6 rounded-2xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-teal-400/30 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-300 font-black">
                🔨
              </div>
              <div className="text-left">
                <span className="text-xs text-amber-300 font-bold block uppercase tracking-wider">
                  मैं काम करता हूँ
                </span>
                <span className="text-base font-extrabold text-white">
                  I'm a Worker
                </span>
              </div>
              <ChevronRight className="w-5 h-5 ml-auto text-amber-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Animated Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid grid-cols-3 gap-2 bg-black/20 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 max-w-lg mx-auto"
          >
            <div>
              <span className="text-lg sm:text-xl font-black text-amber-300 block">
                10,000+
              </span>
              <span className="text-[11px] text-orange-100 font-medium">
                Verified Workers
              </span>
            </div>
            <div className="border-x border-white/20">
              <span className="text-lg sm:text-xl font-black text-amber-300 block">
                30-Min
              </span>
              <span className="text-[11px] text-orange-100 font-medium">
                Dispatch Promise
              </span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black text-amber-300 block">
                ₹0
              </span>
              <span className="text-[11px] text-orange-100 font-medium">
                Idle Days Lost
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 mt-8 space-y-10">
        {/* Floating Live Worker Showcase Carousel */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-textDark flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Ready Now at Local Chowks
            </h2>
            <Link
              to="/chowkpulse"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              Chowk Pulse <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {mockWorkers.slice(0, 2).map((worker) => (
              <motion.div
                key={worker.id}
                whileHover={{ y: -3 }}
                className="bg-white p-4 rounded-2xl border border-orange-100 shadow-soft flex items-center gap-3.5 relative overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={worker.photo}
                    alt={worker.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-200"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-textDark truncate">
                      {worker.name}
                    </h3>
                    <span className="text-[10px] bg-orange-100 text-primary-700 font-bold px-2 py-0.5 rounded-full">
                      {worker.trade}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-textMuted mt-1">
                    <span className="flex items-center text-amber-600 font-bold">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5" />
                      {worker.rating}
                    </span>
                    <span>•</span>
                    <span>{worker.location}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-600 mt-1">
                    ⚡ ETA {worker.eta} • ₹{worker.price}
                  </div>
                </div>
                <div className="shrink-0">
                  <TrustScoreRing score={worker.trustScore} size={44} showLabel={false} strokeWidth={11} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The 5 Key Innovations */}
        <div className="space-y-4">
          <div className="text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Core Innovations
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-textDark mt-1">
              Why Sahayak is Different
            </h2>
            <p className="text-xs text-textMuted mt-1 max-w-md mx-auto">
              Built on 5 pillars that respect worker autonomy and customer peace of mind.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {/* 1. Sealed Handshake */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-4 rounded-2xl border border-orange-100/80 shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-primary flex items-center justify-center mb-3">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-textDark">
                1. The Sealed Handshake
              </h3>
              <p className="text-xs text-textMuted mt-1 leading-relaxed">
                Private double-sided matching. Worker sets floor, customer sets budget. If they overlap, instant match at the fair midpoint. Zero awkward haggling.
              </p>
            </motion.div>

            {/* 2. Describe-It AI */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-4 rounded-2xl border border-orange-100/80 shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-textDark">
                2. Describe-It AI
              </h3>
              <p className="text-xs text-textMuted mt-1 leading-relaxed">
                Snap a photo or speak in Hindi/English. Gemini AI identifies trade, likely fault, duration, materials, and fair price band with safety instructions.
              </p>
            </motion.div>

            {/* 3. 30-Minute Promise Engine */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-4 rounded-2xl border border-orange-100/80 shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-secondary flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-textDark">
                3. The 30-Minute Promise
              </h3>
              <p className="text-xs text-textMuted mt-1 leading-relaxed">
                Parallel dispatch to top nearby eligible workers with Chowk Pulse demand mapping, fair rotation, and visible ETA guarantee.
              </p>
            </motion.div>

            {/* 4. Layered Trust Both Ways */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-4 rounded-2xl border border-orange-100/80 shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-textDark">
                4. Layered Trust Score (0-100)
              </h3>
              <p className="text-xs text-textMuted mt-1 leading-relaxed">
                4-layer verification (eKYC, Police, Practical Skill, Community Guild Vouching) + worker safety with SOS and women-first filters.
              </p>
            </motion.div>

            {/* 5. Work Passport */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 bg-gradient-to-r from-orange-50 via-amber-50 to-teal-50 p-4 rounded-2xl border border-orange-200/60 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-textDark">
                    5. The Work Passport & Kaam Khata
                  </h3>
                  <p className="text-xs text-textMuted mt-1 leading-relaxed">
                    A portable digital record owned by the worker that unlocks micro-insurance, tool financing, and instant bank-linked payouts.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* How It Works (3 Steps) */}
        <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-soft space-y-4">
          <h2 className="text-base font-extrabold text-textDark text-center">
            How Sahayak Works in 3 Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-2xl bg-orange-50/50">
              <div className="w-9 h-9 rounded-full bg-primary text-white font-black text-sm flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="font-bold text-xs text-textDark">Describe the Work</h4>
              <p className="text-[11px] text-textMuted mt-1">
                Upload a photo or speak. AI extracts trade, parts & price band.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-orange-50/50">
              <div className="w-9 h-9 rounded-full bg-secondary text-white font-black text-sm flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h4 className="font-bold text-xs text-textDark">Sealed Handshake</h4>
              <p className="text-[11px] text-textMuted mt-1">
                Fair settlement matching your ceiling & worker's private floor.
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-orange-50/50">
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="font-bold text-xs text-textDark">Track & Guarantee</h4>
              <p className="text-[11px] text-textMuted mt-1">
                Live arrival OTP, photo proof of work, & 7-day Kaam Guarantee.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-Channel Access Banner */}
        <div className="bg-gradient-to-r from-orange-100/60 to-amber-100/60 p-4 rounded-2xl border border-orange-200 text-center space-y-2">
          <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
            Inclusive by Default
          </span>
          <p className="text-xs text-textDark font-medium">
            Also available on WhatsApp Bot • Missed-Call / IVR (1800-SAHAYAK) • Physical Chowk Points at local hardware stores
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-secondary pt-1">
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" /> IVR Line
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Store className="w-3.5 h-3.5" /> Chowk Points
            </span>
          </div>
        </div>

        {/* Bottom Trust Signals */}
        <div className="text-center pt-2 pb-6 border-t border-orange-100">
          <p className="text-xs text-textMuted">
            Sahayak Platform • 100% Aadhaar & DigiLocker eKYC • 7-Day Workmanship Kaam Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
