import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://res.cloudinary.com/dd815juww/image/upload/v1705210597/Space_25180_ebrk1c.png)
    center/100% no-repeat #fff;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Added padding for better spacing on smaller screens */
  text-align: center; /* Center-align text */
`;

const Heading = styled(Typography)`
  font-size: 3rem; /* Adjusted font size for better readability */
  color: #ffffff;
  line-height: 1;
  margin-bottom: 1px; /* Added margin for better spacing */
`;

const SubHeading = styled(Typography)`
  font-size: 1rem; /* Adjusted font size for better readability */
  background: #ffffff;
  padding: 10px; /* Added padding for better spacing */
  margin-bottom: 10px; /* Added margin for better spacing */
`;

const SubSubHeading = styled(Typography)`
  font-size: 1rem; /* Adjusted font size for better readability */
  background: #000;
  color: #ffffff;
  padding: 10px; /* Added padding for better spacing */
`;

const Banner = () => {
  return (
    <Image>
      <Heading>BLOG</Heading>
      <SubHeading>Write Your Own Thoughts</SubHeading>
      <SubSubHeading>The Only Thing That Describes Your Thoughts</SubSubHeading>
    </Image>
  );
};

export default Banner;
