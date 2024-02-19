import axios from "axios";
import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axios";

function UserProfile() {
  const [image, setImage] = useState(null);
  const [userData, setUserdata] = useState(null);
  const [error, seterror] = useState("");

  console.log(userData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axiosInstance.get("/user/userProfile");
      setUserdata(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Error fetching user data");
      // setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" bg-slate-400 flex flex-col justify-center rounded-2xl p-10 w-[70%]">
        <p className="text-3xl font-bold text-center mb-5">PROFILE</p>
        <div className="flex flex-row bg-white items-center gap-x-8 p-8 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold">
            {userData && userData.username}
          </h1>
          <div className="flex flex-col items-center mb-10">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="relative flex items-center justify-center w-full h-full">
                  <p className="text-red-500 font-medium">Add image </p>
                </div>
              )}
            </div>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset- opacity-  cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col mt-10 w-full">
          <h1 className="text-2xl font-semibold">DETAILS</h1>
          <div className="mt-5 flex items-center gap-x-5">
            <div className="w-[50%]">
              <div className="flex items-center gap-4 mb-5">
                <label
                  className="block text-white text-sm font-semibold mb-2 w-[30%]"
                  htmlFor="username"
                >
                  Username
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl text-black">
                  {userData && userData.username}
                </p>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <label
                  className="block text-white text-sm font-semibold mb-2 w-[30%]"
                  htmlFor="username"
                >
                  Email
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl text-black">
                  {userData && userData.email}
                </p>
              </div>
              <div className="flex items-center gap-4 mb-5">
                <label
                  className="block text-white text-sm font-semibold mb-2 w-[30%]"
                  htmlFor="username"
                >
                  Phone
                </label>
                <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl"></p>
              </div>
            </div>
            <div className="w-[50%]">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <label
                    className="block text-white text-sm font-semibold mb-2 w-[30%]"
                    htmlFor="username"
                  >
                    Street name
                  </label>
                  <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl"></p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <label
                    className="block text-white text-sm font-semibold mb-2 w-[30%]"
                    htmlFor="username"
                  >
                    PIN code
                  </label>
                  <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl"></p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <label
                    className="block text-white text-sm font-semibold mb-2 w-[30%]"
                    htmlFor="username"
                  >
                    District
                  </label>
                  <p className="w-full h-8 border rounded-md focus:outline-none bg-[#fff] shadow-xl"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

