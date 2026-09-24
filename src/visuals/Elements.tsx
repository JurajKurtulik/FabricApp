import type { CSSProperties, ReactNode } from "react";
import { Product } from "./Product";
import { titles } from "../content/scenes";
export function Title({ n, section }: { n: number; section: string }) {
  return (
    <header className="scene-heading">
      <div className="eyebrow">{section}</div>
      <h2>{titles[n - 1]}</h2>
    </header>
  );
}
export function At({
  x,
  y,
  children,
  className = "",
  width = 320,
}: {
  x: number;
  y: number;
  children: ReactNode;
  className?: string;
  width?: number;
}) {
  return (
    <div
      className={"at " + className}
      style={
        {
          left: x,
          top: y,
          width,
          "--node-x": `${x}px`,
          "--node-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
export function Node({
  name,
  label,
  verb,
  size = 78,
}: {
  name?: Parameters<typeof Product>[0]["name"];
  label: string;
  verb?: string;
  size?: number;
}) {
  return (
    <div className="node">
      {name && <Product name={name} size={size} />}
      <strong>{label}</strong>
      {verb && <span>{verb}</span>}
    </div>
  );
}
export function BusinessEvent() {
  return (
    <div className="business-event">
      <div className="event-core" />
      <span>BUSINESS EVENT</span>
    </div>
  );
}
export function AnalyticsSurface() {
  return (
    <div className="surface analytics">
      <div className="surface-top">
        <Product name="powerBI" size={36} />
        <Product name="rti" size={36} />
        <span>Operational signals</span>
        <small>LIVE</small>
      </div>
      <div className="chart-meta">
        <span>Event activity</span>
        <span>Illustrative view</span>
      </div>
      <svg
        viewBox="0 0 600 210"
        className="chart"
        role="img"
        aria-label="Illustrative event trend with an unusual peak"
      >
        <path className="chart-grid" d="M0 40H600 M0 100H600 M0 160H600" />
        <path
          className="chart-area"
          d="M0 170 L50 150 100 165 150 100 200 130 250 120 300 65 350 100 400 30 450 95 500 75 550 110 600 60V210H0Z"
        />
        <path
          className="chart-trace"
          d="M0 170 L50 150 100 165 150 100 200 130 250 120 300 65 350 100 400 30 450 95 500 75 550 110 600 60"
        />
      </svg>
      <div className="surface-bottom">
        <span>Trends</span>
        <span>Context</span>
        <span>Drivers</span>
      </div>
    </div>
  );
}
export function ApplicationSurface() {
  return (
    <div className="surface application">
      <div className="surface-top">
        <Product name="apps" size={36} />
        <span>Exception workspace</span>
        <small>CONNECTED</small>
      </div>
      <div className="case-heading">
        <span>Case / Event reference</span>
        <b>Investigation</b>
      </div>
      <div className="case-row">
        <span>Owner</span>
        <strong>Operations team</strong>
      </div>
      <div className="case-row">
        <span>Status</span>
        <strong>
          <i className="status-dot" /> In review
        </strong>
      </div>
      <div className="note-line">Notes and decisions stay with the case.</div>
      <div className="surface-bottom actions">
        <span>Open case</span>
        <span>Assign</span>
        <span>Resolve</span>
      </div>
    </div>
  );
}
export function CodeSurface() {
  return (
    <div className="code-surface">
      <div className="editor-bar">
        <i />
        <i />
        <i />
        <span>model.ts · TypeScript</span>
      </div>
      <pre>
        <code>
          <span className="comment">
            // Application model · illustrative TypeScript
          </span>
          {"\n"}
          <b>type</b> Case = {"{"}
          {"\n"} id: <em>string</em>;{"\n"} eventId: <em>string</em>;{"\n"}{" "}
          owner: <em>string</em>;{"\n"} status: <em>'open' | 'resolved'</em>;
          {"\n"}
          {"}"}
          {"\n\n"}
          <b>type</b> Note = {"{"} caseId: <em>string</em>; text:{" "}
          <em>string</em> {"}"}
          {"\n"}
          <b>type</b> Escalation = {"{"} caseId: <em>string</em> {"}"}
          <span className="cursor">▍</span>
        </code>
      </pre>
    </div>
  );
}
