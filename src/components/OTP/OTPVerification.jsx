import React, { useState } from "react";
import Axios from "axios";

const OTPVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSendOTP = async () => {
    try {
      const response = await Axios.post("http://localhost:917/sendOTP", {
        phoneNumber: phoneNumber,
      });
      setVerificationId(response.data.verificationId);
      setError("");
    } catch (error) {
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await Axios.post("http://localhost:3000/verifyOTP", {
        verificationId: verificationId,
        otp: otp,
      });
      if (response.data.success) {
        setIsVerified(true);
        setError("");
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setError("Failed to verify OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen sm:grid sm:grid-cols-2 flex flex-col items-center justify-center bg-gray-100 px-3 ">
      <div className="sm:text-4xl text-3xl text-black font-bold text-center p-5">
        <p>ALL IN ONE </p>
        <p>SOLUTION</p>
      </div>
      <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438]  sm:p-8 p-3 rounded shadow-md w-full max-w-md flex flex-col space-y-5">
        <h2 className="text-3xl font-bold text-center text-white">
          OTP Verification
        </h2>
        {!isVerified ? (
          <>
            <div className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-3">
                <label className="text-white">Enter Phone Number :</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="rounded-md p-2 outline-none"
                />
              </div>
              <button
                className="bg-slate-100 hover:bg-sky-700 shadow-xl p-2 rounded-lg"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            </div>
            <div className="flex flex-col justify-center text-center gap-y-3">
              <label className="text-white">Enter OTP:</label>
              <div className="flex justify-center gap-x-5">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    placeholder="0"
                    className="sm:w-8 w-6 sm:h-10 h-8 shadow-xl rounded-md text-center outline-none"
                  />
                ))}
              </div>
              <button
                className="bg-slate-100 hover:bg-sky-700 shadow-xl p-2 rounded-lg"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
            </div>
            {error && <div>{error}</div>}
          </>
        ) : (
          <div>OTP Verified Successfully!</div>
        )}
      </div>
    </div>
  );
};

export default OTPVerification;
