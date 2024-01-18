import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "../header/Drawer";
import Logout from "../account/Logout";
// import Logout from "../account/Logout";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = 768;
      setMobileView(window.innerWidth <= mobileWidth);
      setDrawerOpen(false); // Close the drawer on resize
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const headerLogo = (
    <img
      style={{ width: "60px" }}
      src="https://res.cloudinary.com/dd815juww/image/upload/v1705214795/BLOG_APP__4_-removebg-preview_kapozk.png"
      alt="logo"
    />
  );

  const mobileMenuButton = (
    <button
      onClick={toggleDrawer}
      className="text-blue-700 hover:text-white border-b-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white"
    >
      ☰
    </button>
  );

  const desktopNavigation = (
    <nav className="md:ml-auto mt-4 md:mt-0">
      {/* Customize your desktop navigation links/buttons here */}
      <Link to="/" className="mr-5 hover:text-red-700 md:flex-col inline-flex">
        <button
          type="button"
          className="text-blue-700 hover:text-white border-b-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white"
        >
          HOME
        </button>
      </Link>
      <Link
        to="/about"
        className="mr-5 hover:text-red-700 md:flex-col inline-flex"
      >
        <button
          type="button"
          className="text-blue-700 hover:text-white border-b-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white "
        >
          ABOUT
        </button>
      </Link>
      <Link
        to="/contact"
        className="mr-5 hover:text-red-700 md:flex-col inline-flex"
      >
        <button
          type="button"
          className="text-blue-700 hover:text-white border-b-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white "
        >
          CONTACT
        </button>
      </Link>
      {/* <Link
        // to="/login"
        className="mr-5 hover:text-red-700 md:flex-col inline-flex"
      > */}
      <button
        type="button"
        className="text-red-700 hover:text-white border-b-2 border-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        <Logout />
      </button>
      {/* </Link> */}
      {/* ... (repeat for other links) */}
    </nav>
  );

  return (
    <>
      {isMobileView ? (
        <div className="font-medium rounded-lg text-sm px-5 py-2.5 text-left me-2 mb-2">
          {mobileMenuButton}
          <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </div>
      ) : (
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
            <div className="flex items-center">
              {/* Customize your logo */}
              {headerLogo}
            </div>

            {desktopNavigation}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
