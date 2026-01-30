import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import App from '../App';

const Header = ()=>{
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navItems = ['Home','Animals','Visit Us', 'About', 'Contact'];
    const handleDrawerToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
            <Typography variant='h6' sx={{my:2, color:'#2d5016'}}>
                WildLife Zoo
            </Typography>
            <List>
                {navItems.map((item) =>(
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{textAlign:'center'}}>
                            <ListItemText primary={item}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
        <AppBar position='sticky' sx={{backgroundColor:'#2d5016', boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
            <Toolbar>
                <Box sx={{display:'flex', alignItems:'center', flexGrow:1, cursor:'pointer'}}>
                    <PetsIcon sx={{fontSize:40, mr:1, color:'#8b4513'}}/>
                    <Box>
                        <Typography variant='h5' component='div' sx={{fontWeight:700, color:'#fff', letterSpacing:1,}}>
                            WildLife Zoo
                        </Typography>
                        <Typography variant='caption' sx={{color:'#a8d5a3', fontStyle:'italic',}}>
                            Explore. Discover. Protect
                        </Typography>
                    </Box>
                </Box>

                {!isMobile && (
                    <Box sx={{display:'flex', gap:1}}>
                        {navItems.map((item)=>(
                            <Button key={item} sx={{color:'fff', fontSize:'1rem', fontWeight:500, px:2,
                                '&:hover':{backgroundColor:'3d6b1f', transform:'translateY(-2px)', transition:'all 0.3s',}
                            }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                )}

                {isMobile && (
                    <IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle}>
                        <MenuIcon/>
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>

         <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: '#f5f5dc',
          },
        }}
      >
        {drawer}
      </Drawer>
        </>
    )
}

export default Header;