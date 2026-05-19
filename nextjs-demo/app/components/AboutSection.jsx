"use client";
import React, { useState } from 'react';
import { Box, Typography, Button, Collapse, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Reusable style for paragraphs to keep code clean
  const paragraphStyle = { color: 'black', mb: 3, lineHeight: 1.8 };
  // Reusable style for subheadings
  const subHeadingStyle = { mt: 4, mb: 2, fontWeight: 600, fontFamily: '"Playfair Display", serif', color: 'black' };

  return (
    <Box sx={{ width: '100%', py: 8, bgcolor: 'white', overflow: 'hidden' }}>
      
      {/* 2. Inner Container: Constrains the text width for readability */}
      <Container maxWidth="lg">
        
        {/* Main Title */}
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            mb: 6, 
            fontFamily: '"Playfair Display", serif',
            color: 'black' 
          }}
        >
          Explore the exotic depths of Sri lanka in all its beauty, Grandeur, Mystery and Luxury
        </Typography>

        {/* --- ALWAYS VISIBLE TEXT --- */}
        <Typography variant="body1" sx={paragraphStyle}>
          We know that a holiday should revive your entire self; body, mind and spirit alike. Quench your thirst for discovery, adventure, inspiration, indulgence and experiences of a lifetime. Begin your journey with us and step away from the beaten territories to uncover what’s hidden beneath the clichés.
        </Typography>
        
        <Typography variant="body1" sx={paragraphStyle}>
          When you decide you need a break and want to go on a holiday to some place charming, entertaining, adventurous and relaxing at the same time, we would recommend a visit to Sri Lanka. To plan that holiday for you, we at Blue Lanka Tours are awaiting eagerly to serve you in the best possible manner. Just drop us an email and our team of expert travel consultants will assist you in coming up with a suitable itinerary for Sri Lanka tours at the best possible rates.
        </Typography>

        {/* --- HIDDEN TEXT (COLLAPSIBLE) --- */}
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          
          <Typography variant="h5" sx={subHeadingStyle}>In a Gist</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            The main goal of a travel agent is to come up with a vacation that suits a traveler’s requirements. As professional travel consultants, Blue Lanka Tours builds relationships with our clients to understand their interests, lifestyles and dislikes. With this information, we come up with a suitable Sri Lanka tour package.
          </Typography>

          {/* Bulleted List */}
          <Box component="ul" sx={{ color: 'black', lineHeight: 1.8, mb: 3, pl: 3 }}>
            <li>Investigate and supply competitive information</li>
            <li>Information of the most current and timely promotions</li>
            <li>Analyze the current promotions</li>
            <li>Clarify the fine print such as terms and conditions</li>
            <li>Make recommendations for travel options</li>
            <li>Simplify the research and transactions</li>
            <li>Enhance the trip with value added benefits</li>
            <li>Exhibit buying power to obtain best possible deals in situations that seem impossible</li>
            <li>Solve the problem and satisfy the consumer with exactly the package they are looking for</li>
          </Box>

          <Typography variant="h5" sx={subHeadingStyle}>Make life easier with Blue Lanka Tours</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            Eliminate the stress and confusion of panning a holiday for you and your loved ones. Blue Lanka Tours will arrange everything for you from the time you pack your bags and step out of your home until your holiday to Sri Lanka is complete and you get back home to your routine. From hotel accommodations to air and ground transportation, car rentals and tour packages, Blue Lanka Tours covers it all. Not only will we arrange various modes of transport and types of accommodation for you but you will also have the advantage of early booking discounts, special fares, hotel deals and travel advisories. Our strong working relationship with travel suppliers island-wide and the latest computer reservations technology that we make use of in our offices allows us to provide our clients with the most up-to-date and best value information.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            With the customer’s best interest in mind at all times, we have a strict code of ethics that we follow in providing travel consultation services. Hence you do not have to worry about trusting us with your Sri Lanka tour requirements. We have extensive knowledge in the tourism industry and are equipped with the necessary tools to provide the best quality of service to our clients. Our team of committed travel consultants will go the extra mile to meet your travel needs.
          </Typography>

          <Typography variant="h5" sx={subHeadingStyle}>What We Provide</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            In creating the best Sri Lanka tailor made holidays for you, we specialize in the following services:
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#333' }}>Tour Packages</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            All our Sri Lanka tour packages are divided into three basic categories: interests, budget and comfort level. You may have a look at our website for details of day tour and round tour packages based on interests and select one from those. If none of the available packages appeal to you, we will be more than glad to provide a Sri Lanka tailor made holiday package for you by combining tourist attractions from a few different Sri Lanka day tour packages. As for budget and comfort packages, all of the Sri Lanka tour packages can be customized to suit your budget and comfort levels by making adjustments to hotel accommodation and transport standards. We believe that our service quality should not be compromised for anything and hence will guarantee a luxury holiday to Sri Lanka at extremely affordable rates.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#333' }}>Hotel Reservations and Bookings</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            Our long history in the tourism industry of Sri Lanka has allowed us to maintain friendly ties with many of the hotel chains all around the island. As a result, many of our partnering hotels offer the best accommodation deals to us and we pass on those cost savings to our clients. Therefore we can assure that even if you are traveling with a very limited budget, we can provide you the best accommodation for that price. Once you have confirmed your booking, we will immediately make reservations at the selected hotels to ensure that no confusion and discomfort arises at the time of your holiday to Sri Lanka.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#333' }}>Local Transportation</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            In providing an unmatched service to our customers, we arrange for top notch vehicle transportation for all our clients. Every group of travelers is given a private vehicle and a driver cum guide who will assist them in every way throughout their Sri Lanka tour. This driver will meet you at the airport and will be with you as your driver and guide until he has to drop you off for your departure from Sri Lanka. The vehicles we arrange for you are based on number of passengers, which allows us to make sure the vehicle is comfortable enough for you and your family to travel around Sri Lanka.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600, color: '#333' }}>Travel Guides and Timetables</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            Upon arrival in Sri Lanka, a representative of Blue Lanka Tours will meet you and present you with a hardcopy of the itinerary of your Sri Lanka Private Tour. We will be providing you with all the hotel details with their contact numbers and the respective meal plan in each hotel. Also, we will also be providing you with the inclusions of the holiday package as well as the exclusions.
          </Typography>

          <Typography variant="h5" sx={subHeadingStyle}>Why Choose Us?</Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            Our team of friendly staff at Blue Lanka Tours is not just your travel agent but also your travel consultant. Instead of trying to sell our services, we have the customer’s best interest in mind and accordingly we advise the best holiday solutions to our clients. This unique approach as a business strategy has taken us to the top of the travel industry in Sri Lanka. We study travel patterns, understand the requirements of our customers and ensure that we provide them the best possible services throughout the day, anytime of the year. Providing the aforementioned services in a one-stop-shop package gives customers the convenience of a single point of contact for all their travel needs.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            In providing transportation services to our customers for touring Sri Lanka, we ensure the highest level of luxury and comfort in all our vehicles. Furthermore, safety and security of our clients is our primary concern and hence we make sure every vehicle sent out by us for Sri Lanka tours is checked and serviced with the manufacturer’s norms to ensure excellent car condition. Our team of drivers also undergoes special training programs to offer a smooth and safe ride to all our clients.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            Planning a holiday to Sri Lanka is made extremely simple with our destination management services. We have destination guides, program designs, logistics management, supplier management, and central accounting and payment facilities as a result of our island wide network with other travel suppliers in the tourism industry. Upon requests from our clients, we offer multilingual guides, tour escorts, special interest excursion guides, varied dining experiences and several other entertainment options for your Sri Lanka tailor made holidays.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            We work hard to make your Sri Lanka tour an unforgettable experience. The sights, smell, color, and sounds of Sri Lanka’s culture, people, flora and fauna is sure to leave you mesmerized. Sri Lanka entails an ever changing kaleidoscope of customs, traditions, religions and costumes which gives tourists quite a handful to explore during their Sri Lanka day tours. In our services, we push hard to encourage customers to explore the stunning natural beauty, incredible architecture, fascinating history and fabulous tourist attractions in Sri Lanka. All this wrapped up in a package with top notch travel services from Blue Lanka Tours, including transport and accommodation, will surely leave an unforgettable mark on your psyche.
          </Typography>

        </Collapse>

        {/* --- TOGGLE BUTTON --- */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            onClick={() => setIsExpanded(!isExpanded)}
            endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            sx={{ 
              color: '#005b96', // Adjust to match your theme
              borderColor: '#005b96',
              borderRadius: '50px',
              px: 4,
              '&:hover': {
                bgcolor: 'rgba(0, 91, 150, 0.05)',
                borderColor: '#004270',
              }
            }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>
        </Box>

      </Container>
    </Box>
  );
}