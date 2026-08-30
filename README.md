# DT Diorama

Website and project assets for the **Research Train Diorama Transfer** initiative.

The site presents a detailed HO-scale Canadian railway diorama originally built as a physical demonstration platform for Digital Technologies research. Its intended audiences include museums, academic institutions, model railway organizations, and other potential recipients interested in continuing or repurposing the platform.

Deployments:

- GitHub Pages: https://patrickpaul-perso.github.io/dt-diorama/
- ChatGPT Sites: https://research-train-diorama.patpaul.chatgpt.site

## Current content

- Original research vision covering AI, analytics, NLP, computer vision, Industrial IoT, automation, and train logistics
- Academic development history involving multiple undergraduate students, hands-on term work, and conference-style presentation of results
- Canadian-themed scenic areas and two-level railway operation
- Transfer package, including approximately 30 modular sections and their transport crates
- Corrected table structure: two table sections, ten wheeled legs, and three additional centre-span supports
- Locally stored production images with no Google Photos runtime dependency
- Printable English and French one-page summaries linked directly from the bilingual website

## Repository structure

```text
app/                       Main page and site styling
Dockerfile                 Multi-stage Node.js build and Apache runtime image
.dockerignore              Files excluded from the container build context
public/images/             Production images used by the site
public/documents/          Printable PDF summaries served by the site
documents/one-pager/       Working source and supporting one-pager materials
project-notes/             Confirmed project facts and editorial guidance
tests/                     Rendered-output checks
.openai/hosting.json       ChatGPT Sites project association
```

## Local development

Requirements:

- Node.js 22.13 or newer
- npm
- Linux environment for the supplied build helpers

```bash
npm ci
npm run dev
```

For a production validation:

```bash
npm test
```

To build and validate the static GitHub Pages export:

```bash
npm run test:pages
```

The `Deploy GitHub Pages` workflow publishes the `out/` directory whenever a
change is pushed to `main`. The Pages build uses `/dt-diorama` as its base path;
the ChatGPT Sites build continues to use the domain root.

## Containerized Apache preview

This workflow requires Git and Docker only. Node.js and npm run inside the
container build and do not need to be installed on the Linux host.

Clone the repository and build the image from its root directory:

```bash
git clone git@github.com:PatrickPaul-Perso/dt-diorama.git
cd dt-diorama
docker build --tag dt-diorama:local .
```

The Dockerfile uses two stages:

1. `node:22-bookworm-slim` installs the locked dependencies and generates the
   static Next.js export.
2. `httpd:2.4-alpine` contains only Apache and the generated static site.

Start a disposable local Apache container:

```bash
docker run --detach --rm \
  --name dt-diorama-local \
  --publish 8080:80 \
  dt-diorama:local
```

Open http://localhost:8080/dt-diorama/ and verify the server and printable PDFs:

```bash
docker ps --filter name=dt-diorama-local
docker logs dt-diorama-local
curl --head http://localhost:8080/dt-diorama/
curl --head http://localhost:8080/dt-diorama/documents/diorama-one-pager-en.pdf
curl --head http://localhost:8080/dt-diorama/documents/diorama-one-pager-fr.pdf
```

Stop the test container when finished. Docker removes it automatically because
it was started with `--rm`:

```bash
docker stop dt-diorama-local
```

After pulling a newer repository version, rebuild the image and start a new
test container:

```bash
git pull --ff-only
docker build --pull --tag dt-diorama:local .
docker run --detach --rm \
  --name dt-diorama-local \
  --publish 8080:80 \
  dt-diorama:local
```

## Exporting for another Apache server

The generated files can be extracted from the tested image without installing
Node.js or npm on either the build host or the destination web server:

```bash
mkdir -p apache-export
docker create --name dt-diorama-export dt-diorama:local
docker cp \
  dt-diorama-export:/usr/local/apache2/htdocs/dt-diorama/. \
  ./apache-export/
docker rm dt-diorama-export
```

Copy the contents of `apache-export/` to the destination Apache server under
its `/dt-diorama/` URL path. For a standard document root, an example target is:

```text
/var/www/html/dt-diorama/
```

The current static build intentionally uses `/dt-diorama` as its base path for
GitHub Pages compatibility. It must therefore be published at a URL such as
`https://example.org/dt-diorama/`. Hosting it directly at the root of another
domain requires a root-path build configuration followed by a new image build.

After copying the files, verify at least the page and both PDF documents:

```bash
curl --head https://example.org/dt-diorama/
curl --head https://example.org/dt-diorama/documents/diorama-one-pager-en.pdf
curl --head https://example.org/dt-diorama/documents/diorama-one-pager-fr.pdf
```

## Content status

The website uses **approximately 30 modules** intentionally because the exact inventory count remains approximate. Research examples are described as the platform's original demonstration concepts. Computers, cameras, networking equipment, and sensors are not represented as included transfer equipment.

The website is the primary public reference. Its English and French one-page PDF summaries are supporting printable documents and are available from the corresponding language version of the site.
