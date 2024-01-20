// Logout.js

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

const Logout = () => {
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const handleLogout = () => {
    // Clear authentication tokens or perform any other necessary cleanup
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");

    // Reset the account context
    setAccount(null);

    // Navigate to the login page
    navigate("/login");
  };

  return <button onClick={handleLogout}>LOGOUT</button>;
};

export default Logout;
