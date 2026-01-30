
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AnimalCard from './AnimalCard';
import lion from '../assets/Lion.jpeg';
import tiger from '../assets/Tiger.jpeg';
import elephant from '../assets/Elephant.jpeg';
import giraffe from '../assets/Giraffe.jpeg';
import deer from '../assets/Deer.jpeg';
import zebra from '../assets/Zebra.jpeg'
import flamingo from '../assets/Flamingo.jpeg';
import heron from '../assets/Heron.jpeg';
import hornbill from '../assets/Hornbill.jpeg';
import macaw from '../assets/Macaw.jpeg';
import owl from '../assets/Owl.jpeg';
import peacock from '../assets/Peacock.jpeg';
import gharial from '../assets/Gharial.jpeg';
import gecko from '../assets/Gecko.jpeg';
import igauna from '../assets/Iguana.jpeg';
import cobra from '../assets/Cobra.jpeg';
import caimen from '../assets/Caimen.jpeg';
import python from '../assets/Python.jpeg';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const animals = [
    {
      id: 1,
      name: 'African Lion',
      species: 'Panthera leo',
      habitat: 'Savanna',
      image: lion,
      description: 'The king of the jungle, known for their majestic manes and powerful roars.',
    },
    {
      id: 2,
      name: 'Bengal Tiger',
      species: 'Panthera tigris',
      habitat: 'Tropical Forest',
      image: tiger,
      description: 'Largest cat species with distinctive orange coat and black stripes.',
    },
    {
      id: 3,
      name: 'African Elephant',
      species: 'Loxodonta africana',
      habitat: 'Grasslands',
      image: elephant,
      description: 'Largest land animal with incredible memory and social bonds.',
    },
    {
      id: 4,
      name: 'Giraffe',
      species: 'Giraffa cameloparadalis',
      habitat: 'Savannas, grasslands',
      image: giraffe,
      description: 'Long-necked animal that has a preference for acasia trees.',
    },
    {
      id: 5,
      name: 'Deer',
      species: 'Family cervidae',
      habitat: 'Diverse habitat except antartica',
      image: deer,
      description: 'Animal with antlers that is available in almost all habitats.',
    },
    {
      id: 6,
      name: 'Zebra',
      species: 'Genes Equus',
      habitat: 'savanna woodlands',
      image: zebra,
      description: 'Wild horse with black and white strips on skin that acts as natural hiding mechanism.',
    },
     {
      id: 7,
      name: 'Flamingo',
      species: 'Phoenicoterus',
      habitat: 'Shallow salt lakes, lagoons',
      image: flamingo,
      description: 'Social bird that get their pink color via carotenoid pigments in algae and shirmp.',
    },
    {
      id: 8,
      name: 'Heron',
      species: 'Ardea',
      habitat: 'Freshwater and coastal wetlands',
      image: heron,
      description: 'Patient predator that hunts prey while standing motionless in water.',
    },
    {
      id: 9,
      name: 'Hornbill',
      species: 'Family Bucerotidae',
      habitat: 'Tropical Forests,and asia',
      image: hornbill,
      description: 'Distinctive birds recognized by their massive, curved bills.',
    },
    {
      id: 10,
      name: 'Macaw',
      species: 'Ara',
      habitat: 'Tropical rainforests and palm groves of south america',
      image: macaw,
      description: 'Highly intelligent parrots known for their brilliant plumage.',
    },
    {
      id: 11,
      name: 'Peacock',
      species: 'Pavo cristatus',
      habitat: 'Forests and agricultural areas',
      image: peacock,
      description: "Famous for male's spectacular iridescent tail feathers.",
    },
    {
      id: 12,
      name: 'Owl',
      species: 'Order strigiformes',
      habitat: 'Forests, deserts and even arctic tundra',
      image: owl,
      description: 'Solitary, nocturnal hunters known for silent flight and exceptional sight and hearing in dark.',
    },
    {
      id: 13,
      name: 'Gharial',
      species: 'Gavialis gangeticus',
      habitat: 'fast-flowing rivers on northern Indian subcontinent',
      image: gharial,
      description: 'A unique crocodile with a long, thin snout lined with interlocking teeth.',
    },
    {
      id: 14,
      name: 'Gecko',
      species: 'Infraorder Gekkota',
      habitat: 'Rainforests and even urban walls',
      image: gecko,
      description: 'Small, vocal lizards known for toe pads that allow them to walk vertically and upside down on smooth surfaces.',
    },
    {
      id: 15,
      name: 'Igauna',
      species: 'Igauna igauna',
      habitat: 'Tropical rainforests and coastal areas of central and south america.',
      image: igauna,
      description: 'Large , herbivorous lizards that are excellent swimmers and spend more time near canopy.',
    },
    {
      id: 16,
      name: 'Cobra',
      species: 'Genus Naja',
      habitat: 'Forests and cultivated fields in asia and africa',
      image: cobra,
      description: 'Venomous snakes known for their "hood" and defensive posture when threatened.',
    },
    {
      id: 17,
      name: 'Caimen',
      species: 'Subfamily caimeninae',
      habitat: 'Central and south american swamps and rivers',
      image: caimen,
      description: 'Smaller relatives of alligator that are key predators in Amazon complex waterways.',
    },
    {
      id: 18,
      name: 'Python',
      species: 'Family Pythonidae',
      habitat: 'Rainforests, grasslands and swamps of asia, africa and australia',
      image: python,
      description: 'Massive non-venomous constrictor that coils and squeezes the prey before swallowing them.',
    }, 
  ];

  const filteredAnimals = animals.filter(
    (animal) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.habitat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{py:8, backgroundColor: '#f5f5dc', minHeight:'100vh',}}>
        <Container maxWidth="lg">
            <Box sx={{textAlign:'center', mb:6}}>
                <Typography variant='h3' component='h2' sx={{fontWeight:700, color:'#2d5016', mb:2,}}>
                    Meet our animals
                </Typography>
                <Typography variant='h6' sx={{color:'#8b5413', mb:4, maxwidth:'600px', mx:'auto'}}>
                    Discover amazing creatures from every corner of the planet
                </Typography>

                <TextField fullWidth variant='outlined' placeholder='Search be name, species or habitat...'
                    value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
                    sx={{maxwidth:'800px', mx:'auto', backgroundColor:'#fff', borderRadius:'100px', '&. MuiOutlinedInput-root': {borderRadius:'50px', '&:hover fieldset': {borderColor:'#2d5016'},'&.Mui-focused fieldset':{borderColor:'#2d5016',},},}}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon sx={{color:'#8b5413'}}/>
                                </InputAdornment>
                            )
                        }
                    }}/>   
            </Box>

            {filteredAnimals.length > 0 ?(
                <Grid container spacing={4}>
                    {filteredAnimals.map((animal)=> (
                       <Grid item xs={12} sm={6} md={4} key={animal.id}>
                            <AnimalCard animal={animal}/>
                       </Grid>
                    ))}
                </Grid>
            ) : (
               <Box sx={{textAlign:'center', py:8}}>
                <Typography variant='h5' sx={{color:'#8b5413'}}>
                    No animals found matching "{searchTerm}"
                </Typography>
                <Typography variant='body1' sx={{color:'#666', mt:2}}>
                    Try searching with a different keyword
                </Typography>
               </Box>
            )}
        </Container>
    </Box>
  )
};

export default Gallery;