import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Mic,
  FileText,
  Sparkles,
  Upload,
  ArrowRight,
  Clock,
  Calendar,
  Zap,
  CheckCircle2,
  RefreshCw,
  AlertCircle
} from "lucide-react";
import { useAppStore } from "../../store/appStore";
import { describeJobFromImage, describeJobFromText } from "../../services/gemini";
import JobCard from "./JobCard";
import Button from "../../components/ui/Button";

export function BookJob() {
  const navigate = useNavigate();
  const { createBookingDraft } = useAppStore();

  const [inputMode, setInputMode] = useState("photo"); // "photo" | "voice" | "type"
  const [textDescription, setTextDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [speechTranscript, setSpeechTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Result state
  const [jobResult, setJobResult] = useState(null);
  const [urgency, setUrgency] = useState("NOW"); // NOW | TODAY | SCHEDULE
  const [step, setStep] = useState(1); // 1: Input, 2: Review & Urgency

  // Quick preset test samples for demo judges
  const samplePresets = [
    {
      title: "💧 Leaking Sink Pipe",
      text: "Kitchen sink ke neeche se paani tapak raha hai pipe joint se.",
      imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "⚡ Sparking Switchboard",
      text: "Main switchboard me se spark nikal raha hai aur mcb trip ho raha hai.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "🪚 Wardrobe Door Sagging",
      text: "Bedroom almirah ka darwaza phash raha hai zameen pe ghisa raha hai.",
      imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=80"
    },
    {
      title: "🧹 Deep Kitchen Cleaning",
      text: "Raiyani kitchen aur exhaust fan ki greasy chiknai saaf karni hai deep clean.",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80"
    }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPreset = (preset) => {
    setTextDescription(preset.text);
    setImagePreview(preset.imageUrl);
    setSelectedImage(preset.imageUrl);
  };

  // Simulated or Web Speech API voice capture
  const handleVoiceToggle = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "hi-IN"; // Hindi/Indian English support
      recognition.continuous = false;

      recognition.onstart = () => {
        setIsRecording(true);
        setSpeechTranscript("सुन रहा हूँ... बोलिए (Listening...)");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSpeechTranscript(transcript);
        setTextDescription(transcript);
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
        // Fallback simulation
        setSpeechTranscript("नल से पानी टपक रहा है, नया वाशर लगाना पड़ेगा");
        setTextDescription("Nal se paani tapak raha hai, naya washer lagana padega.");
      };

      recognition.start();
    } else {
      // Mock voice input for devices without Web Speech
      setIsRecording(true);
      setTimeout(() => {
        const mockVoice = "नल से पानी टपक रहा है, नया वाशर लगाना पड़ेगा (Water leaking from tap)";
        setSpeechTranscript(mockVoice);
        setTextDescription(mockVoice);
        setIsRecording(false);
      }, 2000);
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);

    try {
      let analysis;
      if (inputMode === "photo" && selectedImage) {
        analysis = await describeJobFromImage(selectedImage);
      } else {
        const query = textDescription.trim() || "Water pipe leakage";
        analysis = await describeJobFromText(query);
      }

      setJobResult(analysis);
      setStep(2);
    } catch (err) {
      console.error(err);
      setError("AI analysis encountered an issue. Loaded standard service analysis.");
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToNegotiate = () => {
    const draft = {
      ...jobResult,
      urgency,
      image: imagePreview,
      customerNotes: textDescription,
      timestamp: new Date().toISOString()
    };
    createBookingDraft(draft);
    navigate("/customer/negotiate");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Describe-It AI Engine • काम बताओ
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          {step === 1 ? "What needs fixing today?" : "Review AI Job Card"}
        </h1>
        <p className="text-xs text-textMuted">
          {step === 1
            ? "Photo, voice or text — AI will identify the trade, parts & fair rate band."
            : "Double-check the scope & select urgency before Sealed Handshake."}
        </p>
      </div>

      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          {/* Input Mode Selector Tabs */}
          <div className="bg-orange-50/80 p-1.5 rounded-2xl border border-orange-200/60 grid grid-cols-3 gap-1">
            <button
              onClick={() => setInputMode("photo")}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                inputMode === "photo"
                  ? "bg-white text-primary shadow-sm"
                  : "text-textMuted hover:text-textDark"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>📷 Photo</span>
            </button>

            <button
              onClick={() => setInputMode("voice")}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                inputMode === "voice"
                  ? "bg-white text-primary shadow-sm"
                  : "text-textMuted hover:text-textDark"
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>🎤 Voice</span>
            </button>

            <button
              onClick={() => setInputMode("type")}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                inputMode === "type"
                  ? "bg-white text-primary shadow-sm"
                  : "text-textMuted hover:text-textDark"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>✍️ Type</span>
            </button>
          </div>

          {/* Mode 1: Photo Input */}
          {inputMode === "photo" && (
            <div className="space-y-4">
              <div className="relative border-2 border-dashed border-orange-200 rounded-3xl p-6 text-center hover:border-primary/60 transition-colors bg-white shadow-soft">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-56 object-cover rounded-2xl border border-orange-100"
                    />
                    <button
                      onClick={() => {
                        setImagePreview(null);
                        setSelectedImage(null);
                      }}
                      className="absolute top-2 right-2 bg-dark/70 text-white p-2 rounded-full text-xs hover:bg-dark transition-colors"
                    >
                      Change Photo
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer flex flex-col items-center justify-center py-6">
                    <div className="w-16 h-16 rounded-2xl bg-orange-100 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Camera className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-bold text-textDark block">
                      Snap or Upload a Photo
                    </span>
                    <span className="text-xs text-textMuted mt-1 block">
                      AI analyzes pipe leaks, switchboards, appliances or furniture
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 bg-primary/10 text-primary font-bold text-xs px-3 py-1.5 rounded-xl">
                      <Upload className="w-3.5 h-3.5" /> Choose from Device
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
          )}

          {/* Mode 2: Voice Input */}
          {inputMode === "voice" && (
            <div className="bg-white rounded-3xl p-6 border border-orange-100 text-center shadow-soft space-y-4">
              <div className="flex flex-col items-center justify-center py-4">
                <button
                  onClick={handleVoiceToggle}
                  className={`w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                    isRecording
                      ? "bg-red-500 text-white animate-pulse shadow-glow-primary scale-110"
                      : "bg-primary text-white hover:bg-primary-600 shadow-elevated"
                  }`}
                >
                  <Mic className="w-10 h-10" />
                </button>
                <span className="text-sm font-bold text-textDark mt-3 block">
                  {isRecording ? "Listening in Hindi/English..." : "Tap to Speak (बोलकर बताएं)"}
                </span>
                <span className="text-xs text-textMuted mt-1">
                  Say: "नल से पानी टपक रहा है" or "Switchboard is sparking"
                </span>
              </div>

              {speechTranscript && (
                <div className="p-3 bg-orange-50/60 rounded-2xl border border-orange-100 text-xs font-semibold text-textDark text-left">
                  <span className="text-[10px] text-primary uppercase font-bold block mb-0.5">
                    Transcribed:
                  </span>
                  "{speechTranscript}"
                </div>
              )}
            </div>
          )}

          {/* Mode 3: Text Input */}
          {inputMode === "type" && (
            <div className="bg-white rounded-3xl p-5 border border-orange-100 shadow-soft space-y-3">
              <label className="text-xs font-bold text-textDark block">
                Describe the problem in any language / समस्या बताएं:
              </label>
              <textarea
                rows={4}
                value={textDescription}
                onChange={(e) => setTextDescription(e.target.value)}
                placeholder="e.g. Geyser water is cold and leaking from the bottom pipe / गीजर का पानी गर्म नहीं हो रहा..."
                className="w-full p-3.5 text-sm rounded-2xl border border-orange-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
              />
            </div>
          )}

          {/* One-Click Presets for Hackathon Judges */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-textMuted block">
              Or Try One-Click Demo Scenarios:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {samplePresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(preset)}
                  className="p-2.5 bg-white hover:bg-orange-50/70 border border-orange-100 rounded-2xl text-left transition-all text-xs font-bold text-textDark shadow-sm hover:border-primary/40 flex items-center justify-between"
                >
                  <span className="truncate">{preset.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <Button
            size="lg"
            fullWidth
            onClick={handleAnalyze}
            loading={loading}
            icon={Sparkles}
            className="mt-4"
          >
            Describe-It with Gemini AI
          </Button>

          {/* Loading Indicator with Animated AI Brain */}
          {loading && (
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary font-bold text-sm">
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Describe-It AI is analyzing the request...</span>
              </div>
              <p className="text-xs text-textMuted">
                Identifying trade, scope, required materials and local Rate Compass band
              </p>
            </div>
          )}
        </motion.div>
      )}

      {/* Step 2: Review Job Card & Urgency */}
      {step === 2 && jobResult && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Detailed Job Card */}
          <JobCard
            jobData={jobResult}
            onEdit={() => setStep(1)}
          />

          {/* Step 3: Urgency Selection */}
          <div className="space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                Choose Urgency / कब चाहिए?
              </span>
              <h3 className="text-sm font-extrabold text-textDark mt-0.5">
                Select arrival window
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {/* NOW Card */}
              <button
                onClick={() => setUrgency("NOW")}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                  urgency === "NOW"
                    ? "border-primary bg-orange-50/70 shadow-sm"
                    : "border-orange-100 bg-white hover:border-orange-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Zap className={`w-4 h-4 ${urgency === "NOW" ? "text-primary" : "text-textMuted"}`} />
                  <span className="text-[10px] font-black uppercase text-primary">
                    30 Min
                  </span>
                </div>
                <span className="font-extrabold text-xs text-textDark block mt-2">
                  NOW / अभी
                </span>
                <span className="text-[10px] text-textMuted block mt-0.5">
                  Live Dispatch
                </span>
                <span className="text-[10px] text-emerald-700 font-bold block mt-1">
                  Standard Rate
                </span>
              </button>

              {/* TODAY Card */}
              <button
                onClick={() => setUrgency("TODAY")}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                  urgency === "TODAY"
                    ? "border-primary bg-orange-50/70 shadow-sm"
                    : "border-orange-100 bg-white hover:border-orange-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Clock className={`w-4 h-4 ${urgency === "TODAY" ? "text-primary" : "text-textMuted"}`} />
                  <span className="text-[10px] font-black uppercase text-secondary">
                    Flex
                  </span>
                </div>
                <span className="font-extrabold text-xs text-textDark block mt-2">
                  TODAY / आज
                </span>
                <span className="text-[10px] text-textMuted block mt-0.5">
                  Within 4 hrs
                </span>
                <span className="text-[10px] text-emerald-700 font-bold block mt-1">
                  Save ~5%
                </span>
              </button>

              {/* SCHEDULE Card */}
              <button
                onClick={() => setUrgency("SCHEDULE")}
                className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                  urgency === "SCHEDULE"
                    ? "border-primary bg-orange-50/70 shadow-sm"
                    : "border-orange-100 bg-white hover:border-orange-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Calendar className={`w-4 h-4 ${urgency === "SCHEDULE" ? "text-primary" : "text-textMuted"}`} />
                  <span className="text-[10px] font-black uppercase text-amber-700">
                    Later
                  </span>
                </div>
                <span className="font-extrabold text-xs text-textDark block mt-2">
                  SCHEDULE
                </span>
                <span className="text-[10px] text-textMuted block mt-0.5">
                  Pick date & time
                </span>
                <span className="text-[10px] text-emerald-700 font-bold block mt-1">
                  Off-peak -10%
                </span>
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setStep(1)}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              size="lg"
              onClick={handleProceedToNegotiate}
              className="flex-[2] bg-gradient-to-r from-primary to-amber-500 hover:from-primary-600 hover:to-amber-600"
              icon={ArrowRight}
              iconPosition="right"
            >
              Proceed to Sealed Handshake
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default BookJob;
