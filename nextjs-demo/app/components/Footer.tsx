"use client";

import NextLink from "next/link";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1a1a1a",
        color: "#fff",
        py: 6,
        mt: "auto",
      }}
    >
      <Container>
        <Grid container spacing={4}>

          {/* Column 1 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#d97706",
              }}
            >
              Blue Lanka Tours
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#aaa", mb: 2 }}
            >
              Explore the exotic depths of Sri Lanka in all its beauty,
              grandeur, mystery and luxury.
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "#aaa" }}
            >
              letstravel@bluelankatours.com
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Explore The Site
            </Typography>

            {[
              "Home",
              "Tailor Made Tours",
              "Discover Sri Lanka",
              "About",
              "Contact Us",
            ].map((item) => (
              <Link
                key={item}
                component={NextLink}
                href="/"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#aaa",
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

          {/* Column 3 */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Day Tours
            </Typography>

            {[
              "Day Tour of Colombo",
              "Galle Day Tour",
              "Kandy Day Tour",
              "Whale Watching Day Tour",
            ].map((item) => (
              <Link
                key={item}
                component={NextLink}
                href="/"
                underline="hover"
                sx={{
                  display: "block",
                  mb: 1,
                  color: "#aaa",
                }}
              >
                {item}
              </Link>
            ))}
          </Grid>

        </Grid>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            mt: 6,
            color: "#666",
            borderTop: "1px solid #333",
            pt: 3,
          }}
        >
          © Copyright 2026. Blue Lanka Tours. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}