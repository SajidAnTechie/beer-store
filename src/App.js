import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainComponent from "./MainComponent";
function App() {
  return (
    <main className="py-3">
      <CssBaseline />
      <Container maxWidth="md">
        <MainComponent />
      </Container>
    </main>
  );
}

export default App;
