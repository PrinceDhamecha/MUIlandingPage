import { Container, Typography, Button } from "@mui/material";

function App() {
  return (
    <>
      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          This is a simple landing page built with MUI.
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Container>
    </>
  );
}

export default App;
