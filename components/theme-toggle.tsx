"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant={"outline"}
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <>
        <span className="sr-only">Light Theme</span>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      </>
      <>
        <span className="sr-only">Dark Theme</span>
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </>
    </Button>
  );
};
