import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, AlertTriangle, Radio, TrendingUp, Calendar, ShieldCheck } from "lucide-react";
import { useAppStore } from "../../store/appStore";

export function Header() {
  const { userRole, setUserRole, language, setLanguage } = useAppStore();
  const location = useLocation();

  const isEmergencyPage = location.pathname === "/emergency";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        {/* Logo & Tagline */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-gradient-to-br from-primary to-orange-600 p-1 flex items-center justify-center">
            <img
              src="/sahayak-logo.svg"
              alt="Sahayak Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl tracking-tight text-primary">
                सहायक
              </span>
              <span className="font-extrabold text-sm tracking-wide text-secondary uppercase">
                Sahayak
              </span>
            </div>
            <span className="text-[10px] text-textMuted font-medium leading-none -mt-0.5">
              Digital Chowk • विश्वसनीय सेवा
            </span>
          </div>
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-gray-600">
          <Link
            to="/chowkpulse"
            className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>Chowk Pulse (Live)</span>
          </Link>
          <Link
            to="/customer/rates"
            className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span>Rate Compass</span>
          </Link>
          <Link
            to="/customer/monthly"
            className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>Monthly Kaam</span>
          </Link>
          <Link
            to="/safety"
            className="px-3 py-1.5 rounded-lg hover:bg-orange-50 hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Trust & Safety</span>
          </Link>
        </nav>

        {/* Right side controls: Role switcher, SOS quick button */}
        <div className="flex items-center gap-2.5">
          {/* Quick Role switcher dropdown / pills */}
          <div className="bg-orange-50/90 p-0.5 rounded-xl border border-orange-200/70 flex items-center text-xs font-semibold shadow-inner">
            <button
              onClick={() => setUserRole("customer")}
              className={`px-3 py-1 rounded-lg transition-all ${
                userRole === "customer"
                  ? "bg-primary text-white shadow-sm font-bold"
                  : "text-textDark hover:text-primary"
              }`}
              title="Customer Mode"
            >
              Customer
            </button>
            <button
              onClick={() => setUserRole("worker")}
              className={`px-3 py-1 rounded-lg transition-all ${
                userRole === "worker"
                  ? "bg-secondary text-white shadow-sm font-bold"
                  : "text-textDark hover:text-secondary"
              }`}
              title="Worker Mode"
            >
              Worker
            </button>
            <button
              onClick={() => setUserRole("admin")}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                userRole === "admin"
                  ? "bg-dark text-white shadow-sm font-bold"
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
              className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white px-3 py-1.5 rounded-xl text-xs font-extrabold shadow-sm shadow-red-500/20 active:scale-95 transition-all"
              title="Emergency Mode / 30-Min Rapid Response"
            >
              <AlertTriangle className="w-3.5 h-3.5 animate-bounce" />
              <span>SOS</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
