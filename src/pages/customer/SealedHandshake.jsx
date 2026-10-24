import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Lock,
  Handshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Sliders,
  DollarSign,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export function SealedHandshake() {
  const navigate = useNavigate();
  const { currentBooking, finalizeJobBooking, workers } = useAppStore();

  const minBand = currentBooking?.priceBand?.min || 300;
  const maxBand = currentBooking?.priceBand?.max || 600;
  const initialBudget = Math.round((minBand + maxBand) / 2);

  const [customerCeiling, setCustomerCeiling] = useState(initialBudget);
  const [matchingState, setMatchingState] = useState("IDLE"); // "IDLE" | "SEALING" | "SETTLED" | "NO_MATCH"
  const [settledPrice, setSettledPrice] = useState(null);
  const [matchedWorker, setMatchedWorker] = useState(null);
  const [openBargainMode, setOpenBargainMode] = useState(false);
  const [bargainRound, setBargainRound] = useState(1);
  const [bargainMessages, setBargainMessages] = useState([
    { sender: "system", text: "Open Bargain Mode (Max 3 rounds). All offers remain transparent." },
    { sender: "worker", text: "Namasteji, I can reach in 10 minutes with genuine fittings. Best quote is ₹450." }
  ]);
  const [counterInput, setCounterInput] = useState("");

  // Select suitable worker
  const eligibleWorker =
    workers.find((w) => w.trade === (currentBooking?.trade || "Plumber") && w.isReady) ||
    workers[0];

  const handleRunHandshake = () => {
    setMatchingState("SEALING");

    setTimeout(() => {
      // Compare customerCeiling with worker's private floor rate
      const workerFloor = eligibleWorker.floor || 280;

      if (customerCeiling >= workerFloor) {
        // Match at fair midpoint
        const fairSettlement = Math.round((customerCeiling + workerFloor) / 2);
        setSettledPrice(fairSettlement);
        setMatchedWorker(eligibleWorker);
        setMatchingState("SETTLED");

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setMatchingState("NO_MATCH");
      }
    }, 2200);
  };

  const handleConfirmAndDispatch = () => {
    finalizeJobBooking(settledPrice, matchedWorker);
    navigate("/customer/match");
  };

  const handleSendCounter = () => {
    if (!counterInput.trim()) return;
    const userMsg = { sender: "customer", text: `How about ₹${counterInput}?` };
    setBargainMessages((prev) => [...prev, userMsg]);
    const offerNum = parseInt(counterInput, 10);
    setCounterInput("");

    setTimeout(() => {
      if (offerNum >= 380) {
        setBargainMessages((prev) => [
          ...prev,
          { sender: "worker", text: `Done Bhai! I accept ₹${offerNum}. Starting right away.` }
        ]);
        setSettledPrice(offerNum);
        setMatchedWorker(eligibleWorker);
        setMatchingState("SETTLED");
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } else {
        setBargainMessages((prev) => [
          ...prev,
          {
            sender: "worker",
            text: `₹${offerNum} won't cover quality brass fittings. Let's meet at ₹380.`
          }
        ]);
        setBargainRound((r) => r + 1);
      }
    }, 1200);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Signature Innovation • सीलबंद भाव तय
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          The Sealed Handshake
        </h1>
        <p className="text-xs text-textMuted">
          Fair price, both ways. Your budget ceiling and the worker's floor are never revealed to each other.
        </p>
      </div>

      {/* Main Handshake Box */}
      {matchingState === "IDLE" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-5"
        >
          {/* Rate Compass Context */}
          <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 p-4 rounded-3xl border border-orange-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold">
                ₹
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">
                  Rate Compass Benchmark
                </span>
                <h4 className="text-sm font-extrabold text-textDark">
                  Typical Range: ₹{minBand} – ₹{maxBand}
                </h4>
              </div>
            </div>
            <span className="text-[11px] bg-white font-bold text-secondary px-2.5 py-1 rounded-xl border border-orange-200">
              Andheri West
            </span>
          </div>

          {/* Budget Input Slider */}
          <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-soft space-y-4">
            <div className="text-center">
              <span className="text-xs font-bold text-textMuted uppercase tracking-wider block">
                Set Your Budget Ceiling / अधिकतम बजट
              </span>
              <div className="text-4xl font-black text-primary mt-1 tracking-tight">
                ₹{customerCeiling}
              </div>
              <span className="text-xs text-emerald-700 font-semibold block mt-1">
                {customerCeiling >= maxBand
                  ? "★ Premium priority match speed"
                  : customerCeiling >= initialBudget
                  ? "✓ Fair balanced market budget"
                  : "• Budget-conscious tier"}
              </span>
            </div>

            {/* Slider */}
            <div className="space-y-2 pt-2">
              <input
                type="range"
                min={minBand - 50}
                max={maxBand + 150}
                step={10}
                value={customerCeiling}
                onChange={(e) => setCustomerCeiling(Number(e.target.value))}
                className="w-full h-2.5 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-textMuted font-bold">
                <span>Min: ₹{minBand - 50}</span>
                <span className="text-primary">Suggested: ₹{initialBudget}</span>
                <span>Max: ₹{maxBand + 150}</span>
              </div>
            </div>

            {/* Privacy Promise note */}
            <div className="p-3 bg-teal-50/60 rounded-2xl border border-teal-100/80 flex items-center gap-2.5 text-xs text-secondary font-medium">
              <Lock className="w-4 h-4 text-secondary shrink-0" />
              <span>
                Encrypted in vault: nearby workers only see "Match Available", not your ceiling.
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3">
            <Button
              size="lg"
              fullWidth
              onClick={handleRunHandshake}
              className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:shadow-glow-primary text-base font-black py-4"
              icon={Handshake}
            >
              Seal My Budget & Match
            </Button>

            <button
              onClick={() => setOpenBargainMode(!openBargainMode)}
              className="w-full text-center text-xs font-bold text-textMuted hover:text-primary transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Prefer classic 3-round bargaining? Toggle Open Bargain Mode</span>
            </button>
          </div>

          {/* Open Bargain Mode Chat UI if toggled */}
          {openBargainMode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-white rounded-3xl p-4 border border-orange-200 shadow-soft space-y-3"
            >
              <div className="flex items-center justify-between border-b border-orange-50 pb-2">
                <span className="text-xs font-extrabold text-textDark">
                  Open Bargain Mode (Round {bargainRound}/3)
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  Worker: {eligibleWorker.name}
                </span>
              </div>

              <div className="space-y-2 max-h-44 overflow-y-auto text-xs p-1">
                {bargainMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-2xl max-w-[85%] ${
                      msg.sender === "customer"
                        ? "ml-auto bg-primary text-white"
                        : msg.sender === "worker"
                        ? "mr-auto bg-orange-50 text-textDark border border-orange-100"
                        : "mx-auto bg-gray-100 text-textMuted text-center text-[10px]"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {matchingState !== "SETTLED" && (
                <div className="flex gap-2 pt-2">
                  <input
                    type="number"
                    placeholder="Enter counter offer (₹)..."
                    value={counterInput}
                    onChange={(e) => setCounterInput(e.target.value)}
                    className="flex-1 text-xs p-2.5 rounded-xl border border-orange-200 outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button size="sm" onClick={handleSendCounter}>
                    Send Counter
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Animation State: Sealing in Progress */}
      {matchingState === "SEALING" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-3xl p-8 border border-orange-100 shadow-elevated text-center space-y-6"
        >
          <div className="relative w-40 h-28 mx-auto flex items-center justify-center">
            {/* Left Envelope (Customer) */}
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="absolute left-0 w-16 h-20 bg-primary rounded-2xl text-white flex flex-col items-center justify-center shadow-md border-2 border-white"
            >
              <Lock className="w-5 h-5 mb-1" />
              <span className="text-[9px] font-black uppercase">Customer</span>
              <span className="text-[10px] font-bold">₹{customerCeiling}</span>
            </motion.div>

            {/* Center Lock / Handshake union */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="z-10 w-12 h-12 rounded-full bg-accent text-dark flex items-center justify-center shadow-lg"
            >
              <Handshake className="w-6 h-6" />
            </motion.div>

            {/* Right Envelope (Worker) */}
            <motion.div
              animate={{ x: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              className="absolute right-0 w-16 h-20 bg-secondary rounded-2xl text-white flex flex-col items-center justify-center shadow-md border-2 border-white"
            >
              <Lock className="w-5 h-5 mb-1" />
              <span className="text-[9px] font-black uppercase">Worker</span>
              <span className="text-[10px] font-bold">Floor</span>
            </motion.div>
          </div>

          <div>
            <h3 className="text-base font-black text-textDark">
              The Vault is Comparing Rates...
            </h3>
            <p className="text-xs text-textMuted mt-1 max-w-xs mx-auto">
              Privately matching your ceiling against nearby verified workers' floors.
            </p>
          </div>
        </motion.div>
      )}

      {/* State: Match Settled Successfully! */}
      {matchingState === "SETTLED" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-5"
        >
          <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-secondary text-white rounded-3xl p-6 shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider">
              SEALED HANDSHAKE SETTLED
            </div>

            <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest block">
              Fair Settlement Midpoint
            </span>
            <div className="text-5xl font-black mt-1 tracking-tight">
              ₹{settledPrice}
            </div>
            <p className="text-xs text-emerald-100 mt-2 max-w-xs mx-auto">
              Matched within your ₹{customerCeiling} ceiling! Worker accepted instantly.
            </p>
          </div>

          {/* Transparent Price Breakdown */}
          <div className="bg-white rounded-3xl p-5 border border-orange-100 shadow-soft space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
              Transparent Price Breakdown / खुला हिसाब
            </h4>

            <div className="space-y-2 text-xs divide-y divide-orange-50">
              <div className="flex justify-between pt-1">
                <span className="text-textMuted">Base Visit & Diagnosis Fee</span>
                <span className="font-bold text-textDark">₹100</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-textMuted">Labour & Skill Allowance</span>
                <span className="font-bold text-textDark">
                  ₹{settledPrice - 150 > 100 ? settledPrice - 150 : 180}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-textMuted">Standard Materials Allowance</span>
                <span className="font-bold text-textDark">₹30</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="text-textMuted">Platform & Kaam Guarantee Fee</span>
                <span className="font-bold text-textDark">₹20</span>
              </div>
              <div className="flex justify-between pt-2 font-black text-sm text-primary">
                <span>Total Settled Amount</span>
                <span>₹{settledPrice}</span>
              </div>
            </div>

            <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-2 text-xs text-textDark font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Protected by 7-Day Kaam Guarantee. No unexpected door charges.
              </span>
            </div>
          </div>

          {/* Dispatch CTA */}
          <Button
            size="lg"
            fullWidth
            onClick={handleConfirmAndDispatch}
            className="bg-primary hover:bg-primary-600 text-base font-black py-4 shadow-elevated"
            icon={ArrowRight}
            iconPosition="right"
          >
            Confirm & Dispatch {matchedWorker?.name}
          </Button>
        </motion.div>
      )}

      {/* State: No Match (Budget too low) */}
      {matchingState === "NO_MATCH" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-6 border border-orange-200 shadow-soft space-y-5"
        >
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-extrabold text-textDark">
              Your budget is slightly low for this job right now
            </h3>
            <p className="text-xs text-textMuted mt-1">
              No worker's floor is compromised. Here are 3 fair solutions:
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => {
                setCustomerCeiling(minBand + 50);
                setMatchingState("IDLE");
              }}
              className="w-full p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-left transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-textDark block">
                  1. Raise ceiling slightly to ₹{minBand + 50}
                </span>
                <span className="text-[11px] text-textMuted">
                  Unlocks top 3 nearby available workers immediately
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-primary" />
            </button>

            <button
              onClick={() => {
                alert("Scheduled for off-peak slot tomorrow with 15% discount applied!");
                navigate("/customer");
              }}
              className="w-full p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-left transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-textDark block">
                  2. Schedule for off-peak slot (Tomorrow morning)
                </span>
                <span className="text-[11px] text-textMuted">
                  Workers accept lower floors during idle hours
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-secondary" />
            </button>

            <button
              onClick={() => {
                navigate("/customer/book");
              }}
              className="w-full p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 border border-orange-200 text-left transition-all flex items-center justify-between"
            >
              <div>
                <span className="text-xs font-bold text-textDark block">
                  3. Accept a simpler scope (Diagnosis & stopcock fix only)
                </span>
                <span className="text-[11px] text-textMuted">
                  Reduce duration to 30 min
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-700" />
            </button>
          </div>

          <Button
            variant="outline"
            size="md"
            fullWidth
            onClick={() => setMatchingState("IDLE")}
          >
            Adjust Budget Manually
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default SealedHandshake;
