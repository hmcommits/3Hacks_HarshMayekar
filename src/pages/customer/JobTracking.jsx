import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  Phone,
  MessageSquare,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  Camera,
  Layers,
  Star,
  Check,
  X
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export function JobTracking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, respondToScopeChange, markJobCompleted } = useAppStore();

  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" | "proof" | "chat"
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [completeModalOpen, setCompleteModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [sliderPosition, setSliderPosition] = useState(50); // for before/after comparison

  // Find job from store or fallback to first job
  const job = jobs.find((j) => j.id === id) || jobs[0];

  const handleScopeDecision = (approved) => {
    respondToScopeChange(job.id, approved);
  };

  const handleFinishJob = () => {
    markJobCompleted(job.id, rating, feedback || "Outstanding work!");
    setCompleteModalOpen(false);
    navigate("/customer");
  };

  const timelineSteps = [
    { title: "Booking Confirmed", subtitle: "Sealed Handshake settled", status: "completed" },
    { title: "Worker En Route", subtitle: "Ramesh is on the way (8 min)", status: "active" },
    { title: "Arrival & Start OTP", subtitle: `Show OTP ${job.otp} on arrival`, status: "pending" },
    { title: "Work in Progress", subtitle: "Replacing fittings & leak test", status: "pending" },
    { title: "Completion & Warranty", subtitle: "7-Day Kaam Guarantee active", status: "pending" }
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-textMuted font-medium">
            <span>Job ID: {job.id}</span>
            <span>•</span>
            <span className="text-primary font-bold">{job.trade}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
            Live Service Tracking
          </h1>
        </div>

        <Link
          to="/emergency"
          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm animate-soft-pulse"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>SOS</span>
        </Link>
      </div>

      {/* Worker Live Status Banner */}
      <Card className="p-4 border-2 border-primary/20 bg-gradient-to-r from-orange-50/50 via-white to-orange-50/30">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={job.workerPhoto || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"}
                alt={job.workerName}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-primary"
              />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-textDark">
                {job.workerName || "Ramesh Kumar"}
              </h3>
              <p className="text-xs text-emerald-700 font-bold mt-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 animate-spin" />
                {job.eta || "En Route • 8 mins away"}
              </p>
              <span className="text-[11px] text-textMuted">
                {job.locality || "Andheri West"}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-textMuted uppercase font-bold block">
              Start OTP
            </span>
            <span className="text-lg font-black font-mono text-primary bg-orange-100 px-2.5 py-1 rounded-xl block mt-0.5 tracking-wider">
              {job.otp}
            </span>
            <span className="text-[9px] text-textMuted block mt-0.5">
              Give to worker at door
            </span>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-orange-100">
          <button
            onClick={() => alert(`Calling ${job.workerName} via masked proxy...`)}
            className="flex items-center justify-center gap-2 py-2 rounded-xl bg-orange-100/60 hover:bg-orange-100 text-xs font-bold text-textDark transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>Call (Masked)</span>
          </button>

          <button
            onClick={() => setChatModalOpen(true)}
            className="flex items-center justify-center gap-2 py-2 rounded-xl bg-orange-100/60 hover:bg-orange-100 text-xs font-bold text-textDark transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-secondary" />
            <span>Chat In-App</span>
          </button>
        </div>
      </Card>

      {/* Scope Change Card (Crucial requirement from prompt!) */}
      {job.hasScopeChange && job.scopeChangeRequest && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-amber-50 rounded-3xl p-5 border-2 border-amber-300 shadow-soft space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-xl bg-amber-500 text-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider">
                  Doorstep Scope Change Request
                </span>
                <h4 className="text-sm font-extrabold text-amber-950 mt-0.5">
                  Worker discovered additional damage
                </h4>
              </div>
            </div>
            <span className="text-xs font-black text-amber-900 bg-amber-200 px-2.5 py-1 rounded-xl">
              +₹{job.scopeChangeRequest.additionalAmount}
            </span>
          </div>

          <p className="text-xs text-amber-900 leading-relaxed font-medium">
            "{job.scopeChangeRequest.reason}"
          </p>

          {job.scopeChangeRequest.photoProof && (
            <div>
              <span className="text-[10px] font-bold uppercase text-amber-800 block mb-1">
                Photo Proof Uploaded by Worker:
              </span>
              <img
                src={job.scopeChangeRequest.photoProof}
                alt="Scope Proof"
                className="w-full h-36 object-cover rounded-2xl border border-amber-200"
              />
            </div>
          )}

          <div className="p-2.5 bg-white/70 rounded-2xl text-[11px] text-amber-900">
            <strong>Sahayak Protection:</strong> If you decline, worker completes original agreed scope or charges only standard ₹100 visit charge. Zero forced upselling.
          </div>

          <div className="flex gap-2 pt-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleScopeDecision(false)}
              className="flex-1 border-amber-300 text-amber-900"
            >
              Decline Change
            </Button>
            <Button
              size="sm"
              onClick={() => handleScopeDecision(true)}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
            >
              Approve (+₹{job.scopeChangeRequest.additionalAmount})
            </Button>
          </div>
        </motion.div>
      )}

      {/* Tabs: Live Timeline vs Proof of Work */}
      <div className="bg-orange-50/80 p-1 rounded-2xl border border-orange-200/60 grid grid-cols-2 gap-1">
        <button
          onClick={() => setActiveTab("timeline")}
          className={`py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "timeline"
              ? "bg-white text-primary shadow-sm"
              : "text-textMuted hover:text-textDark"
          }`}
        >
          ⏱️ Live Timeline
        </button>
        <button
          onClick={() => setActiveTab("proof")}
          className={`py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === "proof"
              ? "bg-white text-primary shadow-sm"
              : "text-textMuted hover:text-textDark"
          }`}
        >
          📷 Proof of Work (Before / After)
        </button>
      </div>

      {/* Tab 1: Live Timeline */}
      {activeTab === "timeline" && (
        <Card className="p-5 space-y-4">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
            Job Progress Pipeline
          </h3>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-orange-200">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <span
                  className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center ${
                    step.status === "completed"
                      ? "bg-emerald-500 text-white"
                      : step.status === "active"
                      ? "bg-primary animate-pulse text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step.status === "completed" && <Check className="w-2.5 h-2.5" />}
                </span>
                <div>
                  <h4
                    className={`text-xs font-bold ${
                      step.status === "active"
                        ? "text-primary"
                        : step.status === "completed"
                        ? "text-textDark"
                        : "text-textMuted"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-textMuted mt-0.5">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-orange-50 flex items-center justify-between text-xs">
            <span className="text-textMuted">Settled Handshake:</span>
            <span className="font-bold text-textDark text-sm">₹{job.price}</span>
          </div>

          <Button
            size="md"
            fullWidth
            onClick={() => setCompleteModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
            icon={CheckCircle2}
          >
            Mark Job Completed & Release Payment
          </Button>
        </Card>
      )}

      {/* Tab 2: Proof of Work (Photo Comparison Slider) */}
      {activeTab === "proof" && (
        <Card className="p-5 space-y-4">
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-textDark">
              Before / After Photo Proof
            </h3>
            <p className="text-[11px] text-textMuted mt-0.5">
              Verified by Describe-It AI before final payout is released.
            </p>
          </div>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-orange-100 select-none">
            {/* After Image (Right/Top layer) */}
            <img
              src={job.afterPhoto || "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&auto=format&fit=crop&q=80"}
              alt="After repair"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Before Image (Left layer, clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={job.beforePhoto || "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop&q=80"}
                alt="Before repair"
                className="w-full h-full object-cover max-w-none"
                style={{ width: "100%" }}
              />
              <span className="absolute bottom-2 left-2 bg-dark/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                BEFORE
              </span>
            </div>

            <span className="absolute bottom-2 right-2 bg-emerald-800/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              AFTER
            </span>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-6 h-6 rounded-full bg-white text-dark shadow-md flex items-center justify-center text-[10px] font-black">
                ⬌
              </div>
            </div>
          </div>

          {/* Slider input */}
          <div className="space-y-1">
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[10px] text-textMuted font-bold">
              <span>← Drag for Before</span>
              <span>Drag for After →</span>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-2.5 text-xs text-emerald-900 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              Workmanship covered under 7-Day Kaam Guarantee warranty. Free callback if any leakage returns.
            </span>
          </div>
        </Card>
      )}

      {/* Completion & Rating Modal */}
      <Modal
        isOpen={completeModalOpen}
        onClose={() => setCompleteModalOpen(false)}
        title="Complete Job & Kaam Guarantee"
        subtitle="Rate worker & activate 7-day workmanship warranty"
      >
        <div className="space-y-4 py-2">
          <div className="text-center">
            <span className="text-xs font-bold text-textMuted block mb-1">
              Rate your experience with {job.workerName}
            </span>
            <div className="flex items-center justify-center gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-textDark">
              Add tags (Helps worker's Trust Score):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {["Punctual", "Clean Work", "Fair Quoting", "Polite", "Skill Master"].map(
                (tag) => (
                  <button
                    key={tag}
                    onClick={() => setFeedback((prev) => `${prev} #${tag}`)}
                    className="text-xs bg-orange-50 hover:bg-orange-100 text-textDark px-2.5 py-1 rounded-xl border border-orange-200 transition-colors"
                  >
                    +{tag}
                  </button>
                )
              )}
            </div>
          </div>

          <textarea
            rows={2}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write a brief review..."
            className="w-full text-xs p-3 rounded-xl border border-orange-200 outline-none focus:ring-1 focus:ring-primary"
          />

          <Button fullWidth onClick={handleFinishJob}>
            Confirm Completion & Settle ₹{job.price}
          </Button>
        </div>
      </Modal>

      {/* In-App Chat Modal */}
      <Modal
        isOpen={chatModalOpen}
        onClose={() => setChatModalOpen(false)}
        title={`Chat with ${job.workerName}`}
        subtitle="End-to-end masked messaging"
      >
        <div className="space-y-3 py-1">
          <div className="p-2.5 rounded-xl bg-orange-50 text-xs text-textDark border border-orange-100">
            "Namasteji, I have entered your building gate now. Coming up to Flat 402."
          </div>
          <div className="p-2.5 rounded-xl bg-primary text-xs text-white ml-auto max-w-[80%]">
            "Great! Ring the bell on the 4th floor."
          </div>
          <div className="flex gap-2 pt-2">
            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 text-xs p-2.5 rounded-xl border border-orange-200 outline-none"
            />
            <Button size="sm" onClick={() => setChatModalOpen(false)}>
              Send
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default JobTracking;
