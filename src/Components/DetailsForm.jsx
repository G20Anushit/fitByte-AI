import React from "react";
import { useState } from "react";
import { useProfile } from "../context/userContext";
import Dashboard from "../pages/Dashboard";
import { replace, useNavigate } from "react-router-dom";

const DetailsForm = () => {
  const { setProfile } = useProfile();
  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    fullname: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    goal: "",
    diet: "",
    activityLevel: "",
  });

  let submitHandler = (e) => {
    e.preventDefault();
    setProfile(formData);
    setFormData({
      fullname: "", 
        age: "", 
        gender: "",
        weight: "",
        height: "",
        goal: "",
        diet: "",
        activityLevel: "",
  }) ;
    navigate("/dashboard",{replace: true});
    alert("Profile created successfully!");
  };

  let handelInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="min-h-screen  flex items-center justify-center bg-gray-100 shadow-xl/30 p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:max-w-md sm:min-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <img src="fitness (1).png" className="h-7 w-7 text-[#0A3B3B]"></img>
            <h1 className="text-[#0A3B3B] text-3xl font-bold">
              <b> FITBYTE</b>
            </h1>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-[#0F1E1C]-800">
            Create Your profile
          </h3>

          <p className="text-sm text-[#4B5563]-500 mb-6">
            Please fill out the form below to help us understand your fitness
            needs better.
          </p>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="fullname"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handelInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="age"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Age{" "}
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handelInputChange}
                placeholder="Enter your Age"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Gender{" "}
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handelInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="weight"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Weight (kg):
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handelInputChange}
                placeholder="Enter your weight"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="height"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Height (cm):
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handelInputChange}
                placeholder="Enter your height"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="goal"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Fitness Goal{" "}
              </label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handelInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="">Select Fitness Goal</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Weight Gain">Weight Gain</option>
                <option value="Muscle Toning">Muscle Toning</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Stay Fit">Stay Fit</option>

              </select>
            </div>
            <div>
              <label
                htmlFor="diet"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Dietary Preference{" "}
              </label>
              <select
                id="diet"
                name="diet"
                value={formData.diet}
                onChange={handelInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="">Select Diet Preference</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Keto">Keto</option>
                <option value="Paleo">Paleo</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="activityLevel"
                className="text-[#0F1E1C] font-medium text-sm"
              >
                Activity Level{" "}
              </label>
              <select
                id="activityLevel"
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handelInputChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              >
                <option value="">Select Activity Level</option>
                <option value="Sedentary">Sedentary</option>
                <option value="Lightly Active">Lightly Active</option>
                <option value="Moderately Active">Moderately Active</option>
                <option value="Very Active">Very Active</option>
                <option value="Super Active">Super Active</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full text-white font-semibold py-3 rounded-xl  bg-[#072f2f] hover:bg-blue-600 hover:shadow-black-800 max-w-xl lg:mx-3 mx-auto mt-3.5"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
