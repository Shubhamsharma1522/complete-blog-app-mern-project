import React, { useState, useEffect, useContext } from "react";
import { Box, CircularProgress, Typography, styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Comments from "./comments/Comments";
import { BUTTON_FLAGS } from "../../utils/common-utils";

const DetailContainer = styled(Box)({
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "20px",
});

const ImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
});

const BlogImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});

const EditIcon = styled(Edit)`
  font-size: 30px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  font-size: 30px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const AuthorInfo = styled(Box)({
  backgroundColor: "gray",
  color: "#fff",
  margin: "20px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  borderRadius: "8px",
});

const DetailText = styled(Typography)({
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
});

const DetailView = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const { account, loading, setLoading } = useContext(DataContext);
  const navigate = useNavigate();

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading({ status: true, buttonFlag: BUTTON_FLAGS.LOAD_POST });
        let response = await API.getPostById(id);
        if (response.isSuccess) {
          setPost(response.data);
        }
        setLoading({ status: false, buttonFlag: BUTTON_FLAGS.LOAD_POST });
      } catch (error) {
        console.log(error);
        setLoading({ status: false, buttonFlag: BUTTON_FLAGS.LOAD_POST });
      }
    };

    fetchData();
  }, [id]);

  const deleteBlog = async () => {
    try {
      let response = await API.deletePost(post._id);
      if (response.isSuccess) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DetailContainer>
      {loading &&
      loading.status &&
      loading.buttonFlag === BUTTON_FLAGS.LOAD_POST ? (
        <div className="flex justify-center items-center h-[calc(100vh-415px)]">
          <CircularProgress />
        </div>
      ) : (
        <>
          <ImageContainer>
            <BlogImage src={post.picture || url} alt="post" />
            {account.username === post.username && (
              <Box
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                }}
              >
                <Link to={`/update/${post._id}`}>
                  <EditIcon color="primary" />
                </Link>
                <DeleteIcon onClick={() => deleteBlog()} color="error" />
              </Box>
            )}
          </ImageContainer>

          <AuthorInfo>
            <Link
              to={`/?username=${post.username}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>
                Author: <strong>{post.username}</strong>
              </Typography>
            </Link>
            <Typography>{new Date(post.createdDate).toDateString()}</Typography>
          </AuthorInfo>

          <DetailText>
            <Typography variant="h2" gutterBottom>
              {post.title}
            </Typography>
            <Typography>{post.description}</Typography>
          </DetailText>

          <Comments post={post} />
        </>
      )}
    </DetailContainer>
  );
};

export default DetailView;
