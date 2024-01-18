import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  styled,
  TextareaAutosize,
  InputBase,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)({
  margin: "50px auto",
  padding: "0 20px",
  maxWidth: "800px",
});

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const FormControl = styled("div")({
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
});

const InputTextField = styled(InputBase)({
  flex: 1,
  margin: "0 10px",
  fontSize: "1.5rem",
});

const StyledTextarea = styled(TextareaAutosize)({
  width: "100%",
  border: "1px solid #878787",
  marginTop: "20px",
  fontSize: "1rem",
  padding: "10px",
  borderRadius: "8px",
  "&:focus-visible": {
    outline: "none",
  },
});

const UpdateButton = styled(Button)({
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: ".8rem",
});

const initialPost = {
  title: "",
  description: "",
  picture: "",
  username: "",
  categories: "",
  createdDate: new Date(),
};

const Update = () => {
  const [post, setPost] = useState(initialPost);
  const [file, setFile] = useState("");
  const { account } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const url = file
    ? file
    : post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await API.getPostById(id);
        if (response.isSuccess) {
          setPost(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    post.categories = location.search?.split("=")[1] || "All";
    post.username = account.username;
  }, [account?.username, location?.search, post]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setFile(Reader.result);
      }
    };
  };

  const updateBlogPost = async () => {
    try {
      let response = await API.updatePost({ ...post, picture: file });
      if (response.isSuccess) {
        navigate(`/details/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Image src={url} alt="post" />

      <FormControl>
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
          placeholder="Title"
          value={post.title}
          onChange={(e) => handleChange(e)}
          name="title"
        />
        <UpdateButton
          onClick={() => updateBlogPost()}
          variant="contained"
          color="primary"
        >
          Update
        </UpdateButton>
      </FormControl>

      <StyledTextarea
        minRows={5}
        placeholder="Tell your story..."
        onChange={(e) => handleChange(e)}
        name="description"
        value={post.description}
      />
    </Container>
  );
};

export default Update;
