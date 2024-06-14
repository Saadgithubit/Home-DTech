'use client'

import { createContext, useState } from 'react';

export const DrawerContext = createContext<any>('close');

export function DrawerProvider({ children } : { children: React.ReactNode }) {
  const [isOpen, setisOpen] = useState('close');

  return (
    <DrawerContext.Provider value={{ isOpen , setisOpen }}>
        {children}
    </DrawerContext.Provider>
  );
}