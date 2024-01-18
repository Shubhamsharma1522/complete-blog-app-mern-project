import React from "react";
import { Link } from "react-router-dom";
import Logout from "../account/Logout";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className=" fixed inset-y-0 left-0 w-40 bg-black shadow-lg transform translate-x-0 overflow-y-auto transition-transform ease-in-out duration-300 ">
        <div className="p-10">
          <Link
            to="/"
            onClick={onClose}
            className="block py-4 px-4 text-white hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={onClose}
            className="block py-4 px-4 text-white hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="block py-4 px-4 text-white hover:underline"
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={onClose}
            className="block py-4 px-4 text-red-700 hover:underline"
          >
            <Logout />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
