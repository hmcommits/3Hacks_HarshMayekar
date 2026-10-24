import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  UserCheck,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Plus,
  RefreshCw,
  Award
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";

export function MonthlyKaam() {
  const [backupModalOpen, setBackupModalOpen] = useState(false);
  const [advanceModalOpen, setAdvanceModalOpen] = useState(false);

  // Active recurring helpers
  const activeStaff = [
    {
      id: "STAFF-01",
      name: "Sunita Devi",
      role: "Maid / Cleaner",
      time: "8:00 AM – 9:30 AM",
      monthlySalary: 3800,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      presentDays: 22,
      totalWorkingDays: 26,
      leaveNotice: "Monday 27th Oct (Medical)",
      verified: true,
      trustScore: 92
    },
    {
      id: "STAFF-02",
      name: "Priya Sharma",
      role: "Cook (Lunch & Dinner Prep)",
      time: "11:30 AM – 1:00 PM",
      monthlySalary: 5500,
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      presentDays: 24,
      totalWorkingDays: 26,
      leaveNotice: null,
      verified: true,
      trustScore: 71
    }
  ];

  // Calendar days generation (October 2026)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Monthly Kaam • मासिक कामगार
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Your Regular Household Staff
        </h1>
        <p className="text-xs text-textMuted">
          Verified contracts, geo-tagged attendance, automated salary payouts & guaranteed backup when staff is on leave.
        </p>
      </div>

      {/* Backup Bhaiya / Didi Alert Banner (Signature feature!) */}
      <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-3xl shadow-soft space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-2xl bg-amber-500 text-white">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-amber-900 tracking-wider">
                Backup Didi Alert
              </span>
              <h4 className="text-xs font-black text-amber-950 mt-0.5">
                Sunita Devi requested leave for Monday, 27th Oct
              </h4>
            </div>
          </div>
          <Badge variant="warning" size="sm">
            Leave Scheduled
          </Badge>
        </div>

        <p className="text-xs text-amber-900 leading-relaxed font-medium">
          No panic needed! Sahayak's Backup Engine has found a verified guild worker in your society for Monday morning.
        </p>

        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => setBackupModalOpen(true)}
            className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold"
          >
            Assign Pre-Vetted Backup (₹180)
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => alert("Marked day as off without backup.")}
            className="border-amber-300 text-amber-900"
          >
            Manage Without
          </Button>
        </div>
      </div>

      {/* Active Monthly Subscriptions */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-textMuted">
            Active Staff Subscriptions ({activeStaff.length})
          </h2>
          <button
            onClick={() => alert("Explore available verified maids & cooks in Andheri")}
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Hire New Staff
          </button>
        </div>

        {activeStaff.map((staff) => (
          <Card key={staff.id} className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={staff.photo}
                  alt={staff.name}
                  className="w-12 h-12 rounded-2xl object-cover border-2 border-primary"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-extrabold text-sm text-textDark">
                      {staff.name}
                    </h3>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                      eKYC ✓
                    </span>
                  </div>
                  <span className="text-xs text-textMuted font-medium block">
                    {staff.role} • {staff.time}
                  </span>
                  <span className="text-xs font-extrabold text-primary block mt-0.5">
                    ₹{staff.monthlySalary} / month (1st of month)
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-textMuted uppercase font-bold block">
                  Trust Score
                </span>
                <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                  {staff.trustScore}
                </span>
              </div>
            </div>

            {/* Attendance Progress & Quick Actions */}
            <div className="pt-2 border-t border-orange-50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-textDark">
                  Attendance: {staff.presentDays}/{staff.totalWorkingDays} days
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setAdvanceModalOpen(true)}
                  className="px-2.5 py-1 rounded-lg bg-orange-50 hover:bg-orange-100 text-primary font-bold text-[11px] transition-colors"
                >
                  Give Advance
                </button>
                <button
                  onClick={() => alert(`Showing contract-lite agreement for ${staff.name}`)}
                  className="px-2.5 py-1 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary font-bold text-[11px] transition-colors"
                >
                  Terms
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Attendance Calendar (Geo-Verified Check-in dots) */}
      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <h3 className="font-bold text-xs text-textDark">
              October 2026 • Geo-Verified Attendance
            </h3>
          </div>
          <span className="text-[10px] text-emerald-700 font-bold">
            100% On-Time Gate Check-Ins
          </span>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-[10px] text-textMuted font-bold">
              {d}
            </span>
          ))}

          {daysInMonth.slice(0, 28).map((day) => {
            const isSunday = day % 7 === 0;
            const isLeave = day === 27;
            const isPast = day <= 24;

            return (
              <div
                key={day}
                className={`py-1.5 rounded-lg text-xs font-semibold relative flex flex-col items-center justify-center ${
                  isLeave
                    ? "bg-amber-100 text-amber-900 border border-amber-300"
                    : isSunday
                    ? "bg-gray-100 text-textMuted"
                    : isPast
                    ? "bg-emerald-50 text-emerald-900 border border-emerald-100"
                    : "bg-white text-textDark border border-orange-100"
                }`}
              >
                <span>{day}</span>
                {isPast && !isSunday && (
                  <span className="w-1 h-1 rounded-full bg-emerald-600 mt-0.5" />
                )}
                {isLeave && (
                  <span className="w-1 h-1 rounded-full bg-amber-600 mt-0.5" />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[10px] text-textMuted pt-2 border-t border-orange-50">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600" /> Present (Geo-fenced)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Approved Leave
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-400" /> Weekly Off
          </span>
        </div>
      </Card>

      {/* Contract-Lite & Fair Wage Transparency */}
      <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50/60 rounded-3xl border border-orange-200/80 space-y-2">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" />
          <h4 className="font-bold text-xs text-textDark">
            Sahayak Contract-Lite & Fair Wage Index
          </h4>
        </div>
        <p className="text-[11px] text-textMuted leading-relaxed">
          Standardized 1-page agreements: 4 paid leaves/year, 15-day notice, and guaranteed emergency medical fund contributions through micro-insurance.
        </p>
      </div>

      {/* Backup Modal */}
      <Modal
        isOpen={backupModalOpen}
        onClose={() => setBackupModalOpen(false)}
        title="Confirm Backup Didi"
        subtitle="Vetted by Sea Green Apts Residents Guild"
      >
        <div className="space-y-4 py-2">
          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-2xl border border-orange-100">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
              alt="Kavita Bai"
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div>
              <h4 className="font-bold text-xs text-textDark">Kavita Kamble</h4>
              <span className="text-[11px] text-textMuted block">
                Works in Flat 201 & 503 • Trust Score 88
              </span>
              <span className="text-[10px] text-emerald-700 font-bold">
                ✓ Available Monday 8:00 AM
              </span>
            </div>
          </div>

          <p className="text-xs text-textMuted">
            Kavita Bai has keys to similar layouts in your building and knows the society rules. Fee: ₹180 for the morning session.
          </p>

          <Button
            fullWidth
            onClick={() => {
              alert("Backup assigned for Monday 27th Oct!");
              setBackupModalOpen(false);
            }}
          >
            Confirm Backup Booking (₹180)
          </Button>
        </div>
      </Modal>

      {/* Advance Salary Modal */}
      <Modal
        isOpen={advanceModalOpen}
        onClose={() => setAdvanceModalOpen(false)}
        title="Salary Advance / Bonus Calculator"
        subtitle="Recorded digitally into worker's Kaam Khata"
      >
        <div className="space-y-3 py-2">
          <label className="text-xs font-bold text-textDark block">
            Select Advance Amount (Deducted from next month):
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[500, 1000, 2000].map((amt) => (
              <button
                key={amt}
                onClick={() => alert(`Advance of ₹${amt} processed instantly via UPI!`)}
                className="py-2.5 rounded-xl border border-orange-200 text-xs font-bold text-textDark hover:bg-orange-50 transition-colors"
              >
                ₹{amt}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-textMuted">
            Instant UPI transfer. Creates a verified financial trail that helps workers access official bank micro-credit.
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default MonthlyKaam;
