import { Grid } from "@mui/material";

//components
import Banner from "../banner/Banner";
import Categories from "./Categories";
import Posts from "./post/Posts";

const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        {
          <Grid item lg={12} sm={12} xs={12}>
            <Banner />
            <Categories />
          </Grid>
        }
        {
          <Grid container item xs={12} sm={12} lg={12}>
            <Posts />
          </Grid>
        }
      </Grid>
    </>
  );
};

export default Home;
