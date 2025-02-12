"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImages() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 h-[200vh] overflow-hidden">
      <div
        className="w-full h-full transform"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          src="/images/bg-images/bg-bg.png"
          alt=""
          fill
          className="object-cover scale-120"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </div>
  );
}
