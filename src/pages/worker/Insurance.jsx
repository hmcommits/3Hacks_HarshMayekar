import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Umbrella,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  PhoneCall,
  HeartPulse,
  Users,
  DollarSign
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export function Insurance() {
  const [claimModalOpen, setClaimModalOpen] = useState(false);
  const [claimReason, setClaimReason] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Social Safety Net • सुरक्षा बीमा
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Micro-Insurance & Protection
        </h1>
        <p className="text-xs text-textMuted">
          Built into every gig. A tiny ₹3 per-job contribution funds your emergency accident and health cover.
        </p>
      </div>

      {/* Main Insurance Status Card */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-secondary text-white p-6 rounded-3xl shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Umbrella className="w-6 h-6 text-emerald-200" />
            <h3 className="font-extrabold text-sm uppercase tracking-wide">
              Active Protection Plan
            </h3>
          </div>
          <span className="text-[10px] bg-white/20 font-black px-2.5 py-0.5 rounded-full">
            POLICY #SHK-INS-99201
          </span>
        </div>

        <div>
          <span className="text-xs text-emerald-200 font-semibold block">
            Accidental Disability & Death Cover:
          </span>
          <div className="text-4xl font-black mt-0.5 tracking-tight">
            ₹3,00,000
          </div>
          <span className="text-xs text-emerald-100 font-medium block mt-1">
            + ₹50,000 Cashless Emergency Hospitalisation Cover
          </span>
        </div>

        <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs">
          <div>
            <span className="text-emerald-200 block text-[11px]">Funded By:</span>
            <span className="font-extrabold">₹3 deduction / completed job</span>
          </div>
          <span className="text-emerald-300 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> 78 Active Contributions
          </span>
        </div>
      </div>

      {/* Per-Job Contribution Meter */}
      <Card className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-xs text-textDark">
              Your Insurance Contribution Pool
            </h3>
            <p className="text-[11px] text-textMuted">
              Current cycle accumulated balance
            </p>
          </div>
          <span className="text-sm font-black text-primary">₹234 / ₹300 Max Pool</span>
        </div>

        <div className="w-full bg-orange-100 h-2.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full rounded-full" style={{ width: "78%" }} />
        </div>

        <p className="text-[11px] text-textMuted">
          Once the pool reaches ₹300, any excess contributions roll directly into your Diwali savings bonus in Kaam Khata!
        </p>
      </Card>

      {/* Coverage Breakdown */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          What is Covered
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Card className="p-4 space-y-1.5">
            <div className="flex items-center gap-2 text-primary font-bold">
              <HeartPulse className="w-4 h-4" />
              <span>On-the-Job Accidents</span>
            </div>
            <p className="text-[11px] text-textMuted leading-relaxed">
              Covers falls from ladders, electric shocks, burns and tool injuries during transit or at customer premises.
            </p>
          </Card>

          <Card className="p-4 space-y-1.5">
            <div className="flex items-center gap-2 text-secondary font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Cashless Hospitalisation</span>
            </div>
            <p className="text-[11px] text-textMuted leading-relaxed">
              Direct settlement across 450+ network hospitals in Mumbai MMR with your Sahayak Work Passport card.
            </p>
          </Card>
        </div>
      </div>

      {/* Worker Cooperative Option */}
      <Card className="p-5 space-y-3 bg-gradient-to-r from-orange-50/60 to-amber-50/60 border-orange-200">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="font-extrabold text-xs text-textDark">
            Andheri West Worker Cooperative Guild
          </h3>
        </div>
        <p className="text-[11px] text-textMuted leading-relaxed">
          High-performing guild workers co-own the platform's local emergency reserve. Provides instant zero-interest emergency advances up to ₹10,000 for medical needs.
        </p>
      </Card>

      {/* Claim Initiation CTA */}
      <div className="pt-2">
        <Button
          size="lg"
          fullWidth
          variant="danger"
          onClick={() => setClaimModalOpen(true)}
          icon={AlertCircle}
        >
          Initiate Emergency Insurance Claim
        </Button>
      </div>

      {/* Claim Modal */}
      <Modal
        isOpen={claimModalOpen}
        onClose={() => setClaimModalOpen(false)}
        title="Initiate Insurance Claim"
        subtitle="24x7 Sahayak Welfare Desk"
      >
        <div className="space-y-4 py-2 text-xs">
          <div className="p-3 bg-red-50 text-red-900 rounded-2xl border border-red-200">
            For critical life emergencies, call <strong>112</strong> or visit the nearest hospital first. Our team coordinates cashless discharge.
          </div>

          <div>
            <label className="font-bold text-textDark block mb-1">
              Briefly describe the incident / चोट का विवरण:
            </label>
            <textarea
              rows={3}
              value={claimReason}
              onChange={(e) => setClaimReason(e.target.value)}
              placeholder="e.g. Slipped on wet balcony while repairing pipe valve..."
              className="w-full p-3 rounded-xl border border-orange-200 outline-none"
            />
          </div>

          <Button
            fullWidth
            onClick={() => {
              alert("Claim ticket registered! Our Chowk Welfare Officer will call you in 5 minutes.");
              setClaimModalOpen(false);
            }}
          >
            Submit Claim Ticket
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Insurance;
