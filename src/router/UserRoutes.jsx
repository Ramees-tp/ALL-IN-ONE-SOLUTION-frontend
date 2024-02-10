import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import UserHome from "../pages/UserHome/UserHome";
import OTPVerification from "../components/OTP/OTPVerification";
import UserWorkerList from "../pages/UserHome/UserWorkerList";

function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/uhome" element={<UserHome />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/workerList" element={<UserWorkerList />} />
      </Routes>
    </>
  );
}

export default UserRoutes;
