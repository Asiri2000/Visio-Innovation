"use client";
import React, { useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

// Dummy data representing the awards in your image
const awardsData = [
  {
    id: 1,
    topBadge: '/images/Trvellers-Choice-24-new.png', // Replace with your image paths
    laurelText: 'Travelers Choice\nAwards Winner',
    year: '2025',
  },
  {
    id: 2,
    topBadge: '/images/Trvellers-Choice.png',
    laurelText: 'Leading Tour\nOperator\nin Sri Lanka',
    year: '2023',
  },
  {
    id: 3,
    topBadge: '/images/World-Travel-Award-2022.png',
    laurelText: 'Leading Tour\nOperator\nin Sri Lanka',
    year: '2022',
  },
  {
    id: 4,
    topBadge: '/images/2022.png',
    laurelText: 'Leading Tour\nOperator\nin Sri Lanka',
    year: '2020',
  },
   {
    id: 5,
    topBadge: '/images/2023.png',
    laurelText: 'Leading Tour\nOperator\nin Sri Lanka',
    year: '2020',
  },
   {
    id: 6,
    topBadge: '/images/2024.png',
    laurelText: 'Leading Tour\nOperator\nin Sri Lanka',
    year: '2020',
  },
   {
    id: 7,
    topBadge: '/images/2025.svg',
    laurelText: 'Leading Tour\nOperator\nin Sri Lanka',
    year: '2020',
  }
  // Add more items here to make it scrollable
];

export default function AwardsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth / 4; // Assuming 4 items visible on desktop
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth / 4;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <Container maxWidth={false} sx={{ py: 6, bgcolor: 'white' }}>
      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 2,
          pb: 4,
          // Hide scrollbar for a clean look
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {awardsData.map((award) => (
          <Box
            key={award.id}
            sx={{
              minWidth: { xs: '80%', sm: '45%', md: '25%' }, // Responsive widths
              scrollSnapAlign: 'start',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Top Badge (e.g., TripAdvisor Owl) */}
            <Box
              component="img"
              src={award.topBadge}
              alt="Award Badge"
              sx={{ height: 60, mb: 3, objectFit: 'contain' }}
            />

            {/* Laurel Wreath Area */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 150,
                width: '100%',
                // If you have a single laurel background image, you can use it here:
                // backgroundImage: 'url(/images/laurel-wreath-gold.png)',
                // backgroundSize: 'contain',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: 'pre-line',
                  color: 'black',
                  fontSize: '0.85rem',
                  mb: 1,
                  px: 4,
                }}
              >
                {award.laurelText}
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'regular', color: 'black' }}
              >
                {award.year}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination Dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
        {awardsData.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollTo(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: activeIndex === index ? 'primary.main' : 'grey.400',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Container>
  );
}