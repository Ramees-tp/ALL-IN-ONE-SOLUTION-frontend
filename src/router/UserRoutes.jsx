import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { WorkerDetailsProvider } from "../context/WorkerDetailsContext";


import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import UserHome from "../pages/UserHome/UserHome";
import OTPVerification from "../components/OTP/OTPVerification";
import UserWorkerList from "../pages/UserHome/UserWorkerList";
import ResetPass from "../pages/ChangePassword/ResetPass";
import UserWorkerDetails from '../pages/UserHome/UserWorkerDetails'

import UserAuth from "../authGauard/UserAuth";
import UserContracts from "../pages/UserHome/UserContracts";
import UserProfilePage from "../pages/UserHome/UserProfilePage";
import UpdateProfile from "../pages/UserHome/UpdateProfile";

// import UserProfile from "../components/User/UserProfile";
import UworkerDetails from '../components/User/UworkerDetails'
import MainContracts from "../components/User/Contracts/MainContract";


function UserRoutes() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      <Route path="/" element={<UserAuth/>}>

        <Route path="/uhome" element={<UserHome />} />
        <Route path="/workerList/:id" element={<UserWorkerList />} />
        <Route path="/workerDetails/:id/:id1" element={<UserWorkerDetails/>}/>
        <Route path='/userContract' element={<UserContracts/>} />
        <Route path='/userProfiles' element={<UserProfilePage/>} />

        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/resetPassword" element={<ResetPass />} />
        <Route path="/updateProfile" element={<UpdateProfile/>}/>

      </Route>

      </Routes>
    </>
  );
}

export default UserRoutes;
