import React from "react";
import user from "../../assets/icons/account.png";
import favWorker from "../../assets/icons/heart.png";

function UworkerList() {
  return (
    <div className="px-28 bg-white py-5">
      <h1 className="text-2xl font-bold mb-5">Awailable Worker</h1>
      <div className="space-y-8 max-w-2xl">
        <div className="bg-blue-300 p-4 rounded-xl">
          <div className="flex  items-center ">
            <div className="rounded-full bg-slate-400 p-2">
              <img src={user} alt="" />
            </div>
            <div className="bg-slate-300 p-5 rounded-xl ml-8 w-full flex justify-between">
              <h1 className="font-semibold text-3xl">RAMEES MUHAMMAD</h1>
              <img src={favWorker} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-blue-300 p-4 rounded-xl">
          <div className="flex  items-center ">
            <div className="rounded-full bg-slate-400 p-2">
              <img className="" src={user} alt="" />
            </div>
            <div className="bg-slate-300 p-5 rounded-xl ml-8 w-full flex justify-between">
              <h1 className="font-semibold text-3xl">RAMEES MUHAMMAD</h1>
              <img src={favWorker} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UworkerList;
