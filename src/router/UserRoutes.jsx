import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import UserHome from "../pages/UserHome/UserHome";
import OTPVerification from "../components/OTP/OTPVerification";
import UserWorkerList from "../pages/UserHome/UserWorkerList";
import ResetPass from "../pages/ChangePassword/ResetPass";
import UserUpdateProfile from "../components/User/UserUpdateProfile"
import UserProfile from "../components/User/UserProfile";

function UserRoutes() {
  const [giveAccess, setGiveAccess] = useState(false);

  useEffect(() => {
    const tokenCheck = async () => {
      try {
        const existToken = await localStorage.getItem("jwt");
        if (!existToken) {
          console.log("No token found ");
        } else {
          setGiveAccess(true);
        }
      } catch (err) {
        console.log("Error while checking token :", err);
      }
    };
    tokenCheck();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {giveAccess ? (
          <Route path="/uhome" element={<UserHome />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/workerList/:id" element={<UserWorkerList />} />
        <Route path="/resetPassword" element={<ResetPass />} />
        <Route path="/updateProfile" element={<UserUpdateProfile/>}/>
        <Route path="/userProfile" element={<UserProfile/>}/>
      </Routes>
    </>
  );
}

export default UserRoutes;
