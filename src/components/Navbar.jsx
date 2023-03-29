import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <NavLink to='/' className="flex items-center">
            <img src="https://cdn.dribbble.com/users/2577277/screenshots/14195319/creative-medical-green-health-logo_4x.png" className="h-6 mr-3 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">GREEN HEALTH</span>
          </NavLink>
          <div className="flex items-center">
            <NavLink to='/signup' className="mr-6 text-sm font-medium text-gray-900 hover:underline">Signup</NavLink>
            <NavLink to='/login' className="text-sm font-medium text-gray-900 hover:underline">Login</NavLink>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <NavLink to='/blogs' className="text-gray-900 hover:underline" aria-current="page">
                  Blog
                </NavLink>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:underline">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:underline">
                  About
                </a>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-900 hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
