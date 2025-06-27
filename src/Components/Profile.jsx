import React, { use } from "react";
import { useProfile } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profile } = useProfile();
  const Navigate =useNavigate();

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="bg-white p-8 border-gray-400 border-2 rounded-lg shadow-xl/30 w-full sm:max-w-md sm:min-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
        <div className="bg-[#0A3B3B] rounded-lg text-white p-2 mb-6">
          <h3 className="text-2xl text-center font-semibold mb-4 ">
          Your Profile
          </h3>
          <p className="text-sm text-center  mb-5">
            Here are the details you provided:
          </p>
        </div>
        
        <div className="space-y-4 text-gray-800 text-center">
          <p className="text-lg font-semibold  mb-2">
            Full Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.fullname || "N/A"}</i>
          </p>
          <hr className="text-gray-500"></hr>
          <p className="text-lg font-semibold  mb-2">
            Age:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.age || "N/A"}</i>
          </p>
           <hr className="text-gray-500"></hr>
          <p className="text-lg font-semibold  mb-2">
            Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.gender}</i>
          </p>
           <hr className="text-gray-500"></hr>
          <p className="text-lg font-semibold  mb-2">
           Weight : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.weight} kg</i>
          </p>
           <hr className="text-gray-500"></hr>
          <p className="text-lg font-semibold  mb-2">
           Height : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.height} cm</i>
          </p>
           <hr className="text-gray-500"></hr>

           <p className="text-lg font-semibold  mb-2">
           Goal :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.goal}</i>
          </p>
           <hr className="text-gray-500"></hr>
           <p className="text-lg font-semibold  mb-2">
           Diet : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.diet}</i>
          </p>
           <hr className="text-gray-500"></hr>
           <p className="text-lg font-semibold  mb-2">
          Activity Level:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i className="font-normal">{profile?.activityLevel}</i>
          </p>
            <hr className="text-gray-500"></hr>
            <button className="bg-[#0A3B3B] text-white p-2 rounded-lg mt-2 hover:bg-gray-700 hover:shadow-xl" onClick={()=>{Navigate('/details')}} >Update Details</button>
        </div>
      </div>
    </div>
  )
}
export default Profile;