'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from '@mui/material/styles';
import { Toolbar, List, CssBaseline, Typography, Divider, IconButton, Box, ListItemText } from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';

import logo from '../../../Images/leakdtech-logo.png';
import AppBar from '../appbar';
import { Drawer, DrawerHeader, DrawerList } from '../drawer';

const drawerStyling = {
  backgroundColor: '#343A40',
  color: 'white',
};

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapseIndex, setCollapseIndex] = useState<number | null>(null);
  const [listName , setlistName] = useState('')

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