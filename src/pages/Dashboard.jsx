import { Outlet, NavLink } from "react-router-dom";
import { useProfile } from "../context/userContext";
import { CgProfile } from "react-icons/cg";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { RiRobot2Fill } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { RiMenuFold3Line } from "react-icons/ri";
import { BsToggle2Off } from "react-icons/bs";
import { RiChatHistoryFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { BsToggle2On } from "react-icons/bs";

const Dashboard = () => {
  const { profile ,open,setopen,dark,setdark } = useProfile();
  const navigate = useNavigate();
  
  let handleonclickopen = () => {
    navigate("/dashboard/hambug");
    setopen(true);
  }
  let handleonclickclose = () => {
    navigate("/dashboard");
    setopen(false);
  }

  const handeldark=()=>{
    const body=document.querySelector(".body");
    setdark(!dark);
    body.classList.toggle("dark");
  }

  return (
    <div className="flex h-screen body">
      <div className="hidden md:flex flex-col w-60 lg:w-80 bg-white border-gray-300 border-2 px-10 py-5  shadow-lg gap-4 dark:bg-gray-700">
        <div className="flex gap-[10%] mb-[50%]">
          <img src="fitness (1).png" className="h-7 w-7 text-[#0A3B3B]"></img>
          <h1 className="text-2xl font-bold text-[#0A3B3B]">FITBYTE</h1>
        </div>
        <ul className="sidebar flex flex-col gap-7 font-medium text-[16px] text-gray-700 dark:text-white ">
          <div className="flex items-center gap-3">
            <RiDashboardHorizontalFill className="text-[1.5rem]"/>
            <NavLink to="/dashboard" end>
              Dashboard
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            <ImProfile className="text-[1.5rem]"/>
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </div>
          <div className="flex items-center gap-3">
            <RiRobot2Fill className="text-[1.5rem]"/>
            <NavLink to="/dashboard/chats">Chats</NavLink>
          </div>
          <div className="flex items-center gap-3">
            <RiChatHistoryFill className="text-[1.5rem]"/>
            <NavLink to="/dashboard/history">History</NavLink>
          </div>
        </ul>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center p-4 text-[#0A3B3B] shadow-xl">
          <div className="navbar">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <h3 className="text-md text-gray-500">
              Welcome, {profile?.fullname || "User"}!
            </h3>
          </div>
          <div className="flex items-center gap-7 mr-[5%]">
            {
              !dark?<BsToggle2Off  className="text-[2rem]" onClick={handeldark}/>:<BsToggle2On className="text-[2rem]" onClick={handeldark}/>
            }
            
            {!open?<RiMenuFold3Line className="flex md:hidden text-[1.8rem]" onClick={handleonclickopen}/>:
            <RiMenuUnfold3Line className="flex md:hidden text-[1.8rem]" onClick={handleonclickclose}/>}
            
            <div className="hidden md:flex items-center gap-3 border-x-2 shadow-md p-2 rounded-lg">
              <CgProfile className="text-[1.5rem]"/>
              <h3 className="px-3">{profile?.fullname || "User"} </h3>
            </div>
          </div>
        </div>

        <div className="p-4 overflow-auto h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
