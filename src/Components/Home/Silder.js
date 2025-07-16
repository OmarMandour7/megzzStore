import React, { useState } from "react";
import { Carousel, Row } from "react-bootstrap";

import prod3 from "../../images/ah.webp";
import prod4 from "../../images/mmm.webp";

const Silder = () => {
  
  return (
 <div className="video-banner position-relative">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-100"
    style={{
      height: "100vh",
      objectFit: "cover",
      filter: "brightness(0.6)",
    }}
  >
    <source src="/videos/bg-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div
    className="overlay position-absolute text-center text-white w-100 px-3 cor"
    style={{
      bottom: "5%",
      left: "50%",
      transform: "translateX(-50%)",
    }}
  >
    <h1
      className="fw-bold"
      style={{
        fontSize: "clamp(1.5rem, 5vw, 3rem)",
        marginBottom: "0.5rem",
      }}
    >
Level Up Your Walk.

    </h1>
    <p
      className="lead"
      style={{
        fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
        marginBottom: "1rem",
      }}
    >
      Premium sneakers for movers, dreamers, and rule-breakers.
    </p>
   
  </div>
</div>

  );
};

export default Silder;
