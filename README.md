# Sahayak (सहायक)
**Domain: Social Impact**
### A Hyperlocal On-Demand Blue-Collar Services Platform

> *"A digital, trusted, and fair ecosystem which fills this gap in both English and Hindi languages."*  
> *(एक डिजिटल, विश्वसनीय और निष्पक्ष इकोसिस्टम जो इस अंतर को अंग्रेजी और हिंदी दोनों भाषाओं में पूरा करता है।)*

---

## 🌐 Live Application
- **Deployed Application:** https://sahayak-sepia.vercel.app/

---

## 📌 Executive Summary

Every Indian neighbourhood already has an informal labour marketplace: the **chowk** or **naka**, a street corner where painters, plumbers, masons, carpenters, and helpers gather every morning hoping to be hired. Households, on the other hand, rely on word of mouth, security guards, or unverified contact directories when emergencies happen. 

Both sides face major frictions:
- **Workers** lose multiple days each week standing idle, have zero rate transparency, face delayed payments, and possess no formal credit or work credentials.
- **Customers** face extreme availability anxiety, arbitrary price inflation, lack of verified trust when letting someone into their home, and category confusion.

**Sahayak** bridges this gap by bringing the local chowk online without altering how blue-collar workers naturally live and operate. Built with an inclusive, mobile-first progressive web architecture, Sahayak introduces algorithmic fairness, instant multimodal diagnostics, and portable verified credentials.

---

## ⚡ The 5 Signature Innovations

### 1. The Sealed Handshake (Double-Sided Blind Match)
Traditional price negotiation is slow, awkward, and prone to price gouging. Sahayak replaces it with a sealed settlement mechanism:
- Workers privately configure their **floor rate** per service, time slot, and distance.
- Customers define a **budget ceiling** or accept local market rate bands.
- Neither party ever sees the other party's limit.
- If `Customer Budget >= Worker Floor`, the engine matches instantly at the exact fair midpoint:
  $$\text{Settlement Price} = \frac{\text{Budget Ceiling} + \text{Floor Rate}}{2}$$
- If no overlap exists, the system presents non-punitive options (adjust budget, book an off-peak slot, or simplify the scope) without exposing any worker's minimum.
- Includes a 3-round **Open Bargain Mode** for users who prefer guided counter-offers.

### 2. Describe-It AI (Multimodal Diagnostics)
Customers often don't know the technical diagnosis or trade required (e.g., distinguishing between a plumbing pipe failure, tile seepage, or structural waterproofing).
- Customers upload a photo or record a voice note in English or Hindi.
- The AI engine analyzes the input and generates a structured **Job Card**:
  - Trade classification (Plumber, Electrician, Carpenter, Mason, Cleaner, etc.)
  - Likely fault diagnosis and scope description
  - Required repair materials and replacement parts
  - Estimated duration and local fair price band
  - Immediate life-safety containment instructions (e.g., shut off angle valve or trip circuit breaker)
  - Automatic emergency hazard detection for gas leaks, pipe bursts, and electrical sparks

### 3. The 30-Minute Promise Engine & Chowk Pulse
- **Chowk Pulse:** Real-time supply heatmap tracking workers who have toggled their status to "Ready for Work / काम के लिए तैयार".
- **Parallel Dispatch:** Broadcasts incoming jobs simultaneously to the top nearby qualified workers rather than sequential single-ping dispatch. First to accept secures the job.
- **Fair Rotation Algorithm:** Balances allocations so newly verified and starter-tier workers receive guaranteed opportunities, avoiding rich-get-richer algorithmic bias.
- **Fallback Cascade:** Automatically widens the radius, suggests team-ups, or escalates to human Chowk Captains if unfulfilled within target thresholds.
- **On-Time Guarantee:** Provides transparent status tracking with arrival credits if system delays occur.

### 4. Layered Trust Both Ways (0–100 Trust Score)
Safety and verification must protect both the homeowner and the service provider:
- **Layer 1 (Identity):** Aadhaar-based eKYC, phone OTP, and face matching.
- **Layer 2 (Background):** Police clearance status and verified badge.
- **Layer 3 (Skill):** Practical scenario assessments, trade skill video reviews, and vocational certifications.
- **Layer 4 (Community Guild Vouching):** Peer endorsements from senior Mistris, resident associations, and local hardware merchants staking reputation.
- **Two-Way Safety:** Start and completion OTP verification, masked calling, emergency SOS trigger, address safety scoring, and women-first filters (daytime-only, women-only households, and women-led pairs).

### 5. The Work Passport & Kaam Khata (Social Impact Engine)
Sahayak serves as an economic ladder out of informal labour:
- **Work Passport:** A portable, verified digital credential owned by the worker that records completed jobs, ratings, on-time percentage, and verified trade competencies. Shareable with banks, lenders, and housing societies.
- **Kaam Khata:** A voice-friendly digital earnings ledger tracking gross revenue, platform service fees, and savings targets.
- **Instant UPI Payouts:** Direct compensation release upon verified job completion.
- **Micro-Insurance & Tool Financing:** Small per-job contributions unlock accident coverage and micro-credit for essential power tools (drills, ladders, sprayers).

