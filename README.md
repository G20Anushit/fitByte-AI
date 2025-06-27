# 💪 FitByte-AI — Gemini-Powered Fitness Assistant

**FitByte-AI** is a smart, AI-driven fitness assistant built using **React + Vite**, integrating Google's **Gemini API** to deliver personalized fitness suggestions, workout plans, and wellness support through an interactive chat UI.

---

## 🚀 Features

- 🤖 Chatbot interface powered by Gemini 2.5 Flash
- 📝 Form to collect user goals and preferences
- 🧑‍💻 User context to manage profile data
- 🧠 Gemini API integration for dynamic workout and health suggestions
- 🔐 Environment-secured API keys using `.env`
- 💾 History tab for past conversations (stored locally)
- 📱 Responsive UI with dashboard, chat, and profile

---

## 🏗️ Project Structure

fitByte-AI/
├── public/
├── src/
│ ├── components/
│ │ ├── chats.jsx
│ │ ├── dashBoardHome.jsx
│ │ ├── DetailsForm.jsx
│ │ ├── Hamburger.jsx
│ │ ├── History.jsx
│ │ └── Profile.jsx
│ ├── context/
│ │ └── userContext.jsx
│ ├── layout/
│ │ └── HomeLayout.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ └── Home.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env
├── .gitignore
├── vite.config.js
├── package.json
└── README.md

⚙️ Tech Stack

- ⚛️ React + Vite
- 🎨 TailwindCSS (or any CSS framework you used)
- 🌐 Gemini 2.5 Flash (via `@google/generative-ai`)
- 🧠 Context API for global state
- 🔐 dotenv for environment configuration

  
---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/fitByte-AI.git
cd fitByte-AI
npm install
VITE_GEMINI_API_KEY=your_gemini_api_key_here
npm run dev
```

## How It Works
- Users land on the Home page
- Fill out goals and preferences via DetailsForm.jsx
- Navigate through a dashboard layout (HomeLayout.jsx)
- Interact with the chatbot powered by Gemini API (chats.jsx)
- Track past chats under the History tab
- View or update details in the Profile section

## Future Enhancements
 - Voice-based input for the chatbot
 - Save history to backend (Firebase/MongoDB)
