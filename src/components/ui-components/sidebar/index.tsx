'use client'

import * as React from 'react';
import Image from 'next/image';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import dashboardIcon from '../../../Images/icons/dashboard.png';
import userIcon from '../../../Images/icons/users.png';
import buildingIcon from '../../../Images/icons/building.png';
import roomIcon from '../../../Images/icons/room.png';
import componentIcon from '../../../Images/icons/component.png';
import bookingIcon from '../../../Images/icons/booking.png';
import dkDataEngineerIcon from '../../../Images/icons/data-engr.png';
import dkProductIcon from '../../../Images/icons/product.png';
import logo from '../../../Images/leakdtech-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

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
console.log(openedMixin);
console.log(closedMixin);

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
  }),
);
const drawerData = [
  { name: 'Dashboard', src: dashboardIcon, alt: 'dashboardIcon', leftIcon: false },
  { name: 'UserManagement', src: userIcon, alt: 'userIcon', leftIcon: true },
  { name: 'Building', src: buildingIcon, alt: 'buildingIcon', leftIcon: false },
  { name: 'Rooms', src: roomIcon, alt: 'roomIcon', leftIcon: true },
  { name: 'Components', src: componentIcon, alt: 'componentIcon', leftIcon: false },
  { name: 'Booking', src: bookingIcon, alt: 'bookingIcon', leftIcon: false },
  { name: 'Engineer`s Data Entry', src: dkDataEngineerIcon, alt: 'dkDataEngineerIcon', leftIcon: true },
  { name: 'Master Product', src: dkProductIcon, alt: 'dkProductIcon', leftIcon: true },
  { name: 'Tickets', font: faTicket, alt: 'faTicket', leftIcon: true },
  { name: 'File Manager', font: faFolderOpen, alt: 'faFolderOpen' },

]
const drawerStyling = {
  backgroundColor: '#343A40',
  color: 'white',
}

export default function Sidebar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [ExpandIcon, setExpandIcon] = React.useState(false)
  const [isCollapse, setisCollapse] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
    appBarWidth = '70%'
  };

  const handleDrawerClose = () => {
    setOpen(false);
    appBarWidth = '80%'
  };

  const handleCollapse = () => {
    setisCollapse(!isCollapse)
    setExpandIcon(!ExpandIcon)
  };

  let appBarWidth;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}
        sx={{ backgroundColor: '#FFFFFF', color: 'black', border: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <select className='w-1/2 h-12 border-2'>
            <option value='Select'>Select</option>
          </select>
          <Typography variant="h6" noWrap component="div" sx={{ textJustify: 'end' }}>
            Areeb Vohra
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            backgroundColor: "#343A40",
            color: "white",
          }
        }}
        open={open}
      >
        <DrawerHeader>
          <Image className='w-8 mr-auto' alt='logo' src={logo} />
          <div className='flex justify-center items-center text-left p-4 mr-4'>
            <Link href='/'>
              <p className='mr-10' style={{ opacity: open ? 1 : 0 }}>Home Dtech</p>
            </Link>
          </div>
        </DrawerHeader>
        <Divider />
        <List>

          <ListItemText primary='Areeb Vohra' sx={{ opacity: open ? 1 : 0, marginLeft: 3 }} />

        </List>
        <Divider />
        <List>
          {drawerData.map((data, index) => {
            const { name, src, alt, font, leftIcon } = data
            return (
              <ListItem key={index} sx={{ display: 'block' }}>
                {!leftIcon? 
                  <ListItemButton
                  sx={{
                    minHeight: 48,
                    display: 'flex',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : 'auto',
                      textAlign: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {src && <Image
                      src={src}
                      width={20}
                      alt={alt} />}
                    {font && <FontAwesomeIcon className='text-gray-500' icon={font} />}
                  </ListItemIcon>
                  <Link href={name.toLowerCase()}>
                    <ListItemText
                      primary={name}
                      sx={{ opacity: open ? 1 : 0, color: 'white' }}
                      primaryTypographyProps={{ fontSize: '13px' }} />
                  </Link> 
                 
                </ListItemButton>:
                 <ListItemButton
                 onClick={handleCollapse}
                 sx={{
                   minHeight: 48,
                   display: 'flex',
                 }}
               >
                 <ListItemIcon
                   sx={{
                     minWidth: 0,
                     mr: open ? 1 : 'auto',
                     textAlign: 'center',
                     justifyContent: 'center',
                   }}
                 >
                   {src && <Image
                     src={src}
                     width={20}
                     alt={alt} />}
                   {font && <FontAwesomeIcon className='text-gray-500' icon={font} />}
                 </ListItemIcon>
                   <ListItemText
                     primary={name}
                     sx={{ opacity: open ? 1 : 0, color: 'white' }}
                     primaryTypographyProps={{ fontSize: '13px' }} />
                      {leftIcon &&
                    <span>{!ExpandIcon ? <ChevronLeftIcon sx={{ opacity: open ? 1 : 0, color: 'white' }} /> : <ExpandMoreIcon sx={{color: 'white' }}/>}
                    </span>}
               </ListItemButton>
                }
                
                <Collapse in={isCollapse} timeout='auto' unmountOnExit>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} sx={{ display: 'block' }}>
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
                        </ListItemIcon>
                        <ListItemText primary={text}
                          sx={{ opacity: open ? 1 : 0, color: 'white' }}
                          primaryTypographyProps={{ fontSize: '13px' }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              </ListItem>
            )
          })}

        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

      </Box>
    </Box>
  );
}

