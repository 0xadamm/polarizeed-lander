"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ScrollLockContextType {
  isLocked: boolean;
  setIsLocked: (locked: boolean) => void;
}

const ScrollLockContext = createContext<ScrollLockContextType | undefined>(
  undefined
);

export function ScrollLockProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLocked]);

  return (
    <ScrollLockContext.Provider value={{ isLocked, setIsLocked }}>
      {children}
    </ScrollLockContext.Provider>
  );
}

export function useScrollLock() {
  const context = useContext(ScrollLockContext);
  if (context === undefined) {
    throw new Error("useScrollLock must be used within a ScrollLockProvider");
  }
  return context;
}
