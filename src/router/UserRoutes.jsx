import { Routes, Route } from "react-router-dom";
import { SearchProvider } from "../context/UserContext";


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
import NotFound from "../pages/NotFound";
import ContactPage from "../pages/UserHome/ContactPage";
import AboutPage from "../pages/UserHome/AboutPage";


function UserRoutes() {

  return (
    <SearchProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      <Route path="/" element={<UserAuth/>}>

        <Route path="/uhome" element={<UserHome />} />
        <Route path="/workerList/:id" element={<UserWorkerList />} />
        <Route path="/workerDetails/:id/:id1" element={<UserWorkerDetails/>}/>
        <Route path='/userContract' element={<UserContracts/>} />
        <Route path='/userProfiles' element={<UserProfilePage/>} />
        <Route path='/ucontact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />

        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/resetPassword" element={<ResetPass />} />
        <Route path="/updateProfile" element={<UpdateProfile/>}/>
        <Route path='*' element={<NotFound/>} />

      </Route>

      </Routes>
    </SearchProvider>
  );
}

export default UserRoutes;
