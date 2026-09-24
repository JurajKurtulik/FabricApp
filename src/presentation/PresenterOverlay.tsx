import { useEffect, useRef, useState } from "react";
import { titles } from "../content/scenes";
import { speakerNotes } from "../content/speakerNotes";
export function PresenterOverlay({
  index,
  close,
  elapsed,
}: {
  index: number;
  close: () => void;
  elapsed: number;
}) {
  return (
    <Overlay title="Speaker notes" close={close}>
      <div className="notes-meta">
        {String(index + 1).padStart(2, "0")} / 19 · {Math.floor(elapsed / 60)}:
        {String(elapsed % 60).padStart(2, "0")} elapsed
      </div>
      <h2>{titles[index]}</h2>
      <div className="notes-text">
        {speakerNotes[index + 1].split("\n\n").map((p, i) => (
          <p key={i}>{p.replace(/\*\*/g, "")}</p>
        ))}
      </div>
      <footer>Next: {titles[index + 1] ?? "End of presentation"}</footer>
    </Overlay>
  );
}
export function Overlay({
  title,
  close,
  children,
}: {
  title: string;
  close: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement;
    ref.current?.querySelector<HTMLButtonElement>("button")?.focus();
    return () => prev?.focus();
  }, []);
  return (
    <div className="overlay-scrim" onClick={close}>
      <div
        className="overlay"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            const items = ref.current?.querySelectorAll<HTMLElement>(
              'button,[href],[tabindex="0"]',
            );
            if (!items?.length) return;
            const first = items[0],
              last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }}
      >
        <button
          className="close-overlay"
          onClick={close}
          aria-label="Close overlay"
        >
          Close ×
        </button>
        {children}
      </div>
    </div>
  );
}
export function useTimer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const id = setInterval(
      () => setSeconds(Math.floor((Date.now() - start) / 1000)),
      1000,
    );
    return () => clearInterval(id);
  }, []);
  return seconds;
}
