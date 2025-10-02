# 🌱 AgriNOVA Frontend – AI-Powered Personal Farming Assistant

&#x20;  &#x20;

AgriNOVA is an **AI-powered Personal Farming Assistant**.\
It acts as a **“Krishi Sakhi” (Digital Friend)** for farmers, delivering **personalised, proactive, and contextual agricultural guidance** throughout the crop cycle.

This repository contains the **frontend application**, providing a simple, multilingual, and farmer-friendly interface to interact with backend AI services.

---


## ✨ Core Features

1. **👨‍🌾 Farmer & Farm Profiling**\
   Capture key details like land size, location, soil type, crop, and irrigation method.

2. **💬 Conversational Interface**\
   Voice + text interaction in **Malayalam , Hindi** and other Indian languages.

3. **📖 Activity Tracking**\
   Farmers log sowing, irrigation, pest sightings, or fertilizer usage in simple terms.

4. **🤖 Personalised Advisory**\
   AI generates proactive, contextual alerts and tips, e.g.:

   - *“Rain expected, avoid spraying tomorrow.”*
   - *“Pest outbreak nearby—inspect your brinjal crop.”*

5. **🔔 Personalized Alerts & Notifications**\
   Farmers receive reminders and push notifications for:

   - Crop operations (irrigation, fertiliser, harvest)
   - Government scheme deadlines
   - Weather warnings (rainfall, heatwaves, storms)
   - Market price fluctuations and trends

6. **📚 Knowledge Engine**\
   Uses **local crop calendars, pest data, government advisories, and best practices** for improved recommendations.

---

## 🌍 Expected Impact

- **Empowerment**: Farmers get personalised, on-demand support anytime.
- **Sustainability**: Timely actions improve productivity and resource efficiency.
- **Bridging Gaps**: Combines **AI intelligence with local knowledge** to close the advisory gap.
- **Timely Action**: Personalized alerts and notifications reduce crop losses.
- **Accessibility**: Makes advanced agronomic insights available in **simple, local language formats**.

---

## 🏗️ System Architecture

The system integrates multiple modules into a seamless farmer experience:

\
*(Based on project architecture diagram & SIH PPT)*

**Flow Overview**:

- Farmers interact via **text, audio, or image inputs**.
- Inputs are processed by the **RAG Pipeline** (retrieval + AI agent + LLM).
- Specialized modules handle crop recommendations, pest detection, weather alerts, market data, and government schemes.
- Farmers receive outputs in their local language with **confidence scores, visuals, personalized alerts, and reminders**.
- Feedback loops ensure continuous learning and refinement.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Charts & Visualization**: Recharts / Chart.js
- **State Management**: React Context API
- **APIs Integrated**:
  - Weather & Disaster Alerts
  - Crop and Fertiliser Recommenders
  - Government Schemes API
  - Market Price/Analyst API
  - Backend AI (RAG, ML, CNN models)
- **Deployment**: Netlify / Vercel

---

## 📸 Screenshots


![Dashboard](./docs/screenshots/dashboard.png)
![Pest Detection](./docs/screenshots/pest.png)
![Advisory](./docs/screenshots/advisory.png)


---

## 📂 Repository Structure

```
Agri_Frontend/
├── public/              # Static assets (icons, logos, images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level views (Dashboard, Advisory, Market, Profile, etc.)
│   ├── services/        # API service calls
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── styles/          # CSS / Tailwind styles
│   └── App.tsx          # App entry point
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/arkumar249/Agri_Frontend.git
cd Agri_Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file:

```env
VITE_API_BASE_URL=https://backend-api-url.com
```

### 4. Run Development Server

```bash
npm run dev
```

Open: `http://localhost:8080`

---


## 🤝 Contribution

We welcome contributions!

1. Fork the repo
2. Create a branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Added feature X"`
4. Push: `git push origin feature-name`
5. Open a Pull Request

---



🔗 **Related Repositories**

- [Agri\_Backend](https://github.com/arkumar249/AGRI_BACKEND) – Backend APIs & ML models

---

🚀 AgriNOVA is more than just software — it is a **digital friend (Krishi Sakhi)** walking with farmers through every stage of cultivation, helping them make informed, confident, and sustainable decisions. 🌾

