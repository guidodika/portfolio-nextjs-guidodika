// AnimatedText.js
import React, { useState, useEffect } from "react";

const AnimatedText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentCharIndex = 0;
    let animationInterval;

    const animateText = () => {
      const currentText = texts[currentTextIndex];
      const currentChar = currentText[currentCharIndex];

      if (currentChar) {
        setDisplayText((prevText) => prevText + currentChar);
        currentCharIndex++;
      } else {
        clearInterval(animationInterval);

        setTimeout(() => {
          setDisplayText("");
          currentCharIndex = 0;
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          startAnimation();
        }, 2000);
      }
    };

    const startAnimation = () => {
      animationInterval = setInterval(animateText, 100);
    };

    startAnimation();

    return () => {
      clearInterval(animationInterval);
    };
  }, [currentTextIndex, texts]);

  return <span>{displayText}</span>;
};

export default AnimatedText;
