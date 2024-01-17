import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  styled,
  Grid,
} from "@mui/material";

import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  // // border: 2px solid rgba(224, 224, 224, 1);
  // margin-top: 20px;
  // // margin-bottom: 10px;
  // // margin: 10px;
  background: red;
`;

const StyledButton = styled(Button)`
  margin: 10px 10px 10px 10px;
  // padding: 10px 20px 10px 20px;
  // color: black;
  // border: 1px solid black;
  // border-radius: 10px;
  // text-transform: none;
  // background: #e3d8d8;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const StyledLinkCategory = styled(Link)`
  // // text-decoration: none;
  color: #fff;
  // background: #e3d8d8;
  // padding: 10px 20px 10px 20px;
  // // margin: 12px;
  // margin-top: 10px;
  // margin-left: 10px;
  // display: flex;
  // width: 140px;
  // border: 1px solid black;
  // border-radius: 10px;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <StyledLink to={`/create?category=${category || ""}`}>
        {/* <Grid item lg={4} sm={4} xs={4}> */}
        <StyledButton
          style={{ float: "right" }}
          variant="contained"
          // color="error"
        >
          Create Blog
        </StyledButton>
        {/* </Grid> */}
      </StyledLink>

      <StyledTable>
        <TableBody>
          <TableCell>
            <StyledLinkCategory className=" hover:underline" to="/">
              All Categories
            </StyledLinkCategory>
          </TableCell>
          {categories.map((category) => (
            <TableCell key={category.id}>
              <StyledLink
                className="hover:underline "
                to={`/?category=${category.type}`}
              >
                {category.type}
              </StyledLink>
            </TableCell>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
