import OpenAI from "openai";

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export async function describeJobFromImageOpenAI(imageBase64, mimeType = "image/jpeg") {
  if (!OPENAI_API_KEY || OPENAI_API_KEY === "your_openai_api_key_here") {
    throw new Error("OpenAI API key not configured");
  }

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const cleanBase64 = imageBase64.includes(",") ? imageBase64.split(",")[1] : imageBase64;
  const dataUrl = `data:${mimeType};base64,${cleanBase64}`;

  const prompt = `You are Sahayak's Describe-It AI for a blue-collar services platform in India.
  Analyze this image and respond ONLY with a valid JSON object (no markdown, no backticks) with this structure:
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

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: prompt },
          { type: "image_url", image_url: { url: dataUrl } }
        ]
      }
    ],
    response_format: { type: "json_object" }
  });

  const content = response.choices[0]?.message?.content?.trim();
  return JSON.parse(content);
}

export async function describeJobFromTextOpenAI(description) {
  if (!OPENAI_API_KEY || OPENAI_API_KEY === "your_openai_api_key_here") {
    throw new Error("OpenAI API key not configured");
  }

  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const prompt = `You are Sahayak's Describe-It AI for a blue-collar services platform in India.
  A customer described their problem: "${description}"
  Respond ONLY with a valid JSON object (no markdown, no backticks) with this structure:
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

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });

  const content = response.choices[0]?.message?.content?.trim();
  return JSON.parse(content);
}
