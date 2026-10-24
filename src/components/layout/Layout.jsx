import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { AlertTriangle, ShieldCheck, PhoneCall } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const isEmergency = location.pathname === "/emergency";
  const isLanding = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#2D1B00] flex flex-col relative font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Header */}
      {!isEmergency && <Header />}

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-3 sm:px-4 py-4 pb-28">
        <Outlet />
      </main>

      {/* Floating Emergency SOS Button (Always accessible unless on emergency screen) */}
      {!isEmergency && (
        <aside aria-label="Emergency actions" className="fixed bottom-20 right-4 sm:right-8 z-50">
          <Link
            to="/emergency"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold py-2.5 px-4 rounded-full shadow-lg shadow-red-500/30 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/80 animate-soft-pulse group"
            title="Emergency Mode / 30-Min Rapid Response"
          >
            <div className="p-1 rounded-full bg-white/20">
              <AlertTriangle className="w-4 h-4 text-white animate-bounce" />
            </div>
            <span className="text-xs tracking-wide uppercase">
              Emergency SOS
            </span>
          </Link>
        </aside>
      )}

      {/* Mobile-First Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default Layout;
