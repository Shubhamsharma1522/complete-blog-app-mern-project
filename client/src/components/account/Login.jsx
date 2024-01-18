// import React, { useState, useContext } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   styled,
//   Typography,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { API } from "../../service/api";
// import { useNavigate } from "react-router-dom";
// import { DataContext } from "../../context/DataProvider";

// const imageURL =
//   "https://res.cloudinary.com/dd815juww/image/upload/v1705214795/BLOG_APP__4_-removebg-preview_kapozk.png";

// const Component = styled(Box)`
//   width: 400px;
//   margin: auto;
//   box-shadow: 2px 2px 15px 5px rgb(0.4 0.4 0/0.4);
//   border-radius: 10px;
// `;

// const Image = styled("img")({
//   width: 100,
//   margin: "auto",
//   display: "flex",
//   padding: "50px 0 0 ",
// });

// const Wrapper = styled(Box)`
//   padding: 25px 35px;
//   display: flex;
//   flex: 1;
//   flex-direction: column;

//   & > div,
//   & > button,
//   & > p {
//     margin-top: 20px;
//   }
// `;

// const LoginButton = styled(Button)`
//   text-transform: none;
//   background: #fb641b;
//   color: #fff;
//   height: 48px;
//   border-radius: 2px;
// `;

// const SignupButton = styled(Button)`
//   text-transform: none;
//   background: #fff;
//   color: #2874f0;
//   height: 48px;
//   border-radius: 2px;
//   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
// `;

// const Error = styled(Typography)`
//   font-size: 10px;
//   color: #ff6161;
//   line-height: 0;
//   margin-top: 10px;
//   font-weight: 600;
// `;

// const Text = styled(Typography)`
//   color: #878787;
//   font-size: 16px;
//   text-align: center;
// `;

// const loginInitialValues = {
//   username: "",
//   password: "",
// };

// const signupInitialValues = {
//   name: "",
//   username: "",
//   password: "",
//   confirmPassword: "",
// };

// const Login = ({ isUserAuthenticated }) => {
//   const [account, toggleAccount] = useState("login");
//   const [signup, setSignup] = useState(signupInitialValues);
//   const [login, setLogin] = useState(loginInitialValues);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   //anywhere use in any components
//   const { setAccount } = useContext(DataContext);
//   const navigate = useNavigate();

//   const toggleSignup = () => {
//     account === "signup" ? toggleAccount("login") : toggleAccount("signup");
//   };

//   const onInputChange = (e) => {
//     setSignup({ ...signup, [e.target.name]: e.target.value });
//   };

//   const signupUser = async () => {
//     try {
//       if (signup.password !== signup.confirmPassword) {
//         setError("Password do not match");
//         return;
//       }
//       let response = await API.userSignup(signup);
//       if (response.isSuccess) {
//         setError("");
//         setSignup(signupInitialValues);
//         toggleAccount("login");
//       }
//     } catch (error) {
//       setError("Something went wrong please try again later");
//     }
//   };

//   const onValueChange = (e) => {
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   };

//   const loginUser = async () => {
//     try {
//       let response = await API.userLogin(login);
//       if (response.isSuccess) {
//         setError("");

//         sessionStorage.setItem(
//           "accessToken",
//           `Bearer ${response.data.accessToken}`
//         );
//         sessionStorage.setItem(
//           "refreshToken",
//           `Bearer ${response.data.refreshToken}`
//         );

//         setAccount({
//           username: response.data.username,
//           name: response.data.name,
//         });

//         isUserAuthenticated(true);
//         navigate("/");
//       }
//     } catch (error) {
//       setError("Something went wrong! Please try again later");
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <>
//       <Component
//         style={{ backgroundColor: "white", marginTop: "40px" }}
//         className=" items-center justify-center px-6  "
//       >
//         <Box>
//           <Image src={imageURL} alt="login" />
//           {account === "login" ? (
//             <Wrapper>
//               <TextField
//                 variant="standard"
//                 value={login.username || ""}
//                 onChange={(e) => onValueChange(e)}
//                 name="username"
//                 label="Enter Username"
//               />
//               <TextField
//                 variant="standard"
//                 type={showPassword ? "text" : "password"}
//                 value={login.password || ""}
//                 onChange={(e) => onValueChange(e)}
//                 name="password"
//                 label="Enter Password"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={toggleShowPassword} edge="end">
//                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               {error && <Error>{error}</Error>}

//               <LoginButton variant="contained" onClick={() => loginUser()}>
//                 Login
//               </LoginButton>
//               <Text style={{ textAlign: "center" }}>OR</Text>
//               <SignupButton onClick={() => toggleSignup()}>
//                 Create An Account
//               </SignupButton>
//             </Wrapper>
//           ) : (
//             <Wrapper>
//               <TextField
//                 variant="standard"
//                 value={signup?.name || ""}
//                 onChange={(e) => onInputChange(e)}
//                 name="name"
//                 label="Enter Name"
//               />
//               <TextField
//                 variant="standard"
//                 value={signup?.username || ""}
//                 onChange={(e) => onInputChange(e)}
//                 name="username"
//                 label="Enter Username"
//               />
//               <TextField
//                 variant="standard"
//                 type={showPassword ? "text" : "password"}
//                 value={signup?.password || ""}
//                 onChange={(e) => onInputChange(e)}
//                 name="password"
//                 label="Enter Password"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton onClick={toggleShowPassword} edge="end">
//                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <TextField
//                 variant="standard"
//                 type={showPassword ? "text" : "password"}
//                 value={signup?.confirmPassword || ""}
//                 onChange={(e) => onInputChange(e)}
//                 name="confirmPassword"
//                 label="Enter Confirm Password"
//               />

//               {error && <Error>{error}</Error>}

//               <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
//               <Text style={{ textAlign: "center" }}>OR</Text>
//               <LoginButton variant="contained" onClick={() => toggleSignup()}>
//                 Already have an account
//               </LoginButton>
//             </Wrapper>
//           )}
//         </Box>
//       </Component>
//     </>
//   );
// };

// export default Login;

import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  styled,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  text-align: center;
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  //anywhere use in any components
  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated on component mount
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      isUserAuthenticated(true);
      navigate("/");
    }
  }, [isUserAuthenticated, navigate]);

  const toggleSignup = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    try {
      if (signup.password !== signup.confirmPassword) {
        setError("Password do not match");
        return;
      }
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
        navigate("/");
      }
    } catch (error) {
      setError("Something went wrong! Please try again later");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Component
        style={{ backgroundColor: "white", marginTop: "40px" }}
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
                type={showPassword ? "text" : "password"}
                value={login.password || ""}
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
                type={showPassword ? "text" : "password"}
                value={signup?.password || ""}
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={toggleShowPassword} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="standard"
                type={showPassword ? "text" : "password"}
                value={signup?.confirmPassword || ""}
                onChange={(e) => onInputChange(e)}
                name="confirmPassword"
                label="Enter Confirm Password"
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
};

export default Login;
