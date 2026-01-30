import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';

const AnimalCard = ({ animal }) => {
  const { name, species, habitat, image, description } = animal;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(45, 80, 22, 0.2)',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt={name}
          sx={{
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        />
       
        <Chip
          icon={<LocationOnIcon sx={{ fontSize: 18 }} />}
          label={habitat}
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'rgba(139, 69, 19, 0.9)',
            color: '#fff',
            fontWeight: 600,
            backdropFilter: 'blur(4px)',
            '& .MuiChip-icon': {
              color: '#fff',
            },
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
            color: '#2d5016',
            mb: 1,
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#8b4513',
            fontStyle: 'italic',
            mb: 2,
            fontSize: '0.95rem',
          }}
        >
          {species}
        </Typography>

        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<InfoIcon />}
          sx={{
            backgroundColor: '#2d5016',
            color: '#fff',
            py: 1,
            fontWeight: 600,
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#3d6b1f',
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default AnimalCard;