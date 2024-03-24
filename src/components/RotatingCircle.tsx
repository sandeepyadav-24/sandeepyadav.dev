"use client";
import React, { useEffect } from "react";

const RotatingCircle = () => {
  const numberOfCircles = 5; // Number of circles
  const circleRadius = 100; // Radius of the outermost circle
  const dotRadius = 3; // Radius of the dots

  useEffect(() => {
    // Dynamically generate CSS keyframes for rotation
    for (let i = 0; i < numberOfCircles; i++) {
      const rotationKeyframes = `@keyframes rotation-${i} {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;

      const style = document.createElement("style");
      style.type = "text/css";
      style.appendChild(document.createTextNode(rotationKeyframes));
      document.head.appendChild(style);
    }
  }, []);

  const circles = [];

  // Generate circles
  for (let i = 0; i < numberOfCircles; i++) {
    const currentRadius = circleRadius - i * 20; // Adjust radius for each circle

    // Generate dots
    const dots = [];
    for (let j = 0; j < 20; j++) {
      const angle = (360 / 20) * j; // Angle between dots
      const x = currentRadius * Math.cos(angle * (Math.PI / 180)); // X-coordinate of dot
      const y = currentRadius * Math.sin(angle * (Math.PI / 180)); // Y-coordinate of dot

      dots.push(
        <div
          key={j}
          className="absolute bg-white rounded-full"
          style={{
            width: `${dotRadius * 2}px`,
            height: `${dotRadius * 2}px`,
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
          }}
        />
      );
    }

    circles.push(
      <div
        key={i}
        className="absolute w-full h-full border border-white rounded-full"
        style={{
          width: `${currentRadius * 2}px`,
          height: `${currentRadius * 2}px`,
          left: `calc(50% - ${currentRadius}px)`,
          top: `calc(50% - ${currentRadius}px)`,
          animation: `rotation-${i} 10s linear infinite`,
        }}
      >
        {dots}
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {circles}
    </div>
  );
};

export default RotatingCircle;
