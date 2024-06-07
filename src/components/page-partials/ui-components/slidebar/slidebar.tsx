'use client'

import * as React from 'react';
import Image from 'next/image';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import dashboardIcon from '../../../../Images/icons/dashboard.png';
import userIcon from '../../../../Images/icons/users.png';
import buildingIcon from '../../../../Images/icons/building.png';
import roomIcon from '../../../../Images/icons/room.png';
import componentIcon from '../../../../Images/icons/component.png';
import bookingIcon from '../../../../Images/icons/booking.png';
import dkDataEngineerIcon from '../../../../Images/icons/dk_data-engr.png';
import dkProductIcon from '../../../../Images/icons/dk_product.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    '& .MuiDrawer-paper': {
      backgroundColor: '#343A40',
      color: 'white',
    },
  }),
);


export default function MiniDrawer() {
  const theme = useTheme();
  console.log(theme);
  
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#FFFFFF' , color: 'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      variant="permanent"
      open={open}
      onMouseOver={(handleDrawerOpen)}
      onMouseOut={handleDrawerClose} >
        <DrawerHeader >
          <div className='flex justify-center items-center text-left p-4'>
            <img className='w-8' alt='logo' src='http://127.0.0.1:8000/images/leakdtech-logo.png' />
            <p>Home Dtech</p>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

        <ListItemText primary='Areeb Vohra' sx={{ opacity: open ? 1 : 0 , marginLeft: 3}} />
        
        </List>
        <Divider />
        <List>
          {/* 1 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image
               src={dashboardIcon} 
               width={20}/>
            </ListItemIcon>
            <ListItemText primary='Dashboard' sx={{ opacity: open ? 1 : 0 ,}} />
          </ListItemButton>
          {/* 2 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={userIcon} 
              width={20}/>
            </ListItemIcon>
            <ListItemText primary='User Management' sx={{ opacity: open ? 1 : 0 }} />
            <ChevronLeftIcon sx={{ opacity: open ? 1 : 0 }}/>
          </ListItemButton>
          {/* 3 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={buildingIcon}
              width={20} />
            </ListItemIcon>
            <ListItemText primary='Buildings' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* 4 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={roomIcon}
              width={20} />
            </ListItemIcon>
            <ListItemText primary='Rooms' sx={{ opacity: open ? 1 : 0 }} />
            <ChevronLeftIcon sx={{ opacity: open ? 1 : 0 }}/>
          </ListItemButton>
          {/* 5 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={componentIcon}
              width={20} />
            </ListItemIcon>
            <ListItemText primary='Components' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* 6 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={bookingIcon}
              width={20} />
            </ListItemIcon>
            <ListItemText primary='Booking' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          {/* 7 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={dkDataEngineerIcon}
              width={20} />
            </ListItemIcon>
            <ListItemText primary='Engineer`s Data Entry' sx={{ opacity: open ? 1 : 0 }} />
            <ChevronLeftIcon sx={{ opacity: open ? 1 : 0 }}/>
          </ListItemButton>
          {/* 8 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image 
              src={dkProductIcon}
              width={20} />
            </ListItemIcon>
            <ListItemText primary='Master Product' sx={{ opacity: open ? 1 : 0 }} />
            <ChevronLeftIcon sx={{ opacity: open ? 1 : 0 }}/>
          </ListItemButton>
          {/* 9 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={faTicket} />
            </ListItemIcon>
            <ListItemText primary='Tickets' sx={{ opacity: open ? 1 : 0 , font: 2}} />
            <ChevronLeftIcon sx={{ opacity: open ? 1 : 0 }}/>
          </ListItemButton>
          {/* 10 */}
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <FontAwesomeIcon icon={faFolderOpen} />
            </ListItemIcon>
            <ListItemText primary='File Manager' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      </Box>
    </Box>
  );
}
