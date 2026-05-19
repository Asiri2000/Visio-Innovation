"use client";
import { Box, Typography, Button } from '@mui/material';

export default function HeroBanner() {
  return (
    <Box sx={{
      height: '80vh',
      backgroundImage: 'url("https://source.unsplash.com/random/1920x1080/?srilanka,nature")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)' // Dark overlay
      }
    }}>
      <Box sx={{ position: 'relative', zIndex: 1, color: '#fff', px: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Hallmark of Sri Lankan Travel
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, fontStyle: 'italic' }}>
          Curated Itineraries | Tailormade Experiences
        </Typography>
        <Button variant="contained" size="large" sx={{ bgcolor: '#d97706', px: 4, py: 1.5 }}>
          Plan Your Trip
        </Button>
      </Box>
    </Box>
  );
}