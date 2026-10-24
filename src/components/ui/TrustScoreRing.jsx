import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ShieldCheck } from "lucide-react";

export function TrustScoreRing({
  score = 85,
  size = 80,
  showLabel = true,
  animate = true,
  strokeWidth = 10,
  className = ""
}) {
  const [currentScore, setCurrentScore] = useState(animate ? 0 : score);

  useEffect(() => {
    if (!animate) {
      setCurrentScore(score);
      return;
    }

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = score / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setCurrentScore(score);
        clearInterval(timer);
      } else {
        setCurrentScore(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [score, animate]);

  // Color coding based on score tiers:
  // 90+: Green (Guild Master / Top Tier)
  // 75-89: Saffron (#FF6B35, Trusted Pro)
  // 60-74: Accent Amber (#FFB627, Starter / Rising)
  // <60: Neutral
  const getColor = (val) => {
    if (val >= 90) return "#22C55E";
    if (val >= 75) return "#FF6B35";
    if (val >= 60) return "#FFB627";
    return "#0B4F6C";
  };

  const ringColor = getColor(score);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div style={{ width: size, height: size }} className="relative">
        <CircularProgressbar
          value={currentScore}
          text={`${currentScore}`}
          strokeWidth={strokeWidth}
          styles={buildStyles({
            strokeLinecap: "round",
            textSize: "28px",
            pathTransitionDuration: 0.8,
            pathColor: ringColor,
            textColor: "#2D1B00",
            trailColor: "#FFE5D9"
          })}
        />
        <div
          className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-orange-100"
          title="Verified Trust Score"
        >
          <ShieldCheck
            className="w-4 h-4"
            style={{ color: ringColor }}
          />
        </div>
      </div>
      {showLabel && (
        <div className="mt-1.5 text-center">
          <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider block">
            Trust Score
          </span>
          <span className="text-[10px] text-emerald-700 font-medium">
            {score >= 90 ? "★ Guild Master" : score >= 75 ? "✓ Verified Pro" : "• Starter Tier"}
          </span>
        </div>
      )}
    </div>
  );
}

export default TrustScoreRing;
