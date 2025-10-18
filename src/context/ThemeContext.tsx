import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from local storage or default to 'light'
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    return initialTheme;
  });

  useEffect(() => {
    // Save the theme to local storage whenever it changes
    localStorage.setItem('theme', theme);
    // also apply to the document
    document.documentElement.setAttribute('data-theme', theme);

  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};