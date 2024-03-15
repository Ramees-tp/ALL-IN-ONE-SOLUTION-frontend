
import Wheader from "../../components/Worker/Wheader";
import Whome from "../../components/Worker/Whome";
import Wfooter from "../../components/Worker/Wfooter";
import Wcontracts from "../../components/Worker/Wcontracts";
import Wprofile from '../../components/Worker/Wprofile'
import { useState } from "react";

function WorkerHome() {
  const [currentPage, setCurrentPage] = useState("WHome");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-1">
      <Wheader handleNavigation={handleNavigation} />
      {currentPage === "WHome" && <Whome />}
      {currentPage === "WProfile" && <Wprofile/>}
      {currentPage === "WContracts" && <Wcontracts/>}
      <Wfooter/>
    </div>
  );
}

export default WorkerHome;
