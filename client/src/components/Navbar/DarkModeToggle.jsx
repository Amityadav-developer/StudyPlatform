import { useEffect, useState } from "react";

export default function DarkModeToggle({ small = false }) {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const iconSize = small ? "16" : "20";

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`flex items-center justify-center rounded-full border transition-all 
      ${small ? "w-8 h-8 p-1" : "w-10 h-10 p-2"}`}
    >
      {theme === "dark" ? (
        /* Sun Icon */
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
          <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" stroke="currentColor" strokeWidth="2" />
          <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" stroke="currentColor" strokeWidth="2" />
          <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
          <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" stroke="currentColor" strokeWidth="2" />
          <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ) : (
        /* Moon Icon */
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}
    </button>
  );
}
