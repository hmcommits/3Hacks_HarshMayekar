import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Users,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Sparkles,
  Award,
  ChevronRight,
  TrendingUp,
  MapPin,
  Check,
  X
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";

export function AdminDashboard() {
  const { workers, jobs } = useAppStore();

  const [verificationQueue, setVerificationQueue] = useState([
    {
      id: "VER-109",
      name: "Sunil Shinde",
      trade: "Carpenter",
      location: "Goregaon West",
      status: "DigiLocker eKYC Completed",
      actionNeeded: "Verify 1-Min Video Skill Test",
      time: "15 min ago"
    },
    {
      id: "VER-112",
      name: "Fatima Bi",
      trade: "Cook / Cleaner",
      location: "Bandra West",
      status: "Police Clearance Uploaded",
      actionNeeded: "Approve Women-First Badge",
      time: "42 min ago"
    }
  ]);

  const [escalations, setEscalations] = useState([
    {
      id: "ESC-88",
      customer: "Amitabh Verma",
      trade: "AC Technician",
      area: "Juhu",
      reason: "No worker accepted within 6 minutes (Widen radius to Bandra)",
      time: "2 min ago"
    }
  ]);

  const handleApproveWorker = (id) => {
    setVerificationQueue((prev) => prev.filter((item) => item.id !== id));
    alert("Worker verification approved! Tier upgraded to Guild Master.");
  };

  const handleManualDispatch = (id) => {
    setEscalations((prev) => prev.filter((item) => item.id !== id));
    alert("Manual telephone dispatch initiated by Chowk Captain!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-primary font-bold">
          <Layers className="w-4 h-4" />
          <span>Local Operations Command</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Chowk Captain Dashboard
        </h1>
        <p className="text-xs text-textMuted">
          Andheri & Western Suburbs Cluster • Fair Rotation monitoring, dispatch cascades & verification queues.
        </p>
      </div>

      {/* Platform Key Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft">
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            Ready Workers
          </span>
          <span className="text-xl font-black text-primary block mt-0.5">
            48 Online
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold">
            18 Plumbers Ready
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft">
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            Today's Jobs
          </span>
          <span className="text-xl font-black text-secondary block mt-0.5">
            142 Dispatched
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold">
            96% Completion
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft">
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            Avg Match Speed
          </span>
          <span className="text-xl font-black text-textDark block mt-0.5">
            1.8 min
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold">
            Promise met: 98.4%
          </span>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-orange-100 shadow-soft">
          <span className="text-[10px] text-textMuted uppercase font-bold block">
            Fairness Score
          </span>
          <span className="text-xl font-black text-emerald-700 block mt-0.5">
            0.18 Gini
          </span>
          <span className="text-[10px] text-emerald-800 font-semibold">
            Near-Optimal Equity
          </span>
        </div>
      </div>

      {/* Escalated Jobs Queue (Manual Dispatch Needed) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            Escalated Jobs Queue ({escalations.length})
          </h2>
          <span className="text-[10px] text-textMuted">Fallback Cascade Level 3</span>
        </div>

        {escalations.length > 0 ? (
          escalations.map((item) => (
            <Card key={item.id} className="p-4 border-2 border-red-200 bg-red-50/40 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-black text-textDark block">
                    {item.customer} • {item.trade} ({item.area})
                  </span>
                  <p className="text-xs text-red-800 mt-0.5 font-medium">
                    ⚠️ {item.reason}
                  </p>
                </div>
                <span className="text-[10px] text-textMuted font-mono">{item.time}</span>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={() => handleManualDispatch(item.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  Captain Direct Call Dispatch
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert("Radius widened to 5km with customer consent.")}
                >
                  Widen Radius
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-800 font-semibold text-center">
            ✓ Zero escalated jobs. All requests dispatched under parallel match.
          </div>
        )}
      </div>

      {/* Worker Verification Queue */}
      <div className="space-y-3">
        <h2 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          Pending Worker Verifications ({verificationQueue.length})
        </h2>

        <div className="space-y-2.5">
          {verificationQueue.map((item) => (
            <Card key={item.id} className="p-4 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-textDark">{item.name}</span>
                  <span className="text-[10px] bg-orange-100 text-primary font-bold px-1.5 py-0.5 rounded">
                    {item.trade}
                  </span>
                </div>
                <p className="text-[11px] text-textMuted">
                  {item.location} • {item.status}
                </p>
                <span className="text-[10px] text-secondary font-bold block pt-0.5">
                  Action: {item.actionNeeded}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleApproveWorker(item.id)}
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
                  title="Approve"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={() => alert("Verification returned for clarification")}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-textMuted transition-colors"
                  title="Reject"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Fair Rotation & Anti-Bias Audit Report */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-secondary" />
            <h3 className="font-extrabold text-xs text-textDark">
              Algorithmic Fairness & Bias Audit
            </h3>
          </div>
          <Badge variant="success" size="sm">
            Audited Daily
          </Badge>
        </div>

        <p className="text-[11px] text-textMuted leading-relaxed">
          Sahayak strictly prevents the "rich-get-richer" superstar worker problem. Every newly onboarded starter worker gets guaranteed visibility in at least 25% of parallel dispatch offer cascades in their postal code.
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs pt-1">
          <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100">
            <span className="text-[10px] text-textMuted block font-bold">
              Starter Tier Offer Share
            </span>
            <span className="text-base font-black text-primary">28.4%</span>
            <span className="text-[10px] text-emerald-700 block mt-0.5">
              Above target minimum (25%)
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-orange-50/50 border border-orange-100">
            <span className="text-[10px] text-textMuted block font-bold">
              Dispute Vindication Rate
            </span>
            <span className="text-base font-black text-secondary">92%</span>
            <span className="text-[10px] text-emerald-700 block mt-0.5">
              Balanced worker/client justice
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AdminDashboard;
