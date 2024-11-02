import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      console.log(response.data.role);
      localStorage.setItem("role", response.data.role);

      if (response.data.success) {
        // Redirect to dashboard
        navigate("/finish");
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://via.placeholder.com/1500")',
          opacity: 0.3,
        }}
      ></div>

      {/* Login Box */}
      <div className="relative bg-white p-8 rounded-lg shadow-2xl w-80 md:w-96">
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaUser className="text-gray-400 ml-3" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-2 border-none rounded-lg focus:ring-0 focus:outline-none"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaLock className="text-gray-400 ml-3" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border-none rounded-lg focus:ring-0 focus:outline-none"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300 shadow-md"
          >
            Log in
          </button>
        </form>

        {/* Privacy Policy and Terms */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          By logging in you agree to our{" "}
          <a href="#" className="text-blue-500 hover:underline">
            privacy policy
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-500 hover:underline">
            terms of service
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
