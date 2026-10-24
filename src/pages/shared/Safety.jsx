import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  AlertTriangle,
  UserCheck,
  Users,
  Sun,
  MapPin,
  Share2,
  Clock,
  Flag,
  CheckCircle2,
  PhoneCall,
  Plus
} from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

export function Safety() {
  const [womenOnlyToggle, setWomenOnlyToggle] = useState(false);
  const [daytimeOnlyToggle, setDaytimeOnlyToggle] = useState(true);
  const [womenLedTeamToggle, setWomenLedTeamToggle] = useState(false);
  const [autoCheckInHours, setAutoCheckInHours] = useState(2);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [trustedContactModalOpen, setTrustedContactModalOpen] = useState(false);

  const [trustedContacts, setTrustedContacts] = useState([
    { name: "Rohit Sharma (Husband)", phone: "+91 98200 99881", relationship: "Primary" },
    { name: "Ananya Iyer (Sister)", phone: "+91 98201 55432", relationship: "Secondary" }
  ]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
          Layered Protection • दोनों तरफ सुरक्षा
        </span>
        <h1 className="text-xl sm:text-2xl font-black text-textDark mt-0.5">
          Safety & Trusted Contacts
        </h1>
        <p className="text-xs text-textMuted">
          Safety for customers AND workers. Women-first safeguards, address red-flags and instant emergency triggers.
        </p>
      </div>

      {/* Large Red SOS Button */}
      <div className="bg-gradient-to-br from-red-600 via-rose-700 to-red-800 text-white p-6 rounded-3xl shadow-xl text-center space-y-3">
        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto animate-pulse">
          <AlertTriangle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-lg font-black uppercase tracking-wider">
          Instant SOS Trigger
        </h2>
        <p className="text-xs text-red-100 max-w-xs mx-auto">
          Broadcasts your live GPS coordinates immediately to your trusted contacts, local Chowk Captain & local police.
        </p>

        <Link
          to="/emergency"
          className="inline-block bg-white text-red-700 font-black text-sm px-8 py-3 rounded-2xl shadow-lg hover:bg-red-50 transition-colors"
        >
          ACTIVATE EMERGENCY SOS
        </Link>
      </div>

      {/* Women-First Safeguards (Crucial requirement from prompt) */}
      <Card className="p-5 space-y-4 border-2 border-orange-100">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <h3 className="font-extrabold text-sm text-textDark">
              Women-First Protection Filters
            </h3>
            <p className="text-[11px] text-textMuted">
              Specialized preferences for female workers and women-led households
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-1">
          {/* Toggle 1: Women-only households */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-orange-50/50 border border-orange-100">
            <div>
              <span className="text-xs font-bold text-textDark block">
                Women-Only Households Filter
              </span>
              <span className="text-[11px] text-textMuted">
                Only accept jobs from verified female-headed households
              </span>
            </div>
            <button
              onClick={() => setWomenOnlyToggle(!womenOnlyToggle)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                womenOnlyToggle ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                  womenOnlyToggle ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Toggle 2: Daytime only */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-orange-50/50 border border-orange-100">
            <div>
              <span className="text-xs font-bold text-textDark block">
                Daytime Only Dispatches (8 AM – 6 PM)
              </span>
              <span className="text-[11px] text-textMuted">
                Automatically declines after-dark home dispatches
              </span>
            </div>
            <button
              onClick={() => setDaytimeOnlyToggle(!daytimeOnlyToggle)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                daytimeOnlyToggle ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                  daytimeOnlyToggle ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Toggle 3: Women-led teams mode */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-orange-50/50 border border-orange-100">
            <div>
              <span className="text-xs font-bold text-textDark block">
                Women-Led Teams Mode (Pair Dispatch)
              </span>
              <span className="text-[11px] text-textMuted">
                Dispatch in pairs for deep cleaning or sensitive in-home jobs
              </span>
            </div>
            <button
              onClick={() => setWomenLedTeamToggle(!womenLedTeamToggle)}
              className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                womenLedTeamToggle ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                  womenLedTeamToggle ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </Card>

      {/* Trusted Contacts Management */}
      <Card className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-secondary" />
            <h3 className="font-extrabold text-xs text-textDark">
              Trusted Emergency Contacts
            </h3>
          </div>
          <button
            onClick={() => setTrustedContactModalOpen(true)}
            className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" /> Add
          </button>
        </div>

        <div className="space-y-2">
          {trustedContacts.map((contact, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-orange-50/40 border border-orange-100 flex items-center justify-between text-xs"
            >
              <div>
                <span className="font-bold text-textDark block">{contact.name}</span>
                <span className="text-[11px] text-textMuted">{contact.phone}</span>
              </div>
              <span className="text-[10px] bg-white text-secondary font-bold px-2 py-0.5 rounded border border-orange-200">
                {contact.relationship}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Automated Check-In Alerts */}
      <Card className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <h3 className="font-extrabold text-xs text-textDark">
            Safe-Arrival & Check-In Monitoring
          </h3>
        </div>
        <p className="text-[11px] text-textMuted">
          If a worker or customer does not enter the finish OTP within {autoCheckInHours} hours, an automatic verification check call is placed by the Chowk Captain.
        </p>

        <div className="flex items-center gap-2 pt-1">
          {[1, 2, 3, 4].map((hours) => (
            <button
              key={hours}
              onClick={() => setAutoCheckInHours(hours)}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${
                autoCheckInHours === hours
                  ? "bg-secondary text-white shadow-sm"
                  : "bg-orange-50 text-textDark hover:bg-orange-100"
              }`}
            >
              {hours} Hours
            </button>
          ))}
        </div>
      </Card>

      {/* Address Red-Flag Reporting (Worker Safety) */}
      <div className="pt-2">
        <Button
          variant="outline"
          size="md"
          fullWidth
          onClick={() => setReportModalOpen(true)}
          className="border-red-200 text-red-700 hover:bg-red-50"
          icon={Flag}
        >
          Report Unsafe Address or Customer Incident
        </Button>
      </div>

      {/* Report Modal */}
      <Modal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        title="Report Address Red-Flag"
        subtitle="Confidential safety reporting for workers & platform"
      >
        <div className="space-y-4 py-2 text-xs">
          <p className="text-textMuted">
            Flag addresses with aggressive dogs, non-payment disputes or unsafe working conditions. Protects fellow workers in the guild.
          </p>
          <textarea
            rows={3}
            placeholder="Describe the safety concern..."
            className="w-full p-3 rounded-xl border border-orange-200 outline-none"
          />
          <Button
            fullWidth
            onClick={() => {
              alert("Report submitted to Chowk Captain safety queue.");
              setReportModalOpen(false);
            }}
          >
            Submit Confidential Flag
          </Button>
        </div>
      </Modal>

      {/* Add Contact Modal */}
      <Modal
        isOpen={trustedContactModalOpen}
        onClose={() => setTrustedContactModalOpen(false)}
        title="Add Trusted Contact"
        subtitle="Will receive live tracking during jobs"
      >
        <div className="space-y-3 py-2 text-xs">
          <div>
            <label className="font-bold text-textDark block mb-1">Name:</label>
            <input type="text" placeholder="e.g. Maya Patel" className="w-full p-2.5 rounded-xl border border-orange-200 outline-none" />
          </div>
          <div>
            <label className="font-bold text-textDark block mb-1">Phone:</label>
            <input type="text" placeholder="+91 98XXX XXXXX" className="w-full p-2.5 rounded-xl border border-orange-200 outline-none" />
          </div>
          <Button
            fullWidth
            onClick={() => {
              alert("Trusted contact added!");
              setTrustedContactModalOpen(false);
            }}
          >
            Save Contact
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Safety;
