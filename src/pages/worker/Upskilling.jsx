import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  PlayCircle,
  Award,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";

export function Upskilling() {
  const [activeCourse, setActiveCourse] = useState(null);

  const courses = [
    {
      id: "CRS-01",
      title: "Concealed Diverter & Thermostat Valve Installation",
      hindiTitle: "कंसील्ड डायवर्टर और थर्मोस्टेट वाल्व फिटिंग",
      duration: "14 mins",
      language: "Hindi & Marathi",
      unlocksScore: "+8 points",
      progress: 100,
      completed: true,
      thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80",
      instructor: "Master Suresh (30 yrs exp)"
    },
    {
      id: "CRS-02",
      title: "Smart Water Meter & Pressure Sensor Troubleshooting",
      hindiTitle: "स्मार्ट वॉटर मीटर और प्रेशर सेंसर रिपेयर",
      duration: "18 mins",
      language: "Hindi",
      unlocksScore: "+6 points",
      progress: 60,
      completed: false,
      thumbnail: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=500&auto=format&fit=crop&q=80",
      instructor: "NSDC Certified Trainer"
    },
    {
      id: "CRS-03",
      title: "Customer Soft Skills & Transparent Scope Communication",
      hindiTitle: "ग्राहक से बात करने का सही तरीका और स्कोप बताना",
      duration: "10 mins",
      language: "Hindi",
      unlocksScore: "+5 points",
      progress: 0,
      completed: false,
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
      instructor: "Sahayak Academy"
    }
  ];

  const govSchemes = [
    {
      name: "PM Vishwakarma Scheme",
      hindi: "पीएम विश्वकर्मा योजना",
      benefit: "₹15,000 tool kit incentive & ₹1,00,000 collateral-free loan at 5%",
      linkText: "Apply via Sahayak Assist"
    },
    {
      name: "Skill India (NSDC Certification)",
      hindi: "स्किल इंडिया प्रमाण पत्र",
      benefit: "RPL (Recognition of Prior Learning) direct exam for experienced workers",
      linkText: "Book Free Slot"
    },
    {
      name: "e-Shram Portal Integration",
      hindi: "ई-श्रम कार्ड",
      benefit: "Universal social security ID & ₹2 lakh accidental death cover",
      linkText: "Auto-Link DigiLocker"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Skill Advancement • सीखो और बढ़ो
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Sikho, Badho Academy
        </h1>
        <p className="text-xs text-textMuted">
          Vernacular micro-lessons in your trade. Completing modules boosts your Trust Score and unlocks higher-paying jobs.
        </p>
      </div>

      {/* Hero Learning Progress */}
      <div className="bg-gradient-to-r from-secondary to-teal-800 text-white p-5 rounded-3xl shadow-soft space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-300" />
            <h3 className="font-extrabold text-sm">Plumbing Master Certification</h3>
          </div>
          <span className="text-xs font-black text-amber-300 bg-white/10 px-2.5 py-0.5 rounded-full">
            2/3 Completed
          </span>
        </div>

        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
          <div className="bg-amber-400 h-full rounded-full" style={{ width: "66%" }} />
        </div>

        <p className="text-xs text-teal-100">
          Finish 1 more module to receive the official <strong>Guild Master 🔨</strong> verified badge on your Work Passport.
        </p>
      </div>

      {/* Courses List */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          Vernacular Video Lessons
        </h3>

        <div className="space-y-3">
          {courses.map((course) => (
            <Card
              key={course.id}
              interactive
              onClick={() => setActiveCourse(course)}
              className="p-4 flex flex-col sm:flex-row gap-3.5"
            >
              <div className="relative sm:w-36 h-28 rounded-2xl overflow-hidden shrink-0">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                  <PlayCircle className="w-10 h-10 text-white opacity-90" />
                </div>
                <span className="absolute bottom-2 right-2 bg-dark/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  {course.duration}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold text-primary bg-orange-100 px-2 py-0.5 rounded-full">
                      Unlocks: {course.unlocksScore}
                    </span>
                    <span className="text-[10px] text-textMuted">
                      {course.language}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-textDark mt-1 leading-snug">
                    {course.title}
                  </h4>
                  <p className="text-[11px] text-textMuted mt-0.5 font-medium">
                    🇮🇳 {course.hindiTitle}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-orange-50">
                  <span className="text-textMuted text-[11px]">
                    By {course.instructor}
                  </span>
                  {course.completed ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed (+8 pts)
                    </span>
                  ) : (
                    <span className="text-primary font-bold text-[11px]">
                      Resume Lesson →
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Government Welfare & Skilling Linkage */}
      <div className="space-y-3">
        <h3 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
          Government Schemes Linkage (सरकारी योजनाएं)
        </h3>

        <div className="space-y-2.5">
          {govSchemes.map((scheme, idx) => (
            <Card key={idx} className="p-4 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-textDark text-xs">
                    {scheme.name}
                  </h4>
                  <span className="text-[10px] text-primary font-bold block">
                    {scheme.hindi}
                  </span>
                </div>
                <button
                  onClick={() => alert(`Redirecting to guided enrollment for ${scheme.name}`)}
                  className="px-2.5 py-1 rounded-xl bg-orange-100/70 hover:bg-orange-100 text-primary font-bold text-[11px] flex items-center gap-1"
                >
                  <span>{scheme.linkText}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
              <p className="text-[11px] text-textMuted leading-relaxed">
                {scheme.benefit}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <Modal
        isOpen={!!activeCourse}
        onClose={() => setActiveCourse(null)}
        title={activeCourse?.title}
        subtitle={`Vernacular module • ${activeCourse?.duration}`}
      >
        <div className="space-y-4 py-2">
          <div className="w-full h-48 bg-dark rounded-2xl flex items-center justify-center relative overflow-hidden">
            <img
              src={activeCourse?.thumbnail}
              alt="Video preview"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute flex flex-col items-center">
              <PlayCircle className="w-14 h-14 text-white animate-pulse" />
              <span className="text-xs text-white font-bold mt-2">
                Simulated Vernacular Player
              </span>
            </div>
          </div>

          <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100 text-xs text-textDark space-y-1">
            <span className="font-bold text-primary block">
              Quiz after video:
            </span>
            <p className="text-[11px] text-textMuted">
              Answer 2 simple voice scenario questions to verify completion and get {activeCourse?.unlocksScore} directly added to your Trust Score.
            </p>
          </div>

          <Button
            fullWidth
            onClick={() => {
              alert("Lesson completed! Trust Score updated.");
              setActiveCourse(null);
            }}
          >
            Mark Module as Completed
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Upskilling;
