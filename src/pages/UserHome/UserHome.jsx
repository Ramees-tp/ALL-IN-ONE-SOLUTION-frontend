import Header from "../../components/User/Header";
import Uhome from "../../components/User/Uhome";
import Ufooter from "../../components/User/Ufooter";
import { useState } from "react";

function UserHome() {

  return (
    <div>
      <div className="p-1">
        <Header/>
        <Uhome/>
        <Ufooter />
      </div>
    </div>
  );
}

export default UserHome
