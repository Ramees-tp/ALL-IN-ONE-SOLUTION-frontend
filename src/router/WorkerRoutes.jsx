import { Route, Routes } from "react-router-dom";
import DetailsForm from "../components/Worker/Registraion/DetailsForm";
import JobForm from "../components/Worker/Registraion/JobForm";
import PaymentForm from "../components/Worker/Registraion/PaymentForm";
import Wlogin from "../components/Worker/Wlogin";
import Registration from "../components/Worker/Registraion/Registration";
import WorkerHome from "../pages/WorkerHome/WorkerHome";
import Wprofile from "../components/Worker/Wprofile";
import WupdateProfile from "../pages/WorkerHome/WupdateProfile";
import WorkerAuth from "../authGauard/WorkerAuth";

function WorkerRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/WorkerLogin" element={<Wlogin />} />
        <Route path="/registration" element={<Registration />} />
        
      <Route path="/" element={<WorkerAuth/>}>
        <Route path="/detailsForm" element={<DetailsForm />} />
        <Route path="/jobDetailsForm" element={<JobForm />} />
        <Route path="/paymentForm" element={<PaymentForm />} />

        <Route path="/profile" element={<Wprofile />} />
        <Route path="/updateProfile" element={<WupdateProfile/>}/>
        <Route path="/whome" element={<WorkerHome />} />
      </Route>  
      </Routes>
    </div>
  );
}

export default WorkerRoutes;
