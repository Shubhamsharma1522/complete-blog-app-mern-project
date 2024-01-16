import { useState, useEffect, useContext } from "react";

import { Box, Typography, styled } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";

import { API } from "../../service/api";

import { DataContext } from "../../context/DataProvider";

// components
import Comments from "./comments/Comments";

// const Container = styled(Box)(({ theme }) => ({
//   margin: "50px 100px",
//   [theme.breakpoints.down("md")]: {
//     margin: 0,
//   },
// }));

// const Image = styled("img")({
//   border: "1px solid black",
//   width: "100%",
//   height: "50vh",
//   objectFit: "cover",
// });

const EditIcon = styled(Edit)`
  size: large;
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

// const Heading = styled(Typography)`
//   background: orange;
//   font-size: 38px;
//   font-weight: 600;
//   text-align: center;
//   margin: 50px 0 10px 0;
//   word-break: break-word;
// `;

const Author = styled(Box)(({ theme }) => ({
  backgroundColor: "gray",
  color: "#fff",
  margin: "20px 0",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Description = styled(Typography)`
  // border: 1px solid black;
  background: white;
  word-break: break-word;
`;

const DetailView = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();
  const { account } = useContext(DataContext);

  const navigate = useNavigate();

  const url = post.picture
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
    // <Container>
    //   <Image src={post.picture || url} alt="post" />
    //   <Box style={{ float: "right" }}>
    //     {account.username === post.username && (
    //       <>
    //         <Link to={`/update/${post._id}`}>
    //           <EditIcon color="primary" />
    //         </Link>
    //         <DeleteIcon onClick={() => deleteBlog()} color="error" />
    //       </>
    //     )}
    //   </Box>
    //   <Heading>{post.title}</Heading>

    //   <Author>
    //     <Link
    //       to={`/?username=${post.username}`}
    //       style={{ textDecoration: "none", color: "inherit" }}
    //     >
    //       <Typography>
    //         Author:{" "}
    //         <Box component="span" style={{ fontWeight: 600 }}>
    //           {post.username}
    //         </Box>
    //       </Typography>
    //     </Link>
    //     <Typography style={{ marginLeft: "auto" }}>
    //       {new Date(post.createdDate).toDateString()}
    //     </Typography>
    //   </Author>

    //   <Description>{post.description}</Description>
    //   <Comments post={post} />
    // </Container>

    <>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={post.picture || url} alt="post" />
              <Box style={{ float: "right" }}>
                {account.username === post.username && (
                  <>
                    <Link to={`/update/${post._id}`}>
                      <EditIcon sx={{ fontSize: 30 }} color="primary" />
                    </Link>
                    <DeleteIcon
                      sx={{ fontSize: 30 }}
                      onClick={() => deleteBlog()}
                      color="error"
                    />
                  </>
                )}
              </Box>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                {post.title}
              </h2>
              <Author>
                <Link
                  to={`/?username=${post.username}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography>
                    Author:{" "}
                    <Box component="span" style={{ fontWeight: 600 }}>
                      {post.username}
                    </Box>
                  </Typography>
                </Link>
                <Typography style={{ marginLeft: "auto" }}>
                  {new Date(post.createdDate).toDateString()}
                </Typography>
              </Author>

              <Description>{post.description}</Description>
            </div>
          </div>
        </div>
        <Comments post={post} />
      </div>
    </>
  );
};

export default DetailView;
