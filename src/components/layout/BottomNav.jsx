import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Sparkles,
  TrendingUp,
  CalendarCheck,
  ShieldAlert,
  Wallet,
  Award,
  ShieldCheck,
  Activity,
  Layers,
  Wrench,
  Radio
} from "lucide-react";
import { useAppStore } from "../../store/appStore";

export function BottomNav() {
  const { userRole } = useAppStore();
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/emergency") {
    return null;
  }

  const customerNav = [
    { name: "Home", hindi: "होम", path: "/customer", icon: Home },
    { name: "Book AI", hindi: "काम बुक", path: "/customer/book", icon: Sparkles, highlight: true },
    { name: "Rates", hindi: "भाव", path: "/customer/rates", icon: TrendingUp },
    { name: "Monthly", hindi: "मासिक", path: "/customer/monthly", icon: CalendarCheck },
    { name: "Safety", hindi: "सुरक्षा", path: "/safety", icon: ShieldAlert }
  ];

  const workerNav = [
    { name: "Chowk", hindi: "डैशबोर्ड", path: "/worker", icon: Home },
    { name: "Offers", hindi: "काम ऑफर", path: "/worker/offer/JOB-1085", icon: Wrench, badge: "1 New" },
    { name: "Khata", hindi: "खाता", path: "/worker/khata", icon: Wallet },
    { name: "Passport", hindi: "पासपोर्ट", path: "/worker/passport", icon: Award },
    { name: "Trust", hindi: "विश्वास", path: "/worker/trust", icon: ShieldCheck }
  ];

  const adminNav = [
    { name: "Captain", hindi: "कप्तान", path: "/admin", icon: Layers },
    { name: "Pulse", hindi: "पल्स", path: "/chowkpulse", icon: Radio },
    { name: "Rates", hindi: "भाव", path: "/customer/rates", icon: TrendingUp },
    { name: "Disputes", hindi: "विवाद", path: "/dispute", icon: ShieldAlert },
    { name: "Customer", hindi: "ग्राहक", path: "/customer", icon: Home }
  ];

  const currentNav =
    userRole === "worker" ? workerNav : userRole === "admin" ? adminNav : customerNav;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-orange-100 shadow-elevated">
      <div className="max-w-md mx-auto sm:max-w-xl md:max-w-2xl px-2 py-1.5 flex items-center justify-around">
        {currentNav.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? item.highlight
                    ? "text-primary font-bold"
                    : "text-primary font-bold"
                  : "text-textMuted hover:text-textDark font-medium"
              }`}
            >
              {item.highlight ? (
                <div className="relative -top-2 bg-gradient-to-tr from-primary to-amber-500 text-white p-2.5 rounded-full shadow-glow-primary hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              ) : (
                <div className="relative">
                  <Icon className={`w-5 h-5 ${isActive ? "text-primary stroke-[2.5]" : "stroke-[1.8]"}`} />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 bg-primary text-white text-[9px] font-extrabold px-1 rounded-full animate-bounce">
                      ●
                    </span>
                  )}
                </div>
              )}
              <span className={`text-[10px] leading-tight ${item.highlight ? "mt-0" : "mt-1"}`}>
                {item.name}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
