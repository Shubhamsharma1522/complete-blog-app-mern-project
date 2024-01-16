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
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
