"use client";

import { useEffect } from "react";
import { useGlobalStore } from "@/store/globalStore";

export default function Home() {
  const { theme, toggleTheme } = useGlobalStore();

  useEffect(() => {
    document.body.className = theme === "light" ? "bg-bodyLight" : "bg-black";
  }, [theme]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        className="bg-red-600 p-4 rounded-xl text-white"
        onClick={toggleTheme}
      >
        change theme
      </button>
    </div>
  );
}
