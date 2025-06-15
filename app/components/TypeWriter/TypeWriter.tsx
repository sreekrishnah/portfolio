'use client';

import { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  loop?: boolean;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  words,
  loop = false,
  cursor = true,
  cursorStyle = '|',
  typeSpeed = 120,
  deleteSpeed = 80,
  delaySpeed = 1500,
  className = ''
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        if (loop || currentWordIndex < words.length - 1) {
          setIsDeleting(true);
        }
      }, delaySpeed);
      
      return () => clearTimeout(waitTimer);
    }

    const typeTimer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          if (loop) {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          } else if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex((prev) => prev + 1);
          }
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(typeTimer);
  }, [currentText, isDeleting, isWaiting, currentWordIndex, words, typeSpeed, deleteSpeed, delaySpeed, loop]);

  return (
    <span className={className}>
      {currentText}
      {cursor && (
        <span 
          className="animate-pulse"
          style={{ 
            animationDuration: '1s',
            animationIterationCount: 'infinite'
          }}
        >
          {cursorStyle}
        </span>
      )}
    </span>
  );
};

export default TypeWriter;