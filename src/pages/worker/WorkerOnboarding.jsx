import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  PhoneCall,
  Clock,
  MapPin,
  Camera,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  HelpCircle,
  FileCheck
} from "lucide-react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export function WorkerOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Form states
  const [selectedTrades, setSelectedTrades] = useState(["Plumber"]);
  const [floorRate, setFloorRate] = useState(280);
  const [selectedAreas, setSelectedAreas] = useState(["Andheri West", "Juhu"]);
  const [workHours, setWorkHours] = useState("8:00 AM – 7:00 PM");
  const [workerName, setWorkerName] = useState("Ramesh Kumar");
  const [phone, setPhone] = useState("+91 98201 44210");
  const [verifications, setVerifications] = useState({
    aadhaar: true,
    police: true,
    skill: false,
    guild: false
  });

  const tradesList = [
    { name: "Plumber", icon: "🔧", floorGuide: "₹250 - ₹350" },
    { name: "Electrician", icon: "⚡", floorGuide: "₹280 - ₹400" },
    { name: "Carpenter", icon: "🪚", floorGuide: "₹350 - ₹500" },
    { name: "Maid / Cleaner", icon: "🧹", floorGuide: "₹180 - ₹280" },
    { name: "AC Technician", icon: "❄️", floorGuide: "₹400 - ₹600" },
    { name: "Cook", icon: "🍳", floorGuide: "₹250 - ₹400" },
    { name: "Painter", icon: "🎨", floorGuide: "₹300 - ₹450" },
    { name: "Mason", icon: "🧱", floorGuide: "₹350 - ₹550" }
  ];

  const neighbourhoods = [
    "Andheri West",
    "Andheri East",
    "Juhu",
    "Bandra West",
    "Goregaon",
    "Malad",
    "Vile Parle",
    "Oshiwara"
  ];

  const toggleTrade = (trade) => {
    setSelectedTrades((prev) =>
      prev.includes(trade) ? prev.filter((t) => t !== trade) : [...prev, trade]
    );
  };

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    } else {
      alert("Registration submitted! Welcome to Sahayak Chowk Network.");
      navigate("/worker");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Worker Onboarding • कामगार पंजीकरण
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Join the Digital Chowk
        </h1>
        <p className="text-xs text-textMuted">
          Step {currentStep} of 6 — Zero fees, fair floor pricing & portable Work Passport.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-orange-100 h-2 rounded-full overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-300"
          style={{ width: `${(currentStep / 6) * 100}%` }}
        />
      </div>

      {/* Helpline banner for vernacular users */}
      <div className="p-3 bg-teal-50 rounded-2xl border border-teal-100 flex items-center justify-between text-xs text-secondary font-medium">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-secondary shrink-0" />
          <span>Need help? Register by calling our free IVR:</span>
        </div>
        <span className="font-mono font-bold text-primary">1800-SAHAYAK</span>
      </div>

      {/* Step 1: Select Trades */}
      {currentStep === 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h2 className="text-sm font-extrabold text-textDark">
            Step 1: Select your trade(s) / अपना हुनर चुनें
          </h2>
          <div className="grid grid-cols-2 gap-2.5">
            {tradesList.map((trade) => {
              const isSelected = selectedTrades.includes(trade.name);
              return (
                <button
                  key={trade.name}
                  onClick={() => toggleTrade(trade.name)}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-orange-50 shadow-sm"
                      : "border-orange-100 bg-white hover:border-orange-200"
                  }`}
                >
                  <span className="text-2xl block mb-1">{trade.icon}</span>
                  <span className="text-xs font-bold text-textDark block">
                    {trade.name}
                  </span>
                  <span className="text-[10px] text-textMuted block mt-0.5">
                    Floor guide: {trade.floorGuide}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Step 2: Floor Rates */}
      {currentStep === 2 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h2 className="text-sm font-extrabold text-textDark">
            Step 2: Set your private floor rate / न्यूनतम दर तय करें
          </h2>
          <Card className="p-5 text-center space-y-3">
            <span className="text-xs text-textMuted font-bold block">
              Minimum fee per standard job / 1 hour
            </span>
            <div className="text-4xl font-black text-primary">
              ₹{floorRate}
            </div>
            <p className="text-xs text-textMuted max-w-xs mx-auto">
              During Sealed Handshake, the customer never sees this. You will never be matched below this rate!
            </p>
            <input
              type="range"
              min={150}
              max={600}
              step={10}
              value={floorRate}
              onChange={(e) => setFloorRate(Number(e.target.value))}
              className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-textMuted font-bold">
              <span>₹150</span>
              <span className="text-emerald-700 font-bold">Andheri Avg: ₹280</span>
              <span>₹600</span>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Step 3: Service Area */}
      {currentStep === 3 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h2 className="text-sm font-extrabold text-textDark">
            Step 3: Select service localities / काम का इलाका
          </h2>
          <p className="text-xs text-textMuted">
            You will only receive parallel dispatch offers within these zones:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {neighbourhoods.map((area) => {
              const isSelected = selectedAreas.includes(area);
              return (
                <button
                  key={area}
                  onClick={() => toggleArea(area)}
                  className={`p-3 rounded-2xl border text-xs font-bold transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-orange-100 bg-white text-textDark"
                  }`}
                >
                  <span>{area}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4" />}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Step 4: Working Hours */}
      {currentStep === 4 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h2 className="text-sm font-extrabold text-textDark">
            Step 4: Your preferred hours / काम का समय
          </h2>
          <Card className="p-5 space-y-3">
            {["8:00 AM – 7:00 PM (Full Day)", "9:00 AM – 2:00 PM (Morning Slot)", "3:00 PM – 9:00 PM (Evening Slot)", "24x7 Emergency Ready (Higher Earnings)"].map(
              (slot) => (
                <button
                  key={slot}
                  onClick={() => setWorkHours(slot)}
                  className={`w-full p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                    workHours === slot
                      ? "border-primary bg-orange-50 text-primary"
                      : "border-orange-100 bg-white text-textDark"
                  }`}
                >
                  {slot}
                </button>
              )
            )}
          </Card>
        </motion.div>
      )}

      {/* Step 5: Profile Info */}
      {currentStep === 5 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h2 className="text-sm font-extrabold text-textDark">
            Step 5: Photo & basic information / अपनी जानकारी
          </h2>
          <Card className="p-5 space-y-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-orange-100 border-2 border-dashed border-primary flex items-center justify-center text-primary cursor-pointer hover:bg-orange-200 transition-colors">
                <Camera className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-textDark mt-2">
                Upload Selfie / Photo
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <label className="font-bold text-textDark block mb-1">Full Name:</label>
                <input
                  type="text"
                  value={workerName}
                  onChange={(e) => setWorkerName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-orange-200 outline-none"
                />
              </div>
              <div>
                <label className="font-bold text-textDark block mb-1">Mobile (Aadhaar linked):</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-orange-200 outline-none"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Step 6: 4-Layer Verification Checklist */}
      {currentStep === 6 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <h2 className="text-sm font-extrabold text-textDark">
            Step 6: Trust verification layers / 4-लेयर वेरिफिकेशन
          </h2>
          <p className="text-xs text-textMuted">
            You can start immediately at Starter Tier (eKYC) and unlock Guild Master rates as other checks finish.
          </p>

          <div className="space-y-2.5">
            <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-emerald-950 block">Layer 1: DigiLocker eKYC</span>
                  <span className="text-[10px] text-emerald-800">Aadhaar verified successfully</span>
                </div>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-200 px-2 py-0.5 rounded text-[10px]">
                DONE
              </span>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-orange-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="font-bold text-textDark block">Layer 2: Police Verification</span>
                  <span className="text-[10px] text-textMuted">Upload character certificate or request consent check</span>
                </div>
              </div>
              <button
                onClick={() => alert("Police verification requested via DigiLocker")}
                className="text-[11px] font-bold text-primary underline"
              >
                Upload
              </button>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-orange-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <span className="font-bold text-textDark block">Layer 3: Practical Skill Video</span>
                  <span className="text-[10px] text-textMuted">1-minute video showing your tool setup</span>
                </div>
              </div>
              <button
                onClick={() => alert("Video upload opened")}
                className="text-[11px] font-bold text-secondary underline"
              >
                Record
              </button>
            </div>

            <div className="p-3.5 bg-white rounded-2xl border border-orange-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold text-textDark block">Layer 4: Mistri Guild Vouching</span>
                  <span className="text-[10px] text-textMuted">Endorsement by hardware store or senior worker</span>
                </div>
              </div>
              <button
                onClick={() => alert("Vouch request sent to local hardware store")}
                className="text-[11px] font-bold text-amber-700 underline"
              >
                Request
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 pt-2">
        {currentStep > 1 && (
          <Button variant="outline" size="md" onClick={handleBack} className="flex-1">
            Back
          </Button>
        )}
        <Button
          size="lg"
          onClick={handleNext}
          className="flex-1 bg-primary hover:bg-primary-600 text-base font-black"
          icon={ArrowRight}
          iconPosition="right"
        >
          {currentStep === 6 ? "Finish & Go Ready" : "Continue"}
        </Button>
      </div>
    </div>
  );
}

export default WorkerOnboarding;
