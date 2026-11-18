import type { CSSProperties } from "react";

export type BotColorPalette = {
  name: string;
  eyeColor: string;
  eyeGlow: string;
  visorBorder: string;
  headBorder: string;
  chassisBg: string;
  outerGlow: string;
};

export const BOT_COLOR_PALETTES: readonly BotColorPalette[] = [
  {
    name: "cyan",
    eyeColor: "#00f0ff",
    eyeGlow: "rgba(0, 240, 255, 0.95)",
    visorBorder: "rgba(0, 240, 255, 0.6)",
    headBorder: "rgba(0, 240, 255, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #38bdf8 0%, #0369a1 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(0, 240, 255, 0.4)",
  },
  {
    name: "emerald",
    eyeColor: "#10b981",
    eyeGlow: "rgba(16, 185, 129, 0.95)",
    visorBorder: "rgba(16, 185, 129, 0.6)",
    headBorder: "rgba(16, 185, 129, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #34d399 0%, #047857 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(16, 185, 129, 0.4)",
  },
  {
    name: "violet",
    eyeColor: "#c084fc",
    eyeGlow: "rgba(192, 132, 252, 0.95)",
    visorBorder: "rgba(168, 85, 247, 0.6)",
    headBorder: "rgba(168, 85, 247, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #c084fc 0%, #6b21a8 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(192, 132, 252, 0.4)",
  },
  {
    name: "amber",
    eyeColor: "#fbbf24",
    eyeGlow: "rgba(251, 191, 36, 0.95)",
    visorBorder: "rgba(245, 158, 11, 0.6)",
    headBorder: "rgba(245, 158, 11, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #fbbf24 0%, #b45309 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(251, 191, 36, 0.4)",
  },
  {
    name: "rose",
    eyeColor: "#f43f5e",
    eyeGlow: "rgba(244, 63, 94, 0.95)",
    visorBorder: "rgba(244, 63, 94, 0.6)",
    headBorder: "rgba(244, 63, 94, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #fb7185 0%, #9f1239 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(244, 63, 94, 0.4)",
  },
  {
    name: "blue",
    eyeColor: "#3b82f6",
    eyeGlow: "rgba(59, 130, 246, 0.95)",
    visorBorder: "rgba(59, 130, 246, 0.6)",
    headBorder: "rgba(59, 130, 246, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #60a5fa 0%, #1e40af 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(59, 130, 246, 0.4)",
  },
  {
    name: "lime",
    eyeColor: "#a3e635",
    eyeGlow: "rgba(163, 230, 53, 0.95)",
    visorBorder: "rgba(132, 204, 22, 0.6)",
    headBorder: "rgba(132, 204, 22, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #a3e635 0%, #3f6212 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(163, 230, 53, 0.4)",
  },
  {
    name: "magenta",
    eyeColor: "#f472b6",
    eyeGlow: "rgba(244, 114, 182, 0.95)",
    visorBorder: "rgba(236, 72, 153, 0.6)",
    headBorder: "rgba(236, 72, 153, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #f472b6 0%, #86198f 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(244, 114, 182, 0.4)",
  },
  {
    name: "orange",
    eyeColor: "#fb923c",
    eyeGlow: "rgba(251, 146, 60, 0.95)",
    visorBorder: "rgba(249, 115, 22, 0.6)",
    headBorder: "rgba(249, 115, 22, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #fb923c 0%, #9a3412 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(251, 146, 60, 0.4)",
  },
  {
    name: "teal",
    eyeColor: "#2dd4bf",
    eyeGlow: "rgba(45, 212, 191, 0.95)",
    visorBorder: "rgba(20, 184, 166, 0.6)",
    headBorder: "rgba(20, 184, 166, 0.75)",
    chassisBg: "radial-gradient(circle at 35% 30%, #2dd4bf 0%, #115e59 60%, #030712 100%)",
    outerGlow: "0 0 10px rgba(45, 212, 191, 0.4)",
  },
];

export function getRobotPalette(seed: string): BotColorPalette & { blinkDelay: number } {
  let hash = 0x811c9dc5;
  const s = seed || "adithya";
  for (let i = 0; i < s.length; i++) {
    hash ^= s.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const positive = hash >>> 0;
  const palette = BOT_COLOR_PALETTES[positive % BOT_COLOR_PALETTES.length];
  const blinkDelay = (positive % 28) / 10;
  return { ...palette, blinkDelay };
}

export function AdithyaRobotFace({
  seed,
  name,
  size = 32,
  state = "idle",
}: {
  seed: string;
  name?: string;
  size?: number;
  state?: "idle" | "working" | "waiting" | "listening" | "done" | "thinking";
}) {
  const palette = getRobotPalette(seed);
  const isWorking = state === "working" || state === "thinking";

  return (
    <div
      role="img"
      aria-label={name || "Adithya-Bot"}
      className="adithya-robot-face select-none shrink-0"
      style={
        {
          width: `${size}px`,
          height: `${size}px`,
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: palette.chassisBg,
          boxShadow: palette.outerGlow,
          boxSizing: "border-box",
        } as CSSProperties
      }
    >
      <div
        className="bot-head-inner"
        style={{
          width: "90%",
          height: "90%",
          borderRadius: "50%",
          background: "#090d16",
          border: `1.5px solid ${palette.headBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.9)",
        }}
      >
        <div
          className="bot-visor-inner"
          style={{
            width: "76%",
            height: "52%",
            background: "#030712",
            borderRadius: "9999px",
            border: `1px solid ${palette.visorBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            padding: "0 10%",
            boxSizing: "border-box",
            boxShadow: `inset 0 0 8px ${palette.visorBorder}`,
          }}
        >
          <div
            className="bot-eye-dot bot-eye-left"
            style={{
              width: "30%",
              height: "60%",
              background: palette.eyeColor,
              borderRadius: "9999px",
              boxShadow: `0 0 6px ${palette.eyeColor}, 0 0 12px ${palette.eyeGlow}`,
              animation: isWorking
                ? "bot-eye-pulse 1.2s infinite ease-in-out"
                : `bot-eye-blink 3.8s infinite ease-in-out ${palette.blinkDelay}s`,
              transformOrigin: "center center",
            }}
          />
          <div
            className="bot-eye-dot bot-eye-right"
            style={{
              width: "30%",
              height: "60%",
              background: palette.eyeColor,
              borderRadius: "9999px",
              boxShadow: `0 0 6px ${palette.eyeColor}, 0 0 12px ${palette.eyeGlow}`,
              animation: isWorking
                ? "bot-eye-pulse 1.2s infinite ease-in-out"
                : `bot-eye-blink 3.8s infinite ease-in-out ${palette.blinkDelay + 0.04}s`,
              transformOrigin: "center center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
