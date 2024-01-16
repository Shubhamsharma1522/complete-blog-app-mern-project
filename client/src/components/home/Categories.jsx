import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";

import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  // border: 2px solid rgba(224, 224, 224, 1);
  border: 2px solid white;
  background: #000;
`;

const StyledButton = styled(Button)`
  margin: 10px;
  width: 25%;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  text-transform: none;
  background: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const StyledLinkCategory = styled(Link)`
  width: 40%;
  text-decoration: none;
  color: #fff;
  padding: 8px;
  margin-top: 7px;
  margin-left: 10px;
  display: flex;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <StyledLink to={`/create?category=${category || ""}`}>
        <StyledButton
          style={{ float: "right" }}
          variant="contained"
          color="error"
        >
          Create Blog
        </StyledButton>
      </StyledLink>

      <StyledTable>
        <TableBody>
          <StyledLinkCategory to="/">All Categories</StyledLinkCategory>
          {categories.map((category) => (
            <TableCell key={category.id}>
              <TableRow>
                <StyledLink to={`/?category=${category.type}`}>
                  {category.type}
                </StyledLink>
              </TableRow>
            </TableCell>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
