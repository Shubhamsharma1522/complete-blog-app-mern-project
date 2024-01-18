import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { categories } from "../../constants/data";

const StyledTable = styled(Table)`
  border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Categories = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <div className="md:flex">
        <div className="p-5 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-white rounded-lg w-full container mx-auto  flex flex-wrap flex-col md:flex-row items-center">
          <Link
            to={`/create?category=${category || ""}`}
            type="button"
            className="text-blue-700 hover:text-white border-b-2 border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-black dark:text-black dark:hover:text-black dark:hover:bg-white "
          >
            Create Blog
          </Link>
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell>
                  <StyledLink className="hover:text-red-600" to={"/"}>
                    <button
                      type="button"
                      className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-900 hover:text-black border-x-2 border-gray-800 hover:bg-white focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  dark:text-black dark:hover:text-black "
                    >
                      All categories
                    </button>
                  </StyledLink>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <StyledLink
                      className="hover:text-red-600"
                      to={`/?category=${category.type}`}
                    >
                      <button
                        type="button"
                        className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-gray-900 hover:text-black border-b-2 border-gray-800 hover:bg-white focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  dark:text-black dark:hover:text-black "
                      >
                        {category.type}
                      </button>
                    </StyledLink>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </div>
      </div>
    </>
  );
};

export default Categories;
