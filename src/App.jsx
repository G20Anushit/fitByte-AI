import DetailsForm from "./Components/DetailsForm";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Profile from "./Components/Profile";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Chats from "./Components/chats";
import History from "./Components/History";
import Homelayout from "./layout/Homelayout";
import DashboardHome from "./Components/DashboardHome";
import Hamburger from "./Components/Hamburger";


const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homelayout/>} >
        <Route index element={<Home />} />
        <Route path="details" element={<DetailsForm/>} />
        <Route path="dashboard" element={<Dashboard/>} >
          <Route index element={<DashboardHome/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats" element={<Chats/>} />
          <Route path="history" element={<History/>} />
          <Route path="hambug" element={<Hamburger/>}/>
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}
export default App;