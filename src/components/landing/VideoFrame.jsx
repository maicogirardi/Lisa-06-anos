import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize } from "lucide-react";

// Cache-busting: timestamp appended to force fresh load every time
const VIDEO_URL = `https://raw.githubusercontent.com/maicogirardi/Lisa-06-anos/main/public/video/Lisa.mp4?t=${Date.now()}`;
const THUMB_URL = `https://raw.githubusercontent.com/maicogirardi/Lisa-06-anos/main/public/video/Thumb.jpg?t=${Date.now()}`;

export default function VideoFrame() {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (paused) {
      setPaused(false);
      videoRef.current?.play();
      return;
    }
    setStarted(true);
    setTimeout(() => {
      const video = videoRef.current;
      if (!video) return;
      video.play();
    }, 100);
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setPaused(true);
  };

  const handleFullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      } else if (video.webkitRequestFullscreen) {
        await video.webkitRequestFullscreen();
      }
    } catch (e) {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full max-w-4xl mx-auto"
    >
      {/* Decorative border wrapper */}
      <div className="relative p-2 md:p-3 rounded-2xl md:rounded-3xl bg-gradient-to-br from-pink-300 via-rose-300 to-amber-300 shadow-2xl shadow-pink-200/50">
        {/* Inner gold accent border */}
        <div className="p-0.5 rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-200">
          {/* Video container - 16:9 aspect ratio */}
          <div
            className="relative w-full rounded-xl md:rounded-2xl overflow-hidden bg-black"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Video element */}
            <video
              ref={videoRef}
              src={VIDEO_URL}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              loop
              playsInline
              onClick={handleVideoClick}
              style={{ display: started ? "block" : "none" }}
            />

            {/* Fullscreen button (visible when playing and not paused) */}
            {started && !paused && (
              <button
                onClick={handleFullscreen}
                className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Maximize className="w-4 h-4 text-white" />
              </button>
            )}

            {/* Play overlay (initial or paused) */}
            {(!started || paused) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                {/* Thumbnail image */}
                <img
                  src={THUMB_URL}
                  alt="thumbnail"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Pink transparent overlay */}
                <div className="absolute inset-0 bg-pink-400/30" />
                <motion.button
                  onClick={handlePlay}
                  whileTap={{ scale: 0.92 }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-2xl shadow-pink-400/50 flex items-center justify-center"
                >
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white ml-1" />
                </motion.button>
                <p className="relative z-10 mt-4 text-white text-sm md:text-base tracking-widest uppercase font-medium drop-shadow">
                  Assistir vídeo
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-amber-300 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs md:text-sm">??</span>
        </div>
        <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-pink-300 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs md:text-sm">??</span>
        </div>
        <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 bg-pink-300 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs md:text-sm">??</span>
        </div>
        <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 bg-amber-300 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs md:text-sm">??</span>
        </div>
      </div>
    </motion.div>
  );
}