import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  QrCode,
  Share2,
  Download,
  Calendar,
  Briefcase,
  Star,
  Clock,
  Sparkles,
  Zap,
  Umbrella
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import { TrustScoreRing } from "../../components/ui/TrustScoreRing";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export function WorkPassport() {
  const { workers } = useAppStore();
  const worker = workers[0]; // Ramesh Kumar

  const skillsWithProficiency = [
    { name: "CPVC & GI Pipe Fitting", level: 95 },
    { name: "Drainage Unclogging & Jet Clean", level: 90 },
    { name: "Gas Geyser & Water Heater Setup", level: 85 },
    { name: "Sanitaryware & Concealed Valves", level: 92 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
            Digital Credential • कार्य पासपोर्ट
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
            The Work Passport
          </h1>
          <p className="text-xs text-textMuted">
            A portable, sovereign work credential owned by you. Share with banks, RWAs & clients.
          </p>
        </div>

        <button
          onClick={() => alert("Downloading verified Work Passport certificate (PDF)...")}
          className="p-2.5 rounded-2xl bg-white border border-orange-100 text-textDark hover:bg-orange-50 transition-colors shadow-sm flex items-center gap-1.5 text-xs font-bold"
        >
          <Download className="w-4 h-4 text-primary" />
          <span className="hidden sm:inline">Export</span>
        </button>
      </div>

      {/* Physical Passport / Identity Card Design */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-gradient-to-br from-[#102F41] via-[#0B4F6C] to-[#08384D] text-white rounded-[2rem] p-6 shadow-2xl border-4 border-amber-400/40 overflow-hidden"
      >
        {/* Decorative Gold Header Ribbon */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-dark flex items-center justify-center font-black">
              ★
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase text-amber-300 font-extrabold block">
                REPUBLIC OF BHARAT • DIGITAL CHOWK
              </span>
              <h3 className="font-extrabold text-sm tracking-wide">
                SAHAYAK OFFICIAL WORK PASSPORT
              </h3>
            </div>
          </div>
          <span className="text-[9px] font-mono text-amber-200 border border-amber-300/40 px-2 py-0.5 rounded">
            ID: SHK-IND-8821
          </span>
        </div>

        {/* Worker Details & Trust Ring */}
        <div className="flex items-center gap-4 py-5">
          <div className="relative shrink-0">
            <img
              src={worker.photo}
              alt={worker.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-black tracking-tight text-white truncate">
              {worker.name}
            </h2>
            <span className="text-xs text-amber-300 font-bold block mt-0.5">
              Master Mistri • {worker.trade}
            </span>
            <span className="text-[11px] text-teal-200 block mt-0.5">
              Experience: {worker.experience} • Andheri West Guild
            </span>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-emerald-300 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full DigiLocker Verified</span>
            </div>
          </div>

          <div className="shrink-0 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
            <TrustScoreRing score={worker.trustScore} size={56} showLabel={false} strokeWidth={11} />
          </div>
        </div>

        {/* 4 Sovereign Verification Stamps */}
        <div className="grid grid-cols-4 gap-1.5 py-3 border-y border-white/15 text-center text-[10px]">
          <div className="p-1.5 rounded-xl bg-white/10 border border-white/10">
            <span className="text-emerald-300 font-black block">✓ IDENTITY</span>
            <span className="text-[9px] text-teal-100">Aadhaar eKYC</span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/10 border border-white/10">
            <span className="text-emerald-300 font-black block">✓ POLICE</span>
            <span className="text-[9px] text-teal-100">Clear Record</span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/10 border border-white/10">
            <span className="text-emerald-300 font-black block">✓ SKILL</span>
            <span className="text-[9px] text-teal-100">Trade Certified</span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/10 border border-white/10">
            <span className="text-emerald-300 font-black block">✓ GUILD</span>
            <span className="text-[9px] text-teal-100">5 Vouchers</span>
          </div>
        </div>

        {/* Passport Footer with QR code */}
        <div className="flex items-center justify-between pt-4">
          <div className="text-xs space-y-0.5">
            <span className="text-amber-300 font-bold block text-[11px]">
              Micro-Insurance Cover: ₹3,00,000 Active
            </span>
            <span className="text-[10px] text-teal-200 block">
              Issued: Jan 2024 • Validity: Permanent Portable Record
            </span>
          </div>

          {/* QR Code SVG / Emblem */}
          <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-sm flex items-center justify-center shrink-0">
            <QrCode className="w-full h-full text-dark" />
          </div>
        </div>
      </motion.div>

      {/* Verified Skills & Proficiency Bars */}
      <Card className="p-5 space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
          Verified Trade Proficiencies
        </h3>

        <div className="space-y-3 pt-1">
          {skillsWithProficiency.map((skill, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-textDark">
                <span>{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-orange-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Career Milestones */}
      <div className="space-y-2">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          Passport Milestones & Guild Badges
        </h3>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-3 bg-white rounded-2xl border border-orange-100 shadow-soft">
            <span className="text-xl block mb-1">🏆</span>
            <span className="font-extrabold text-textDark block">312 Jobs</span>
            <span className="text-[10px] text-textMuted">100+ Club</span>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-orange-100 shadow-soft">
            <span className="text-xl block mb-1">⭐</span>
            <span className="font-extrabold text-textDark block">4.8 Rating</span>
            <span className="text-[10px] text-textMuted">142 Reviews</span>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-orange-100 shadow-soft">
            <span className="text-xl block mb-1">🔨</span>
            <span className="font-extrabold text-textDark block">Master Guild</span>
            <span className="text-[10px] text-textMuted">Senior Mentor</span>
          </div>
        </div>
      </div>

      {/* Share with Lenders / Employers CTA */}
      <Button
        size="lg"
        fullWidth
        onClick={() => alert("Digital Passport link copied to clipboard! Share with SBI / HDFC micro-loan desks.")}
        className="bg-gradient-to-r from-secondary to-teal-700 text-white font-bold py-4 shadow-elevated"
        icon={Share2}
      >
        Share Passport with Lenders / Employers
      </Button>
    </div>
  );
}

export default WorkPassport;
