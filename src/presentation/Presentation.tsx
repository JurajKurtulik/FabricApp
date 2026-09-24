import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { sceneComponents } from "../scenes";
import { titles } from "../content/scenes";
import { ParticleField } from "../motion/ParticleField";
import { usePresentationNavigation } from "./usePresentationNavigation";
import { PresenterOverlay, Overlay, useTimer } from "./PresenterOverlay";
import { motionTokens } from "../motion/motionTokens";
export default function Presentation() {
  const nav = usePresentationNavigation();
  const { sceneIndex, overlay, setOverlay } = nav;
  const reduced = useReducedMotion();
  const [scale, setScale] = useState(() =>
    Math.min(innerWidth / 1920, innerHeight / 1080),
  );
  const [active, setActive] = useState(true);
  const elapsed = useTimer();
  const Scene = sceneComponents[sceneIndex];
  useEffect(() => {
    const resize = () =>
      setScale(Math.min(innerWidth / 1920, innerHeight / 1080));
    addEventListener("resize", resize);
    return () => removeEventListener("resize", resize);
  }, []);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const move = () => {
      setActive(true);
      clearTimeout(timer);
      timer = setTimeout(() => setActive(false), 2500);
    };
    move();
    addEventListener("pointermove", move);
    addEventListener("keydown", move);
    const visible = () =>
      document.documentElement.classList.toggle(
        "document-hidden",
        document.hidden,
      );
    document.addEventListener("visibilitychange", visible);
    return () => {
      clearTimeout(timer);
      removeEventListener("pointermove", move);
      removeEventListener("keydown", move);
      document.removeEventListener("visibilitychange", visible);
    };
  }, []);
  useEffect(() => {
    document.title = `${sceneIndex + 1}/19 · ${titles[sceneIndex]}`;
  }, [sceneIndex]);
  const entrances = [
    { opacity: 0, scale: 0.96 },
    { opacity: 0, x: 90 },
    { opacity: 0, scale: 1.08 },
    { opacity: 0, y: 50 },
    { opacity: 0, rotateX: 8 },
  ];
  return (
    <div className={"viewport " + (!active && !overlay ? "idle" : "")}>
      <main
        className="stage"
        style={{ transform: `translate(-50%,-50%) scale(${scale})` }}
        aria-label="Fabric Apps and Rayfin presentation"
        inert={overlay ? true : undefined}
      >
        <div
          className={"universe accent-" + Math.floor(sceneIndex / 4)}
          aria-hidden="true"
        >
          <div className="ambient-glow" />
          <div className="filament" />
          <div className="technical-grid" />
        </div>
        <ParticleField
          key={
            sceneIndex === 0
              ? "opening"
              : sceneIndex === 18
                ? "closing"
                : "ambient"
          }
          opening={sceneIndex === 0}
          closing={sceneIndex === 18}
        />
        <AnimatePresence initial={false} mode="sync">
          <motion.section
            className={"scene scene-" + (sceneIndex + 1)}
            key={sceneIndex}
            aria-label={`Scene ${sceneIndex + 1}: ${titles[sceneIndex]}`}
            initial={reduced ? false : entrances[sceneIndex % 5]}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 }}
            exit={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, scale: sceneIndex % 2 ? 0.98 : 1.025 }
            }
            transition={{
              duration: reduced ? 0 : motionTokens.sceneTransition,
              ease: motionTokens.easeOut,
            }}
          >
            <Scene />
          </motion.section>
        </AnimatePresence>
        <div className="stage-brand">FABRIC APPS / RAYFIN</div>
      </main>
      <nav
        className={"navigation " + (!active ? "dim" : "")}
        aria-label="Presentation controls"
        inert={overlay ? true : undefined}
      >
        <button
          aria-label="Previous scene"
          disabled={sceneIndex === 0}
          onClick={() => nav.navigate(sceneIndex - 1)}
        >
          ←
        </button>
        <span aria-live="polite">
          {String(sceneIndex + 1).padStart(2, "0")} / 19
        </span>
        <button
          aria-label="Next scene"
          disabled={sceneIndex === 18}
          onClick={() => nav.navigate(sceneIndex + 1)}
        >
          →
        </button>
        <div className="nav-extra">
          <button
            aria-label="Scene overview (O)"
            onClick={() => setOverlay("overview")}
          >
            Overview
          </button>
          <button
            aria-label="Speaker notes (N)"
            onClick={() => setOverlay("notes")}
          >
            Notes
          </button>
          <button
            aria-label="Toggle fullscreen (F)"
            onClick={() => void nav.toggleFullscreen()}
          >
            {nav.fullscreen ? "Exit full screen" : "Full screen"}
          </button>
        </div>
      </nav>
      <div
        className="progress"
        role="progressbar"
        aria-label="Presentation progress"
        aria-valuemin={1}
        aria-valuemax={19}
        aria-valuenow={sceneIndex + 1}
      >
        <div style={{ width: `${((sceneIndex + 1) / 19) * 100}%` }} />
      </div>
      {overlay === "notes" && (
        <PresenterOverlay
          index={sceneIndex}
          close={() => setOverlay(null)}
          elapsed={elapsed}
        />
      )}{" "}
      {overlay === "overview" && (
        <Overlay title="Scene overview" close={() => setOverlay(null)}>
          <h2>From Insight to Action</h2>
          <p className="shortcut-help">
            Arrow keys / Space: navigate · F: fullscreen · N: notes · O:
            overview · Esc: close
          </p>
          <div className="overview-list">
            {titles.map((title, i) => (
              <button
                key={title}
                aria-current={i === sceneIndex ? "step" : undefined}
                onClick={() => {
                  nav.navigate(i);
                  setOverlay(null);
                }}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {title}
              </button>
            ))}
          </div>
        </Overlay>
      )}
      {nav.notice && (
        <div
          role="status"
          className="notice"
          onClick={() => nav.toggleFullscreen()}
        >
          {nav.notice}
        </div>
      )}
    </div>
  );
}
