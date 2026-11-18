import Avatar from "boring-avatars";
import { useBotLook } from "@/components/agents/bot-look";
import { BotOrb } from "@/components/agents/bot-orb";

/** A Bot's avatar: its orb, or its face in a skin that has not opted in to orbs. */
export function AbstractAvatar({
  name,
  seed,
  size = 40,
}: {
  name: string;
  seed: string;
  size?: number;
}) {
  return <BotOrb name={name} seed={seed} size={size} />;
}
