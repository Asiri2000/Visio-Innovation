"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/SendOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Style } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#ffffff", py: 8, color: "#333",  width:'100%', alignitems:'center' }}
    >
      <Container >
        {/* Top Section: Logo & Newsletter */}
        <Container sx={{ maxwidth:'md', px:4 }}>
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {/* Logo Placeholder */}
              <Box sx={{ mb: 2, textAlign: "center" }}>
                <Typography>
                  <img
                    src="/images/footer/BLT-logo.webp"
                    alt="Blue Lanka Tours Logo"
                    style={{ height: "150px" }}
                  />
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                ></Typography>
              </Box>
              {/* Social Icons */}
              <Stack direction="row" spacing={1}>
                <IconButton size="small" sx={{ border: "1px solid #ccc" }}>
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ border: "1px solid #ccc" }}>
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ border: "1px solid #ccc" }}>
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ maxWidth: 400, margin: "0 auto" }}>
                <Typography variant="h6" gutterBottom>
                  Receive Travel Inspirations
                </Typography>

                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="Your email address *"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{ mt: 2 }}
                >
                  Send
                </Button>
              </Box>
            </Grid>
          </Grid>

          {/* Contact Info Row */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 6,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "5 auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <WhatsAppIcon sx={{ color: "#25D366" }} />
              <Typography variant="body2" fontWeight="bold">
                (+94) 777 300 852
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon sx={{ color: "#1976D2" }} />
              <Typography variant="body2" fontWeight="bold">
                (+94) 777 300 852
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ color: "#F44336" }} />
              <Typography variant="body2" fontWeight="bold">
                letstravel@bluelankatours.com
              </Typography>
            </Box>
          </Stack>

          {/* Awards Badges Placeholder */}

          {/* Replace these Box components with actual <img src="..." /> tags */}
          <Typography
            sx={{
              mt: 6,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "5 auto",
            }}
          >
            <img src="/images/footer/awards.png" alt="Awards" style={{}} />
          </Typography>
        </Container>

        {/* Links Directory */}
        <Grid container spacing={4} sx={{ mt: 4 , fontSize:'8px',  mx: 'auto' }}>
          {/* Explore The Site */}
          <Grid item xs={16} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom >
              Explore The Site
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  {[
                    "Home",
                    "Accommodation",
                    "Tailor Made Tours",
                    "Blog",
                    "Discover Sri Lanka",
                    "About",
                    "DMC in Sri Lanka",
                    "Travel Tips",
                    "Blooming Smiles",
                    "Little Hearts Project",
                  ].map((text) => (
                    <Link
                      href="#"
                      key={text}
                      underline="hover"
                      color="text.secondary"
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Stack spacing={1}>
                  {[
                    "Sri Lanka Transfers",
                    "Book Train Tickets",
                    "Blooming Smiles",
                    "Contact Us",
                    "Booking Terms & Conditions",
                    "Cookie Policy",
                    "Sitemap",
                  ].map((text) => (
                    <Link
                      href="#"
                      key={text}
                      underline="hover"
                      color="text.secondary"
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Day Tours */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Day Tours
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  {[
                    "Day Tour of Colombo",
                    "Galle Day Tour",
                    "Geoffrey Bawa Works in Sri Lanka",
                    "Hot Air Ballooning Day Tour",
                    "Ingiriya Day Tour",
                    "Kandy Day Tour",
                    "Kithulgala White Water Rafting",
                    "Little England Day Tour",
                    "Sigiriya & Dambulla Day Tour",
                  ].map((text) => (
                    <Link
                      href="#"
                      key={text}
                      underline="hover"
                      color="text.secondary"
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack spacing={1}>
                  {[
                    "Whale Watching Day Tour",
                    "Yala National Park Day Tour",
                    "Udawalawe National Park",
                    "Wilpattu National Park Day Tour",
                  ].map((text) => (
                    <Link
                      href="#"
                      key={text}
                      underline="hover"
                      color="text.secondary"
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Itineraries */}
          <Grid item xs={14} md={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Itineraries
            </Typography>
            <Grid container spacing={0.5}>
              <Grid item xs={7}>
                <Stack spacing={1}>
                  {[
                    "Adventure & Nature based Tours",
                    "Culture & Heritage Tours",
                    "Family Tours",
                    "Luxury Bespoke Tours",
                    "North & East Coast Tours",
                    "Wildlife Tours",
                    "Sustainable Tours",
                  ].map((text) => (
                    <Link
                      href="#"
                      key={text}
                      underline="hover"
                      color="text.secondary"
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>

                
              </Grid>
              <Grid item xs={7}>
                <Stack spacing={1}>
                  {[
                    "Wellness Tours",
                    "Sports Based Tours",
                    "Special Transit Tours",
                    "Romantic Tours",
                    "Popular Tours",
                    "Purpose Built Tours",
                  ].map((text) => (
                    <Link
                      href="#"
                      key={text}
                      underline="hover"
                      color="text.secondary"
                      variant="body2"
                    >
                      {text}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 8, mb: 4 }} />

        {/* Footer Bottom Line */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ opacity: 0.5 }}
            >
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {new Date().toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            © Copyright 2026. Blue Lanka Tours. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
