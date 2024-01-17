import React from "react";
import { useState, useContext } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
// import imageURL from "../images/BLOG APP.png";

import { API } from "../../service/api";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../context/DataProvider";

const imageURL =
  "https://res.cloudinary.com/dd815juww/image/upload/v1705214795/BLOG_APP__4_-removebg-preview_kapozk.png";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 2px 2px 15px 5px rgb(0.4 0.4 0/0.4);
  border-radius: 10px;
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0 ",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState("");

  //anywhere use in any components
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    try {
      let response = await API.userSignup(signup);
      if (response.isSuccess) {
        setError("");
        setSignup(signupInitialValues);
        toggleAccount("login");
      }
    } catch (error) {
      setError("Something went wrong please try again later");
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    try {
      let response = await API.userLogin(login);
      if (response.isSuccess) {
        setError("");

        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accessToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );

        setAccount({
          username: response.data.username,
          name: response.data.name,
        });

        isUserAuthenticated(true);
        // setLogin(loginInitialValues); ////////////remove this///////
        navigate("/");
      }
    } catch (error) {
      setError("Something went wrong! Please try again later");
    }
  };

  return (
    <>
      <Component
        style={{ backgroundColor: "white" }}
        className=" items-center justify-center px-6  "
      >
        <Box>
          <Image src={imageURL} alt="login" />
          {account === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                value={login.username || ""}
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                type="password"
                value={login.password || ""}
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />

              {error && <Error>{error}</Error>}

              <LoginButton variant="contained" onClick={() => loginUser()}>
                Login
              </LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <SignupButton onClick={() => toggleSignup()}>
                Create An Account
              </SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                value={signup?.name || ""}
                onChange={(e) => onInputChange(e)}
                name="name"
                label="Enter Name"
              />
              <TextField
                variant="standard"
                value={signup?.username || ""}
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                variant="standard"
                type="password"
                value={signup?.password || ""}
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
              />

              {error && <Error>{error}</Error>}

              <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignup()}>
                Already have an account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </>
  );

  //     <>
  //       {account === "login" ? (
  //         <section className="bg-gray-50 dark:bg-gray-900">
  //           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  //             <a
  //               href="/login"
  //               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  //             >
  //               <img className="w-8 h-8 mr-2" src={imageURL} alt="Login" />
  //             </a>
  //             <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  //               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
  //                   Sign in to your account
  //                 </h1>
  //                 <form className="space-y-4 md:space-y-6" action="#">
  //                   <div>
  //                     <label
  //                       for="Username"
  //                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //                     >
  //                       Enter Username
  //                     </label>
  //                     <input
  //                       value={login.username || ""}
  //                       onChange={(e) => onValueChange(e)}
  //                       name="username"
  //                       type="text"
  //                       placeholder="Username"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     />
  //                   </div>
  //                   <div>
  //                     <label
  //                       for="password"
  //                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //                     >
  //                       Enter Password
  //                     </label>
  //                     <input
  //                       value={login.password || ""}
  //                       onChange={(e) => onValueChange(e)}
  //                       name="password"
  //                       type="password"
  //                       placeholder="••••••••"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     />
  //                   </div>

  //                   {error && <h5>{error}</h5>}

  //                   <div className="flex items-center justify-between">
  //                     <div className="flex items-start"></div>
  //                   </div>
  //                   <button
  //                     type="submit"
  //                     className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //                     onClick={() => loginUser()}
  //                   >
  //                     Sign in
  //                   </button>
  //                   <button
  //                     type="submit"
  //                     className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //                     onClick={() => toggleSignup()}
  //                   >
  //                     Create An Account
  //                   </button>
  //                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  //                     Don’t have an account yet?{" "}
  //                     <a
  //                       href="/register"
  //                       className="font-medium text-primary-600 hover:underline dark:text-primary-500"
  //                     >
  //                       Register
  //                     </a>
  //                   </p>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </section>
  //       ) : (
  //         <section className="bg-gray-50 dark:bg-gray-900">
  //           <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  //             <a
  //               href="/login"
  //               className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  //             >
  //               <img className="w-8 h-8 mr-2" src={imageURL} alt="Logo" />
  //             </a>
  //             <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  //               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
  //                   Sign in to your account
  //                 </h1>
  //                 <form className="space-y-4 md:space-y-6" action="#">
  //                   <div>
  //                     <label
  //                       for="email"
  //                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //                     >
  //                       Enter Name
  //                     </label>
  //                     <input
  //                       value={signup?.name || ""}
  //                       onChange={(e) => onInputChange(e)}
  //                       name="name"
  //                       placeholder="name"
  //                       type="text"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     />
  //                   </div>
  //                   <div>
  //                     <label
  //                       for="email"
  //                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //                     >
  //                       Enter Username
  //                     </label>
  //                     <input
  //                       value={signup?.username || ""}
  //                       onChange={(e) => onInputChange(e)}
  //                       name="username"
  //                       placeholder="username"
  //                       type="text"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     />
  //                   </div>
  //                   <div>
  //                     <label
  //                       for="password"
  //                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //                     >
  //                       Enter Password
  //                     </label>
  //                     <input
  //                       value={signup?.password || ""}
  //                       onChange={(e) => onInputChange(e)}
  //                       name="password"
  //                       type="password"
  //                       placeholder="••••••••"
  //                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     />
  //                   </div>

  //                   {error && <h5>{error}</h5>}

  //                   <div className="flex items-center justify-between">
  //                     <div className="flex items-start"></div>
  //                   </div>
  //                   <button
  //                     type="submit"
  //                     className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //                     onClick={() => signupUser()}
  //                   >
  //                     Signup
  //                   </button>
  //                   {/* <button
  //                     type="submit"
  //                     className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //                     onClick={() => toggleSignup()}
  //                   >
  //                     Signup
  //                   </button> */}
  //                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  //                     Already have an account..?{""}
  //                     <a
  //                       href="/login"
  //                       onClick={() => toggleSignup()}
  //                       className="font-medium text-primary-600 hover:underline dark:text-primary-500"
  //                     >
  //                       Sign In
  //                     </a>
  //                   </p>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </section>
  //       )}
  //     </>
  //   );
  // };
};

export default Login;
