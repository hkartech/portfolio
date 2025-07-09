'use client'

import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/ui/Navbar";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
