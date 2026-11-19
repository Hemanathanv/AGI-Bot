import { readFileSync } from "node:fs";

const [manifestPath, version, owner] = process.argv.slice(2);
if (!manifestPath || !version || !owner) {
  console.error("Usage: node check-desktop-images.mjs <manifest> <version> <owner>");
  process.exit(2);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const components = JSON.parse(
  readFileSync(new URL("../published-images.json", import.meta.url), "utf8"),
);
const required = ["server", "supervisor", "agent-computer", ...components];
const errors = [];
if (manifest.version !== version) {
  errors.push(`manifest version ${manifest.version} differs from ${version}`);
}
for (const name of required) {
  if (!manifest.images?.[name]?.reference) errors.push(`missing ${name}`);
}
for (const [name, image] of Object.entries(manifest.images ?? {})) {
  const reference = image?.reference;
  if (!reference?.startsWith(`ghcr.io/${owner.toLowerCase()}/`)) {
    errors.push(`${name} points outside ghcr.io/${owner.toLowerCase()}: ${reference}`);
  } else if (!/@sha256:[0-9a-f]{64}$/.test(reference)) {
    errors.push(`${name} is not pinned to a digest: ${reference}`);
  }
}
if (errors.length) {
  console.error(`Desktop release ${version} cannot be installed:\n${errors.join("\n")}`);
  process.exit(1);
}
console.log(`Verified ${required.length} digest-pinned images for ${version}.`);
