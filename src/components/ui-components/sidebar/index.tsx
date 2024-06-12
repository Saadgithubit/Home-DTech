'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Toolbar, List, CssBaseline, Typography, Divider, Collapse, IconButton, Drawer as MuiDrawer, Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { ExpandMore, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import dashboardIcon from '../../../Images/icons/dashboard.png';
import userIcon from '../../../Images/icons/users.png';
import buildingIcon from '../../../Images/icons/building.png';
import roomIcon from '../../../Images/icons/room.png';
import componentIcon from '../../../Images/icons/component.png';
import bookingIcon from '../../../Images/icons/booking.png';
import dkDataEngineerIcon from '../../../Images/icons/data-engr.png';
import dkProductIcon from '../../../Images/icons/product.png';
import logo from '../../../Images/leakdtech-logo.png';
import AppBar from '../appbar';
import { DrawerHeader } from '../drawer';

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
  { name: 'File Manager', font: faFolderOpen, alt: 'faFolderOpen', leftIcon: false },
];

const drawerStyling = {
  backgroundColor: '#343A40',
  color: 'white',
};

interface DrawerListProps {
  open: boolean;
  collapseIndex: number | null;
  handleCollapse: (index: number) => void;
  isExpanded: boolean;
}

function DrawerList({ open, collapseIndex, handleCollapse, isExpanded }: DrawerListProps) {
  return (
    <List>
      {drawerData.map((data, index) => {
        const { name, src, alt, font, leftIcon } = data;
        return (
          <ListItemIcon key={index} sx={{ display: 'block' }}>
            {!leftIcon ? (
              <ListItemButton sx={{ minHeight: 48, display: 'flex' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                  {src && <Image src={src} width={20} alt={alt} />}
                  {font && <FontAwesomeIcon className="text-gray-500" icon={font} />}
                </ListItemIcon>
                <Link href={name.toLowerCase()}>
                  <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                </Link>
              </ListItemButton>
            ) : (
              <ListItemButton onClick={() => handleCollapse(index)} sx={{ minHeight: 48, display: 'flex' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                  {src && <Image src={src} width={20} alt={alt} />}
                  {font && <FontAwesomeIcon className="text-gray-500" icon={font} />}
                </ListItemIcon>
                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                <span>{!isExpanded ? <ChevronLeftIcon sx={{ opacity: open ? 1 : 0, color: 'white' }} /> : <ExpandMore sx={{ color: 'white' }} />}</span>
              </ListItemButton>
            )}
            <Collapse in={collapseIndex === index} timeout="auto" unmountOnExit>
              {['All mail', 'Trash', 'Spam'].map((text) => (
                <ListItemIcon key={text} sx={{ display: 'block' }}>
                  <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }} />
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                  </ListItemButton>
                </ListItemIcon>
              ))}
            </Collapse>
          </ListItemIcon>
        );
      })}
    </List>
  );
}

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapseIndex, setCollapseIndex] = useState<number | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCollapse = (index: number) => {
    setCollapseIndex(collapseIndex === index ? null : index);
    setIsExpanded(!isExpanded);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#FFFFFF', color: 'black', border: 'none', width: !open ? '95%' : '82.2%' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={open ? handleDrawerClose : handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <select className="w-1/2 h-12 border-2">
            <option value="Select">Select</option>
          </select>
          <Typography variant="h6" noWrap component="div" sx={{ textJustify: 'end' }}>
            Areeb Vohra
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" PaperProps={{ sx: drawerStyling }} open={open}>
        <div className="flex items-center">
          <Image className="w-8 h-10 mx-2" alt="logo" src={logo} />
          <div className="flex justify-center items-center text-left p-4 mr-4">
            <Link href="/">
              <p className="mr-10" style={{ opacity: open ? 1 : 0 }}>Home Dtech</p>
            </Link>
          </div>
        </div>
        <Divider />
        <List>
          <ListItemText primary="Areeb Vohra" sx={{ opacity: open ? 1 : 0, marginLeft: 3 }} />
        </List>
        <Divider />
        <DrawerList isExpanded={isExpanded} open={open} collapseIndex={collapseIndex} handleCollapse={handleCollapse} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}