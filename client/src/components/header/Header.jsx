import { AppBar, Toolbar, styled } from "@mui/material";

import { Link } from "react-router-dom";

const Component = styled(AppBar)`
  background: #fff;
`;

const Container = styled(Toolbar)`
  justify-content: center;

  & > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
  }
  & > a:hover {
     {
      border-bottom: 1px solid red;
      color: red;
    }
  }
`;

const Header = () => {
  return (
    <Component>
      <Container className=" font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/login">LOGOUT</Link>
      </Container>
    </Component>
  );
};

export default Header;
