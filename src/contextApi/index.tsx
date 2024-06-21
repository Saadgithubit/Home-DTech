'use client'

import { createContext, useState } from 'react';

export const DrawerContext = createContext<any>('open');

export function DrawerProvider({ children } : { children: React.ReactNode }) {
  const [isOpen, setisOpen] = useState('open');

  return (
    <DrawerContext.Provider value={{ isOpen , setisOpen }}>
        {children}
    </DrawerContext.Provider>
  );
}