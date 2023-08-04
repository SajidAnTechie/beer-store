import { useState, useEffect } from "react";
import BeerCard from "../BeerCard/BeerCard";
import { handleError } from "../../utils/error";
import { fetchAllBeers } from "../../services/beer.service";
import { Box, Grid, Button, CircularProgress } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BeerListLoader from "../Loader/BeerListLoader";

const DEFAULT_PAGE = 1;
const PER_PAGE_ITEMS = 3;

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [enableLoadMore, setEnableLoadMore] = useState(true);

  const fetchBeers = async (filters) => {
    try {
      setLoading(true);
      const data = await fetchAllBeers(filters);
      if (data.length < PER_PAGE_ITEMS) {
        setEnableLoadMore(false);
      }
      setBeers([...beers, ...data]);
    } catch (err) {
      const error = handleError(err);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeers({
      page,
      per_page: PER_PAGE_ITEMS,
    });
  }, [page]);
  return (
    <>
      {!beers.length && loading ? (
        <BeerListLoader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {beers.map((beer, index) => (
              <BeerCard beer={beer} key={index} />
            ))}
          </Grid>
        </Box>
      )}

      {!!beers.length && enableLoadMore && !error && (
        <div className="text-center mt-2">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={() => {
                setPage((preState) => preState + 1);
              }}
            >
              Load More
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default AllBeers;
