import MainComponent from "./MainComponent";
import Container from "@mui/material/Container";
import Toast from "./components/common/toast/toast";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <main className="py-3">
      <CssBaseline />
      <Container maxWidth="md">
        <MainComponent />
      </Container>
      <Toast />
    </main>
  );
}

export default App;
