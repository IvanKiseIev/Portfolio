"use client";

import { useEffect, useState } from "react";

interface Photo {
  src: string;
  alt: string;
}

interface SliderProps {
  photos: Photo[];
  index: number;
  setIndex: (i: number) => void;
}

export default function Slider({ photos, index, setIndex }: SliderProps) {
  const [fullscreen, setFullscreen] = useState(false);

  const prev = () =>
    setIndex(index === 0 ? photos.length - 1 : index - 1);

  const next = () =>
    setIndex(index === photos.length - 1 ? 0 : index + 1);

  // swipe
  let startX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  // keyboard
  useEffect(() => {
    if (!fullscreen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen, index]);

  return (
    <>
      {/* обычный слайдер */}
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full px-2 flex justify-center"
            >
              <img
                src={p.src}
                alt={p.alt}
                onClick={() => setFullscreen(true)}
                className="rounded-lg cursor-zoom-in max-h-[550px] object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2
          w-10 h-10 bg-black/60 text-white text-2xl rounded-full z-10"
        >
          ‹
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2
          w-10 h-10 bg-black/60 text-white text-2xl rounded-full z-10"
        >
          ›
        </button>
      </div>

      {/* fullscreen */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
          flex items-center justify-center"
          onClick={() => setFullscreen(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={photos[index].src}
            alt={photos[index].alt}
            className="max-w-full max-h-full rounded-lg cursor-zoom-out"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2
            w-12 h-12 bg-black/60 text-white text-3xl rounded-full"
          >
            ‹
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2
            w-12 h-12 bg-black/60 text-white text-3xl rounded-full"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
