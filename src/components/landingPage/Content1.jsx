import React from "react";
import client from "../../assets/images/client.jpg";
import { Link } from "react-router-dom";
// import bg2 from "../../assets/images/gray.jpeg";

function Content1() {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${client})` }}
        className=" bg-center bg-cover p-3 h-full flex flex-col bg-[#202020] rounded"
      >
        <div className="bg-[#D7C8B5] p-2 sm:flex justify-center ">
          <div className=" sm:p-5 p-2  flex justify-center items-center">
            <h1 className="sm:text-3xl text-2xl font-bold text text-center text-black">
              ALL IN ONE SOLUTION
            </h1>
          </div>
          <div className="bg-[#17253a] p-4 text-left text-white  space-y-1">
            <h1 className="sm:text-center sm:text-[100%] text-[70%]">
              India's premier work contract platform and leading job provider,
              where opportunities meet ambition, and careers are crafted.
              Elevate your professional journey with the nation's largest hub of
              work contracts and job listings, connecting skilled workers with
              top employers.
            </h1>
            <h1 className="text-center sm:text-2xl">
              Welcome to the epitome of employment excellence!
            </h1>
          </div>
        </div>

        <div className="sm:px-28 sm:py-14">
          <div className="text-black sm:flex gap-x-10 ">
            <div className="gap-y-7 border-2 p-10 flex flex-col justify-center  sm:items-start items-center py-8 w-[100%]">
              <h1 className="text-4xl font-bold text-center sm:text-left ">
                New Here? Join Us!
              </h1>
              {/* <marquee behavior="scroll" scrollamount="5" direction=""> */}
              <Link to={"/user/signup"}>
                <button className=" bg-[#31312f] p-1 px-3 rounded text-white font-bold w-20 ">
                  sign in
                </button>
              </Link>
              {/* </marquee> */}
              <div>
                <h1 className="text-[20px] font-medium">Why Sign In?</h1>
                <div className="text-[10px]">
                  <p>
                    - Access Your Profile: Manage your profile, update your
                    skills, and showcase your experience.
                  </p>
                  <p>
                    - Job Applications: Apply for jobs with a click and keep
                    track of your applications.
                  </p>
                  <p>
                    - Notifications: Stay updated on new job listings and
                    messages from employers.
                  </p>
                </div>
              </div>
            </div>

            <div
              // style={{ backgroundImage: `url(${bg2})` }}
              className="bg-slate-700 bg-opacity-50 text-white flex flex-col justify-center items-center sm:gap-y-4 gap-y-2 w-[100%] text-center  sm:h-auto h-40 p-4 rounded-md"
            >
              <h1 className="text-3xl font-bold">Already a user ?</h1>
              <div className="flex md:flex-row   gap-x-4 flex-col  justify-center items-center">
                <p className="font-bold">please log in</p>
                <Link to={"/user/login"}>
                  <button className=" bg-[#31312f] text-white p-1 px-3 rounded font-bold">
                    login
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:text-right text-left">
            <p className="text-white text-[10px]">
              * By logging in, you agree to our [Terms of Service] and [Privacy
              Policy].
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
