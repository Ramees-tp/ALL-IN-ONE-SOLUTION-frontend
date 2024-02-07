import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsForm from "../pages/workerRegistraion/DetailsForm";
import JobForm from "../pages/workerRegistraion/JobForm";
import PaymentForm from "../pages/workerRegistraion/PaymentForm";
import Wlogin from "../components/Worker/Wlogin";

function WorkerRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/detailsForm" element={<DetailsForm />} />
        <Route path="/jobDetailsForm" element={<JobForm />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
        <Route path="/WorkerLogin" element={<Wlogin/>} />
      </Routes>
    </div>
  );
}

export default WorkerRoutes;
