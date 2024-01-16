import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://res.cloudinary.com/dd815juww/image/upload/v1705210597/Space_25180_ebrk1c.png)
    center/100% no-repeat #fff;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
`;
const SubSubHeading = styled(Typography)`
  font-size: 20px;
  background: #000;
  color: #ffffff;
`;

const Banner = () => {
  return (
    <Grid container>
      {
        <Grid item lg={12} sm={12} xs={12}>
          <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Write Your Own Thoughts</SubHeading>
            <br />
            <SubSubHeading>
              The Only Thing That Describes Your Thoughts
            </SubSubHeading>
          </Image>
        </Grid>
      }
    </Grid>
  );
};

export default Banner;
