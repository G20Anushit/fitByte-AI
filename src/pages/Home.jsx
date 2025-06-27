import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { IoFitnessSharp } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { BsChatDotsFill } from "react-icons/bs";
import { MdHistory } from "react-icons/md";

const Home = () => {

  return (
    <div className="min-h-screen bg-emerald-100 text-gray-800 px-6 py-20 flex flex-col font-sans items-center relative">
        <div className="flex absolute left-10 top-5 gap-3 mb-10">
            <img src="fitness (1).png" className="h-7 w-7 text-[#0A3B3B]"></img>
            <h1 className="text-2xl font-bold text-[#0A3B3B]">FITBYTE</h1>
        </div>
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        
        <h1 className="text-5xl font-bold text-[#0A3B3B] mb-4 drop-shadow-sm">
          Your Personal Wellness AI
        </h1>
        <p className="text-lg text-gray-700">
          Get AI-powered fitness & diet advice tailored to your goals. Whether
          you’re burning fat or building strength — we’ve got you!
        </p>
        <NavLink to="/details">
          <button className="mt-6 bg-[#0A3B3B] text-white px-8 py-3 rounded-full text-lg hover:bg-gray-500 hover:shadow-xl transition-all shadow-lg"> 
            Get Started
          </button>
        </NavLink>
      </motion.div>

      <div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 min-mx-20">
    
        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-[#0A3B3B] hover:scale-105 transition-transform"
          whileHover={{ scale: 1.03 }}
        >
          <IoFitnessSharp className="text-3xl text-[#0A3B3B] mb-2" />
          <h3 className="font-semibold text-xl mb-1">
            Step 1: Fill Your Fitness Details
          </h3>
          <p className="text-gray-600 text-sm">
            Start your journey by entering your preferences — goal, gender,
            lifestyle and more.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-[#0A3B3B] hover:scale-105 transition-transform"
          whileHover={{ scale: 1.03 }}
        >
          <GiMeal className="text-3xl text-[#0A3B3B] mb-2" />
          <h3 className="font-semibold text-xl mb-1">
            Step 2: View Your Dashboard
          </h3>
          <p className="text-gray-600 text-sm">
            Receive personalized workout & diet recommendations instantly in
            your dashboard.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-[#0A3B3B] hover:scale-105 transition-transform"
          whileHover={{ scale: 1.03 }}
        >
          <BsChatDotsFill className="text-3xl text-[#0A3B3B] mb-2" />
          <h3 className="font-semibold text-xl mb-1">
            Step 3: Ask AI Anything
          </h3>
          <p className="text-gray-600 text-sm">
            Use our AI chatbot to ask for tips, plans, or ideas — like having a
            fitness coach 24/7.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-[#0A3B3B] hover:scale-105 transition-transform"
          whileHover={{ scale: 1.03 }}
        >
          <MdHistory className="text-3xl text-[#0A3B3B] mb-2" />
          <h3 className="font-semibold text-xl mb-1">
            Step 4: View or Delete Chat History
          </h3>
          <p className="text-gray-600 text-sm">
            All your previous chats are saved with time/date. Access or clean
            them anytime.
          </p>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Ready to become your fittest self?
        </p>
        <NavLink to="/details">
          <button className="mt-4 bg-[#0A3B3B] text-white px-10 py-3 rounded-full text-lg hover:bg-gray-500 transition-all shadow-md">
            Start Your Transformation →
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
