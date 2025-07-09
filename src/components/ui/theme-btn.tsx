'use client';

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button variant="link" size="icon" onClick={toggleTheme}>
      {isDark ? (
        <Sun className="size-6 stroke-2"/>
      ) : (
        <Moon className="size-6 stroke-2" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
