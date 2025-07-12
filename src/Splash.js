import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDarkMode from "./Components/Uitily/DarkModeBtn";

export default function Splash() {
    const [, , isLogo] = useDarkMode();
  const navigate = useNavigate();
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const thunder = new Audio("/sounds/thunder.mp3");
    thunder.volume = 0.4;

    const interval = setInterval(() => {
      thunder.currentTime = 0;
      thunder.play().catch(() => {});
    }, 3000);

    // 1. بعد 3 ثواني، نبدأ السحب لفوق
    const animateTimeout = setTimeout(() => {
      setAnimateOut(true);
    }, 3000);

    // 2. بعد 4 ثواني (يعني بعد ما الأنيميشن يخلص)، نروح للصفحة الرئيسية
    const navTimeout = setTimeout(() => {
      clearInterval(interval);
      navigate("/home");
    }, 4000); // 1 ثانية بعد السحب

    return () => {
      clearInterval(interval);
      clearTimeout(animateTimeout);
      clearTimeout(navTimeout);
    };
  }, [navigate]);

  return (
<div  className={`splash-container lightning `}>
      <div className={`logo-wrapper pulse ${animateOut ? "slide-up" : ""}`}>
        <img src={isLogo} alt="MIRROR" className="logo-image" />
        <div className="smoke"></div>
      </div>
    </div>
  );
}