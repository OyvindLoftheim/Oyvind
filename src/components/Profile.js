import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#f5f5f6"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/pexels-roman-pohorecki-2664399.jpg"
        alt="Blomst"
        sx={{
          width: 450,
          height: 450,
          margin: "auto",
          border: "4px solid #3f51b5",
        }}
      />
      <Typography variant="h4" gutterBottom color="#3f51b5">
        Øyvind Loftheim
      </Typography>
    </Stack>
  );
}

export default Profile;
