import { styled, Box, Typography } from "@mui/material";
import { addElipsis } from "../../../utils/common-utils";

const Container = styled(Box)`
  border: 1px solid black;
  background: white;
  border-radius: 10px;
  margin: 10px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > p {
    padding: 0 5px 5px 5px;
  }
`;

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
  height: 150,
});

const Text = styled(Typography)`

    color: #878787
    font-size: 12px;
    
`;

const Heading = styled(Typography)`
  border: outset orange;
  width: 90%;
  font-size: 16px;
  font-weight: 600;
`;

const Details = styled(Typography)`
  font-size: 14px;
  word-break: break-word;
`;

const Post = ({ post }) => {
  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80";

  return (
    <Container>
      <Image src={url} alt="post" />
      <Text>{post.categories}</Text>
      <Heading>{addElipsis(post.title, 30)}</Heading>
      <Text>Author: {post.username}</Text>

      <Details>{addElipsis(post.description, 70)}</Details>
    </Container>
  );
};

export default Post;
