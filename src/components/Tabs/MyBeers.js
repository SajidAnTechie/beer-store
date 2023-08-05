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
import BeerCard from "../BeerCard";
import { notify } from "../common/toast/toast";
import { useTheme } from "@mui/material/styles";
import NotFound from "../common/notFound/notFound";
import BeerImage from "../../assets/images/beer.png";

function getMyBeerFromStorage() {
  const getBeers = localStorage.getItem("myBeers");
  return getBeers ? JSON.parse(getBeers) : [];
}

const initialFormData = {
  name: "",
  genre: "",
  description: "",
  image_url: BeerImage,
  ingredients: {
    malt: "malt",
    hops: "hops",
    yeast: "yeast",
  },
};

const MyBeers = (props) => {
  const { handleCloseModel, isModelOpen, handleOpenModel } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [myBeers, setMyBeers] = useState([]);

  const handleFormSubmit = () => {
    const errorsObject = validateForm();
    const ObjectKeys = Object.keys(errorsObject);
    if (!!ObjectKeys.length) {
      const elementToFocus = document.getElementById(ObjectKeys[0]);
      setError(errorsObject);
      elementToFocus.focus();
      return;
    } else {
      error && setError(null);
    }
    const payload = [...getMyBeerFromStorage(), formData];
    localStorage.setItem("myBeers", JSON.stringify(payload));
    setMyBeers(payload);
    notify({
      data: "New item added successfully.",
      statusType: "success",
    });
    handleResetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  };

  const handleResetForm = () => {
    setFormData(initialFormData);
    error && setError(null);
    handleCloseModel();
  };

  useEffect(() => {
    const getMyBeers = getMyBeerFromStorage();
    setMyBeers(getMyBeers);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setError(validateForm());
    }
    // eslint-disable-next-line
  }, [formData]);

  const validateForm = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = true;
    }

    if (!formData.genre) {
      errors.genre = true;
    }

    if (!formData.description) {
      errors.description = true;
    }

    return errors;
  };

  function NotFoundContent() {
    return (
      <>
        <div>Nothing to see yet.</div>
        <div>
          <Button onClick={handleOpenModel} className="click-to-add-button">
            Click here
          </Button>{" "}
          to add your first beer!
        </div>
      </>
    );
  }

  return (
    <>
      {!myBeers.length ? (
        <NotFound className="no-item-message" content={<NotFoundContent />} />
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            {myBeers.map((beer, index) => (
              <BeerCard beer={beer} key={index} />
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
          <DialogTitle id="responsive-dialog-title" sx={{ fontWeight: "bold" }}>
            Add a New Beer
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box className="form-image">
                <img
                  src={BeerImage}
                  width={20}
                  height={100}
                  alt="Trashy Blonde"
                />
              </Box>
              <TextField
                variant="outlined"
                type="text"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Beer name"
                name="name"
                autoComplete="name"
                autoFocus
                error={error?.name === true}
                value={formData.name}
                onChange={handleChange}
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
                autoComplete="genre"
                autoFocus
                error={error?.genre === true}
                value={formData.genre}
                onChange={handleChange}
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
                autoComplete="description"
                autoFocus
                multiline
                rows={5}
                error={error?.description === true}
                value={formData.description}
                onChange={handleChange}
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
                onClick={handleResetForm}
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
