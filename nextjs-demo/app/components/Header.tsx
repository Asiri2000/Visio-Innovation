"use client";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Header() {
  const navItems = ['Tailor-made Tours', 'Day Tours', 'Accommodation', 'Experiences', 'Blog'];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: 1 }}>
      {/* Top thin bar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 4, py: 0.5, bgcolor: '#f8f8f8', borderBottom: '1px solid #ddd', fontSize: '12px' }}>
        <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} /> (+94) 77 730 0852
        </Typography>
      </Box>

      {/* Main Navbar */}
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#005b96' }}>
          BLUE LANKA TOURS
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#333', textTransform: 'none', fontWeight: 500 }}>
              {item}
            </Button>
          ))}
          <Button variant="contained" sx={{ bgcolor: '#d97706', '&:hover': { bgcolor: '#b45309' } }}>
            Enquire Now
          </Button>
        </Box>

        <IconButton sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}