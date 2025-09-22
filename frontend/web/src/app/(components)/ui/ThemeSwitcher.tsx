'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    // To prevent hydration mismatch, we render a placeholder or nothing on the server.
    return <div className="w-16 h-8" />;
  }

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center w-16 h-8 px-1 rounded-full cursor-pointer transition-colors duration-300
      ${theme === 'light' ? 'bg-gray-200 justify-start' : 'bg-gray-700 justify-end'}`}
      aria-label="Toggle theme"
      role="button"
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme === 'light' ? 'sun' : 'moon'}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'light' ? (
              <Sun className="h-4 w-4 text-orange-500" />
            ) : (
              <Moon className="h-4 w-4 text-yellow-400" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};