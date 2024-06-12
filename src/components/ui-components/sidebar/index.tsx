'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from '@mui/material/styles';
import { Toolbar, List, CssBaseline, Typography, Divider, Collapse, IconButton, Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { ExpandMore, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../../Images/leakdtech-logo.png';
import AppBar from '../appbar';
import { Drawer, DrawerHeader, drawerStyling , drawerData } from '../drawer';

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
        const { name, alt, font, leftIcon } = data;
        return (
          <ListItemIcon key={index} sx={{ display: 'block' }}>
            {!leftIcon ? (
              <ListItemButton sx={{ minHeight: 48, display: 'flex' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
                  {font && <FontAwesomeIcon className="text-gray-500 text-lg" icon={font} />}
                </ListItemIcon>
                <Link href={name.toLowerCase()}>
                  <ListItemText primary={name} sx={{ opacity: open ? 1 : 0, color: 'white' }} primaryTypographyProps={{ fontSize: '13px' }} />
                </Link>
              </ListItemButton>
            ) : (
              <ListItemButton onClick={() => handleCollapse(index)} sx={{ minHeight: 48, display: 'flex' }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 'auto', textAlign: 'center', justifyContent: 'center' }}>
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
          <Image className="w-8 h-8 mx-2" alt="logo" src={logo} />
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