import Header from '@/app/components/Header';
import HeroBanner from '@/app/components/HeroBanner';
import IntroSection from '@/app/components/IntroSection';
import Footer from '@/app/components/Footer';
import { Box } from '@mui/material';
import Itineraries from '@/app/components/Itineraries';
import CustomizedTour from '@/app/components/CustomizedTour';
import OurTravelJourney from '@/app/components/OurTravelJourney';
import AboutSection from '@/app/components/AboutSection';
import NineArch from '@/app/components/NineArch';
import IntroSectionTwo from '@/app/components/IntroSectionTwo';


export default function Home() {
  return (
    
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        sx={{
          backgroundImage: 'url(/images/Elephants.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'100vh',
          position: 'relative'
        }}
        >
         <Header />
        <HeroBanner />
      
     </Box>
      
      <main>
      
        <IntroSection />
        <IntroSectionTwo />
        <Itineraries />
        <CustomizedTour />
        <OurTravelJourney />
        <AboutSection />
        <NineArch />     
      </main>
      <Footer />
      
    </Box>
  );
}

