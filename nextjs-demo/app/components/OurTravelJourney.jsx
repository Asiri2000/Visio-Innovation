"use client";
import React, { useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  IconButton, 
  Button 
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// Mock data based on your image
const itineraries = [
  {
    id: 1,
    title: 'UNESCO World Heritage Sites Tour in Sri Lanka',
    desc: "UNESCO's World Heritage Site List includes eight unique attractions in Sri Lanka that are considered part of the world's heritage...",
    img: 'images/iternaries/1.jpg', // Ruwanwelisaya / Polonnaruwa placeholder
  },
  {
    id: 2,
    title: 'Family Fun in Sri Lanka',
    desc: 'This Family Fun Tour in Sri Lanka is designed to give kids the best experience they could have in our...',
    img: 'images/iternaries/2.jpg', // Family beach placeholder
  },
  {
    id: 3,
    title: 'Slow-Paced Luxury Tour in Sri Lanka',
    desc: 'Sri Lanka is the ideal place for a luxury family, couple, solo, or any type of vacation, with plenty to...',
    img: 'images/iternaries/3.jpg', // Tea country placeholder
  },
  {
    id: 4,
    title: 'Adventure & Wildlife Safari',
    desc: 'Experience the thrill of seeing leopards and elephants in their natural habitat across our beautiful national parks...',
    img: 'images/iternaries/4.jpg', // Elephant placeholder
  },
  {
    id: 5,
    title: 'Adventure & Wildlife Safari',
    desc: 'Experience the thrill of seeing leopards and elephants in their natural habitat across our beautiful national parks...',
    img: 'images/iternaries/5.jpg', // Elephant placeholder
  },
   {
    id: 6,
    title: 'Adventure & Wildlife Safari',
    desc: 'Experience the thrill of seeing leopards and elephants in their natural habitat across our beautiful national parks...',
    img: 'images/iternaries/6.jpg', // Elephant placeholder
  }
];

export default function TourSlider() {
  const scrollRef = useRef(null);

  // Scroll logic for the custom arrows
  /** @param {('left'|'right')} direction */
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by one card width (approx one third of the container)
      const scrollAmount = clientWidth / 3; 
      
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#fafafa', position: 'relative', overflow: 'hidden' }}>
      
      {/* Optional: Faint background illustration (like the lighthouse on the left) */}
      <Box 
        sx={{
          position: 'absolute',
          left: -50,
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.1,
          width: '150px',
          height: '100px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Title */}
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 6, 
            fontFamily: '"Playfair Display", serif', // Serif font to match design
            color: '#1a1a1a' 
          }}
        >
          Our Travel Journal
        </Typography>

        {/* Slider Wrapper */}
        <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          
          {/* Left Arrow */}
          <IconButton 
            onClick={() => scroll('left')}
            sx={{ 
              position: 'absolute', 
              left: { xs: -16, md: -48 }, 
              zIndex: 2,
              color: '#333',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Scrollable Container */}
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              pb: 2, // Space for drop shadow
              px: 1, // Padding so shadows aren't clipped
              // Hide scrollbar
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {itineraries.map((item) => (
              <Card 
                key={item.id} 
                elevation={1}
                sx={{ 
                  minWidth: { xs: '85%', sm: '45%', md: 'calc(33.333% - 16px)' },
                  maxWidth: { md: '380px' },
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 1,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', p: 4 }}>
                  <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="h3" 
                    sx={{ 
                      fontFamily: '"Playfair Display", serif',
                      mb: 2,
                      minHeight: '60px' // Keeps heights consistent even if titles are different lengths
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 4, 
                      lineHeight: 1.6,
                      flexGrow: 1
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Button 
                    size="small" 
                    endIcon={<ArrowRightAltIcon />}
                    sx={{ 
                      color: '#0084ff', // The specific blue used in the read more link
                      fontWeight: 600,
                      letterSpacing: 1,
                      fontSize: '0.7rem'
                    }}
                  >
                    READ MORE
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton 
            onClick={() => scroll('right')}
            sx={{ 
              position: 'absolute', 
              right: { xs: -16, md: -48 }, 
              zIndex: 2,
              color: '#333',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.05)' }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

        </Box>
      </Container>
    </Box>

    


  );
}