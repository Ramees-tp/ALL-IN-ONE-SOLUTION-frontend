import React from "react";


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
     
    </div>
  );
}

export default App;
