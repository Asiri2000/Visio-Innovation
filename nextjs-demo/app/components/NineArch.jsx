import React from "react";
import { Box } from "@mui/material";

export default function Ninearch() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        sx={{
          backgroundImage: "url(/images/ninearch.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      />
    </Box>
  );
}
