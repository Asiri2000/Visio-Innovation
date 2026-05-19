"use client";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("white", {
    backgroundColor: "#fff",
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 , bgcolor:'#fff' }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 6 }}>
          <Item>
            <img
              src="/images/cloudy-sigiriya.png"
              alt="Cloudy Sigiriya"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                display: "block",
              }}
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 6, md: 6 }}>
          <Item>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2, color: "#000" }}
            >
              Magical Memories,<br /> Bespoke Experiences
            </Typography>

            <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: 'left' }}>
              Embark on a journey with Blue Lanka Tours, where every moment is
              meticulously crafted to leave an indelible mark on your heart. We
              understand that travel is more than just visiting destinations;
              it’s about creating magical memories that linger long after you’ve
              returned home.
              <br />
              <br />
              With an unerring passion for detail, we offer bespoke experiences
              that provide a profound insight into the rich tapestry of Sri
              Lanka’s vibrant culture, stunning landscapes, and hidden
              treasures.
              <br />
              <br />
              Our commitment at Blue Lanka Tours is to transcend the ordinary.
              By understanding your unique desires and preferences, we ensure
              that your Sri Lankan sojourn is not just a trip but a personalized
              story waiting to be told.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
