import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Maximize2, X } from "lucide-react";

function getEmbedUrl(url) {
  if (!url) return null;
  // Convert Google Drive share/view link to embed link
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

export default function VideoFrame({ videoUrl }) {
  const [fullscreen, setFullscreen] = useState(false);
  const embedUrl = getEmbedUrl(videoUrl);
  const hasVideo = embedUrl && !embedUrl.includes("SEU_FILE_ID");

  return (
    <>
      {/* Fullscreen overlay */}
      {fullscreen && hasVideo && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <iframe
            src={embedUrl}
            className="w-full h-full"
            style={{ aspectRatio: "16/9", maxHeight: "100vh" }}
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      )}

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
              {hasVideo ? (
                <>
                  <video
                    src="/video/lisa.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    controls
                  />
                  {/* Fullscreen button */}
                  <button
                    onClick={() => setFullscreen(true)}
                    className="absolute top-3 right-3 z-10 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                  >
                    <Maximize2 className="w-4 h-4 text-white" />
                  </button>
                </>
              ) : (
                <>
                  {/* Placeholder background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 opacity-80" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/80 backdrop-blur-sm shadow-xl shadow-pink-300/30 flex items-center justify-center"
                    >
                      <Play className="w-7 h-7 md:w-10 md:h-10 text-pink-400 fill-pink-400 ml-1" />
                    </motion.div>
                    <p className="mt-4 text-pink-400/70 text-xs md:text-sm tracking-widest uppercase font-medium">
                      Adicione o link do vídeo
                    </p>
                  </div>
                  <div className="absolute top-3 left-3 md:top-5 md:left-5 text-xl md:text-2xl opacity-40">??</div>
                  <div className="absolute top-3 right-3 md:top-5 md:right-5 text-xl md:text-2xl opacity-40">??</div>
                  <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-xl md:text-2xl opacity-40">?</div>
                  <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 text-xl md:text-2xl opacity-40">??</div>
                </>
              )}
            </div>
          </div>

          {/* Corner crown accents */}
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
    </>
  );
}