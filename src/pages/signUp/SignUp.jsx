import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(username)) {
      setError("Name must contain only letters");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long"
      );
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    // Handle signup logic here
    axios
      .post("http://localhost:917/user/signUp", {
        username,
        email,
        password,
      })
      .then((response) => {
        console.log(response, "RES");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-2 items-center justify-center bg-gray-100 px-3">
        <div className="sm:text-4xl text-3xl text-black font-bold text-center p-5">
          <p>ALL IN ONE </p>
          <p>SOLUTION</p>
        </div>
        <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438]  sm:p-8 p-3 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Sign Up
          </h2>

          <form onSubmit={handleSignup} className="">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                name="username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                className="w-full sm:p-2 p-1 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="password"
                id="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              {error && <div className="text-red-500 mb-4">{error}</div>}
            </div>

            <div className="flex justify-center items-center">
              <button
                className="p-2 px-10 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 "
                type="submit"
                // onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center py-3 text-white">
              <p>
                Alredy a user? please
                <span className="text-blue-400">SignIn</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
