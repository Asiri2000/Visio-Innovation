"use client";
import { AppBar, Toolbar, Typography, Button, Box, IconButton,MenuItem } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState, useEffect } from 'react';



export default function Header() {
  const navItems = ['Tailor-made Tours','Itineraries', 'Day Tours', 'Accommodation', 'Discover Sri Lanka','Our Story','Maldives', 'Blog'];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <AppBar
      position="sticky"
      sx={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        boxShadow: scrolled ? '0px 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
        color: 'white',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}
    >
      {/* Top thin bar */}

      


    <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 6,
    py: 2,
    width: '100%',
  }}
>

  <Typography
    sx={{
      pt: '20px',
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
    }}
  >
    <Select
      defaultValue="en"
      sx={{
        height: '40px',
        minWidth: '170px',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.5)',
        borderRadius: '2px',

        '.MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },

        '&:hover': {
          borderColor: 'white',
        },

        '.MuiSvgIcon-root': {
          color: 'white',
        },

        '.MuiSelect-select': {
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          px: 2,
        },

        boxShadow: 'none',
      }}
    >
      <MenuItem value="en" defaultChecked>English  </MenuItem>
      <MenuItem value="ger">German  </MenuItem>
      <MenuItem value="fr">French</MenuItem>
      <MenuItem value="nl">Dutch</MenuItem>
      <MenuItem value="it">Italian</MenuItem>
      <MenuItem value="es">Spanish</MenuItem>
      <MenuItem value="ru">Russian</MenuItem>
    </Select>
  </Typography>


  <Typography
    sx={{
      pt: '10px',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Image
      src="/images/logo.png"
      alt="Blue Lanka Tours Logo"
      width={220}
      height={80}
    />
  </Typography>


  <Typography
    variant="caption"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 3,
      flex: 1,
      pt: '20px',
      color: 'white',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ":hover":{
            textDecoration:'underline',
                color: '#08a029',
                    cursor: 'pointer',
        }
      }}
    >
      <WhatsAppIcon
        fontSize="small"
        sx={{
          mr: 1,
          fontSize: '24px',
         
        }}
      />

      <a
        style={{
          fontSize: '16px',
          fontWeight: 600,
          margin: 0,
       
        }}
      >
        (+94) 77 730 0852
      </a>
    </Box>

    <Typography sx={{ m: 0 }}>
      <Button
        variant="outlined"
        sx={{
          color: 'white',
          bgcolor: 'transparent',
          borderColor: 'white',
          borderRadius: '30px',
          height: '50px',
          minWidth: '190px',
          fontSize: '16px',
          fontWeight: 600,
          px: 3,
          

          '&:hover': {
            bgcolor: '#d13b24',
            borderColor: 'white',
          },
        }}
      >
        ENQUIRE NOW
      </Button>
    </Typography>
  </Typography>

</Box>




      {/* Main Navbar */}
      <Toolbar sx={{ justifyContent: 'center', px: { xs: 2, md: 4 } }}>
        

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2  }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: 'white', textTransform: 'none', fontWeight: 500, fontSize: '16px' }}>
              {item}
            </Button>
          ))}
          
        </Box>

        <IconButton sx={{ display: { md: 'none' } }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>



    </AppBar>
  );
}