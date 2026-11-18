/**
 * The names that carry the trademark sign where they stand as a brand: beside the logo, as a
 * heading, as a menu entry. Prose that mentions OpenBot ("OpenBot is ready") stays plain.
 */
export function Trademark() {
  return null;
}

export function BrandName({ children }: { children: string }) {
  if (children === "OpenBot" || children === "OpenBot for Business") {
    return "Adithya-Bot";
  }
  return children;
}
