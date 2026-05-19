"use client";
import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StarIcon from '@mui/icons-material/Star';

export default function CtaSection() {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#ffffff',
        overflow: 'hidden'
      }}
    >
      {/* Right Side Illustration (Fresco Lady) */}
      <Box
        component="img"
        // Replace with your actual image path
        src="images/customizedtour/pngegg.png" 
        alt="Sri Lankan Fresco"

        sx={{
          position: 'absolute',
          right: { xs: -100, md: 0 },
          top: '50%',
          transform: 'translateY(-50%)',
          height: { xs: '300px', md: '500px' },
          opacity: { xs: 0.2, md: 0.8 }, // Fade on mobile so text is readable
          pointerEvents: 'none',
          objectFit: 'contain',
          opacity:0.7
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        
        {/* Main Text Section */}
        <Stack spacing={2} alignItems="center" mb={6}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500, 
              color: '#1a1a1a',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            Looking for an
          </Typography>
          
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              fontWeight: 400, 
              color: '#1a1a1a', 
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '-0.5px'
            }}
          >
            Exclusive Customized Tour?
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 500, 
              color: '#1a1a1a',
              fontFamily: '"Playfair Display", serif'
            }}
          >
            No Problem
          </Typography>
        </Stack>

        {/* CTA Button */}
        <Button
          variant="contained"
          endIcon={<ArrowRightAltIcon />}
          sx={{
            bgcolor: '#fc0b56', // Specific pinkish-red from the image
            color: '#fff',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            mb: 10, // Space between button and reviews
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: 1,
            textTransform: 'uppercase',
            boxShadow: '0 4px 14px 0 rgba(252, 11, 86, 0.39)',
            '&:hover': {
              bgcolor: '#d80044',
            }
          }}
        >
          Connect With Us
        </Button>

        {/* Reviews Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 6, md: 10 }}  
            alignItems="center"
          >
            {/* Tripadvisor Block */}
            <Stack spacing={1} alignItems="center">
              {/* Replace with actual Tripadvisor SVG/PNG logo */}
              <Box 
                component="img" 
                src="/images/customizedtour/Blue-Lanka-Tours-Tripadvisor-Reviews-1.svg" 
                alt="Tripadvisor" 
                sx={{ height: 100, mb: 1, width: 120 }} // Temp bgcolor for visualization if image is missing
              />
            </Stack>

            {/* Trustpilot Block */}
            <Stack spacing={1} alignItems="center">
              {/* Replace with actual Trustpilot SVG/PNG logo */}
              <Box 
                component="img" 
                src="/images/customizedtour/Blue-Lanka-Tours-Trustpilot-Reviews-1.svg" 
                alt="Trustpilot" 
                sx={{ height: 100, mb: 1,  width: 120 }} // Temp bgcolor for visualization
              />
            
            
              {/* Verified Badge */}
              
                
            </Stack>

          </Stack>
        </Box>
      </Container>
    </Box>
  );
}