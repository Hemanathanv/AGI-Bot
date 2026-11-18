import { BotLogo } from "./BotLogo";
import companyLogo from "./assets/company-logo.webp";

/** One part of setup, named for what it is about rather than counted. */
export type Section = "Install" | "AI" | "Start" | "Account";

/*
 * Setup installs, connects an AI, and starts.
 */
const SECTIONS: Section[] = ["Install", "AI", "Start"];

/**
 * Adithya-Bot's mark and name, with SPR Consultech company logo beside it.
 */
export function Lockup({ byCopilotKit = false }: { byCopilotKit?: boolean }) {
  return (
    <div
      className="lockup"
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        flexWrap: "nowrap",
      }}
    >
      <BotLogo size={28} />
      <span style={{ whiteSpace: "nowrap", fontWeight: 600 }}>Adithya-Bot</span>
      <img
        src={companyLogo}
        alt="SPR Consultech"
        className="company-logo-badge"
        style={{
          height: "20px",
          maxWidth: "110px",
          objectFit: "contain",
          borderLeft: "1px solid rgba(150, 150, 150, 0.3)",
          paddingLeft: "8px",
          marginLeft: "4px",
        }}
      />
    </div>
  );
}

/**
 * Where you are in setup, and what is left: every section by name, the current one marked.
 *
 * Beside OpenBot's mark and name, so every step says which product is being set up, including the
 * step that signs in.
 */
export function Sections({
  at,
  byCopilotKit = false,
}: {
  at: Section;
  /** "by CopilotKit" beside OpenBot's name, on the step that asks for a sign-in. */
  byCopilotKit?: boolean;
}) {
  const names = SECTIONS;
  const current = names.indexOf(at);
  return (
    <div className="setup-header">
      <Lockup byCopilotKit={byCopilotKit} />
      <ol className="steps-of sections" aria-label="Setup">
        {names.map((name, index) => (
          <li
            key={name}
            aria-current={index === current ? "step" : undefined}
            className={
              index === current
                ? "current"
                : index < current
                  ? "done"
                  : undefined
            }
          >
            {name}
          </li>
        ))}
      </ol>
    </div>
  );
}
