"use client";
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid';


export default function IntroSection() {
  return (
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#005b96' }}>
        Magical Memories, Bespoke experiences
      </Typography>
      <Typography variant="body1" sx={{ color: '#555', maxWidth: '800px', mx: 'auto', mb: 6, lineHeight: 1.8 }}>
        Embark on a journey with Blue Lanka Tours, where every moment is meticulously crafted to leave an indelible mark on your heart. We understand that travel is more than just visiting destinations; it's about creating magical memories that linger long after you've returned home. Let us guide you through an authentic Sri Lankan experience, tailored just for you.
      </Typography>

      {/* Awards Mockup */}
      <Box sx={{ borderTop: '1px solid #ddd', pt: 4 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {['Tripadvisor Travelers Choice 2025', 'World Travel Awards 2023', 'Best of the Best 2024'].map((award, idx) => (
        //   <Grid item xs={12} sm={4} key={idx.toString()}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#d97706' }}>{award}</Typography>
                <Typography variant="caption" color="text.secondary">Leading Tour Operator</Typography>
              </Box>
         //   </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}