"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isWhite?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, isWhite, size = "md" }: LogoProps) {
  const color = isWhite ? "#ffffff" : "#000000";

  // heights for the SVG container
  const heights = { sm: "h-9", md: "h-11", lg: "h-16" };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 120"
      className={cn(heights[size], "w-auto", className)}
      aria-label="Integral Group"
    >
      {/* 
        Integral symbol ∫ 
        Using a very generous viewBox (120 height) to prevent clipping at the bottom.
        Positioned at y=85 with fontSize=100.
      */}
      <text
        x="10"
        y="85"
        fontSize="100"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="900"
        fill={color}
        stroke={color}
        strokeWidth="2"
        paintOrder="stroke"
      >
        ∫
      </text>

      {/* NTEGRAL text */}
      <text
        x="70"
        y="82"
        fontSize="58"
        fontFamily="'Space Grotesk', 'Inter', Arial, sans-serif"
        fontWeight="900"
        letterSpacing="2"
        fill={color}
      >
        NTEGRAL
      </text>
    </svg>
  );
}
