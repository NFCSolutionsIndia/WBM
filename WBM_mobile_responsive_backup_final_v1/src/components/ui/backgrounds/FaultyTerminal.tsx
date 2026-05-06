"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const glitchChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", '"', ",", ".", "<", ">", "/", "?", "\\", "|", "`", "~"];

interface FaultyTerminalProps {
  strings?: string[];
  mainClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  characterClassName?: string;
  wordClassName?: string;
  loadingText?: string;
  loadingClassName?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

const FaultyTerminal = ({
  strings = [],
  mainClassName = "",
  containerClassName = "",
  contentClassName = "",
  characterClassName = "",
  wordClassName = "",
  loadingText = "Loading...",
  loadingClassName = "",
  showCursor = true,
  cursorClassName = ""
}: FaultyTerminalProps) => {
  const [content, setContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getRandomChar = useCallback(() => {
    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
  }, []);

  const typeString = useCallback(async (str: string) => {
    setIsTyping(true);
    const words = str.split(" ");
    const currentContent: string[] = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      let currentWord = "";

      for (let j = 0; j < word.length; j++) {
        const char = word[j];
        
        if (Math.random() < 0.1) {
          const glitchCount = Math.floor(Math.random() * 3) + 1;
          for (let k = 0; k < glitchCount; k++) {
            setContent([...currentContent, currentWord + getRandomChar()]);
            await new Promise((resolve) => setTimeout(resolve, 20));
          }
        }

        currentWord += char;
        setContent([...currentContent, currentWord]);
        await new Promise((resolve) => setTimeout(resolve, 30 + Math.random() * 50));
      }

      currentContent.push(currentWord);
      setContent([...currentContent]);
      if (i < words.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    setIsTyping(false);
  }, [getRandomChar]);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!isMounted) return;
      setIsLoading(false);

      for (let i = 0; i < strings.length; i++) {
        if (!isMounted) break;
        await typeString(strings[i]);
        if (i < strings.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          if (!isMounted) break;
          setContent([]);
        }
      }
    };

    init();
    return () => { isMounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [content]);

  return (
    <div className={`faulty-terminal-main ${mainClassName}`} style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div 
        ref={containerRef}
        className={`faulty-terminal-container ${containerClassName}`}
        style={{ width: '100%', height: '100%', padding: '20px', overflowY: 'auto' }}
      >
        {isLoading ? (
          <div className={`faulty-terminal-loading ${loadingClassName}`}>
            {loadingText}
          </div>
        ) : (
          <div className={`faulty-terminal-content ${contentClassName}`}>
            {content.map((word, i) => (
              <span key={i} className={`faulty-terminal-word ${wordClassName}`} style={{ marginRight: '8px', display: 'inline-block' }}>
                {word.split("").map((char, j) => (
                  <span key={j} className={`faulty-terminal-char ${characterClassName}`}>
                    {char}
                  </span>
                ))}
              </span>
            ))}
            {showCursor && isTyping && (
              <span className={`faulty-terminal-cursor ${cursorClassName}`} style={{ display: 'inline-block', width: '8px', height: '15px', background: 'currentColor', marginLeft: '2px', verticalAlign: 'middle' }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaultyTerminal;
