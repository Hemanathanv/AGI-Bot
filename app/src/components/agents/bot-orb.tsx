import { AdithyaRobotFace } from "@/components/agents/adithya-robot-face";

/**
 * Adithya-Bot Robot face avatar: each bot/conversation has its own unique eye color and blinking cadence.
 */
export function BotOrb({
  seed,
  name,
  size = 32,
  state = "idle",
}: {
  seed: string;
  name: string;
  size?: number;
  state?: "idle" | "working" | "waiting";
}) {
  return (
    <AdithyaRobotFace
      name={name}
      seed={seed}
      size={size}
      state={state}
    />
  );
}
