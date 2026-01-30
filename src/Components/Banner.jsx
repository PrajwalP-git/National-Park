import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '60vh', md: '70vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2d5016 0%, #3d6b1f 50%, #5a8c3a 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.2) 0%, transparent 50%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 50%, rgba(168, 213, 163, 0.1) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            textAlign: 'center',
            color: '#fff',
            animation: 'fadeIn 1s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(30px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '4rem' },
              mb: 2,
              textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
              letterSpacing: 2,
            }}
          >
            Welcome to WildLife Zoo
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              mb: 4,
              color: '#e8f5e9',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              textShadow: '1px 2px 4px rgba(0,0,0,0.2)',
            }}
          >
            Experience the wonder of wildlife from around the globe. 
            Discover amazing creatures in their natural habitats.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<ExploreIcon />}
              sx={{
                backgroundColor: '#8b4513',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '30px',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(139, 69, 19, 0.4)',
                '&:hover': {
                  backgroundColor: '#a0522d',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 16px rgba(139, 69, 19, 0.5)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore Animals
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<CalendarMonthIcon />}
              sx={{
                borderColor: '#fff',
                color: '#fff',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '30px',
                textTransform: 'none',
                borderWidth: 2,
                '&:hover': {
                  borderColor: '#a8d5a3',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2,
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Plan Your Visit
            </Button>
          </Box>

          <Box
            sx={{
              mt: 6,
              display: 'flex',
              justifyContent: 'center',
              gap: 4,
              flexWrap: 'wrap',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#a8d5a3' }}>
                18+
              </Typography>
              <Typography variant="body1" sx={{ color: '#e8f5e9' }}>
                Animal Species
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#a8d5a3' }}>
                5
              </Typography>
              <Typography variant="body1" sx={{ color: '#e8f5e9' }}>
                Continents
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#a8d5a3' }}>
                100%
              </Typography>
              <Typography variant="body1" sx={{ color: '#e8f5e9' }}>
                Conservation
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '60px' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default HeroBanner;