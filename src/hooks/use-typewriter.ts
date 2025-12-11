import { useEffect, useState } from "react";

type Options = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  disabled?: boolean;
};

export function useTypewriter(words: string[] = [], options: Options = {}) {
  const { typeSpeed = 120, deleteSpeed = 70, pauseTime = 2000, disabled = false } = options;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Fallback: no animation when disabled or no words
  useEffect(() => {
    if (disabled || !words.length) {
      setText(words[0] ?? "");
      setIsDeleting(false);
    }
  }, [disabled, words]);

  useEffect(() => {
    if (disabled || !words.length) return;

    const currentWord = words[wordIndex % words.length];

    // Finished typing current word -> pause then start deleting
    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    // Finished deleting -> move to next word
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.slice(0, Math.max(0, text.length - 1)));
      } else {
        setText(currentWord.slice(0, text.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime, disabled]);

  return {
    text,
    showCursor: !disabled && words.length > 0,
  };
}
