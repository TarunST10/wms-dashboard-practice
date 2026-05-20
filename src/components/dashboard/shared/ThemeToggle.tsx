'use client';

import { useTheme } from 'next-themes';

import {
  Moon,
  Sun,
} from 'lucide-react';

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === 'dark'
            ? 'light'
            : 'dark'
        )
      }
      className="
        w-11 h-11 rounded-2xl
        bg-gray-100 hover:bg-gray-200
        flex items-center justify-center
        transition
      "
    >

      {theme === 'dark' ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}

    </button>
  );
}