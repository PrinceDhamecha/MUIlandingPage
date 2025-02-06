import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          backgroundColor: "#333",
          color: "white",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} My Landing Page. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
