// src/services/api.js

// -------- Disease Detection --------
export const detectDisease = async (formData) => {
  await new Promise((res) => setTimeout(res, 2000));

  return {
    disease: "Tomato Leaf Blight",
    confidence: 92,
    severity: "High",
    risk: "Severe",
    thermal: true,
    weather: {
      temperature: 32,
      humidity: 78,
      rainfall: 120,
    },
    recommendations: [
      "Remove infected leaves",
      "Apply copper fungicide",
      "Avoid overhead irrigation",
      "Use neem oil spray",
    ],
  };
};

// -------- Dashboard Stats --------
export const getDashboardStats = async () => {
  await new Promise((res) => setTimeout(res, 1000));

  return {
    totalScans: 128,
    healthy: 54,
    diseased: 74,
    highRisk: 23,
    successRate: 92,
    recent: [
      { crop: "Tomato", disease: "Leaf Blight", severity: "High" },
      { crop: "Rice", disease: "Brown Spot", severity: "Medium" },
      { crop: "Potato", disease: "Early Blight", severity: "Low" },
    ],
  };
};

// -------- History --------
export const getHistory = async () => {
  await new Promise((res) => setTimeout(res, 800));

  return [
    {
      date: "2026-02-01",
      crop: "Tomato",
      disease: "Leaf Blight",
      severity: "High",
      action: "Applied fungicide",
    },
    {
      date: "2026-01-28",
      crop: "Rice",
      disease: "Brown Spot",
      severity: "Medium",
      action: "Increased drainage",
    },
    {
      date: "2026-01-20",
      crop: "Potato",
      disease: "Early Blight",
      severity: "Low",
      action: "Removed infected leaves",
    },
  ];
};

// -------- Alerts --------
export const getAlerts = async () => {
  await new Promise((res) => setTimeout(res, 700));

  return [
    {
      crop: "Tomato",
      disease: "Late Blight",
      risk: "High",
      message:
        "High humidity and rainfall detected. Spray fungicide immediately.",
    },
    {
      crop: "Rice",
      disease: "Blast Disease",
      risk: "Medium",
      message:
        "Temperature favorable for fungal growth. Monitor closely.",
    },
    {
      crop: "Potato",
      disease: "Leaf Curl Virus",
      risk: "High",
      message:
        "Aphid population rising. Use insect control methods.",
    },
  ];
};
// -------- Recommendations --------
export const getRecommendations = async () => {
  await new Promise((res) => setTimeout(res, 600));

  return {
    disease: "Tomato Leaf Blight",
    treatment: [
      "Remove and destroy infected leaves",
      "Apply copper-based fungicide",
      "Ensure proper plant spacing",
    ],
    prevention: [
      "Avoid overhead irrigation",
      "Use disease-resistant varieties",
      "Rotate crops every season",
    ],
    chemical: [
      "Mancozeb spray (2g/L)",
      "Chlorothalonil",
    ],
    organic: [
      "Neem oil spray",
      "Garlic-chili extract",
    ],
    region: "Tamil Nadu",
    tips: [
      "High humidity areas require weekly monitoring",
      "Spray early morning for best results",
    ],
  };
};
