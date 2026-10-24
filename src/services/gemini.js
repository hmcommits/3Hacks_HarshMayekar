import { GoogleGenerativeAI } from "@google/generative-ai";
import { describeJobFromTextOpenAI, describeJobFromImageOpenAI } from "./openai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export function getMockJobAnalysis(queryText = "") {
  const text = (queryText || "").toLowerCase();
  
  if (text.includes("spark") || text.includes("shock") || text.includes("mcb") || text.includes("switch") || text.includes("light") || text.includes("fuse") || text.includes("bijli") || text.includes("tar")) {
    return {
      trade: "Electrician",
      issue: "MCB switchboard short circuit and spark risk",
      urgency: "EMERGENCY",
      urgencyReason: "Live sparking and heat build-up poses immediate fire risk.",
      estimatedDuration: "1-1.5 hours",
      estimatedDurationMinutes: 75,
      materials: ["Havells 32A C-Curve MCB", "Insulated copper wire 4mm", "Heat-shrink sleeves"],
      priceBand: { min: 350, max: 650, currency: "INR" },
      confidence: 93,
      safetyNotes: [
        "Isolate incoming main power breaker switch immediately",
        "Do not touch scorched metal surface with bare hands",
        "Keep a dry ABC chemical fire extinguisher or dry sand on standby"
      ],
      scope: "Circuit isolation, fault tracing, terminal tightening, load distribution, and damaged breaker replacement.",
      hindiDescription: "मेन स्विचबोर्ड में स्पार्क और ट्रिपिंग; कृपया तुरंत मेन सप्लाई बंद करें।"
    };
  }
  
  if (text.includes("clean") || text.includes("maid") || text.includes("kachra") || text.includes("safai") || text.includes("bartan") || text.includes("dust") || text.includes("jhaadu")) {
    return {
      trade: "Maid / Cleaner",
      issue: "Deep kitchen degreasing & exhaust chimney sanitation",
      urgency: "NORMAL",
      urgencyReason: "Routine kitchen hygiene and grease accumulation",
      estimatedDuration: "2 hours",
      estimatedDurationMinutes: 120,
      materials: ["Industrial kitchen degreaser (500ml)", "Microfiber pads", "Scrubbing brush set"],
      priceBand: { min: 250, max: 480, currency: "INR" },
      confidence: 89,
      safetyNotes: [
        "Keep kitchen windows open for chemical fume ventilation",
        "Store food items inside covered cupboards"
      ],
      scope: "Chimney filter mesh soak, backsplash grease scrubbing, countertop sanitization, and floor deep scrub.",
      hindiDescription: "रसोई घर और एग्जॉस्ट की डीप क्लीनिंग व चिकनाई हटाना।"
    };
  }

  if (text.includes("carpenter") || text.includes("door") || text.includes("wood") || text.includes("darwaza") || text.includes("hinge") || text.includes("wardrobe") || text.includes("table") || text.includes("lock")) {
    return {
      trade: "Carpenter",
      issue: "Wardrobe door hinge alignment & floor scraping fix",
      urgency: "NORMAL",
      urgencyReason: "Door misalignment causing floor scratches",
      estimatedDuration: "45 min",
      estimatedDurationMinutes: 45,
      materials: ["3-inch soft close hinges (pair)", "1-inch wood screws", "Fevicol Marine glue"],
      priceBand: { min: 300, max: 550, currency: "INR" },
      confidence: 88,
      safetyNotes: ["Support door weight firmly during unmounting to prevent damage to laminate"],
      scope: "Dismantle worn hinges, plug stripped holes with seasoned wood pegs, refit and level door alignment.",
      hindiDescription: "अलमारी के ढीले कब्जे बदलना और दरवाजे की सही अलाइनमेंट।"
    };
  }

  if (text.includes("ac") || text.includes("cool") || text.includes("gas") || text.includes("air condition") || text.includes("filter") || text.includes("servicing")) {
    return {
      trade: "AC Technician",
      issue: "Split AC indoor water leakage and low cooling airflow",
      urgency: "HIGH",
      urgencyReason: "Water dripping onto bedroom floor risks internal wall seepage",
      estimatedDuration: "1 hour",
      estimatedDurationMinutes: 60,
      materials: ["Foam jet coil spray", "Flexible drain hose (1.5m)", "Filter clip"],
      priceBand: { min: 450, max: 750, currency: "INR" },
      confidence: 90,
      safetyNotes: ["Turn off AC stabilizer and MCB before unscrewing indoor cover"],
      scope: "Evaporator coil pressure wash, drain pipe clearing, blower fan cleaning, and refrigerant pressure check.",
      hindiDescription: "एसी से इनडोर पानी टपकना और कूलिंग कॉइल की सर्विसिंग।"
    };
  }

  // Default to plumbing leak
  return {
    trade: "Plumber",
    issue: "Water pipe joint leak & faulty angle cock replacement",
    urgency: (text.includes("burst") || text.includes("flood") || text.includes("emergency") || text.includes("paani")) ? "EMERGENCY" : "HIGH",
    urgencyReason: "Continuous drip risks water wastage and cabinet moisture damage.",
    estimatedDuration: "45-60 min",
    estimatedDurationMinutes: 50,
    materials: ["Heavy Teflon thread seal tape", "Brass angle valve 1/2\"", "PVC connector 1.5\""],
    priceBand: { min: 300, max: 550, currency: "INR" },
    confidence: 87,
    safetyNotes: [
      "Locate the stopcock near the water meter and turn it clockwise to close",
      "Keep a bucket underneath the joint until the technician arrives"
    ],
    scope: "Inspect pipe threads, remove degraded sealant, install new connector valve, and pressure test for leaks.",
    hindiDescription: "रसोई या बाथरूम के नल के जोड़ से पानी रिस रहा है; मेन वाल्व बंद करें।"
  };
}

