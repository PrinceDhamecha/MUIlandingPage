import { Box, Typography, Button } from "@mui/material";

function Cta() {
  return (
    <>
      {/* Call-to-Action Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          backgroundColor: "#fffee",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="h6" paragraph>
          Join us today and make a difference!
        </Typography>
        <Button variant="contained" size="large" color="secondary">
          Get Started
        </Button>
      </Box>
    </>
  );
}

export default Cta;
