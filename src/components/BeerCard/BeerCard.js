import { Tooltip } from "react-tippy";
import { Paper, Grid, Stack } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function BeerCard({ beer }) {
  const { image_url, name, tagline, description, ingredients } = beer;
  const title = `Ingredients: ${Object.keys(ingredients).join(", ")}`;
  return (
    <Grid item xs={12} md={12}>
      <Item className="beer-card-item">
        <Stack
          spacing={5}
          direction="row"
          useFlexGap
          sx={{ marginLeft: "30px", color: "black", lineHeight: "22px" }}
        >
          <Tooltip title={title} arrow size="small">
            <div className="mt-3 beer-image">
              <img src={image_url} width={50} height={200} alt={name} />
            </div>
          </Tooltip>
          <div>
            <h1>{name}</h1>
            <h4>
              <span style={{ color: "#e5b22c" }}>{tagline}</span>
            </h4>
            <p>{description}</p>
          </div>
        </Stack>
      </Item>
    </Grid>
  );
}

export default BeerCard;
