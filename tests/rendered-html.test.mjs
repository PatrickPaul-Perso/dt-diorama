import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

test("renders the academic story without publishing a specific module identifier", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /Multiple undergraduate students contributed/i);
  assert.match(html, /student-conference-presentation\.jpg/i);
  assert.doesNotMatch(html, /\bmodule\s+29\b/i);
  assert.match(html, /AI-assisted production/i);
  assert.match(html, /Generative AI tools supported the production of this website/i);
  assert.match(html, /Afficher le site en français/i);
  assert.match(html, /View the printable one-page summary \(PDF\)/i);
  assert.match(html, /\/documents\/diorama-one-pager-en\.pdf/i);
});

test("localizes the footer brand link", async () => {
  const source = await readFile(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /footerBrand: "Research Rail Diorama"/);
  assert.match(source, /footerBrand: "Diorama ferroviaire de recherche"/);
  assert.match(source, /\{content\.footerBrand\}<\/a>/);
});

test("links each language to its corresponding printable PDF", async () => {
  const source = await readFile(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /onePagerHref: "\/documents\/diorama-one-pager-en\.pdf"/);
  assert.match(source, /onePagerHref: "\/documents\/diorama-one-pager-fr\.pdf"/);
  assert.match(source, /Consulter le document synthèse imprimable \(PDF\)/);
  assert.doesNotMatch(source, /one-pager · Coming soon|Document détaillé · À venir/);
});
