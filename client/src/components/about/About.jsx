// import { Box, styled, Typography, Link } from "@mui/material";
// import { GitHub, Instagram, Email } from "@mui/icons-material";

// const Banner = styled(Box)`
//   background-image: url(https://res.cloudinary.com/dd815juww/image/upload/v1704996360/samples/cup-on-a-table.jpg);
//   width: 100%;
//   height: 50vh;
//   background-position: left 0px;
//   background-size: 100%;
// `;

// const Wrapper = styled(Box)`
//   padding: 20px;
//   & > h3,
//   & > h5 {
//     margin-top: 50px;
//   }
// `;

// const Text = styled(Typography)`
//   color: #878787;
// `;

// const About = () => {
//   return (
//     <Box>
//       <Banner />
//       <Wrapper>
//         <Typography variant="h3">Shubham Sharma Creation</Typography>
//         <Text variant="h5">
//           I'm a Full Stack Developer based in India. I've built websites,
//           desktop applications and corporate software.
//           <br />
//           If you are interested, you can view some of my favorite projects here
//           <Box component="span" style={{ marginLeft: 5 }}>
//             <Link
//               href="https://github.com/Shubhamsharma1522"
//               color="inherit"
//               target="_blank"
//             >
//               <GitHub />
//             </Link>
//           </Box>
//         </Text>
//         <Text variant="h5">
//           Need something built or simply want to have chat? Reach out to me on
//           <Box component="span" style={{ marginLeft: 5 }}>
//             <Link
//               href="https://www.instagram.com/shubham_sharma.er/"
//               color="inherit"
//               target="_blank"
//             >
//               <Instagram />
//             </Link>
//           </Box>
//           or send me an Email
//           <Link
//             href="mailto:shubhamsharma.in1522@gmail.com?Subject=This is a subject"
//             target="_blank"
//             color="inherit"
//           >
//             <Email />
//           </Link>
//           .
//         </Text>
//       </Wrapper>
//     </Box>
//   );
// };

// export default About;

import React from "react";
import { Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              I'm a Full Stack Developer based in India. I've built websites,
              desktop applications and corporate software.
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to [My Blog App], your go-to destination for the latest
              and greatest in fashion, tech, music, movies, and sports! Our
              diverse range of content is curated to keep you informed and
              entertained across these dynamic realms. In the Fashion section,
              stay ahead of the trends with expert insights, style guides, and
              exclusive interviews with industry influencers. Tech enthusiasts
              will find a treasure trove of gadget reviews, software updates,
              and thought-provoking discussions on the ever-evolving tech
              landscape. Immerse yourself in the world of Music, where we
              explore new releases, hidden gems, and in-depth artist features.
              Our Movies section is your ticket to cinematic adventures,
              offering reviews, previews, and behind-the-scenes glimpses into
              the world of filmmaking. For sports enthusiasts, dive into the
              Sports blog, where we cover everything from game highlights to
              athlete profiles, ensuring you never miss a beat on the field.
            </p>
            <p className="mt-4 text-gray-600">
              I'm a Full Stack Developer based in India. I've built websites,
              desktop applications and corporate software. <br />
              If you are interested, you can view some of my favorite projects
              here
              <div component="span" style={{ marginLeft: 5 }}>
                <Link
                  href="https://github.com/Shubhamsharma1522"
                  color="inherit"
                  target="_blank"
                >
                  <GitHub />
                </Link>
              </div>
              <br />
              Connect with us beyond the blog! Follow us on Instagram
              <div component="span" style={{ marginLeft: 5 }}>
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
              </div>
              <br />
              for daily updates, behind-the-scenes content, and exclusive
              visuals. Join us on this journey as we explore, discuss, and
              celebrate the vibrant tapestry of fashion, tech, music, movies,
              and sports!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
