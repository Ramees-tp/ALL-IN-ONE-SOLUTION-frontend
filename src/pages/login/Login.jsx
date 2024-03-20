import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [passhow, setPasshow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Z]+(?:[' -][a-zA-Z]+)*$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
    setError("");

    try {
      const response = await axios.post("http://localhost:917/user/login", {
        username,
        password,
      });
      if (response.status === 200) {
        navigate("/user/uhome");
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
    <div className="min-h-screen w-full flex sm:flex-row flex-col items-center justify-center gap-5 bg-gray-100 px-3">
      <div className="sm:text-4xl text-3xl text-black font-bold text-center p-5">
        <p>ALL IN ONE </p>
        <p className="">SOLUTION</p>
      </div>
      <div className=" bg-gradient-to-b from-[#252e53] to-[#4d1438] sm:p-10 p-3 sm:py-20 py-10 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
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
              name="username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500 shadow-xl"
                type={!passhow ? "password" : "text "}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="username"
                required
              />
              <div
                onClick={() => setPasshow(!passhow)}
                className="showPass absolute top-2 right-3 cursor-pointer text-gray-800"
              >
                {!passhow ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </div>
            </div>
          </div>
          <p className="mb-4 text-white">
            <Link to={"/user/otp"}>
              <span className="text-blue-400 mr-3 hover:text-blue-700 cursor-pointer">
                Forgot
              </span>
            </Link>
            password ?
          </p>
          <div>
            {error && (
              <div className="text-red-500 mb-4 text-center">{error}</div>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              className="p-2 px-10 bg-cyan-500 text-white rounded-md font-semibold hover:bg-cyan-800"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="text-center py-3 text-white">
            <p>
              Don't have an account ? please
              <Link to={"/user/signUp"}>
                <span className="text-blue-400 ml-3 hover:text-blue-700 cursor-pointer">
                  SignIn
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
