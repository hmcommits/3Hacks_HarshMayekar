import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Volume2,
  CheckCircle2,
  XCircle,
  Star,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  Navigation
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export function JobOffer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, finalizeJobBooking, workers } = useAppStore();

  const [timer, setTimer] = useState(30);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const offerJob = jobs.find((j) => j.id === id) || jobs[0];

  const handlePlayVoiceSummary = () => {
    setIsPlayingAudio(true);
    // Voice preview simulation
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(
        `Naya kaam offer. ${offerJob.trade}. Andheri West, distance 1.2 kilometre. Earning ₹${offerJob.price}.`
      );
      utterance.lang = "hi-IN";
      utterance.onend = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => setIsPlayingAudio(false), 2500);
    }
  };

  const handleAccept = () => {
    alert("Job accepted! Parallel dispatch secured. Directing to live navigation...");
    navigate(`/customer/track/${offerJob.id}`);
  };

  const handleDecline = () => {
    alert("Job declined. Passed to next worker in fair rotation pool.");
    navigate("/worker");
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-between space-y-4">
      {/* Top Countdown Timer Banner */}
      <div className="bg-gradient-to-r from-primary to-amber-500 text-white p-4 rounded-3xl shadow-soft flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 animate-spin" />
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider block opacity-90">
              Parallel Dispatch Offer
            </span>
            <h3 className="font-extrabold text-xs">First to tap secures the job</h3>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-2xl text-center">
          <span className="text-2xl font-black font-mono">{timer}s</span>
        </div>
      </div>

      {/* Main Job Offer Card (Audio + Visual) */}
      <Card className="p-6 border-2 border-orange-200 shadow-elevated space-y-5 flex-1">
        {/* Audio Card Strip */}
        <div className="bg-orange-50/80 p-3 rounded-2xl border border-orange-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePlayVoiceSummary}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isPlayingAudio
                  ? "bg-primary text-white animate-pulse"
                  : "bg-white text-primary border border-orange-200 shadow-sm"
              }`}
            >
              <Volume2 className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs font-bold text-textDark block">
                {isPlayingAudio ? "Playing Voice Note (Hindi)..." : "Listen in Hindi / बोलकर सुनें"}
              </span>
              <span className="text-[10px] text-textMuted">Tap to hear scope & directions</span>
            </div>
          </div>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
            Vernacular Ready
          </span>
        </div>

        {/* Pricing & Trade Banner */}
        <div className="text-center space-y-1">
          <span className="text-xs text-textMuted font-bold uppercase tracking-wider">
            Your Instant Payout (Sealed Settlement)
          </span>
          <div className="text-5xl font-black text-primary tracking-tight">
            ₹{offerJob.price}
          </div>
          <span className="text-xs text-emerald-700 font-bold block">
            Direct UPI Settlement upon OTP completion
          </span>
        </div>

        {/* Location & Distance */}
        <div className="bg-orange-50/40 p-4 rounded-2xl border border-orange-100 grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-[10px] text-textMuted uppercase font-bold block">
              Customer Locality
            </span>
            <span className="font-extrabold text-textDark block mt-0.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              {offerJob.locality || "Andheri West"}
            </span>
            <span className="text-[10px] text-textMuted">1.2 km away (~6 min ride)</span>
          </div>

          <div>
            <span className="text-[10px] text-textMuted uppercase font-bold block">
              Customer Trust Rating
            </span>
            <span className="font-extrabold text-amber-700 block mt-0.5 flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              4.8 ★ Verified Household
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold">
              Payment Secured in Vault
            </span>
          </div>
        </div>

        {/* Job Scope */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-textMuted block">
            Job Scope / काम का विवरण:
          </span>
          <h4 className="text-sm font-extrabold text-textDark mt-0.5">
            {offerJob.issue}
          </h4>
          {offerJob.hindiDescription && (
            <p className="text-xs text-textMuted mt-1 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100 font-medium">
              🇮🇳 {offerJob.hindiDescription}
            </p>
          )}
        </div>

        {/* Expandable Details Accordion */}
        <div className="pt-2 border-t border-orange-50">
          <button
            onClick={() => setDetailsOpen(!detailsOpen)}
            className="w-full flex items-center justify-between text-xs font-bold text-secondary hover:underline"
          >
            <span>View Materials & Customer Safety Notes</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${detailsOpen ? "rotate-180" : ""}`} />
          </button>

          {detailsOpen && (
            <div className="mt-3 space-y-2 text-xs text-textMuted bg-orange-50/30 p-3 rounded-2xl border border-orange-100">
              <p>• Materials: Teflon tape, 1.5" PVC Coupler</p>
              <p>• Estimated time on site: 45 minutes</p>
              <p>• 7-Day workmanship Kaam Guarantee applies</p>
            </div>
          )}
        </div>
      </Card>

      {/* Action Buttons: Big Green ACCEPT & Outline DECLINE */}
      <div className="space-y-2.5 pt-2">
        <Button
          size="xl"
          fullWidth
          onClick={handleAccept}
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-black py-4 shadow-elevated"
          icon={CheckCircle2}
        >
          स्वीकार करें / ACCEPT JOB (₹{offerJob.price})
        </Button>

        <Button
          variant="outline"
          size="md"
          fullWidth
          onClick={handleDecline}
          className="border-gray-300 text-textMuted hover:bg-gray-100 font-semibold"
          icon={XCircle}
        >
          अस्वीकार / Decline (Pass to next worker)
        </Button>
      </div>
    </div>
  );
}

export default JobOffer;
