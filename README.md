# 🌱 AI-Based Crop Disease Prediction System

An intelligent system that detects crop diseases from leaf images and predicts outbreak risk using environmental data, helping farmers take early preventive action.


## 🚀 Problem Statement

Crop diseases significantly reduce agricultural yield due to delayed detection and lack of timely intervention.

Traditional methods:
- Require expert inspection
- Are time-consuming and not scalable

## 💡 Solution

This system uses **Computer Vision + Machine Learning** to:
- Detect diseases from leaf images
- Predict disease risk using environmental conditions
- Provide treatment and prevention recommendations
  
## ⚙️ Features

- 📸 Leaf image-based disease detection (CNN model)
- 🌦️ Environmental risk prediction (weather + historical data)
- 📊 Disease severity assessment
- 💊 Treatment & prevention recommendations
- 📈 Dashboard-style output visualization (optional)

## 🧠 Tech Stack

- **Languages:** Python  
- **Libraries:** TensorFlow / PyTorch, OpenCV, NumPy, Pandas  
- **ML Models:** CNN (ResNet / Custom CNN), Random Forest / Gradient Boosting  
- **Dataset:** PlantVillage Dataset  


## 🏗️ System Architecture

1. User uploads crop leaf image  
2. Image preprocessing (resize, normalization)  
3. CNN model predicts disease class  
4. Environmental data is fetched (API / dataset)  
5. Risk prediction model evaluates outbreak probability  
6. System outputs:
   - Disease type  
   - Severity level  
   - Recommended treatment  

## 📊 Results

- Achieved high accuracy in disease classification (based on dataset)
- Reliable prediction of disease risk using environmental factors
- Improved early detection capability compared to manual inspection


---

## ▶️ How to Run

```bash
pip install -r requirements.txt
python main.py
