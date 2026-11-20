import type { Icon, IconProps } from "@tabler/icons-react";
import { forwardRef, type HTMLAttributes } from "react";
import { AdithyaRobotFace } from "@/components/agents/adithya-robot-face";

export const OpenBotLogo = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & Pick<IconProps, "size" | "stroke">
>(({ size = 24, stroke: _stroke, className, ...props }, ref) => (
  <span
    ref={ref}
    className={`inline-flex items-center justify-center shrink-0 ${className || ""}`}
    {...props}
  >
    <AdithyaRobotFace
      seed="adithyabot-master-logo"
      name="Adithya-Bot"
      size={Number(size) || 24}
    />
  </span>
)) as unknown as Icon;
OpenBotLogo.displayName = "OpenBotLogo";
