import { useContext, useEffect, useState } from "react";

import { Box } from "@mui/material";

import DataProvider, { DataContext } from "./context/DataProvider";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";

//componenets
import Login from "./components/account/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import CreatePost from "./components/create/CreatePost";
import DetailView from "./components/details/DetailView";
import Update from "./components/create/Update";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (accessToken && refreshToken) {
      isUserAuthenticated(true);
    }
  }, []);
  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
            </Route>

            <Route
              path="/create"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/create" element={<CreatePost />} />
            </Route>

            <Route
              path="/details/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/details/:id" element={<DetailView />} />
            </Route>

            <Route
              path="/update/:id"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/update/:id" element={<Update />} />
            </Route>

            <Route
              path="/about"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/about" element={<About />} />
            </Route>

            <Route
              path="/contact"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}
//dataprovider ke bich children hota hai
export default App;
