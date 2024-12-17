import { create } from "zustand";

export interface GlobalStateZustand {
  theme: string;
  toggleTheme: () => void;
}

export const useGlobalStore = create<GlobalStateZustand>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      return { theme: newTheme };
    }),
}));
