import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Phone,
  Share2,
  Navigation,
  Star,
  MapPin,
  Award,
  AlertTriangle,
  Users
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import { TrustScoreRing } from "../../components/ui/TrustScoreRing";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Modal from "../../components/ui/Modal";

export function WorkerMatch() {
  const navigate = useNavigate();
  const { currentBooking, workers, jobs } = useAppStore();

  const [callModalOpen, setCallModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  // Countdown timer from 12:00
  const [secondsLeft, setSecondsLeft] = useState(720); // 12 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const matchedWorker =
    workers.find((w) => w.id === (currentBooking?.workerId || 1)) || workers[0];

  const activeJobId = currentBooking?.id || jobs[0]?.id || "JOB-1082";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Match Found Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-5 rounded-3xl shadow-lg text-center relative overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-md">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-xl sm:text-2xl font-black">
          Match Found! बधाई हो 🎉
        </h1>
        <p className="text-xs text-emerald-100 mt-1 max-w-xs mx-auto">
          {matchedWorker.name} accepted your sealed price. Parallel dispatch secured under the 30-Min Promise.
        </p>
      </div>

      {/* Large Worker Profile Card */}
      <Card className="p-5 border-2 border-orange-100 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <img
                src={matchedWorker.photo}
                alt={matchedWorker.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-primary shadow-sm"
              />
              <span className="absolute -bottom-1 -right-1 bg-emerald-500 text-white p-1 rounded-full text-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-lg font-black text-textDark">
                  {matchedWorker.name}
                </h2>
                <span className="text-[10px] bg-orange-100 text-primary-700 font-extrabold px-2 py-0.5 rounded-full">
                  {matchedWorker.trade}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-textMuted mt-1">
                <span className="flex items-center text-amber-600 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-0.5" />
                  {matchedWorker.rating} ({matchedWorker.reviews} reviews)
                </span>
                <span>•</span>
                <span>{matchedWorker.experience}</span>
              </div>
              <span className="text-xs text-secondary font-semibold block mt-0.5">
                📍 {matchedWorker.location}
              </span>
            </div>
          </div>

          <TrustScoreRing score={matchedWorker.trustScore} size={62} />
        </div>

        {/* 4 Layers of Verification Badges Row */}
        <div className="pt-2 border-t border-orange-50">
          <span className="text-[10px] font-bold uppercase tracking-wider text-textMuted block mb-1.5">
            4-Layer Sahayak Trust Verification
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 p-2 rounded-xl border border-emerald-100 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>1. eKYC Aadhaar</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 p-2 rounded-xl border border-emerald-100 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>2. Police Check</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 p-2 rounded-xl border border-emerald-100 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>3. Skill Tested</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 p-2 rounded-xl border border-emerald-100 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>4. Guild Vouched</span>
            </div>
          </div>
        </div>

        {/* Specialties Tags */}
        {matchedWorker.specialties && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {matchedWorker.specialties.map((spec, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-orange-50/80 text-textDark px-2.5 py-1 rounded-lg border border-orange-100 font-medium"
              >
                {spec}
              </span>
            ))}
          </div>
        )}
      </Card>

      {/* ETA Countdown & Confirmed Terms */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-3xl border border-orange-100 shadow-soft text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-primary font-bold mb-1">
            <Clock className="w-4 h-4 animate-spin" />
            <span>Live ETA Countdown</span>
          </div>
          <div className="text-3xl font-black text-textDark font-mono tracking-tight">
            {formatTimer(secondsLeft)}
          </div>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-1">
            Within 30-Min Guarantee
          </span>
        </div>

        <div className="bg-white p-4 rounded-3xl border border-orange-100 shadow-soft text-center">
          <span className="text-xs text-textMuted font-bold block mb-1">
            Confirmed Price
          </span>
          <div className="text-3xl font-black text-primary tracking-tight">
            ₹{currentBooking?.price || matchedWorker.price}
          </div>
          <span className="text-[10px] text-emerald-700 font-semibold block mt-1">
            7-Day Kaam Guarantee
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          size="lg"
          fullWidth
          onClick={() => navigate(`/customer/track/${activeJobId}`)}
          className="bg-primary hover:bg-primary-600 text-base font-black py-4 shadow-elevated"
          icon={Navigation}
        >
          Track Live Arrival & Job
        </Button>

        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={() => setCallModalOpen(true)}
            icon={Phone}
          >
            Call (Masked)
          </Button>

          <Button
            variant="outlineSecondary"
            size="md"
            onClick={() => setShareModalOpen(true)}
            icon={Share2}
          >
            Share Location
          </Button>
        </div>
      </div>

      {/* Masked Call Modal */}
      <Modal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        title="Privacy Masked Calling"
        subtitle="Your phone number is completely protected"
      >
        <div className="text-center space-y-4 py-2">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <Phone className="w-6 h-6 animate-bounce" />
          </div>
          <p className="text-xs text-textDark leading-relaxed">
            Connecting you to <strong>{matchedWorker.name}</strong> via Sahayak's secure bridge number. Neither party's personal phone number is shared.
          </p>
          <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 font-mono text-sm font-bold text-primary">
            +91 22 6902 4400 (Ext 401)
          </div>
          <Button
            fullWidth
            onClick={() => {
              alert(`Calling worker via masked proxy bridge...`);
              setCallModalOpen(false);
            }}
          >
            Start Encrypted Call
          </Button>
        </div>
      </Modal>

      {/* Share Trusted Contact Modal */}
      <Modal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        title="Share with Trusted Contact"
        subtitle="Women & Household Safety Protocol"
      >
        <div className="space-y-4 py-2">
          <p className="text-xs text-textMuted">
            A live GPS track link with worker's verified profile and ETA will be sent via SMS / WhatsApp to your trusted emergency contact.
          </p>
          <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 text-xs font-semibold text-textDark">
            Emergency Contact: Rohit Sharma (+91 98200 99881)
          </div>
          <Button
            fullWidth
            onClick={() => {
              alert("Tracking link sent to Rohit Sharma successfully!");
              setShareModalOpen(false);
            }}
          >
            Send Safety Link Now
          </Button>
        </div>
      </Modal>
    </motion.div>
  );
}

export default WorkerMatch;
