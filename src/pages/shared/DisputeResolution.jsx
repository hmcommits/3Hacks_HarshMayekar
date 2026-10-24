import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Sparkles,
  FileText,
  Clock,
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Scale
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";

export function DisputeResolution() {
  const [newDisputeModalOpen, setNewDisputeModalOpen] = useState(false);
  const [disputeText, setDisputeText] = useState("");

  const activeDispute = {
    id: "DSP-4019",
    jobId: "JOB-1079",
    customer: "Vikram Singhania",
    worker: "Vijay Patil (Electrician)",
    amountInVault: 650,
    status: "IN_MEDIATION", // "AI_ANALYSIS" | "IN_MEDIATION" | "RESOLVED"
    openedAt: "Today, 10:45 AM",
    aiSummary:
      "Based on uploaded photo evidence, chat timestamps and multi-meter readings, the secondary wiring terminal sustained pre-existing heat warping prior to worker arrival. Worker's proposed Scope Change (+₹280) is consistent with Rate Compass parts guidelines. Customer felt surprised by on-site addition.",
    resolutionRecommendation:
      "Apply 50% platform goodwill credit on parts allowance. Customer pays original ₹650 + ₹140; platform absorbs remaining ₹140. Kaam Guarantee warranty issued for 14 days.",
    evidence: {
      beforePhoto: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=80",
      chatSnippet: "10:18 AM: 'Vijay arrived on site' • 10:35 AM: 'Vijay uploaded photo showing melted secondary terminal'",
      vaultStatus: "₹650 safely held in escrow"
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
            Fair Arbitrage • विवाद समाधान
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
            Dispute & Kaam Guarantee Desk
          </h1>
          <p className="text-xs text-textMuted">
            Transparent mediation powered by Describe-It AI evidence summaries and Senior Mistri Guild panels.
          </p>
        </div>

        <Button
          size="sm"
          variant="outline"
          onClick={() => setNewDisputeModalOpen(true)}
        >
          Open Ticket
        </Button>
      </div>

      {/* Active Dispute Case Card */}
      <Card className="p-5 border-2 border-orange-200 shadow-soft space-y-4">
        <div className="flex items-center justify-between border-b border-orange-50 pb-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            <div>
              <span className="text-xs font-black text-textDark">
                Case #{activeDispute.id} • {activeDispute.jobId}
              </span>
              <span className="text-[10px] text-textMuted block">
                Opened {activeDispute.openedAt}
              </span>
            </div>
          </div>
          <Badge variant="warning" size="sm" dot>
            Mediation in Progress (24h)
          </Badge>
        </div>

        {/* AI Evidence Summary Box (Crucial requirement from prompt) */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50/70 p-4 rounded-2xl border border-orange-200 space-y-2">
          <div className="flex items-center gap-1.5 text-primary text-xs font-black">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Describe-It AI Evidence Synthesis:</span>
          </div>
          <p className="text-xs text-textDark leading-relaxed font-medium">
            "{activeDispute.aiSummary}"
          </p>
        </div>

        {/* Evidence Visual Display */}
        <div className="space-y-2 pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-textMuted block">
            Case Evidence Archive
          </span>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-1">
              <span className="text-[11px] font-semibold text-textDark block">
                Doorstep Photo Proof:
              </span>
              <img
                src={activeDispute.evidence.beforePhoto}
                alt="Evidence"
                className="w-full h-24 object-cover rounded-xl border border-orange-100"
              />
            </div>

            <div className="p-2.5 rounded-xl bg-orange-50/40 border border-orange-100 text-[11px] text-textMuted space-y-1">
              <span className="font-bold text-textDark block">Audit Log:</span>
              <p>{activeDispute.evidence.chatSnippet}</p>
              <span className="text-emerald-700 font-bold block pt-1">
                ✓ {activeDispute.evidence.vaultStatus}
              </span>
            </div>
          </div>
        </div>

        {/* AI & Guild Recommendation Box */}
        <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-950 space-y-1">
          <div className="flex items-center gap-1.5 font-extrabold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Mediator Proposed Fair Resolution:</span>
          </div>
          <p className="text-[11px] leading-relaxed text-emerald-900 font-medium">
            {activeDispute.resolutionRecommendation}
          </p>
        </div>

        {/* Decision Actions */}
        <div className="flex gap-2 pt-1">
          <Button
            size="sm"
            fullWidth
            onClick={() => alert("Proposed settlement accepted! ₹140 goodwill applied and worker dispatched to complete.")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
          >
            Accept Mediation Settlement
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert("Escalated to 3-member Senior Guild Community Panel")}
          >
            Escalate to Guild
          </Button>
        </div>
      </Card>

      {/* Kaam Guarantee Claim Banner */}
      <div className="p-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-3xl shadow-soft space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-white" />
          <h3 className="font-extrabold text-sm">
            7-Day Kaam Guarantee Redo-or-Refund
          </h3>
        </div>
        <p className="text-xs text-orange-100 leading-relaxed">
          If workmanship fails within 7 days, we send a senior Guild Master for a free re-service or process a 100% refund.
        </p>
        <button
          onClick={() => setNewDisputeModalOpen(true)}
          className="mt-2 bg-white text-primary text-xs font-extrabold px-4 py-2 rounded-xl shadow-sm hover:bg-orange-50 transition-colors"
        >
          Claim Kaam Guarantee Now
        </button>
      </div>

      {/* Open Ticket Modal */}
      <Modal
        isOpen={newDisputeModalOpen}
        onClose={() => setNewDisputeModalOpen(false)}
        title="Open Dispute / Warranty Claim"
        subtitle="Reviewed by Chowk Captain within 24 hours"
      >
        <div className="space-y-4 py-2 text-xs">
          <div>
            <label className="font-bold text-textDark block mb-1">
              Select Job:
            </label>
            <select className="w-full p-2.5 rounded-xl border border-orange-200 outline-none text-xs font-semibold">
              <option>JOB-1082 (Ramesh Kumar - Plumber)</option>
              <option>JOB-1079 (Vijay Patil - Electrician)</option>
              <option>JOB-1075 (Akbar Miyan - Carpenter)</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-textDark block mb-1">
              Describe Issue / समस्या बताएं:
            </label>
            <textarea
              rows={3}
              value={disputeText}
              onChange={(e) => setDisputeText(e.target.value)}
              placeholder="e.g. Joint started leaking again 2 days after repair..."
              className="w-full p-3 rounded-xl border border-orange-200 outline-none text-xs"
            />
          </div>

          <Button
            fullWidth
            onClick={() => {
              alert("Dispute ticket opened! AI is preparing evidence packet.");
              setNewDisputeModalOpen(false);
            }}
          >
            Submit for Mediation
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default DisputeResolution;
