import React, { useState } from "react";
import axios from "axios";
import axiosInstance from "../../api/axios";

function ResetPass() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError("Password Does not meet requirments");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords does not match");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/user/resetPass", {
        password: confirmPassword,
      });
      if (response.status === 200) {
        setIsVerified(true)
        console.log("password updated success");
      }
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        console.log("An error occured :", err);
        setError("An error occured.please try again.");
      }
    }
  };
  return (
    <div>
      <div className="min-h-screen grid grid-cols-2 items-center justify-center bg-gray-100 px-3">
        <div className="sm:text-4xl text-3xl text-black font-bold text-center p-5">
          <p>ALL IN ONE </p>
          <p className="">SOLUTION</p>
        </div>
        {!isVerified ? (
          <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438] sm:p-10 p-3 sm:py-20 py-10 rounded shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Reset Password
            </h2>
            <form className="flex flex-col" onSubmit={handleResetPassword}>
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="Password"
              >
                New Password
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl mb-4"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="Password"
              >
                Confirm Password
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl mb-4"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <div className="text-red-500">{error}</div>}
              <div className="flex justify-center items-center">
                <button
                  className="p-2 px-10 bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-800"
                  type="submit"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>OTP updated Successfully!</div>
        )}
      </div>
    </div>
  );
}

export default ResetPass;
