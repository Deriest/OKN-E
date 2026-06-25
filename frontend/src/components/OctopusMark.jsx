import React from "react";

// Abstract node-graph octopus mark (recreation of the OKN logo icon).
// Central hub with radiating stems to terminal nodes; one hexagon node at top.
export const OctopusMark = ({ size = 40, className = "", color = "currentColor" }) => {
  const nodes = [
    { x: 50, y: 12, type: "hex", r: 9 },
    { x: 82, y: 26, type: "circle", r: 6 },
    { x: 88, y: 56, type: "circle", r: 5 },
    { x: 70, y: 84, type: "circle", r: 6 },
    { x: 30, y: 84, type: "circle", r: 6 },
    { x: 12, y: 56, type: "circle", r: 5 },
    { x: 18, y: 26, type: "circle", r: 6 },
  ];
  const cx = 50, cy = 50;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" aria-hidden="true">
      {nodes.map((n, i) => (
        <line key={`l${i}`} x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      ))}
      <circle cx={cx} cy={cy} r="11" fill={color} />
      {nodes.map((n, i) =>
        n.type === "hex" ? (
          <polygon
            key={`n${i}`}
            points={hexPoints(n.x, n.y, n.r)}
            fill={color}
          />
        ) : (
          <circle key={`n${i}`} cx={n.x} cy={n.y} r={n.r} fill={color} />
        )
      )}
    </svg>
  );
};

function hexPoints(cx, cy, r) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 90);
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

export default OctopusMark;
