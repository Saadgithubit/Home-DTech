'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { List, CssBaseline, Divider, Box, ListItemText, Drawer } from '@mui/material';

import logo from '../../Images/leakdtech-logo.png';
import DrawerList from '../drawer';

const drawerWidth = 240;

export default function Sidebar() {
  const [collapseIndex, setCollapseIndex] = useState<number | null>(null);

  const handleCollapse = (index: number) => {
    setCollapseIndex(collapseIndex === index ? null : index);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }} variant="permanent" anchor="left">
        <div className="flex items-center">
          <Image className="w-8 h-8 mx-2" alt="logo" src={logo} />
          <div className="flex justify-center items-center text-left p-4 mr-4">
            <Link href="/">
              <p className="mr-10" style={{ opacity: 1 }}>Home DTech</p>
            </Link>
          </div>
        </div>
        <Divider />
        <List>
          <ListItemText primary="Areeb Vohra" sx={{ opacity: 1, marginLeft: 3 }} />
        </List>
        <Divider />
        <DrawerList isExpanded={true} collapseIndex={collapseIndex} handleCollapse={handleCollapse} />
      </Drawer>
    </Box>
  );
}