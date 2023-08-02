import { useState, useEffect } from "react";
import BeerCard from "../BeerCard/BeerCard";
import { handleError } from "../../utils/error";
import { fetchAllBeers } from "../../services/beer.service";
import { Box, Grid, Button, CircularProgress } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BeerListLoader from "../Loader/BeerListLoader";

const DEFAULT_PAGE = 1;
const PER_PAGE_SIZE = 3;

function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [enableLoadMore, setLoadMore] = useState(true);

  async function fetchBeers(filters) {
    try {
      setLoading(true);
      const data = await fetchAllBeers(filters);
      if (data.length < PER_PAGE_SIZE) {
        setLoadMore(false);
      }
      setBeers([...beers, ...data]);
    } catch (err) {
      const error = handleError(err);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBeers({
      page,
      perPage: PER_PAGE_SIZE,
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
        <div
          style={{
            margin: "12px 12px",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
}

export default AllBeers;
