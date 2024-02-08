import React from "react";
import Index from "./pages/LandingPage";
import Login from "./pages/login/Login";
import Signup from "./pages/signUp/SignUp";
import Part1 from "./pages/workerRegistraion/DetailsForm";
import Part2 from "./pages/workerRegistraion/JobForm";
import Part3 from "./pages/workerRegistraion/PaymentForm";
import UserHome from "./pages/UserHome/UserHome";
import WorkerHome from "./pages/WorkerHome/WorkerHome";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoutes from "./router/AdminRoutes";
import CommonRouter from "./router/CommonRouter";
import UserRoutes from "./router/UserRoutes";
import WorkerRoutes from "./router/WorkerRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<CommonRouter />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/worker/*" element={<WorkerRoutes />} />
        </Routes>
      </BrowserRouter>
      {/* <Index />
      <Login />
      <Signup />
      <Part1 />
      <Part2 />
      <Part3 />
      <UserHome /> */}
      {/* <WorkerHome /> */}
    </div>
  );
}

export default App;
