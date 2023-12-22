import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, ThemeProvider, createTheme } from '@mui/material';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List/List'
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Box from '@mui/material/Box';
import StorageIcon from '@mui/icons-material/Storage';
import HouseIcon from '@mui/icons-material/House';
import useMediaQuery from '@mui/material/useMediaQuery';

const tabs = [
    {
        id: "Ashely's Profile",
        subcategories: [
            { id: 'My Bio', icon: <StorageIcon />, link: '/aboutme' },
            { id: 'Technologies', icon: <StorageIcon />, link: '/tech' },
            { id: 'Credentials', icon: <StorageIcon />, link: '/credentials' },
            { id: 'Education', icon: <StorageIcon />, link: '/education' },
            { id: 'Work History', icon: <StorageIcon />, link: '/resume' },
            { id: 'Projects', icon: <StorageIcon />, link: '/projects' },
            { id: 'API examples', icon: <StorageIcon />, link: '/apidemo' },
            { id: 'Contact Me', icon: <StorageIcon />, link: '/contactme' }
        ]
    },
    {
        id: "Professional Documents",
        subcategories: [
            { id: 'Student Grade Report', icon: <StorageIcon />, link: '/docs' },
            { id: 'Resume', icon: <StorageIcon />, link: '/docs' }
        ]
    },
    {
        id: "Professional Websites",
        subcategories: [
            { id: 'LinkedIn', icon: <StorageIcon />, link: '/credentials' },
            { id: 'GitHub', icon: <StorageIcon />, link: '/credentials' }
        ]
    },
];

const itm = {
    py: '2px',
    px: '3px',
    '&:hover, &:focus': {}
};

const itemBox = {
    boxShadow: '0 -1px 0 rgb(255, 255, 255, 0.1) inset',
    py: '1.5px',
    px: '3px'
};

const drawerWidth = 300;

const theme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundImage: '',
                    width: drawerWidth
                }
            }
        }
    }
});

const screentheme = createTheme({
    breakpoints:{
        values:{
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1260,
            xl: 1920

        }
    }
})

const Sidebar_Navigation = (props: DrawerProps) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery(screentheme.breakpoints.down('sm'));

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Drawer
                variant={isSmallScreen ? 'temporary' : 'permanent'}
                anchor='left'
                open={!isSmallScreen ? drawerOpen : undefined}
                onClose={handleToggleDrawer}
                sx={{ flexShrink: 0 }}
                classes={{ paper: 'drawer' }}
            >
                <Box>
                    <div className='drawer-paper'>
                        <List disablePadding sx={{ bgcolor: '#8c8c8c' }}>
                            <ListItem sx={{ ...itm, ...itemBox, fontSize: '15px' }}>
                                <b style={{ textAlign: 'center', paddingLeft: '15px', fontSize: '30px', fontFamily: 'monospace', color: 'deepskyblue' }}>A.V.A</b>
                            </ListItem>

                            <ListItem sx={{ ...itm, ...itemBox }}>
                                <ListItemIcon>
                                    <a href="/" style={{ color: 'crimson' }}><HouseIcon /></a>
                                </ListItemIcon>
                                <ListItemText>Directory</ListItemText>
                            </ListItem>

                            {tabs.map(({ id, subcategories }) => (
                                <Box key={id} sx={{ bgcolor: 'darkred' }}>
                                    <ListItem sx={{ px: '4px', py: '2px' }}>
                                        <ListItemText sx={{ color: 'dimgrey' }}>{id}</ListItemText>
                                    </ListItem>

                                    {subcategories.map(({ id, icon, link }) => (
                                        <ListItem disablePadding key={id} sx={{ bgcolor: 'gray' }}>
                                            {isSmallScreen && (
                                                <Button component={Link} to={link} sx={{ ...itm }}>
                                                    <ListItemIcon>{icon}</ListItemIcon>
                                                </Button>
                                            )}
                                            <Button component={Link} to={link} sx={{ ...itm }}>
                                                <ListItemText sx={{ color: 'red' }}>{id}</ListItemText>
                                            </Button>
                                        </ListItem>
                                    ))}

                                    <Divider sx={{ mt: '3px' }} />
                                </Box>
                            ))}
                        </List>
                    </div>
                </Box>
            </Drawer>
        </ThemeProvider>
    );
};

export default Sidebar_Navigation;
