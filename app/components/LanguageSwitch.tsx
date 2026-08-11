"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="shrink-0">
      <div className="relative flex items-center w-[118px] h-[44px] rounded-full bg-neutral-800/80 border border-neutral-700 backdrop-blur-md p-1 shadow-lg">

        <motion.div
          className="absolute top-1 bottom-1 w-[53px] rounded-full bg-neutral-100"
          animate={{
            x: language === "en" ? 0 : 55,
          }}
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 32,
          }}
        />

        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`relative z-10 w-[53px] h-full rounded-full text-sm font-medium transition-colors ${
            language === "en"
              ? "text-neutral-900"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => setLanguage("ru")}
          className={`relative z-10 w-[53px] h-full rounded-full text-sm font-medium transition-colors ${
            language === "ru"
              ? "text-neutral-900"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
          aria-label="Переключить на русский"
        >
          RU
        </button>

      </div>
    </div>
  );
}