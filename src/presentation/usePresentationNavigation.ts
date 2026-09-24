import { useCallback, useEffect, useState } from "react";
const fromHash = () => {
  const m = location.hash.match(/^#\/(\d+)$/);
  return m ? Math.max(0, Math.min(18, Number(m[1]) - 1)) : 0;
};
export function usePresentationNavigation() {
  const [sceneIndex, setScene] = useState(fromHash);
  const [overlay, setOverlay] = useState<"notes" | "overview" | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const navigate = useCallback((i: number) => {
    const n = Math.max(0, Math.min(18, i));
    setScene(n);
    location.hash = `/${n + 1}`;
  }, []);
  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      setNotice(
        "Fullscreen is unavailable in this browser. Use the browser fullscreen control.",
      );
    }
  }, []);
  useEffect(() => {
    if (location.hash !== `#/${sceneIndex + 1}`)
      history.replaceState(null, "", `#/${sceneIndex + 1}`);
    const hash = () => {
      const index = fromHash();
      if (location.hash !== `#/${index + 1}`)
        history.replaceState(null, "", `#/${index + 1}`);
      setScene(index);
    };
    const full = () => setFullscreen(Boolean(document.fullscreenElement));
    addEventListener("hashchange", hash);
    document.addEventListener("fullscreenchange", full);
    return () => {
      removeEventListener("hashchange", hash);
      document.removeEventListener("fullscreenchange", full);
    };
  }, [sceneIndex]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      const k = e.key.toLowerCase();
      if (k === "escape") {
        setOverlay(null);
        if (document.fullscreenElement)
          void document.exitFullscreen().catch(() => {});
        return;
      }
      if (e.repeat) return;
      if (k === "n" || k === "o") {
        e.preventDefault();
        const v = k === "n" ? "notes" : "overview";
        setOverlay((x) => (x === v ? null : v));
        return;
      }
      if (k === "f") {
        e.preventDefault();
        void toggleFullscreen();
        return;
      }
      if (overlay === "overview") return;
      if (["arrowright", "arrowdown", "pagedown", " "].includes(k)) {
        if (e.target instanceof HTMLButtonElement && k === " ") return;
        e.preventDefault();
        navigate(sceneIndex + 1);
      } else if (["arrowleft", "arrowup", "pageup"].includes(k)) {
        e.preventDefault();
        navigate(sceneIndex - 1);
      } else if (k === "home") {
        e.preventDefault();
        navigate(0);
      } else if (k === "end") {
        e.preventDefault();
        navigate(18);
      }
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, [sceneIndex, overlay, navigate, toggleFullscreen]);
  return {
    sceneIndex,
    navigate,
    overlay,
    setOverlay,
    fullscreen,
    toggleFullscreen,
    notice,
  };
}
