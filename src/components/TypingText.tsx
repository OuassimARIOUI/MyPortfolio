import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
}

export default function TypingText({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
  className = '',
  textColors = ['#3b82f6'],
  variableSpeed,
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const currentFullText = text[currentTextIndex];
    
    const getSpeed = () => {
      if (variableSpeed) {
        return Math.random() * (variableSpeed.max - variableSpeed.min) + variableSpeed.min;
      }
      return typingSpeed;
    };

    if (!isDeleting && currentText === currentFullText) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCurrentText((prev) =>
          isDeleting
            ? currentFullText.substring(0, prev.length - 1)
            : currentFullText.substring(0, prev.length + 1)
        );
      },
      isDeleting ? typingSpeed / 2 : getSpeed()
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, pauseDuration, variableSpeed]);

  useEffect(() => {
    if (!showCursor) return;
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  const currentColor = textColors[currentTextIndex % textColors.length];

  return (
    <span className={className}>
      <span style={{ color: currentColor }}>
        {currentText}
      </span>
      {showCursor && (
        <span
          style={{
            opacity: cursorVisible ? 1 : 0,
            transition: 'opacity 0.1s',
          }}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
