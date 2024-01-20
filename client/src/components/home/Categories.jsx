import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { categories } from "../../constants/data";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] =
    React.useState("All Catagories");
  const category = searchParams.get("category");
  const navigate = useNavigate();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <>
      <div className="md:flex">
        <div>
          <Link
            to={`/create?category=${category || ""}`}
            type="button"
            className="m-10 flex justify-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            CREATE BLOG
          </Link>

          <div className="flex justify-center">
            <FormControl sx={{ m: 1, width: 230 }}>
              <InputLabel id="demo-multiple-name-label">Categories</InputLabel>

              <Select
                id="demo-multiple-name-label"
                input={<OutlinedInput label="Catagories" />}
                MenuProps={MenuProps}
                value={selectedCategory}
                defaultValue={"Catagories"}
              >
                {categories.map((category) => (
                  <MenuItem
                    key={category.id}
                    value={category.type}
                    onClick={() => {
                      setSelectedCategory(category.type);
                      navigate(
                        `/?category=${
                          category.type === "All Catagories"
                            ? ""
                            : category.type
                        }`
                      );
                    }}
                  >
                    {category.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
