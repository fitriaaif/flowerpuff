// AppContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';

// Buat context baru
const AppContext = createContext();

// Buat custom hook untuk mengakses context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Buat Provider
export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};
