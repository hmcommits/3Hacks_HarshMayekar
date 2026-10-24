export const mockPriceBands = {
  Plumber: {
    title: "Plumber / प्लंबर",
    commonJobs: [
      { name: "Tap Leakage / Washer Fix", p25: 180, p50: 250, p75: 350 },
      { name: "Sink Drain Unclogging", p25: 250, p50: 380, p75: 480 },
      { name: "Flush Tank / Valve Repair", p25: 300, p50: 450, p75: 600 },
      { name: "Geyser Inlet/Outlet Fitting", p25: 350, p50: 500, p75: 750 },
      { name: "Emergency Pipe Burst Containment", p25: 450, p50: 650, p75: 900 }
    ],
    neighbourhoods: [
      { area: "Andheri West", p25: 250, p50: 380, p75: 550, activeWorkers: 18, demand: "High" },
      { area: "Andheri East", p25: 200, p50: 320, p75: 450, activeWorkers: 14, demand: "Medium" },
      { area: "Bandra West", p25: 300, p50: 450, p75: 700, activeWorkers: 9, demand: "High" },
      { area: "Goregaon", p25: 220, p50: 340, p75: 480, activeWorkers: 12, demand: "Normal" },
      { area: "Malad", p25: 200, p50: 300, p75: 440, activeWorkers: 16, demand: "Normal" },
      { area: "Juhu", p25: 320, p50: 480, p75: 750, activeWorkers: 7, demand: "High" }
    ],
    recommendedFloor: 250,
    materialsBreakdown: [
      { item: "Heavy CPVC Coupling 1\"", marketAvg: 65, range: "₹50 - ₹80" },
      { item: "Teflon Thread Seal Roll", marketAvg: 35, range: "₹25 - ₹45" },
      { item: "Brass Angle Valve", marketAvg: 280, range: "₹220 - ₹350" },
      { item: "Flexible Waste Pipe (Sink)", marketAvg: 90, range: "₹75 - ₹120" }
    ],
    trend: [
      { month: "May", avgPrice: 320 },
      { month: "Jun (Monsoon)", avgPrice: 420 },
      { month: "Jul (Monsoon)", avgPrice: 460 },
      { month: "Aug", avgPrice: 390 },
      { month: "Sep", avgPrice: 340 },
      { month: "Oct", avgPrice: 350 }
    ]
  },
  Electrician: {
    title: "Electrician / इलेक्ट्रीशियन",
    commonJobs: [
      { name: "Switch / Socket Replacement", p25: 150, p50: 220, p75: 300 },
      { name: "Fan Installation / Regulator Repair", p25: 200, p50: 300, p75: 400 },
      { name: "MCB / Fuse Box Tripping Fix", p25: 350, p50: 500, p75: 700 },
      { name: "Complete Room Re-wiring", p25: 800, p50: 1200, p75: 1800 },
      { name: "Inverter / Battery Setup", p25: 450, p50: 650, p75: 900 }
    ],
    neighbourhoods: [
      { area: "Andheri West", p25: 280, p50: 420, p75: 600, activeWorkers: 15, demand: "High" },
      { area: "Andheri East", p25: 220, p50: 350, p75: 500, activeWorkers: 11, demand: "Normal" },
      { area: "Bandra West", p25: 350, p50: 520, p75: 800, activeWorkers: 8, demand: "High" },
      { area: "Goregaon", p25: 240, p50: 380, p75: 520, activeWorkers: 13, demand: "Normal" },
      { area: "Malad", p25: 220, p50: 340, p75: 480, activeWorkers: 10, demand: "Normal" },
      { area: "Juhu", p25: 340, p50: 550, p75: 850, activeWorkers: 6, demand: "High" }
    ],
    recommendedFloor: 280,
    materialsBreakdown: [
      { item: "Anchor Roma Modular Switch", marketAvg: 45, range: "₹35 - ₹60" },
      { item: "Havells 32A C-Curve MCB", marketAvg: 220, range: "₹190 - ₹260" },
      { item: "Finolex 2.5mm Copper Wire (10m)", marketAvg: 240, range: "₹210 - ₹280" },
      { item: "Insulation Tape 3M Pack", marketAvg: 20, range: "₹15 - ₹25" }
    ],
    trend: [
      { month: "May", avgPrice: 380 },
      { month: "Jun", avgPrice: 430 },
      { month: "Jul", avgPrice: 470 },
      { month: "Aug", avgPrice: 410 },
      { month: "Sep", avgPrice: 390 },
      { month: "Oct", avgPrice: 420 }
    ]
  },
  "Maid / Cleaner": {
    title: "Maid & Cleaning / बाई और सफाई",
    commonJobs: [
      { name: "Full Kitchen Deep Cleaning", p25: 350, p50: 500, p75: 700 },
      { name: "Bathroom Disinfection & Scrub", p25: 250, p50: 350, p75: 480 },
      { name: "Floor Mopping + Balcony Scrub", p25: 200, p50: 280, p75: 380 },
      { name: "Post-Party Quick Clean Up", p25: 300, p50: 450, p75: 600 },
      { name: "Utensil Wash & Prep (1 session)", p25: 150, p50: 200, p75: 280 }
    ],
    neighbourhoods: [
      { area: "Andheri West", p25: 220, p50: 320, p75: 450, activeWorkers: 24, demand: "Very High" },
      { area: "Andheri East", p25: 180, p50: 250, p75: 350, activeWorkers: 30, demand: "High" },
      { area: "Bandra West", p25: 280, p50: 400, p75: 600, activeWorkers: 15, demand: "Very High" },
      { area: "Goregaon", p25: 200, p50: 280, p75: 380, activeWorkers: 20, demand: "Medium" },
      { area: "Malad", p25: 180, p50: 260, p75: 360, activeWorkers: 22, demand: "Medium" },
      { area: "Juhu", p25: 300, p50: 420, p75: 620, activeWorkers: 12, demand: "Very High" }
    ],
    recommendedFloor: 180,
    materialsBreakdown: [
      { item: "Degreaser Bottle (500ml)", marketAvg: 90, range: "₹75 - ₹110" },
      { item: "Disinfectant Surface Cleaner", marketAvg: 80, range: "₹65 - ₹100" },
      { item: "Scotch-Brite Heavy Duty Scrub Pad", marketAvg: 30, range: "₹25 - ₹35" }
    ],
    trend: [
      { month: "May", avgPrice: 260 },
      { month: "Jun", avgPrice: 280 },
      { month: "Jul", avgPrice: 290 },
      { month: "Aug (Ganesh Fest)", avgPrice: 380 },
      { month: "Sep", avgPrice: 300 },
      { month: "Oct (Diwali Rush)", avgPrice: 420 }
    ]
  },
  Carpenter: {
    title: "Carpenter / बढ़ई",
    commonJobs: [
      { name: "Door Lock & Handle Fitting", p25: 250, p50: 350, p75: 500 },
      { name: "Cabinet Hinge Realignment", p25: 220, p50: 320, p75: 450 },
      { name: "Bed Slats / Frame Reinforcement", p25: 400, p50: 600, p75: 850 },
      { name: "Curtain Rod Bracket Fixing", p25: 180, p50: 250, p75: 350 }
    ],
    neighbourhoods: [
      { area: "Andheri West", p25: 350, p50: 500, p75: 750, activeWorkers: 11, demand: "Normal" },
      { area: "Andheri East", p25: 280, p50: 420, p75: 600, activeWorkers: 14, demand: "Normal" },
      { area: "Bandra West", p25: 400, p50: 620, p75: 900, activeWorkers: 7, demand: "High" },
      { area: "Goregaon", p25: 300, p50: 450, p75: 650, activeWorkers: 9, demand: "Normal" },
      { area: "Malad", p25: 280, p50: 400, p75: 580, activeWorkers: 18, demand: "Normal" },
      { area: "Juhu", p25: 420, p50: 650, p75: 950, activeWorkers: 5, demand: "High" }
    ],
    recommendedFloor: 350,
    materialsBreakdown: [
      { item: "Godrej Mortise Lockset", marketAvg: 850, range: "₹720 - ₹1100" },
      { item: "Stainless Steel 3\" Hinges", marketAvg: 110, range: "₹90 - ₹140" },
      { item: "Fevicol Marine Adhesive (500g)", marketAvg: 160, range: "₹140 - ₹180" }
    ],
    trend: [
      { month: "May", avgPrice: 480 },
      { month: "Jun", avgPrice: 490 },
      { month: "Jul", avgPrice: 510 },
      { month: "Aug", avgPrice: 520 },
      { month: "Sep", avgPrice: 500 },
      { month: "Oct", avgPrice: 550 }
    ]
  },
  "AC Technician": {
    title: "AC Technician / एसी तकनीशियन",
    commonJobs: [
      { name: "Foam Jet Cleaning (Indoor + Outdoor)", p25: 450, p50: 600, p75: 800 },
      { name: "Gas Leakage Check & Top-up", p25: 1200, p50: 1600, p75: 2200 },
      { name: "Water Droplet Leak Repair", p25: 350, p50: 500, p75: 700 },
      { name: "Capacitor / Relay Replacement", p25: 500, p50: 750, p75: 1100 }
    ],
    neighbourhoods: [
      { area: "Andheri West", p25: 450, p50: 650, p75: 900, activeWorkers: 12, demand: "High" },
      { area: "Andheri East", p25: 400, p50: 580, p75: 800, activeWorkers: 10, demand: "Normal" },
      { area: "Bandra West", p25: 500, p50: 750, p75: 1100, activeWorkers: 8, demand: "Very High" },
      { area: "Goregaon", p25: 420, p50: 600, p75: 850, activeWorkers: 9, demand: "Normal" },
      { area: "Malad", p25: 380, p50: 550, p75: 780, activeWorkers: 11, demand: "Normal" },
      { area: "Juhu", p25: 520, p50: 800, p75: 1200, activeWorkers: 6, demand: "Very High" }
    ],
    recommendedFloor: 400,
    materialsBreakdown: [
      { item: "R32 Refrigerant Gas 1kg", marketAvg: 950, range: "₹850 - ₹1200" },
      { item: "Run Capacitor 50uF Heavy", marketAvg: 350, range: "₹280 - ₹450" },
      { item: "Drain Pipe 3m Corrugated", marketAvg: 110, range: "₹80 - ₹150" }
    ],
    trend: [
      { month: "May (Peak Summer)", avgPrice: 750 },
      { month: "Jun", avgPrice: 680 },
      { month: "Jul", avgPrice: 580 },
      { month: "Aug", avgPrice: 540 },
      { month: "Sep", avgPrice: 590 },
      { month: "Oct (Heat)", avgPrice: 650 }
    ]
  }
};
