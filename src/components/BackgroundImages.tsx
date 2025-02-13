"use client";

import { useEffect, useState } from "react";

export default function BackgroundImages() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate positions focused on edges
  const getEdgePositions = (count: number, gridSize: number = 50) => {
    return Array.from({ length: count }, (_, i) => {
      // First 60% of items go to the first 30% of space
      // Last 40% of items go to the last 30% of space
      const isInFirstGroup = i < count * 0.6;
      const groupIndex = isInFirstGroup ? i : i - Math.floor(count * 0.6);
      const groupSize = isInFirstGroup ? count * 0.6 : count * 0.4;
      const groupSpace = isInFirstGroup ? 30 : 30;
      const groupOffset = isInFirstGroup ? 0 : 70;

      const basePosition = groupOffset + (groupIndex / groupSize) * groupSpace;
      return Math.round(basePosition / gridSize) * gridSize;
    });
  };

  const horizontalPositions = getEdgePositions(12);
  const verticalPositions = getEdgePositions(12);

  return (
    <div className="fixed inset-0 -z-10 h-[200vh] overflow-hidden">
      <div
        className="w-full h-full relative"
        style={{
          transform: `translateY(${scrollY * -0.15}px)`,
          transition: "transform 0.05s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Dark base with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A1A] to-[#0A0A1A]" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(66,168,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(66,168,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Diagonal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(66,168,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

        {/* Traveling lights */}
        <div className="absolute inset-0">
          {horizontalPositions.map((pos, i) => (
            <div
              key={`light-h-${i}`}
              className="absolute h-[2px] w-20 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
              style={{
                top: `${pos}%`,
                left: i % 2 === 0 ? "-5%" : "85%",
                animation: `${i % 2 === 0 ? "moveRight" : "moveLeft"} ${
                  25 + i * 4
                }s linear infinite ${i * -3}s`,
                willChange: "transform",
              }}
            />
          ))}
          {verticalPositions.map((pos, i) => (
            <div
              key={`light-v-${i}`}
              className="absolute w-[2px] h-20 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"
              style={{
                left: `${pos}%`,
                top: i % 2 === 0 ? "-5%" : "85%",
                animation: `${i % 2 === 0 ? "moveDown" : "moveUp"} ${
                  25 + i * 4
                }s linear infinite ${i * -3}s`,
                willChange: "transform",
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] animate-pulse" />

        {/* Animated lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`wave-${i}`}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              style={{
                top: `${20 * (i + 1)}%`,
                transform: `translateY(${
                  Math.sin(Date.now() / 2000 + i) * 10
                }px)`,
                animation: `wave ${3 + i}s infinite ease-in-out`,
                willChange: "transform",
              }}
            />
          ))}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes moveRight {
          0% {
            transform: translateX(0%) scaleX(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(2000px) scaleX(1.5);
            opacity: 0;
          }
        }

        @keyframes moveLeft {
          0% {
            transform: translateX(0%) scaleX(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(-2000px) scaleX(1.5);
            opacity: 0;
          }
        }

        @keyframes moveDown {
          0% {
            transform: translateY(0%) scaleY(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(2000px) scaleY(1.5);
            opacity: 0;
          }
        }

        @keyframes moveUp {
          0% {
            transform: translateY(0%) scaleY(1);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(-2000px) scaleY(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
