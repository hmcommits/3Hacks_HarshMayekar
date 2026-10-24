import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./store/appStore";
import Layout from "./components/layout/Layout";

// Pages
import Landing from "./pages/Landing";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import BookJob from "./pages/customer/BookJob";
import SealedHandshake from "./pages/customer/SealedHandshake";
import WorkerMatch from "./pages/customer/WorkerMatch";
import JobTracking from "./pages/customer/JobTracking";
import MonthlyKaam from "./pages/customer/MonthlyKaam";
import RateCompass from "./pages/customer/RateCompass";

import WorkerDashboard from "./pages/worker/WorkerDashboard";
import WorkerOnboarding from "./pages/worker/WorkerOnboarding";
import JobOffer from "./pages/worker/JobOffer";
import KaamKhata from "./pages/worker/KaamKhata";
import WorkPassport from "./pages/worker/WorkPassport";
import TrustScorePage from "./pages/worker/TrustScorePage";
import Upskilling from "./pages/worker/Upskilling";
import Insurance from "./pages/worker/Insurance";

import EmergencyMode from "./pages/shared/EmergencyMode";
import Safety from "./pages/shared/Safety";
import DisputeResolution from "./pages/shared/DisputeResolution";
import ChowkPulse from "./pages/shared/ChowkPulse";
import AdminDashboard from "./pages/admin/AdminDashboard";

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Layout routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />

            {/* Customer Routes */}
            <Route path="customer" element={<CustomerDashboard />} />
            <Route path="customer/book" element={<BookJob />} />
            <Route path="customer/negotiate" element={<SealedHandshake />} />
            <Route path="customer/match" element={<WorkerMatch />} />
            <Route path="customer/track/:id" element={<JobTracking />} />
            <Route path="customer/monthly" element={<MonthlyKaam />} />
            <Route path="customer/rates" element={<RateCompass />} />

            {/* Worker Routes */}
            <Route path="worker" element={<WorkerDashboard />} />
            <Route path="worker/onboard" element={<WorkerOnboarding />} />
            <Route path="worker/offer/:id" element={<JobOffer />} />
            <Route path="worker/khata" element={<KaamKhata />} />
            <Route path="worker/passport" element={<WorkPassport />} />
            <Route path="worker/trust" element={<TrustScorePage />} />
            <Route path="worker/upskilling" element={<Upskilling />} />
            <Route path="worker/insurance" element={<Insurance />} />
            <Route path="worker/rates" element={<RateCompass />} />

            {/* Shared & System Routes */}
            <Route path="safety" element={<Safety />} />
            <Route path="dispute" element={<DisputeResolution />} />
            <Route path="chowkpulse" element={<ChowkPulse />} />
            <Route path="admin" element={<AdminDashboard />} />

            {/* Aliases & Fallbacks */}
            <Route path="negotiate" element={<Navigate to="/customer/negotiate" replace />} />
            <Route path="book" element={<Navigate to="/customer/book" replace />} />
          </Route>

          {/* Full Screen Emergency Route (no header/footer interference) */}
          <Route path="emergency" element={<EmergencyMode />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
