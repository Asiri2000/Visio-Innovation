import Header from '@/app/components/Header';
import HeroBanner from '@/app/components/HeroBanner';
import IntroSection from '@/app/components/IntroSection';
import TourGrid from '@/app/components/TourGrid';
import Footer from '@/app/components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main>
        <HeroBanner />
        <IntroSection />
        <TourGrid />
      </main>
      <Footer />
    </Box>
  );
}

