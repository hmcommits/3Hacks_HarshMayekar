import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, AlertTriangle, Users, Briefcase, UserCheck } from "lucide-react";
import { useAppStore } from "../../store/appStore";

export function Header() {
  const { userRole, setUserRole, language, setLanguage } = useAppStore();
  const location = useLocation();

  const isEmergencyPage = location.pathname === "/emergency";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all">
      <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Logo & Tagline */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-primary p-1 flex items-center justify-center">
            <img
              src="/sahayak-logo.svg"
              alt="Sahayak Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-primary">
                सहायक
              </span>
              <span className="font-bold text-sm tracking-wide text-secondary uppercase">
                Sahayak
              </span>
            </div>
            <span className="text-[10px] text-textMuted font-medium leading-none -mt-0.5">
              Digital Chowk • विश्वसनीय सेवा
            </span>
          </div>
        </Link>

        {/* Right side controls: Role switcher, SOS quick button */}
        <div className="flex items-center gap-2">
          {/* Quick Role switcher dropdown / pills */}
          <div className="bg-orange-50/80 p-0.5 rounded-xl border border-orange-200/60 flex items-center text-xs font-semibold">
            <button
              onClick={() => setUserRole("customer")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                userRole === "customer"
                  ? "bg-primary text-white shadow-sm"
                  : "text-textDark hover:text-primary"
              }`}
              title="Customer Mode"
            >
              Customer
            </button>
            <button
              onClick={() => setUserRole("worker")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                userRole === "worker"
                  ? "bg-secondary text-white shadow-sm"
                  : "text-textDark hover:text-secondary"
              }`}
              title="Worker Mode"
            >
              Worker
            </button>
            <button
              onClick={() => setUserRole("admin")}
              className={`px-2 py-1 rounded-lg transition-all ${
                userRole === "admin"
                  ? "bg-dark text-white shadow-sm"
                  : "text-textMuted hover:text-dark"
              }`}
              title="Admin Chowk Captain"
            >
              Admin
            </button>
          </div>

          {/* Quick SOS button */}
          {!isEmergencyPage && (
            <Link
              to="/emergency"
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded-xl text-xs font-bold shadow-sm animate-pulse"
              title="Emergency Mode / आपातकाल"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">SOS</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
