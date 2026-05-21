"use client";
import { Box, Typography, Button } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

export default function HeroBanner() {
  return (
    <Box  sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh', // Adjust height as needed
        color: '#fff',
        textAlign: 'center',
      
    }}>
      <Box sx={{ position: 'relative', zIndex: 1, color: '#fff', px: 2, pt: '500px' }}>
        <Typography variant="h1" sx={{ fontWeight: '10px', mb: 2, fontFamily: "Minion Pro, Georgia, Times New Roman, serif" }}>
          Blue Lanka Tours
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: '10px', mb: 2, fontFamily: "Minion Pro, Georgia, Times New Roman, serif" }}>
          Hallmark of Sri Lankan Travel
        </Typography>
        <Typography variant="h5" sx={{ mb: 4,  paddingTop:'40px',  }}>
          <Button variant="contained" sx={{ borderRadius: '20px', mr: 2 ,height:'50px'}}>
            Curated Itineraries <PlaceIcon />
          </Button>
          <Button variant="contained" sx={{ borderRadius: '20px' ,backgroundColor:'#d13b24', height:'50px' }}>
            Tailormade Experiences <DisplaySettingsIcon /> 
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}