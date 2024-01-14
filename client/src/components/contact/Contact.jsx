import { Box, styled, Typography, Link } from "@mui/material";
import { Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://res.cloudinary.com/dd815juww/image/upload/v1705210578/laptop_internet_music_headphones_camera_desk-wallpaper-5120x2880_sz81jd.jpg);

  width: 100%;
  height: 50vh;
  background-position: left 0px top -250px;
  background-size: 100%;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          Reach out to me on
          <Link
            href="https://www.instagram.com/shubham_sharma.er/"
            color="inherit"
            target="_blank"
          >
            <Instagram />
          </Link>
          or send me an Email
          <Link
            href="mailto:shubhamsharma.in1522@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default Contact;
