import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
const ModalForm = (props) => {
  const { handleCloseModel, isModelOpen, title, handleFormSubmit, content } =
    props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isModelOpen && (
        <Dialog
          fullScreen={fullScreen}
          fullWidth={true}
          open={isModelOpen}
          onClose={handleCloseModel}
          onClick={(e) => e.stopPropagation()}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
          <DialogContent>{content}</DialogContent>
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

export default ModalForm;
