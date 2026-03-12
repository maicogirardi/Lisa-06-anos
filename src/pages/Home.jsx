import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import VideoFrame from "@/components/landing/VideoFrame";
import FloatingElements from "@/components/landing/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-amber-50 relative overflow-hidden">
      <FloatingElements />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <HeroSection />
        <VideoFrame />
        <p className="mt-8 text-sm text-pink-300 tracking-widest uppercase font-medium">
          Maio 2026 · Lisa Krasnievicz Girardi
        </p>
      </div>
    </div>
  );
}