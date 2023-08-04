import { Box, Grid } from "@mui/material";
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
