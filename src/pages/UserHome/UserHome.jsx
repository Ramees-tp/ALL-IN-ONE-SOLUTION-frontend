import Header from "../../components/User/Header";
import Uhome from "../../components/User/Uhome";
import Ufooter from "../../components/User/Ufooter";
import UserProfile from "../../components/User/UserProfile";
import MainContract from '../../components/User/Contracts/MainContract'
import { useState } from "react";

function UserHome() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="p-1">
        <Header handleNavigation={handleNavigation} />
        <Uhome/>
        {/* {currentPage === "Home" && <Uhome />}
        {currentPage === "Profile" && <UserProfile />}
        {currentPage === "Contracts" && <MainContract />} */}
        <Ufooter />
      </div>
    </div>
  );
}

export default UserHome
