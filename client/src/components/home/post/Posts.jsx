// import React, { useEffect, useState } from "react";

// import { Box, Grid } from "@mui/material";
// import { useSearchParams, Link } from "react-router-dom";

// import { API } from "../../../service/api";

// //componenets
// import Post from "./Post";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   const [searchParams] = useSearchParams();

//   const category = searchParams.get("category");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await API.getAllPosts({ category: category || "" });
//         if (response.isSuccess) {
//           setPosts(response.data);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [category]);

//   return (
//     <>
//       {posts && posts.length > 0 ? (
//         posts.map((post) => (
//           <Grid item lg={3} sm={4} xs={12}>
//             <Link
//               to={`details/${post._id}`}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <Post post={post} />
//             </Link>
//           </Grid>
//         ))
//       ) : (
//         <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
//           No data available to display
//         </Box>
//       )}
//     </>
//   );
// };

// export default Posts;

// import React, { useEffect, useState } from "react";
// import { Box, Grid, CircularProgress } from "@mui/material";
// import { useSearchParams, Link } from "react-router-dom";
// import { API } from "../../../service/api";
// import Post from "./Post";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         let response = await API.getAllPosts({ category: category || "" });
//         if (response.isSuccess) {
//           setPosts(response.data);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [category]);

//   return (
//     <>
//       {loading ? (
//         // Display a loader while posts are being fetched
//         <Box
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//           }}
//         >
//           <CircularProgress />
//         </Box>
//       ) : posts && posts.length > 0 ? (
//         posts.map((post) => (
//           <Grid item lg={3} sm={4} xs={12} key={post._id}>
//             <Link
//               to={`details/${post._id}`}
//               style={{ textDecoration: "none", color: "inherit" }}
//             >
//               <Post post={post} />
//             </Link>
//           </Grid>
//         ))
//       ) : (
//         <Box
//           style={{
//             color: "#878787",
//             margin: "30px 80px",
//             fontSize: 18,
//           }}
//         >
//           No data available to display
//         </Box>
//       )}
//     </>
//   );
// };

// export default Posts;

import React, { useEffect, useState } from "react";
import { Box, Grid, CircularProgress } from "@mui/material";
import { useSearchParams, Link } from "react-router-dom";
import { API } from "../../../service/api";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = await API.getAllPosts({ category: category || "" });
        if (response.isSuccess) {
          setPosts(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      {loading ? (
        // Display a loader while posts are being fetched
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : posts && posts.length > 0 ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12} key={post._id}>
            <Link
              to={`details/${post._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Post post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        // Replace the "No data available to display" message with the loader
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30vh",
            color: "#878787",
            fontSize: 18,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default Posts;
