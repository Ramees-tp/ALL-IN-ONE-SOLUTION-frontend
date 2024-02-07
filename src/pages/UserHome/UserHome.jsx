import React from "react";
import Header from "../../components/User/Header";
import Uhome from "../../components/User/Uhome";
import Ufooter from "../../components/User/Ufooter";
import UworkerList from "../../components/User/UworkerList";
import UworkerDetails from "../../components/User/UworkerDetails";

function UserHome() {
  return (
    <div>
      <div className="p-2 bg-black">
        <Header />
        <Uhome />
        {/* <UworkerList/> */}
        {/* <UworkerDetails /> */}
        <Ufooter />
      </div>
    </div>
  );
}

export default UserHome;