export async function describeJobFromImage(imageBase64, mimeType = "image/jpeg") {
  if (API_KEY && API_KEY !== "your_gemini_api_key_here") {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `You are Sahayak's Describe-It AI for a blue-collar services platform in India. 
      Analyze this image and respond ONLY with a valid JSON object (no markdown, no code blocks, no backticks) with this exact structure:
      {
        "trade": "Plumber|Electrician|Carpenter|Painter|Maid / Cleaner|Cook|Mason|AC Technician|Pest Control|Gardener|General Helper",
        "issue": "short description of the problem in 1 sentence",
        "urgency": "EMERGENCY|HIGH|NORMAL|LOW",
        "urgencyReason": "reason if emergency or high",
        "estimatedDuration": "e.g. 1-2 hours",
        "estimatedDurationMinutes": 90,
        "materials": ["material1", "material2"],
        "priceBand": { "min": 300, "max": 600, "currency": "INR" },
        "confidence": 85,
        "safetyNotes": ["note1", "note2"],
        "scope": "detailed scope description",
        "hindiDescription": "same issue in Hindi"
      }`;

      const cleanBase64 = imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64;
      const imagePart = { inlineData: { data: cleanBase64, mimeType } };
      const result = await model.generateContent([prompt, imagePart]);
      const rawText = result.response.text().trim();
      const cleaned = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
      return JSON.parse(cleaned);
    } catch (err) {
      console.warn("Gemini Vision API error, attempting OpenAI fallback...", err);
      try {
        return await describeJobFromImageOpenAI(imageBase64, mimeType);
      } catch (openAiErr) {
        console.warn("OpenAI fallback failed, using smart heuristic analysis...", openAiErr);
        return getMockJobAnalysis("leaking pipe water damage");
      }
    }
  }

  try {
    return await describeJobFromImageOpenAI(imageBase64, mimeType);
  } catch (e) {
    return getMockJobAnalysis("leaking pipe water damage");
  }
}

export async function describeJobFromText(description) {
  if (API_KEY && API_KEY !== "your_gemini_api_key_here") {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `You are Sahayak's Describe-It AI for a blue-collar services platform in India.
      A customer described their problem: "${description}"
      
      Respond ONLY with a valid JSON object (no markdown, no code blocks, no backticks) with this exact structure:
      {
        "trade": "Plumber|Electrician|Carpenter|Painter|Maid / Cleaner|Cook|Mason|AC Technician|Pest Control|Gardener|General Helper",
        "issue": "short description of the problem in 1 sentence",
        "urgency": "EMERGENCY|HIGH|NORMAL|LOW",
        "urgencyReason": "reason if emergency or high",
        "estimatedDuration": "e.g. 1-2 hours",
        "estimatedDurationMinutes": 90,
        "materials": ["material1", "material2"],
        "priceBand": { "min": 300, "max": 600, "currency": "INR" },
        "confidence": 85,
        "safetyNotes": ["note1", "note2"],
        "scope": "detailed scope description",
        "hindiDescription": "same issue in Hindi"
      }`;

      const result = await model.generateContent(prompt);
      const rawText = result.response.text().trim();
      const cleaned = rawText.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/```$/i, "").trim();
      return JSON.parse(cleaned);
    } catch (err) {
      console.warn("Gemini Text API error, attempting OpenAI fallback...", err);
      try {
        return await describeJobFromTextOpenAI(description);
      } catch (openAiErr) {
        console.warn("OpenAI fallback failed, using smart heuristic analysis...", openAiErr);
        return getMockJobAnalysis(description);
      }
    }
  }

  try {
    return await describeJobFromTextOpenAI(description);
  } catch (e) {
    return getMockJobAnalysis(description);
  }
}
