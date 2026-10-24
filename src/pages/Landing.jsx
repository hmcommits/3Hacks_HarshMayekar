import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Users,
  MapPin,
  Wrench,
  Bolt,
  Paintbrush,
  ChefHat,
  Radio,
  Lock,
  Unlock,
  Sliders,
  Camera,
  Mic,
  BadgePercent,
  Award,
  AlertTriangle
} from "lucide-react";
import { useAppStore } from "../store/appStore";
import { TrustScoreRing } from "../components/ui/TrustScoreRing";
import { mockWorkers } from "../data/mockWorkers";

export function Landing() {
  const navigate = useNavigate();
  const { setUserRole, setSelectedTrade, setJobDescription } = useAppStore();

  // Interactive Sealed Handshake preview simulator state
  const [customerBudget, setCustomerBudget] = useState(500);
  const workerFloor = 380;
  const isMatch = customerBudget >= workerFloor;
  const settlementPrice = isMatch ? Math.round((customerBudget + workerFloor) / 2) : 0;

  // Active showcase tab
  const [activeTab, setActiveTab] = useState("handshake");

  // Rotating live worker preview
  const [activeWorkerIdx, setActiveWorkerIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkerIdx((prev) => (prev + 1) % Math.min(mockWorkers.length, 4));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleQuickBook = (tradeName, defaultDesc) => {
    setUserRole("customer");
    if (setSelectedTrade) setSelectedTrade(tradeName);
    if (setJobDescription) setJobDescription(defaultDesc);
    navigate("/customer/book");
  };

  const handleCustomerStart = () => {
    setUserRole("customer");
    navigate("/customer");
  };

  const handleWorkerStart = () => {
    setUserRole("worker");
    navigate("/worker");
  };

  const featuredWorker = mockWorkers[activeWorkerIdx] || mockWorkers[0];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D1B00] overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Full-Width, Modern Dual-Column)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0901] via-[#2F1100] to-[#0A3345] text-white pt-10 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF6B35]/25 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#0B4F6C]/35 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headlines & Call to Actions (7 cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Category Pill */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-wide text-amber-300 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>भारत का डिजिटल चौक • India's First Digital Chowk</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                  हर पड़ोस में
                  <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-[#FF6B35] bg-clip-text text-transparent">
                    एक विश्वसनीय चौक।
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-orange-100/90 tracking-normal">
                  Every neighbourhood, a trusted, fair marketplace.
                </p>
              </motion.div>

              {/* Mission Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-orange-100/80 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
              >
                No price gouging. No idle waiting at street corners. Get trusted plumbers, electricians, maids & technicians in 30 minutes at fair, sealed settlement rates.
              </motion.p>

              {/* Quick Issue Selector Chips */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="pt-2"
              >
                <p className="text-xs font-semibold text-amber-200 uppercase tracking-wider mb-2.5">
                  ⚡ Instant Problem? Tap to Book with AI:
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {[
                    { label: "💧 Leaking Tap", trade: "Plumber", desc: "Nal se paani tapak raha hai / Leaking kitchen faucet" },
                    { label: "⚡ Sparking Switch", trade: "Electrician", desc: "Short circuit and switchboard sparking" },
                    { label: "🚪 Door Hinges", trade: "Carpenter", desc: "Wardrobe door hinge loose and sagging" },
                    { label: "🧹 Deep Cleaning", trade: "Cleaner", desc: "Kitchen deep grease & tile cleaning" },
                    { label: "❄️ AC Not Cooling", trade: "AC Technician", desc: "Split AC blowing warm air, filter dirty" },
                    { label: "👩‍🍳 Daily Cook", trade: "Cook", desc: "Daily North/South Indian dinner cooking" }
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => handleQuickBook(chip.trade, chip.desc)}
                      className="text-xs bg-white/10 hover:bg-white/20 active:bg-primary border border-white/20 text-white font-medium px-3 py-1.5 rounded-full transition-all flex items-center gap-1 group shadow-sm hover:scale-105"
                    >
                      <span>{chip.label}</span>
                      <ChevronRight className="w-3 h-3 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Two Big Role CTA Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto lg:mx-0"
              >
                {/* Customer CTA */}
                <button
                  onClick={handleCustomerStart}
                  className="group relative bg-white hover:bg-orange-50 text-[#2D1B00] font-bold p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 border-2 border-orange-200 flex items-center justify-between text-left hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B35] to-orange-600 text-white flex items-center justify-center text-xl shadow-md shrink-0">
                      🏠
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-primary uppercase tracking-wider block">
                        मुझे मदद चाहिए
                      </span>
                      <span className="text-base font-extrabold text-[#2D1B00] block">
                        I Need Help
                      </span>
                      <span className="text-[10px] text-gray-500 font-semibold">
                        30-Min Dispatch • 7-Day Guarantee
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                </button>

                {/* Worker CTA */}
                <button
                  onClick={handleWorkerStart}
                  className="group relative bg-gradient-to-br from-[#0B4F6C] to-[#063346] hover:from-[#094159] hover:to-[#042432] text-white font-bold p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 border-2 border-teal-400/40 flex items-center justify-between text-left hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/15 text-amber-300 flex items-center justify-center text-xl shadow-md shrink-0">
                      🔨
                    </div>
                    <div>
                      <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider block">
                        मैं काम करता हूँ
                      </span>
                      <span className="text-base font-extrabold text-white block">
                        I'm a Worker
                      </span>
                      <span className="text-[10px] text-teal-200 font-semibold">
                        Keep Your Rate • Instant UPI Payout
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform shrink-0 ml-1" />
                </button>
              </motion.div>

              {/* Trust highlights checklist */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-orange-100/90 font-medium"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  100% Aadhaar & DigiLocker eKYC
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Sealed Handshake (No Bargaining Stress)
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  7-Day Kaam Guarantee
                </span>
              </motion.div>
            </div>

            {/* Right Column: Interactive Live Platform Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Card 1: Interactive Sealed Handshake Simulator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 shadow-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-orange-500/30 flex items-center justify-center text-amber-300">
                      <Handshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black tracking-wider uppercase text-amber-300">
                        Signature Innovation
                      </h3>
                      <p className="text-sm font-bold text-white">
                        The Sealed Handshake Simulator
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold px-2 py-0.5 rounded-full">
                    Live Demo
                  </span>
                </div>

                {/* Slider Input */}
                <div className="space-y-4">
                  <div className="bg-black/25 rounded-2xl p-3 border border-white/10">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="text-orange-200 font-semibold flex items-center gap-1">
                        <Lock className="w-3 h-3 text-amber-300" /> Your Budget Ceiling:
                      </span>
                      <span className="font-black text-amber-300 text-sm">
                        ₹{customerBudget}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={300}
                      max={700}
                      step={20}
                      value={customerBudget}
                      onChange={(e) => setCustomerBudget(Number(e.target.value))}
                      className="w-full accent-[#FF6B35] h-1.5 bg-white/20 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-white/50 mt-1">
                      <span>₹300 (Low)</span>
                      <span>₹500 (Fair)</span>
                      <span>₹700 (Urgent)</span>
                    </div>
                  </div>

                  {/* Worker Floor Locked Display */}
                  <div className="flex items-center justify-between text-xs bg-black/25 rounded-xl px-3 py-2 border border-white/10">
                    <span className="text-teal-200 font-semibold flex items-center gap-1">
                      <Lock className="w-3 h-3 text-teal-300" /> Worker's Private Floor Rate:
                    </span>
                    <span className="font-bold text-teal-300 text-xs">
                      ₹{workerFloor} (Hidden from customer)
                    </span>
                  </div>

                  {/* Settlement Result Box */}
                  <div
                    className={`rounded-2xl p-3 border transition-all text-center ${
                      isMatch
                        ? "bg-gradient-to-r from-emerald-950/60 to-teal-950/60 border-emerald-500/40"
                        : "bg-red-950/50 border-red-500/40"
                    }`}
                  >
                    {isMatch ? (
                      <div>
                        <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-300 uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Instant Handshake Match!</span>
                        </div>
                        <div className="text-xl font-black text-white mt-0.5">
                          Fair Settlement: <span className="text-amber-300">₹{settlementPrice}</span>
                        </div>
                        <p className="text-[10px] text-emerald-200/80 mt-0.5">
                          Calculated at fair midpoint (₹{customerBudget} + ₹{workerFloor}) ÷ 2. Neither side saw the other's limit!
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-bold text-red-300">
                          Budget too low for local floor (₹{workerFloor})
                        </p>
                        <p className="text-[10px] text-red-200/70 mt-0.5">
                          Slide budget to ₹380+ to trigger automatic sealed handshake match.
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => navigate("/customer/book")}
                    className="w-full bg-gradient-to-r from-[#FF6B35] to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-xs font-black py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Try With Describe-It AI (Camera / Voice)</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </motion.div>

              {/* Card 2: Live Chowk Worker Active Signal Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="bg-white/95 text-gray-900 rounded-2xl p-3.5 shadow-xl border border-white/50 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <img
                      src={featuredWorker.photo}
                      alt={featuredWorker.name}
                      className="w-12 h-12 rounded-xl object-cover border-2 border-orange-200"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-extrabold text-xs text-gray-900 truncate">
                        {featuredWorker.name}
                      </h4>
                      <span className="text-[9px] bg-orange-100 text-primary font-bold px-1.5 py-0.2 rounded-full">
                        {featuredWorker.trade}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {featuredWorker.location} • {featuredWorker.experience}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-[10px]">
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded">
                        ⚡ Ready Now (ETA {featuredWorker.eta})
                      </span>
                      <span className="text-amber-600 font-bold flex items-center">
                        ★ {featuredWorker.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <TrustScoreRing score={featuredWorker.trustScore} size={42} showLabel={false} strokeWidth={10} />
                  <span className="text-[9px] font-bold text-gray-500 block mt-0.5">
                    Trust {featuredWorker.trustScore}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Global Live Metric Bar (Full-Width Bottom Anchor) */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">
                10,000+
              </span>
              <span className="text-xs text-orange-100/70 font-medium">
                Verified Local Mistris
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">
                30-Min
              </span>
              <span className="text-xs text-orange-100/70 font-medium">
                Arrival Guarantee
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-black text-amber-300 block">
                ₹0 Lost
              </span>
              <span className="text-xs text-orange-100/70 font-medium">
                Zero Idle Days at Chowk
              </span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">
                100% Fair
              </span>
              <span className="text-xs text-orange-100/70 font-medium">
                Double-Sided Midpoint
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LIVE CHOWK PULSE PREVIEW (Real-time Available Workers)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
                Chowk Pulse • लाइव चौक
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Ready Right Now in Your Neighbourhood
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Workers toggled "Kaam ke liye taiyaar" within 3 km of Andheri West, Mumbai.
            </p>
          </div>
          <Link
            to="/chowkpulse"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-primary hover:text-orange-700 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200 transition-colors shrink-0"
          >
            <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>View Full Live Heatmap</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>

        {/* Worker Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockWorkers.slice(0, 4).map((worker) => (
            <motion.div
              key={worker.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-5 border border-orange-100 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="relative">
                    <img
                      src={worker.photo}
                      alt={worker.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-100 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-0.5 rounded-full border-2 border-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="text-right">
                    <TrustScoreRing score={worker.trustScore} size={44} showLabel={false} strokeWidth={11} />
                    <span className="text-[10px] font-bold text-gray-600 block mt-0.5">
                      Trust {worker.trustScore}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-extrabold text-base text-gray-900 truncate">
                    {worker.name}
                  </h3>
                  <span className="text-[10px] font-black bg-orange-100 text-primary px-2 py-0.5 rounded-full">
                    {worker.trade}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="flex items-center text-amber-600 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-0.5" />
                    {worker.rating}
                  </span>
                  <span>•</span>
                  <span>{worker.location}</span>
                  <span>•</span>
                  <span>{worker.experience}</span>
                </div>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {worker.specialties.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="text-[10px] bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 block font-semibold uppercase">Floor Rate</span>
                  <span className="text-sm font-black text-gray-900">₹{worker.floor}+</span>
                </div>
                <button
                  onClick={() => handleQuickBook(worker.trade, `Need ${worker.trade} services from ${worker.name}`)}
                  className="bg-primary hover:bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm transition-all flex items-center gap-1"
                >
                  <span>Book Now</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE 5 CORE BREAKTHROUGHS (Interactive Tabs Layout)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-orange-50/50 via-amber-50/30 to-white border-y border-orange-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black text-primary uppercase tracking-widest bg-orange-100/80 px-3 py-1 rounded-full border border-orange-200">
              Why Sahayak Wins
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 tracking-tight">
              Five Ideas That Change Blue-Collar Work Forever
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              We did not copy Silicon Valley or ride-sharing apps. We studied how chowks actually function and fixed trust, price, speed and worker dignity together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. Sealed Handshake */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-primary flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black text-primary uppercase tracking-wider block">
                  Innovation 01
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-2">
                  The Sealed Handshake
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  A private, double-sided price match where neither party sees the other's limit. If the customer's budget covers the worker's floor, the job matches instantly at the exact fair midpoint. Zero bargaining fatigue, zero price gouging.
                </p>
              </div>
              <div className="bg-orange-50/80 rounded-2xl p-3 border border-orange-200/60 text-xs text-primary font-semibold">
                ✓ No price anchoring • No door-step awkwardness • Transparent rate compass
              </div>
            </motion.div>

            {/* 2. Describe-It AI */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black text-amber-700 uppercase tracking-wider block">
                  Innovation 02
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-2">
                  Describe-It AI (Gemini Vision)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Take a photo or speak a voice note in Hindi or English ("nal se paani tapak raha hai"). Our Gemini AI identifies the trade, diagnosis, necessary materials, time estimate, and a fair neighbourhood price band. No category confusion.
                </p>
              </div>
              <div className="bg-amber-50/80 rounded-2xl p-3 border border-amber-200/60 text-xs text-amber-800 font-semibold">
                ✓ Photo + Voice in Vernacular • Structured Job Card • Auto emergency detection
              </div>
            </motion.div>

            {/* 3. The 30-Minute Promise Engine */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-secondary flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black text-secondary uppercase tracking-wider block">
                  Innovation 03
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-2">
                  The 30-Minute Promise Engine
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Hyperlocal Chowk Pulse heatmaps + parallel dispatch to top-ranked nearby workers with first-to-accept matching. Fair Rotation ensures new workers get a steady share, backed by visible late-arrival wallet credits.
                </p>
              </div>
              <div className="bg-teal-50/80 rounded-2xl p-3 border border-teal-200/60 text-xs text-secondary font-semibold">
                ✓ Parallel dispatch • Fallback cascade • Late arrival compensation
              </div>
            </motion.div>

            {/* 4. Layered Trust Both Ways */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between lg:col-span-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider block">
                  Innovation 04
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-2">
                  Layered Trust Score (0–100)
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  4 layers of verification: Aadhaar eKYC, Police check, Practical video skill tests, and Mistri Guild community vouching. Plus two-way safety with SOS and women-only household filters.
                </p>
              </div>
              <div className="bg-emerald-50/80 rounded-2xl p-3 border border-emerald-200/60 text-xs text-emerald-800 font-semibold">
                ✓ 4-Layer trust • Explainable score • Women-first safety & SOS
              </div>
            </motion.div>

            {/* 5. The Work Passport & Kaam Khata (Double Width) */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-white via-orange-50/40 to-teal-50/40 rounded-3xl p-6 border border-orange-200/80 shadow-soft hover:shadow-elevated transition-all flex flex-col justify-between lg:col-span-2"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0B4F6C] text-white flex items-center justify-center mb-4">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-black text-secondary uppercase tracking-wider block">
                  Innovation 05 • Social Impact Engine
                </span>
                <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-2">
                  The Work Passport & Kaam Khata
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Every completed gig builds a permanent, portable digital record that the worker owns. The Work Passport unlocks micro-insurance, tool financing (drill, ladder, sprayer), and bank loans. Together with Kaam Khata (voice-navigable income ledger) and instant UPI payouts, Sahayak becomes a ladder out of informality.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-2xl border border-orange-100 text-xs font-bold text-gray-800">
                  ⚡ Instant UPI Payout
                  <span className="block text-[10px] text-gray-500 font-normal mt-0.5">Earnings hit account immediately</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-orange-100 text-xs font-bold text-gray-800">
                  🛡️ Micro-Insurance
                  <span className="block text-[10px] text-gray-500 font-normal mt-0.5">Accident cover at ₹3/job contribution</span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-orange-100 text-xs font-bold text-gray-800">
                  📜 Portable Credit Record
                  <span className="block text-[10px] text-gray-500 font-normal mt-0.5">Verifiable credentials for lenders & RWAs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. HOW IT WORKS (3 Simple Steps)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black text-primary uppercase tracking-widest">
            Simple 3-Step Journey
          </span>
          <h2 className="text-3xl font-black text-gray-900 mt-2">
            From Broken to Fixed in 30 Minutes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md shadow-orange-500/20">
              1
            </div>
            <h3 className="font-extrabold text-base text-gray-900 mb-2">
              Snap or Speak Your Problem
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              No endless drop-downs. Describe-It AI automatically diagnoses the trade, parts required, and estimates fair price bounds.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-[#0B4F6C] text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md shadow-teal-700/20">
              2
            </div>
            <h3 className="font-extrabold text-base text-gray-900 mb-2">
              Sealed Handshake Match
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Set your budget ceiling. We match against nearby workers' private floor rates at the fair midpoint. Both parties confirm with one tap.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 border border-orange-100 shadow-soft text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-600/20">
              3
            </div>
            <h3 className="font-extrabold text-base text-gray-900 mb-2">
              Live OTP & Kaam Guarantee
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Track arrival live with start OTP. Pay securely after inspecting before/after photo proof, protected by our 7-Day Kaam Guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. INCLUSIVE BY DEFAULT (Channels Banner)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-orange-100/70 via-amber-100/50 to-teal-100/60 border-y border-orange-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-black text-primary uppercase tracking-wider block">
            Accessible To Everyone • समावेशी डिज़ाइन
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Not An App-Only Club. Built for Real Indian Neighbourhoods.
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Blue-collar workers and elderly customers often don't type or navigate complex apps. Sahayak works wherever they are.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm">
              <span className="text-3xl block mb-1">📱</span>
              <span className="font-bold text-xs text-gray-900 block">PWA Smartphone</span>
              <span className="text-[10px] text-gray-500">Android 2G/3G friendly</span>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm">
              <span className="text-3xl block mb-1">💬</span>
              <span className="font-bold text-xs text-gray-900 block">WhatsApp Bot</span>
              <span className="text-[10px] text-gray-500">Book & track inside chat</span>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm">
              <span className="text-3xl block mb-1">📞</span>
              <span className="font-bold text-xs text-gray-900 block">IVR / Missed Call</span>
              <span className="text-[10px] text-gray-500">Feature phone callback</span>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-sm">
              <span className="text-3xl block mb-1">🏪</span>
              <span className="font-bold text-xs text-gray-900 block">Chowk Points</span>
              <span className="text-[10px] text-gray-500">Local hardware shop kiosks</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. BOTTOM CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#FF6B35] via-[#E8531D] to-[#0B4F6C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              हर काम, हर वक्त, हर पड़ोस में।
            </h2>
            <p className="text-sm sm:text-base text-orange-100 font-medium">
              Join thousands of households and skilled workers making the chowk digital, trusted, and fair.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleCustomerStart}
                className="bg-white text-primary hover:bg-orange-50 font-black px-6 py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book a Service Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleWorkerStart}
                className="bg-[#0B4F6C] hover:bg-[#083b52] border border-teal-300/40 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all"
              >
                Register as a Worker
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-xs text-gray-500 space-y-2">
        <p className="font-bold text-gray-800">
          सहायक • Sahayak — A Hyperlocal Blue-Collar Services Platform
        </p>
        <p>
          DigiLocker & Aadhaar eKYC • 7-Day Kaam Guarantee • Sealed Handshake Midpoint Algorithm
        </p>
        <p className="text-[11px] text-gray-400">
          Built for Social Impact Hackathon • Prototype Demo
        </p>
      </footer>
    </div>
  );
}

export default Landing;
