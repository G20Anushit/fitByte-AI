import React from "react";
import { useProfile } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { IoChatboxEllipses } from "react-icons/io5";
import {motion} from "framer-motion";

const DashboardHome = () => {
  const { profile } = useProfile();
  const navigate = useNavigate();

  const recommendations = {
    "Weight Loss": [
      {
        exercise:
          "Cardio workouts like running, cycling, or swimming can help burn calories and promote weight loss.",
        diet: "Focus on a balanced diet with a caloric deficit, emphasizing whole foods like fruits, vegetables, lean proteins, and whole grains.",
        activityLevel:
          "Include regular strength training and aerobic exercises to build muscle and boost metabolism.",
        hydration:
          "Drink at least 2.5-3 liters of water daily to help control appetite and support metabolic function.",
        sleep:
          "Aim for 7-9 hours of quality sleep to regulate hunger hormones and improve recovery.",
      },
    ],
    "Weight Gain": [
      {
        exercise:
          "Prioritize resistance training with progressive overload to build muscle mass.",
        diet: "Consume calorie-dense meals with healthy fats, complex carbs, and plenty of protein.",
        activityLevel:
          "Avoid excessive cardio; focus more on weight training to prevent burning excess calories.",
        hydration:
          "Stay hydrated, but don’t fill up on water before meals to maximize calorie intake.",
        sleep:
          "Ensure deep, restful sleep to aid muscle growth and hormonal balance.",
      },
    ],
    "Muscle Toning": [
      {
        exercise:
          "Incorporate resistance training using moderate weights with higher repetitions for muscle definition.",
        diet: "Maintain a balanced, protein-rich diet to support muscle repair and tone.",
        activityLevel:
          "Alternate strength workouts with light cardio or HIIT for overall conditioning.",
        hydration:
          "Drinking water before, during, and after workouts helps muscle function and reduces fatigue.",
        sleep: "7-8 hours of rest to allow muscles to recover and strengthen.",
      },
    ],
    "Muscle Gain": [
      {
        exercise:
          "Focus on heavy strength training with compound lifts (squats, deadlifts, bench press).",
        diet: "Increase protein intake (chicken, fish, tofu) and eat slightly above maintenance calories.",
        activityLevel:
          "Perform 4-5 sessions of progressive overload strength training weekly.",
        hydration:
          "Hydrate adequately to support muscle repair and nutrient transport.",
        sleep:
          "Prioritize quality sleep (8+ hours) to maximize muscle recovery and growth.",
      },
    ],
    "Stay Fit": [
      {
        exercise:
          "Balance cardio, strength training, and flexibility exercises for overall fitness.",
        diet: "Opt for a colorful plate with fruits, veggies, lean proteins, and whole grains.",
        activityLevel:
          "Stay consistently active with daily walks, stretching, or light exercise routines.",
        hydration:
          "Drink water regularly throughout the day to stay energized and avoid fatigue.",
        sleep:
          "Maintain a regular sleep routine of at least 7-8 hours to support long-term health.",
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-6 sm:py-8 md:py-12 bg-gray-50">
      <div className="bg-white border-gray-300 border-2 rounded-lg shadow-lg p-5 sm:p-8 max-w-4xl w-full">

        <section className="bg-[#0A3B3B] rounded-lg text-center text-white p-3 mb-6 shadow">
          <h2 className="text-2xl font-semibold">Personalized Recommendations</h2>
          <p className="my-2 font-light text-sm">
            Based on your fitness goals, here are some suggestions for you:
          </p>
        </section>

        {!recommendations[profile?.goal] ? (
          <p className="text-center text-gray-500 font-medium">
            No recommendations available for your selected goal.
          </p>
        ) : (
          recommendations[profile?.goal].map((rec, index) => (
            <div
            key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-800 ">

              {Object.entries(rec).map(([key, value]) => (
                < motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                whileHover={{scale: 1.03}}
                  key={key}
                  className="group border-2 border-gray-300 p-4 rounded-lg  hover:border-[#0A3B3B] hover:text-black transition duration-300 hover:shadow-xl/30"
                >
                  <h3 className="text-xl font-semibold mb-2 capitalize">{key.replace(/([A-Z])/g, " $1")}</h3>
                  <p className="text-gray-700 group-hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          ))
        )}

        <div className="text-center mt-10">
          <p className="mb-4 font-semibold text-lg italic text-gray-800">
            Start a chat to get your personalized fitness plan!
          </p>
          <button
            onClick={() => navigate("/dashboard/Chats")}
            className="bg-[#0A3B3B] text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 hover:shadow-xl/30 transition duration-200 flex items-center justify-center gap-2 mx-auto"
          >
            <IoChatboxEllipses className="text-[1.2rem]"/>  Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
