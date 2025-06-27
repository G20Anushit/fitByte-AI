import React from 'react'
import { NavLink } from 'react-router-dom'
import { useProfile } from '../context/userContext'

const Hamburger = () => {
  const {setopen}=useProfile();
  const handleonclick=()=>{
    setopen(false);
  }
  return (
    <div className='flex flex-col text-center gap-10 bg-teal-50 p-10 text-lg font-semibold text-[#0A3B3B] min-h-[80vh] ' onClick={handleonclick}> 
      <NavLink to="/dashboard" end>Dashboard</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/chats">Chats</NavLink>
      <NavLink to="/dashboard/history">History</NavLink>
    </div>
  )
}

export default Hamburger