---

## 📊 Market Comparison

| Feature / Dimension | Curated Marketplaces | Lead Directories | Physical Chowk | **Sahayak** |
|---|---|---|---|---|
| **Pricing Control** | Platform sets rigid rates | Fixed listing fees | Unregulated haggling | **Sealed Handshake (Fair Midpoint)** |
| **Worker Commission** | High (20% – 35%) | Paid upfront per lead | 0% (High risk) | **Low flat transparent fee** |
| **Dispatch Speed** | Scheduled slots | Days / Unreliable | Immediate if present | **30-Min Parallel Dispatch** |
| **Job Scoping** | Rigid menu lists | None | Guesswork | **Describe-It AI (Vision & Voice)** |
| **Trust & Verification** | Centralized audit | Unchecked listings | Zero verification | **4-Layer Trust + Community Vouching** |
| **Financial Inclusion** | Proprietary to app | None | Cash only | **Work Passport + Instant UPI + Kaam Khata** |
| **Worker Safety** | Customer-biased | None | Unprotected | **Two-way SOS, Address Red-Flags, Women-First** |

---

## 🛠️ Architecture & Tech Stack

```
┌────────────────────────────────────────────────────────────────────────┐
│                        EXPERIENCE LAYER (PWA)                          │
│  React 18  •  Tailwind CSS  •  Framer Motion  •  Recharts  •  Lucide   │
├────────────────────────────────────────────────────────────────────────┤
│                       APPLICATION STATE & ROUTER                       │
│      React Context AppStore  •  React Router v6  •  Vite PWA Plugin     │
├────────────────────────────────────────────────────────────────────────┤
│                       INTELLIGENCE LAYER (AI)                          │
│        Google Gemini 1.5 Flash (Vision & Text)  •  OpenAI Fallback     │
├────────────────────────────────────────────────────────────────────────┤
│                         DATA & DOMAIN MODELS                           │
│   Mock Workers  •  Rate Compass Price Bands  •  Job Lifecycle Engine   │
└────────────────────────────────────────────────────────────────────────┘
```

- **Frontend Core:** React 18 with Vite
- **Styling & UI:** Tailwind CSS with custom Indian heritage color tokens (Saffron `#FF6B35`, Deep Teal `#0B4F6C`, Golden Amber `#FFB627`)
- **Animations:** Framer Motion for staggered card reveals, envelope sealing transitions, and countdown gauges
- **Data Visualizations:** Recharts for Rate Compass percentile bands and Kaam Khata income velocity charts
- **Progress Indicators:** React Circular Progressbar for animated Trust Score rings
- **AI Integration:** Google Generative AI SDK with structured JSON schema outputs and automatic fallback handling
- **PWA Capabilities:** Service Worker registration, offline precaching, standalone display mode, and mobile-first touch optimization

---

## 🗂️ Project Directory Structure

```
c:/dev/3Hacks_HarshMayekar/
├── public/
│   ├── manifest.json            # PWA manifest definition
│   └── sahayak-logo.svg         # Brand vector mark
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BottomNav.jsx    # Responsive mobile bottom navigation
│   │   │   ├── Header.jsx       # Global header with role switcher and SOS
│   │   │   └── Layout.jsx       # Responsive layout shell
│   │   └── ui/
│   │       ├── Badge.jsx        # Status and category badges
│   │       ├── Button.jsx       # Standardized design system button
│   │       ├── Card.jsx         # Surface container cards
│   │       ├── LoadingSpinner.jsx # Fluid loading states
│   │       ├── Modal.jsx        # Accessible dialog wrapper
│   │       └── TrustScoreRing.jsx # Circular animated score component
│   ├── data/
│   │   ├── mockJobs.js          # Sample job lifecycle records
│   │   ├── mockPrices.js        # Rate Compass p25, p50, p75 price bands
│   │   └── mockWorkers.js       # Verified worker profiles across trades
│   ├── pages/
│   │   ├── admin/
│   │   │   └── AdminDashboard.jsx # Chowk Captain dispatch & dispute queue
│   │   ├── customer/
│   │   │   ├── BookJob.jsx      # Multimodal Describe-It AI booking screen
│   │   │   ├── CustomerDashboard.jsx # Active orders & quick actions
│   │   │   ├── JobCard.jsx      # AI diagnostic output and parts scope
│   │   │   ├── JobTracking.jsx  # OTP arrival, scope change & proof
│   │   │   ├── MonthlyKaam.jsx  # Recurring domestic staff subscriptions
│   │   │   ├── RateCompass.jsx  # Hyperlocal price intelligence benchmark
│   │   │   ├── SealedHandshake.jsx # Blind negotiation settlement engine
│   │   │   └── WorkerMatch.jsx  # Confirmed professional match and ETA
│   │   ├── shared/
│   │   │   ├── ChowkPulse.jsx   # Live supply/demand neighbourhood heatmap
│   │   │   ├── DisputeResolution.jsx # Evidence synthesis & warranty desk
│   │   │   ├── EmergencyMode.jsx # High-urgency safety instructions & dispatch
│   │   │   └── Safety.jsx       # Trusted contacts & women-first settings
│   │   ├── worker/
│   │   │   ├── Insurance.jsx    # Micro-insurance policy status
│   │   │   ├── JobOffer.jsx     # 30-second countdown offer sheet
│   │   │   ├── KaamKhata.jsx    # Voice-friendly digital earnings ledger
│   │   │   ├── TrustScorePage.jsx # Trust score breakdown and score boosters
│   │   │   ├── Upskilling.jsx   # Vernacular trade courses & certifications
│   │   │   ├── WorkerDashboard.jsx # Live "Ready for Work" toggle & metrics
│   │   │   ├── WorkerOnboarding.jsx # 6-step registration & verification
│   │   │   └── WorkPassport.jsx # Portable verified credential card
│   │   └── Landing.jsx          # Dual-column interactive landing page
│   ├── services/
│   │   ├── gemini.js            # Gemini 1.5 Flash Vision & text prompt parser
│   │   └── openai.js            # OpenAI GPT-4o fallback integration
│   ├── store/
│   │   └── appStore.jsx         # Central React Context state management
│   ├── App.jsx                  # Application route registry
│   ├── index.css                # Global styles, fonts and custom utilities
│   └── main.jsx                 # Client entry point
├── index.html                   # HTML template
├── package.json                 # Dependency definitions and build scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Theme configuration and palette extensions
└── vite.config.js               # Vite bundler and PWA build setup
```

