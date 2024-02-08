import React from "react";
import worker from "../../assets/images/worker2.jpeg";
import { Link } from "react-router-dom";

function Content2() {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${worker})` }}
        className=" bg-cover bg-[#202020] text-white p-4 sm:px-28 rounded"
      >
        <div className="flex flex-col">
          <div className="bg-slate-700 bg-opacity-50 flex flex-col space-y-3 justify-center items-center text-center">
            <h1 className=" sm:text-4xl text-3xl font-bold">
              Register now for great job opportunities
            </h1>
            <div className="text-center">
              <p>
                we are very happy to be the india’s largest job providing
                company.if you have best skills join in our community.
              </p>
              <p>
                we providing jobs for more than one million peoples around all
                over india
              </p>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row justify-center items-center sm:gap-x-10 flex-col gap-y-4 p-5">
          <div className="sm:w-[50%] w-[100%] text-center bg-[#17253a] sm:p-5 py-2  border-8 border-[#f0ffac] flex items-center flex-col sm:space-y-5">
            <p className="sm:text-2xl sm:font-bold">
              If you are new? register now
            </p>
            <Link to={"/worker/detailsForm"}>
              <button className="bg-[#202020] p-2 w-32 rounded">
                register now
              </button>
            </Link>
          </div>
          <div className="sm:w-[50%] w-[100%]  text-center  bg-[#17253a] sm:p-5 py-2 border-8 border-[#f0ffac] flex items-center flex-col sm:space-y-5">
            <p className="sm:text-2xl sm:font-bold">
              Already registered ? please log in
            </p>
            <Link to={"/worker/WorkerLogin"}>
              {" "}
              <button className="bg-[#202020] p-2 w-32 rounded">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;
