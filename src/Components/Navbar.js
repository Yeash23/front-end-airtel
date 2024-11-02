import React from "react";
import { SiAirtel } from "react-icons/si";
import { Menu } from "react-feather"; // Assuming you use react-feather for icons

const Navbar = () => {
  return (
    <nav className="bg-red-700 text-white py-4 px-6 flex items-center justify-between">
      {/* Left Section - Menu Icon */}
      <div className="flex items-center space-x-2">
        <Menu className="text-white cursor-pointer" />
      </div>

      <div className="flex items-center space-x-2">
        <SiAirtel className="h-8 w-8" /> {/* Airtel Icon */}
        <div className="flex flex-col text-center">
          <span className="font-semibold">Payments</span>
          <span className="font-semibold">Bank</span>
        </div>
      </div>

      {/* Right Section - Login and Register Links */}
      <div className="flex space-x-4">
        <a href="/login" className="text-white hover:underline">
          Login
        </a>
        <span className="border-l-2 border-white h-5 mx-2"></span>
        <a href="/register" className="text-white hover:underline">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