---

## 🚀 Key User Journeys

### 1. Customer Booking Journey
1. **Explore:** From the landing page, choose an instant problem chip or click "I Need Help".
2. **Describe:** Upload a photo of the defect, record voice input, or pick a preset scenario on `/customer/book`.
3. **AI Card:** Review trade classification, estimated repair time, materials checklist, and price range.
4. **Negotiate:** Enter a budget ceiling on `/customer/negotiate` and trigger the Sealed Handshake to settle at the fair midpoint.
5. **Dispatch & Track:** Match with a verified professional on `/customer/match` and monitor live progress, OTP start, scope change approval, and before/after photo proof on `/customer/track/:id`.

### 2. Worker Partner Journey
1. **Onboard:** Complete the 6-step registration on `/worker/onboard` with floor rates and trade preferences.
2. **Go Live:** Toggle "Ready for Work" on `/worker` to broadcast availability on Chowk Pulse.
3. **Receive Offer:** Review incoming audio cards on `/worker/offer/:id` with distance, scope, and price. Accept with one tap.
4. **Deliver & Ledger:** Complete work, submit photo verification, receive instant settlement in Kaam Khata (`/worker/khata`), and update the verified Work Passport (`/worker/passport`).

### 3. Community Administration & Safety
1. **Chowk Captains:** Monitor live demand heatmaps (`/chowkpulse`) and resolve escalated fallbacks on `/admin`.
2. **Emergency Protocol:** Activate the full-screen emergency mode on `/emergency` for instant hazard containment guidelines and prioritized emergency dispatch.

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- pnpm (v8.0.0 or higher) or npm

### Installation Steps

1. Clone the repository and navigate into the project root:
   ```bash
   git clone <repository-url>
   cd 3Hacks_HarshMayekar
   ```

2. Install project dependencies:
   ```bash
   pnpm install
   ```

3. Configure environment variables:
   Copy the example environment file and insert your API keys:
   ```bash
   cp .env.example .env
   ```
   Add your keys in `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```
   *(Note: The prototype includes built-in offline test presets for all core flows even without live API keys).*

4. Start the local development server:
   ```bash
   pnpm dev
   ```
   The application will be accessible at `http://localhost:5173/`.

5. Build for production:
   ```bash
   pnpm build
   ```

6. Preview the production build:
   ```bash
   pnpm preview
   ```

---

## 🛡️ Anti-Gaming & Platform Integrity

- **Disintermediation Deterrence:** On-platform warranty claims (7-Day Kaam Guarantee), micro-insurance coverage, and Work Passport credential updates are only credited for platform-settled jobs.
- **Doorstep Price Protection:** Workers cannot arbitrarily inflate prices on-site; extra work requires a structured in-app **Scope Change** with photographic justification approved by the customer.
- **Fair Rotation:** The matching score weights ETA, Trust Score, skill fit, and rotation equity to prevent single-provider monopolies in local clusters.
- **Dispute Resolution:** Objective photo proof, chat logs, and timestamp data are synthesized for rapid review by trained local mediators.

---

## 📈 Social Impact Goals

- **Reduce Worker Idle Time:** Decrease unhired days from ~14 days per month down to under 3 days per month.
- **Pricing Autonomy:** Allow workers to protect their minimum floor rate while avoiding destructive races to the bottom.
- **Financial Inclusion:** Bridge informal daily-wage earners to bank accounts, portable credit scores, and micro-insurance.
- **Safety for Women:** Provide verified woman-to-woman domestic bookings and daytime filtering for female service professionals.

---

## 📄 License
This project was developed as a solution prototype for hackathon demonstration. All rights reserved.
