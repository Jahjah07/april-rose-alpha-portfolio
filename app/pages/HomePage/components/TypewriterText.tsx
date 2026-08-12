"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  className,
  delay = 0,
  speed = 55,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingTimer: ReturnType<typeof setTimeout>;

    const startTimer = setTimeout(() => {
      const typeNextCharacter = () => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index < text.length) {
          typingTimer = setTimeout(typeNextCharacter, speed);
          return;
        }

        setIsDone(true);
      };

      typeNextCharacter();
    }, delay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(typingTimer);
    };
  }, [delay, speed, text]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayedText}</span>
      <span
        aria-hidden="true"
        className={`ml-1 inline-block h-[0.85em] w-px translate-y-[0.08em] bg-current ${
          isDone ? "animate-cursor-blink" : ""
        }`}
      />
    </span>
  );
}
