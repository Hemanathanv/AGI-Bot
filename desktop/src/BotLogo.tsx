import "./bot-logo.css";

export function BotLogo({ size = 32 }: { size?: number }) {
  return (
    <div
      role="img"
      className="circular-bot-logo"
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label="Adithya-Bot animated logo"
    >
      <div className="bot-head">
        <div className="bot-visor">
          <div className="bot-eye bot-eye-left" />
          <div className="bot-eye bot-eye-right" />
        </div>
      </div>
    </div>
  );
}
