import React, { useState, useEffect, useContext } from "react";
import {
  styled,
  Box,
  TextareaAutosize,
  Button,
  InputBase,
  FormControl,
  Typography,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)(({ theme }) => ({
  margin: "50px auto",
  padding: "10px",
  maxWidth: "800px",
  [theme.breakpoints.down("md")]: {
    margin: "10px",
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
  marginBottom: "20px",
});

const StyledFormControl = styled(FormControl)({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const InputTextField = styled(InputBase)({
  flex: 1,
  margin: "0 20px",
  fontSize: "18px",
});

const StyledButton = styled(Button)({
  width: "15%",
  color: "white",
  borderRadius: "10px",
  textTransform: "none",
});

const Textarea = styled(TextareaAutosize)({
  width: "100%",
  marginTop: "20px",
  fontSize: "16px",
  border: "1px solid #878787",
  padding: "10px",
  borderRadius: "5px",
  outline: "none",
});

const CreatePost = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    description: "",
    picture: "",
    username: "",
    categories: "",
    createdDate: new Date(),
  });
  const [file, setFile] = useState("");
  const { account } = useContext(DataContext);

  const url = file
    ? file
    : post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [account?.username, location?.search, post]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const savePost = async () => {
    try {
      let response = await API.createPost({
        ...post,
        picture: file || post?.picture,
      });
      if (response.isSuccess) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Create a New Blog
      </Typography>
      <Image src={url} alt="post" />

      <StyledFormControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" color="action" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <InputTextField
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
        />
        <StyledButton
          onClick={() => savePost()}
          variant="contained"
          color="primary"
        >
          Publish
        </StyledButton>
      </StyledFormControl>

      <Textarea
        minRows={5}
        placeholder="Tell your story..."
        onChange={(e) => handleChange(e)}
        name="description"
      />
    </Container>
  );
};

export default CreatePost;
