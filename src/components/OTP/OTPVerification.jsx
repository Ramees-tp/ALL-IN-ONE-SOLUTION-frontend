import React, { useState, useRef } from "react";
import axios from "axios";

const OTPVerification = () => {
  const [email, setEmail] = useState("");
  const [otpValues, setOtpValues] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  // const handleInputChange = (index, value) => {
  //   const newOtpValues = [...otpValues];
  //   newOtpValues[index] = value;
  //   setOtpValues(newOtpValues);
  //   if (value.length === 1 && index < inputRefs.length - 1) {
  //     inputRefs[index + 1].current.focus();
  //   } else if (value.length === 0 && index > 0) {
  //     inputRefs[index - 1].current.focus();
  //   }
  // };

  const handleSendOTP = async () => {
    console.log(email);
    try {
      const response = await axios.post("http://localhost:917/user/userOTP", {
        email:email,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/user/uhome");
      }
      // setVerificationId(response.data.verificationId);
      console.log(response);
      setError("");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError("Failed to send OTP. Please try again.");
    }
  };

  // const handleVerifyOTP = async () => {
  //   try {
  //     const response = await Axios.post("http://localhost:3000/verifyOTP", {
  //       verificationId: verificationId,
  //       otp: otp,
  //     });
  //     if (response.data.success) {
  //       setIsVerified(true);
  //       setError("");
  //     } else {
  //       setError("Invalid OTP. Please try again.");
  //     }
  //   } catch (error) {
  //     setError("Failed to verify OTP. Please try again.");
  //   }
  // };

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
                <label className="text-white">Enter Email :</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md p-2 outline-none "
                />
              </div>
              <button
                className="bg-slate-100 hover:bg-sky-700 shadow-xl p-2 rounded-lg"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            </div>
            {/* <div className="flex flex-col justify-center text-center gap-y-3">
              <label className="text-white">Enter OTP:</label>

              <div className="flex justify-around mb-4">
                {inputRefs.map((inputRef, index) => (
                  <input
                    key={index}
                    type="number"
                    className="w-9 p-1 border shadow-xl rounded text-center"
                    maxLength="0"
                    ref={inputRef}
                    value={otpValues[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                ))}
              </div>
              <button
                className="bg-slate-100 hover:bg-sky-700 shadow-xl p-2 rounded-lg"
                onClick={handleVerifyOTP}
              >
                Verify OTP
              </button>
            </div> */}
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
