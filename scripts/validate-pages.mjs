import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

assert.match(html, /\/dt-diorama\/_next\//, "Next.js assets must use the repository base path");
assert.match(html, /\/dt-diorama\/images\/diorama-mountain\.jpg/, "Diorama images must use the repository base path");
assert.match(html, /\/dt-diorama\/favicon\.svg/, "The favicon must use the repository base path");
assert.doesNotMatch(html, /(?:src|href)=["']\/(?:_next|images|favicon\.svg)/, "Root-relative assets would break on GitHub Pages");

await Promise.all([
  access(new URL("../out/.nojekyll", import.meta.url)),
  access(new URL("../out/favicon.svg", import.meta.url)),
  access(new URL("../out/images/diorama-mountain.jpg", import.meta.url)),
  access(new URL("../out/images/scene-capital-station.jpg", import.meta.url)),
  access(new URL("../out/documents/diorama-one-pager-en.pdf", import.meta.url)),
  access(new URL("../out/documents/diorama-one-pager-fr.pdf", import.meta.url)),
]);

assert.match(html, /\/dt-diorama\/documents\/diorama-one-pager-en\.pdf/i);

console.log("Validated GitHub Pages export and /dt-diorama asset paths.");
