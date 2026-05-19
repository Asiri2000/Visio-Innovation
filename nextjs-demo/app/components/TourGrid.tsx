"use client";

import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const tours = [
  {
    title: "Sri Lanka Wellness Tour",
    desc: "13-day wellness escape to nurture your body, mind and spirit...",
    img: "https://source.unsplash.com/random/400x300/?wellness,srilanka",
  },
  {
    title: "Enchanting Sri Lanka",
    desc: "A busy trip with lots included to make the most of your short time...",
    img: "https://source.unsplash.com/random/400x300/?elephant,srilanka",
  },
  {
    title: "Family Fun in Sri Lanka",
    desc: "Designed to give kids the best experience they could have...",
    img: "https://source.unsplash.com/random/400x300/?beach,srilanka",
  },
];

export default function TourGrid() {
  return (
    <Box sx={{ bgcolor: "#f4f4f4", py: 8 }}>
      <Container>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            color: "#005b96",
          }}
        >
          Curated Itineraries
        </Typography>

        <Grid container spacing={4}>
          {tours.map((tour, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={tour.img}
                  alt={tour.title}
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {tour.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {tour.desc}
                  </Typography>

                  <Button
                    size="small"
                    endIcon={<ArrowRightAltIcon />}
                    sx={{ color: "#d97706", fontWeight: "bold" }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}