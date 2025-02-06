import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { CheckCircle } from "@mui/icons-material";

function App() {
  return (
    <>
      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: "black" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us?
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          {[1, 2, 3].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ textAlign: "center", p: 2 }}>
                <CheckCircle sx={{ fontSize: 50, color: "primary.main" }} />
                <CardContent>
                  <Typography variant="h6">Feature {index + 1}</Typography>
                  <Typography color="text.secondary">
                    Brief description of this feature.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default App;
