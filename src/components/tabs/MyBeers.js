import { useEffect, useState } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  TextField,
  Grid,
} from "@mui/material";
import BeerCard from "../BeerCard/BeerCard";
import { useTheme } from "@mui/material/styles";
import BeerImage from "../../assets/images/beer.png";

const MyBeers = (props) => {
  const { handleCloseModel, isModelOpen } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [genre, setGenre] = useState("");
  const [error, setError] = useState(null);
  const [beerName, setBeerName] = useState("");
  const [description, setDescription] = useState("");
  const [myBeers, setMyBeers] = useState([]);

  const handleFormSubmit = () => {
    const errorsObject = validateForm();
    if (!!Object.keys(errorsObject).length) {
      setError(errorsObject);
      return;
    } else {
      setError(null);
    }
    const getBeers = localStorage.getItem("myBeers");
    const beers = getBeers ? JSON.parse(getBeers) : [];
    const payload = [
      ...beers,
      {
        name: beerName,
        tagline: genre,
        description,
      },
    ];
    localStorage.setItem("myBeers", JSON.stringify(payload));
    setMyBeers(payload);
    handleCloseModel();
  };

  useEffect(() => {
    const getBeers = localStorage.getItem("myBeers");
    const beers = getBeers ? JSON.parse(getBeers) : [];
    setMyBeers(beers);
  }, []);

  const validateForm = () => {
    let errors = {};
    if (!beerName) {
      errors.beerName = true;
    }

    if (!genre) {
      errors.genre = true;
    }

    if (!description) {
      errors.description = true;
    }

    return errors;
  };

  return (
    <>
      {!myBeers.length ? (
        <p>No any item</p>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {myBeers.map((beer, index) => (
              <BeerCard
                beer={{
                  ...beer,
                  image_url: beer.image_url ? beer.image_url : BeerImage,
                }}
                key={index}
              />
            ))}
          </Grid>
        </Box>
      )}
      {isModelOpen && (
        <Dialog
          fullScreen={fullScreen}
          fullWidth={true}
          open={isModelOpen}
          onClose={handleCloseModel}
          onClick={(e) => e.stopPropagation()}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Add a New Beer</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box className="form-image">
                <img src={BeerImage} width={20} height={100} alt="Beer Image" />
              </Box>
              <TextField
                variant="outlined"
                type="text"
                margin="normal"
                required
                fullWidth
                id="beerName"
                label="Beer name"
                name="beerName"
                autoFocus
                error={error?.beerName === true}
                value={beerName}
                onChange={(e) => setBeerName(e.target.value)}
              />
              <TextField
                variant="outlined"
                type="text"
                margin="normal"
                required
                fullWidth
                id="genre"
                label="Genre"
                name="genre"
                autoFocus
                error={error?.genre === true}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
              <TextField
                variant="outlined"
                type="text"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoFocus
                multiline
                rows={5}
                error={error?.description === true}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Box
              className="text-right"
              style={{
                width: "100%",
                padding: "0px 15px 13px 0px",
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Button
                autoFocus
                onClick={handleCloseModel}
                variant="text"
                className="mr-3"
                sx={{
                  color: "gray",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleFormSubmit}
                autoFocus
                variant="contained"
                color="primary"
                disableElevation
              >
                Save
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default MyBeers;
