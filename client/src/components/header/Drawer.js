import React from "react";
import { Link } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform translate-x-0 overflow-y-auto transition-transform ease-in-out duration-300">
        <div className="p-4">
          <Link
            to="/"
            onClick={onClose}
            className="block py-2 px-4 text-blue-700 hover:bg-blue-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={onClose}
            className="block py-2 px-4 text-blue-700 hover:bg-blue-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className="block py-2 px-4 text-blue-700 hover:bg-blue-100"
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={onClose}
            className="block py-2 px-4 text-red-700 hover:bg-red-100"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
