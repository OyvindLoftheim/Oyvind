import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#a85932" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#0c0c0d">
        Om Meg
      </Typography>
      <Typography>
        Dette er min første nettside laget fra bunnen.
      </Typography>
    </Box>
  );
}

export default Description;
