import { Box, Grid, Paper } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const BeerListLoader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={6} md={12} key={index}>
            <SkeletonTheme color="lightGray">
              <Skeleton height={100} width="100%" />
            </SkeletonTheme>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BeerListLoader;
