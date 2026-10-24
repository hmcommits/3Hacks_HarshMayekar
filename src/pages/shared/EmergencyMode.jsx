import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Flame,
  Zap,
  Droplets,
  Wind,
  Phone,
  ShieldAlert,
  ArrowRight,
  Clock,
  CheckCircle2,
  X,
  PhoneCall
} from "lucide-react";
import Button from "../../components/ui/Button";

export function EmergencyMode() {
  const navigate = useNavigate();
  const [selectedEmergency, setSelectedEmergency] = useState("burst_pipe");

  const emergencies = {
    burst_pipe: {
      title: "Burst Pipe & Flooding / पानी का पाइप फटा",
      icon: "💧",
      instructions: [
        "Locate the stopcock / angle valve near the water meter and turn CLOCKWISE completely.",
        "Turn off the electrical mains switch if water is pooling near floor outlets.",
        "Move carpets, power cords and electronics away from the floor."
      ],
      workerTrade: "Plumber",
      nearestWorker: "Ramesh Kumar (Plumber)",
      eta: "8 min away",
      rateCap: "₹450 (Capped Emergency Rate)",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    electrical_spark: {
      title: "Electrical Spark & Burning Wire / शॉर्ट सर्किट",
      icon: "⚡",
      instructions: [
        "DO NOT throw water on electrical fires or sparking outlets under any circumstances.",
        "Trip the Main Switch / Residual Current Breaker (RCCB) on the distribution board immediately.",
        "Unplug heavy appliances (AC, Geyser, Microwave). Keep children and pets in another room."
      ],
      workerTrade: "Electrician",
      nearestWorker: "Vijay Patil (Electrician)",
      eta: "11 min away",
      rateCap: "₹550 (Capped Emergency Rate)",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
    },
    gas_smell: {
      title: "LPG Gas Leakage Smell / गैस रिसाव की बदबू",
      icon: "💨",
      instructions: [
        "DO NOT turn ON or OFF any electric switch (switches create micro-sparks that ignite gas).",
        "Put out all open flames, incense sticks and diyas immediately.",
        "Open all windows and doors wide for cross ventilation.",
        "Turn the LPG cylinder regulator knob to OFF and apply the safety plastic cap."
      ],
      workerTrade: "Gas & Appliance Specialist",
      nearestWorker: "Santosh Yadav (Technician)",
      eta: "9 min away",
      rateCap: "₹400 (Capped Emergency Rate)",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    fire: {
      title: "Small Flame / Fire Hazard / आग की घटना",
      icon: "🔥",
      instructions: [
        "Evacuate everyone from the premises immediately.",
        "If safe, use an ABC dry chemical extinguisher or damp heavy blanket on small localized flames.",
        "Call Fire Services at 101 or 112 directly. Do not use the elevator."
      ],
      workerTrade: "Emergency Response Guild",
      nearestWorker: "Local Chowk Fast Response Team",
      eta: "6 min away",
      rateCap: "₹0 (Community First Responder)",
      photo: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&auto=format&fit=crop&q=80"
    }
  };

  const current = emergencies[selectedEmergency];

  const handleInstantDispatch = () => {
    alert(`Emergency Rapid Response Dispatched! ${current.nearestWorker} is rushing to your location.`);
    navigate("/customer/track/JOB-1082");
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-red-700 via-rose-900 to-red-950 text-white overflow-y-auto p-4 sm:p-6 pb-20">
      <div className="max-w-md sm:max-w-xl mx-auto space-y-5">
        {/* Top Exit & Title Bar */}
        <div className="flex items-center justify-between border-b border-red-500/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center animate-ping">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-red-200 block">
                30-MIN RAPID EMERGENCY ENGINE
              </span>
              <h1 className="text-lg font-black tracking-tight">
                Emergency Mode • आपातकाल
              </h1>
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            title="Exit Emergency Mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Emergency Type Selector Tabs */}
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(emergencies).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedEmergency(key)}
              className={`p-2.5 rounded-2xl flex flex-col items-center justify-center transition-all ${
                selectedEmergency === key
                  ? "bg-white text-red-700 font-extrabold shadow-lg scale-105"
                  : "bg-red-800/60 hover:bg-red-800 text-white font-medium border border-red-500/30"
              }`}
            >
              <span className="text-2xl mb-1">{data.icon}</span>
              <span className="text-[10px] text-center leading-tight truncate w-full">
                {key.replace("_", " ")}
              </span>
            </button>
          ))}
        </div>

        {/* Immediate Safety Instructions Box */}
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-5 border border-red-400/30 space-y-3">
          <div className="flex items-center gap-2 text-amber-300">
            <ShieldAlert className="w-5 h-5" />
            <h2 className="text-xs font-black uppercase tracking-wider">
              Immediate Safety Instructions / तुरंत यह करें:
            </h2>
          </div>

          <ul className="space-y-2 text-xs font-medium text-red-100">
            {current.instructions.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-red-900/40 p-2.5 rounded-xl border border-red-500/20">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nearest Emergency Worker Card */}
        <div className="bg-white text-textDark rounded-3xl p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-100 px-2.5 py-0.5 rounded-full">
              Nearest Standby Specialist
            </span>
            <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {current.eta}
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <img
              src={current.photo}
              alt={current.nearestWorker}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-red-500"
            />
            <div>
              <h3 className="font-black text-sm text-textDark">
                {current.nearestWorker}
              </h3>
              <span className="text-xs text-textMuted font-medium block">
                {current.workerTrade} • Verified Identity & Skill
              </span>
              <span className="text-xs font-extrabold text-primary block mt-0.5">
                {current.rateCap}
              </span>
            </div>
          </div>

          <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 text-[11px] text-textMuted">
            <strong>Anti-Price Gouging Guarantee:</strong> Sahayak caps all emergency rates during crises. The worker cannot charge more than the transparent ceiling shown above.
          </div>

          <Button
            size="lg"
            fullWidth
            onClick={handleInstantDispatch}
            className="bg-red-600 hover:bg-red-700 text-white font-black py-4 shadow-xl text-base animate-pulse"
            icon={ArrowRight}
            iconPosition="right"
          >
            Dispatch Nearest Worker Now ({current.eta})
          </Button>
        </div>

        {/* Emergency Government Helpline Direct Button (tel:112) */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href="tel:112"
            className="p-3.5 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center transition-colors"
          >
            <PhoneCall className="w-5 h-5 text-amber-300 mb-1" />
            <span className="text-xs font-bold">Call National SOS</span>
            <span className="text-sm font-black font-mono text-amber-300">112</span>
          </a>

          <a
            href="tel:101"
            className="p-3.5 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 text-center flex flex-col items-center justify-center transition-colors"
          >
            <Flame className="w-5 h-5 text-amber-300 mb-1" />
            <span className="text-xs font-bold">Call Fire Brigade</span>
            <span className="text-sm font-black font-mono text-amber-300">101</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EmergencyMode;
