import React, { createContext, useContext, useState, useEffect } from "react";
import { mockWorkers as initialWorkers } from "../data/mockWorkers";
import { mockJobs as initialJobs } from "../data/mockJobs";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Current mode: customer | worker | admin
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem("sahayak_role") || "customer";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("sahayak_lang") || "en";
  });

  const [workers, setWorkers] = useState(initialWorkers);
  const [jobs, setJobs] = useState(initialJobs);
  const [isWorkerReady, setIsWorkerReady] = useState(true);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [activeNotification, setActiveNotification] = useState(null);

  // Sync role to localStorage
  useEffect(() => {
    localStorage.setItem("sahayak_role", userRole);
  }, [userRole]);

  useEffect(() => {
    localStorage.setItem("sahayak_lang", language);
  }, [language]);

  const toggleWorkerReady = () => {
    setIsWorkerReady((prev) => !prev);
    // Update Ramesh Kumar status in workers array
    setWorkers((prev) =>
      prev.map((w) => (w.id === 1 ? { ...w, isReady: !isWorkerReady } : w))
    );
  };

  const createBookingDraft = (draft) => {
    setCurrentBooking(draft);
  };

  const finalizeJobBooking = (settledPrice, matchedWorker) => {
    const newJobId = `JOB-${Math.floor(1000 + Math.random() * 9000)}`;
    const newJob = {
      id: newJobId,
      status: "IN_PROGRESS",
      customerName: "Priya Sharma",
      customerPhone: "+91 98200 11928",
      address: "Flat 402, Sea Green Apts, 7 Bungalows, Andheri West",
      locality: "Andheri West",
      trade: currentBooking?.trade || matchedWorker.trade,
      issue: currentBooking?.issue || "Emergency repair service",
      hindiDescription: currentBooking?.hindiDescription || "आपातकालीन सेवा मरम्मत",
      urgency: currentBooking?.urgency || "NOW",
      urgencyReason: currentBooking?.urgencyReason || "Fast dispatch required",
      estimatedDuration: currentBooking?.estimatedDuration || "1 hour",
      estimatedDurationMinutes: currentBooking?.estimatedDurationMinutes || 60,
      materials: currentBooking?.materials || ["Standard connector parts"],
      price: settledPrice,
      priceBreakdown: {
        visitFee: 100,
        labour: settledPrice - 150 > 100 ? settledPrice - 150 : 100,
        materials: 30,
        platformFee: 20
      },
      workerId: matchedWorker.id,
      workerName: matchedWorker.name,
      workerPhoto: matchedWorker.photo,
      workerPhone: matchedWorker.phone,
      otp: `${Math.floor(1000 + Math.random() * 9000)}`,
      eta: "11 min away",
      timeline: [
        { step: "Describe-It AI Analysis", time: "Just now", done: true },
        { step: "Sealed Handshake Settled", time: "Just now", done: true },
        { step: `${matchedWorker.name} Accepted`, time: "Just now", done: true },
        { step: "Worker En Route", time: "Live ETA", done: true, active: true },
        { step: "Arrival & Start OTP", time: "Pending", done: false },
        { step: "Kaam Guarantee Issued", time: "Pending", done: false }
      ],
      beforePhoto: currentBooking?.image || "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&auto=format&fit=crop&q=80",
      afterPhoto: null,
      hasScopeChange: false,
      warrantyDays: 7,
      createdAt: new Date().toISOString()
    };

    setJobs((prev) => [newJob, ...prev]);
    setCurrentBooking(newJob);
    return newJob;
  };

  const respondToScopeChange = (jobId, approved) => {
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === jobId) {
          const additional = job.scopeChangeRequest?.additionalAmount || 0;
          return {
            ...job,
            status: approved ? "IN_PROGRESS" : "IN_PROGRESS",
            price: approved ? job.price + additional : job.price,
            hasScopeChange: false,
            scopeChangeDecision: approved ? "APPROVED" : "DECLINED"
          };
        }
        return job;
      })
    );
  };

  const markJobCompleted = (jobId, rating = 5, review = "Great work done!") => {
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === jobId) {
          return {
            ...job,
            status: "COMPLETED",
            rating,
            review,
            afterPhoto: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&auto=format&fit=crop&q=80"
          };
        }
        return job;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        setUserRole,
        language,
        setLanguage,
        workers,
        setWorkers,
        jobs,
        setJobs,
        isWorkerReady,
        toggleWorkerReady,
        currentBooking,
        createBookingDraft,
        finalizeJobBooking,
        respondToScopeChange,
        markJobCompleted,
        emergencyActive,
        setEmergencyActive,
        activeNotification,
        setActiveNotification
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppStore must be used within an AppProvider");
  }
  return context;
}
