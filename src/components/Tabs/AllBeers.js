import { useState, useEffect } from "react";
import BeerCard from "../BeerCard";
import { handleError } from "../../utils/error";
import NotFound from "../common/notFound/notFound";
import BeerListLoader from "../Loader/BeerListLoader";
import { fetchAllBeers } from "../../services/beer.service";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Grid, Button, CircularProgress } from "@mui/material";

const DEFAULT_PAGE = 1;
const PER_PAGE_ITEMS = 10;

const AllBeers = () => {
  const [beers, setBeers] = useState([]);
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
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBeers({
      page,
      per_page: PER_PAGE_ITEMS,
    });
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      {!beers.length && loading ? (
        <BeerListLoader />
      ) : !beers.length ? (
        <NotFound
          className="no-item-message"
          content={
            <>
              <div>No any item found!</div>
            </>
          }
        />
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {beers.map((beer, index) => (
              <Grid item xs={12} md={12}>
                <BeerCard beer={beer} key={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {!!beers.length && enableLoadMore && (
        <div className="text-center mt-2">
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button
              endIcon={<ArrowDropDownIcon />}
              onClick={() => {
                setPage((preState) => preState + 1);
              }}
              sx={{ fontWeight: "bold" }}
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
