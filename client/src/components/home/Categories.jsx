import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";

import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  border: 2px solid rgba(224, 224, 224, 1);
  background: #fff;
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  color: #fff;
  border: 2px solid #fac898;
  border-radius: 20px;
  text-transform: none;
  background: #fb641b;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const StyledLinkCategory = styled(Link)`
  text-decoration: none;
  color: #ff0000;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <StyledLink to={`/create?category=${category || ""}`}>
        <StyledButton variant="contained">create blog</StyledButton>
      </StyledLink>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLinkCategory to="/">All Categories</StyledLinkCategory>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                <StyledLink to={`/?category=${category.type}`}>
                  {category.type}
                </StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default Categories;
