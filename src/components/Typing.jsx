import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

export default function Typing({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    let delay = del ? 35 : 75;
    if (!del && text === word) delay = 1500;
    const id = setTimeout(() => {
      if (!del && text === word) {
        setDel(true);
        return;
      }
      if (!del) {
        setText(word.slice(0, text.length + 1));
        return;
      }
      if (text === "") {
        setDel(false);
        setI(i + 1);
        return;
      }
      setText(text.slice(0, -1));
    }, delay);
    return () => clearTimeout(id);
  }, [text, del, i, words]);

  return (
    <span dir="auto">
      {text}
      <span className="blink inline-block w-[2px] h-[1em] translate-y-[3px] bg-[var(--accent)] align-middle ms-1" />
    </span>
  );
}
