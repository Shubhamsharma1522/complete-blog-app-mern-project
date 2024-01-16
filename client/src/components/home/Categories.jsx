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
  margin-top: 20px;
  border: 2px solid black;
  background: #f8f8f8;
`;

const StyledButton = styled(Button)`
  margin: 0px 20px 4px 5px;
  padding: 10px 20px 10px 20px;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  text-transform: none;
  background: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const StyledLinkCategory = styled(Link)`
  // text-decoration: none;
  // color: #000;
  padding: 10px 20px 10px 20px;
  // margin: 12px;
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  width: 140px;
  border: 1px solid black;
  border-radius: 10px;
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
        <StyledLinkCategory className="hover:bg-red-700" to="/">
          All Categories
        </StyledLinkCategory>
      </StyledLink>

      <StyledTable>
        <TableBody>
          {categories.map((category) => (
            <TableCell key={category.id}>
              <TableRow>
                <StyledLink
                  className=" hover:text-red-700"
                  to={`/?category=${category.type}`}
                >
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
