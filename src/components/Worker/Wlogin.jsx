import React, { useState } from "react";

function Wlogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438] text-white p-10  rounded shadow-md w-full max-w-md">
          <div className="text-4xl font-bold mb-6 text-center">
            ALL IN ONE SOLUTION
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="p-2 px-10 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Wlogin;
