import React from "react";
import user from "../../assets/icons/account.png";
import favWorker from "../../assets/icons/heart.png";

function Whome() {
  return (
    <div>
      <div className="bg-[#DFE7B4] px-28 py-5">
        <div className="bg-[#FFFFFF] p-10 rounded mb-5">
          <h1 className="mb-5 text-2xl font-bold">Job Requests :</h1>

          <div className="scroll-mx-60 overflow-y-scroll  h-72 py-5 px-2 flex flex-col gap-4">
            <div className="bg-[#678FB4] p-3 rounded-md">
              <div className="flex  items-center ">
                <div className="rounded-full bg-[#C3B6B6] p-2">
                  <img src={user} alt="" />
                </div>
                <div className="bg-[#DFE7B4] p-3 rounded-xl ml-8 w-full flex justify-between items-center">
                  <h1 className="font-semibold text-2xl p-2 max-w-96">
                    RAMEES MUHAMMAD TP
                  </h1>
                  <div className="flex items-center space-x-3">
                    <p className="bg-blue-300 p-2 rounded font-bold text-2xl">
                      Date: 1-5-23
                    </p>
                    <p className="bg-blue-300 p-2 rounded font-bold text-2xl">
                      Monday
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-green-800 p-2 rounded font-bold text-xl text-white">
                      Accept
                    </button>
                    <button className="bg-red-800 p-2 rounded font-bold text-xl text-white">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#678FB4] p-3 rounded-md">
              <div className="flex  items-center ">
                <div className="rounded-full bg-[#C3B6B6] p-2">
                  <img src={user} alt="" />
                </div>
                <div className="bg-[#DFE7B4] p-3 rounded-xl ml-8 w-full flex justify-between items-center">
                  <h1 className="font-semibold text-2xl p-2 max-w-96">
                    RAMEES MUHAMMAD TP
                  </h1>
                  <div className="flex items-center space-x-3">
                    <p className="bg-blue-300 p-2 rounded font-bold text-2xl">
                      Date: 1-5-23
                    </p>
                    <p className="bg-blue-300 p-2 rounded font-bold text-2xl">
                      Monday
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-green-800 p-2 rounded font-bold text-xl text-white">
                      Accept
                    </button>
                    <button className="bg-red-800 p-2 rounded font-bold text-xl text-white">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#678FB4] p-3 rounded-md">
              <div className="flex  items-center ">
                <div className="rounded-full bg-[#C3B6B6] p-2">
                  <img src={user} alt="" />
                </div>
                <div className="bg-[#DFE7B4] p-3 rounded-xl ml-8 w-full flex justify-between items-center">
                  <h1 className="font-semibold text-2xl p-2 max-w-96">
                    RAMEES MUHAMMAD TP
                  </h1>
                  <div className="flex items-center space-x-3">
                    <p className="bg-blue-300 p-2 rounded font-bold text-2xl">
                      Date: 1-5-23
                    </p>
                    <p className="bg-blue-300 p-2 rounded font-bold text-2xl">
                      Monday
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-green-800 p-2 rounded font-bold text-xl text-white">
                      Accept
                    </button>
                    <button className="bg-red-800 p-2 rounded font-bold text-xl text-white">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="p-10 rounded bg-[#FFFFFF] flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Contract History</h1>
            <div className="flex gap-4">
              <p className="font-bold text-xl border-b-2 border-red-900">
                Last week
              </p>
              <p className="font-bold text-xl">Last Month</p>
            </div>
            <div className="bg-[#C3B6B6] text-xl font-bold">
              <h1>Total Contracts</h1>
            </div>
          </div>
          <div className="p-10 rounded bg-[#FFFFFF] flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Wallet</h1>
            <div className="space-y-3">
              <p className="text-xl font-bold">Todays earnings</p>
              <p className="bg-[#C3B6B6] p-2">$45</p>
            </div>
            <div className="space-y-3">
              <p className="text-xl font-bold">Total Balance</p>
              <p className="bg-[#C3B6B6] p-2">$ 5665</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whome;
