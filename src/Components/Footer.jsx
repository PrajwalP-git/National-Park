import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2d5016',
        color: '#fff',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#a8d5a3',
              }}
            >
              WildLife Zoo
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                lineHeight: 1.8,
                color: '#e8f5e9',
              }}
            >
              Dedicated to wildlife conservation and education. 
              Experience the wonder of nature with us.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: '#8b4513',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: '#8b4513',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: '#8b4513',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: '#8b4513',
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#a8d5a3',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'Animals', 'Visit Us', 'Events', 'About Us', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="hover"
                  sx={{
                    color: '#e8f5e9',
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: '#a8d5a3',
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Visit Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#a8d5a3',
              }}
            >
              Visit Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <AccessTimeIcon sx={{ fontSize: 20, color: '#8b4513', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#e8f5e9' }}>
                    Opening Hours
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#c8e6c9', fontSize: '0.85rem' }}>
                    Mon-Sun: 9:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 20, color: '#8b4513', mt: 0.3 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#e8f5e9' }}>
                    Address
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#c8e6c9', fontSize: '0.85rem' }}>
                    123 Zoo Lane, Wildlife City
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: '#a8d5a3',
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 20, color: '#8b4513' }} />
                <Typography variant="body2" sx={{ color: '#e8f5e9' }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 20, color: '#8b4513' }} />
                <Typography variant="body2" sx={{ color: '#e8f5e9' }}>
                  info@wildlifezoo.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#c8e6c9', textAlign: 'center' }}>
            © {new Date().getFullYear()} WildLife Zoo. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              underline="hover"
              sx={{
                color: '#c8e6c9',
                fontSize: '0.85rem',
                '&:hover': {
                  color: '#a8d5a3',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{
                color: '#c8e6c9',
                fontSize: '0.85rem',
                '&:hover': {
                  color: '#a8d5a3',
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;