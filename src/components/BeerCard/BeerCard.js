import { Paper, Grid, Stack } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

function BeerCard({ beer }) {
  const { image_url, name, tagline, description } = beer;
  return (
    <Grid item xs={6} md={12}>
      <Item>
        <Stack
          spacing={{ xs: 1, sm: 7 }}
          direction="row"
          useFlexGap
          sx={{ marginLeft: "30px", color: "black", lineHeight: "22px" }}
        >
          <div style={{ marginTop: "12px" }}>
            <img src={image_url} width={50} height={200} alt={name} />
          </div>
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
