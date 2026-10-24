import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Star,
  Users,
  Award,
  ArrowRight,
  HelpCircle,
  FileCheck2,
  Check
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import { TrustScoreRing } from "../../components/ui/TrustScoreRing";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export function TrustScorePage() {
  const { workers } = useAppStore();
  const worker = workers[0]; // Ramesh Kumar

  const breakdownMetrics = [
    { title: "Verification Depth (eKYC & Checks)", weight: "30%", score: 28, max: 30 },
    { title: "Completion & On-Time Arrival (94%)", weight: "25%", score: 24, max: 25 },
    { title: "Customer Ratings (4.8 ★ Avg)", weight: "20%", score: 19, max: 20 },
    { title: "Dispute-Free Track Record", weight: "15%", score: 14, max: 15 },
    { title: "Warranty Callbacks Fulfilled (Kaam Guarantee)", weight: "10%", score: 9, max: 10 }
  ];

  const improvementActions = [
    {
      action: "Upload Advanced Video Practical Check",
      delta: "+8 pts",
      description: "Demonstrate pipe threading & geyser pressure check on video",
      category: "Skill Check"
    },
    {
      action: "Renew DigiLocker Police Clearance Certificate",
      delta: "+12 pts",
      description: "Consent-based direct lookup via Maharashtra Police portal",
      category: "Background Check"
    },
    {
      action: "Complete 10 more 5-star jobs this month",
      delta: "+5 pts",
      description: "Boosts recency weighting in algorithm",
      category: "Service Track"
    }
  ];

  const vouchers = [
    { name: "Shyam Hardware & Spares (Andheri West)", role: "Local Hardware Store Partner", date: "Vouched 6 mos ago" },
    { name: "Gokuldham RWA Chief Guard", role: "Society Security Lead", date: "Vouched 3 mos ago" },
    { name: "Master Mistri Suresh (Guild Elder)", role: "Senior Plumber Mentor", date: "Vouched 1 yr ago" }
  ];

  const tagFrequencies = [
    { tag: "Punctual (समय पर)", count: 98 },
    { tag: "Clean Work (साफ काम)", count: 86 },
    { tag: "Fair Quote (सही भाव)", count: 74 },
    { tag: "Polite Behavior", count: 65 },
    { tag: "Master Skill", count: 52 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Algorithmic Transparency • विश्वास स्कोर
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Trust Score Intelligence
        </h1>
        <p className="text-xs text-textMuted">
          A transparent 0-100 index. No black box algorithm. Every point is explainable, earned and verifiable.
        </p>
      </div>

      {/* Large Trust Score Ring Hero */}
      <Card className="p-6 text-center space-y-4 border-2 border-orange-100 shadow-soft">
        <TrustScoreRing score={worker.trustScore} size={130} strokeWidth={11} />
        <div>
          <h2 className="text-lg font-black text-textDark">
            {worker.name} • Trust Score: {worker.trustScore}/100
          </h2>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full inline-block mt-1">
            Top 5% in Andheri West Chowk Guild
          </span>
          <p className="text-xs text-textMuted mt-2 max-w-sm mx-auto">
            Qualifies for instant parallel dispatch, 0% platform penalty deductions & premium society batching jobs.
          </p>
        </div>
      </Card>

      {/* Score Breakdown Bars (30%, 25%, 20%, 15%, 10%) */}
      <Card className="p-5 space-y-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
          Score Weight Breakdown / स्कोर का गणित
        </h3>

        <div className="space-y-3 pt-1">
          {breakdownMetrics.map((item, idx) => {
            const percent = (item.score / item.max) * 100;
            return (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-textDark">
                  <span>{item.title}</span>
                  <span className="text-primary">
                    {item.score}/{item.max} ({item.weight} weight)
                  </span>
                </div>
                <div className="w-full bg-orange-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-500"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Actionable "How to Improve" Section */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          How to Raise Your Score / स्कोर कैसे बढ़ाएं
        </h3>

        <div className="space-y-2.5">
          {improvementActions.map((action, idx) => (
            <Card key={idx} className="p-4 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-textDark">{action.action}</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-1.5 py-0.5 rounded">
                    {action.delta}
                  </span>
                </div>
                <p className="text-[11px] text-textMuted">{action.description}</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => alert(`Starting: ${action.action}`)}
                className="shrink-0 ml-3"
              >
                Start
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* 4 Verification Layers Cards */}
      <Card className="p-5 space-y-4">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
          4 Verification Layers Status
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-emerald-950 block">Layer 1: Identity eKYC</span>
              <span className="text-[10px] text-emerald-800">Aadhaar & biometric verified</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-emerald-950 block">Layer 2: Police Verification</span>
              <span className="text-[10px] text-emerald-800">Character clearance on file</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-emerald-950 block">Layer 3: Skill Certification</span>
              <span className="text-[10px] text-emerald-800">ITI / Practical video tested</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>

          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-emerald-950 block">Layer 4: Community Guild Vouching</span>
              <span className="text-[10px] text-emerald-800">5 senior endorsements</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </Card>

      {/* Community Vouchers Section */}
      <Card className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-primary" />
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
            Mistri Guild Vouching Network
          </h3>
        </div>
        <p className="text-[11px] text-textMuted">
          Vouchers stake their own Trust Score when endorsing you, ensuring genuine community accountability.
        </p>

        <div className="space-y-2 pt-1">
          {vouchers.map((v, i) => (
            <div key={i} className="p-2.5 rounded-xl bg-orange-50/50 border border-orange-100 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-textDark block">{v.name}</span>
                <span className="text-[10px] text-textMuted">{v.role}</span>
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold">{v.date}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Rating Tag Breakdown */}
      <Card className="p-5 space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
          Customer Endorsement Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tagFrequencies.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-bold text-textDark flex items-center gap-1.5"
            >
              <span>{t.tag}</span>
              <span className="text-primary font-black">+{t.count}</span>
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default TrustScorePage;
