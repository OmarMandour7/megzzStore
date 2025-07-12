import { useState, useEffect } from 'react';
import logo from "../../images/MEGZZ FINAL LOGO WHITE.png";
import logoD from "../../images/MEGZZ FINAL LOGO BLACK.png";

export default function useDarkMode() {
  // نقرأ الوضع من localStorage لو موجود
  const getInitialMode = () => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  };

  const [isDark, setIsDark] = useState(getInitialMode);
  const [isLogo, setIsLogo] = useState(getInitialMode() ? logoD : logo);

  useEffect(() => {
    const root = document.getElementById("root");
    if (isDark) {
      root.classList.add("dark");
      setIsLogo(logoD);
    } else {
      root.classList.remove("dark");
      setIsLogo(logo);
    }

    // نحفظ الوضع في localStorage
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  return [isDark, toggleDarkMode, isLogo];
}
