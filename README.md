# DT Diorama

Website and project assets for the **Research Train Diorama Transfer** initiative.

The site presents a detailed HO-scale Canadian railway diorama originally built as a physical demonstration platform for Digital Technologies research. Its intended audiences include museums, academic institutions, model railway organizations, and other potential recipients interested in continuing or repurposing the platform.

Live site: https://research-train-diorama.patpaul.chatgpt.site

## Current content

- Original research vision covering AI, analytics, NLP, computer vision, Industrial IoT, automation, and train logistics
- Academic development history involving multiple undergraduate students, hands-on term work, and conference-style presentation of results
- Canadian-themed scenic areas and two-level railway operation
- Transfer package, including approximately 30 modular sections and their transport crates
- Corrected table structure: two table sections, ten wheeled legs, and three additional centre-span supports
- Locally stored production images with no Google Photos runtime dependency
- Placeholder structure for the one-pager under `documents/one-pager/`

## Repository structure

```text
app/                       Main page and site styling
public/images/             Production images used by the site
documents/one-pager/       One-pager source and exports when finalized
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

## Content status

The website uses **approximately 30 modules** intentionally because the exact inventory count remains approximate. Research examples are described as the platform's original demonstration concepts. Computers, cameras, networking equipment, and sensors are not represented as included transfer equipment.

The unfinished one-pager will be reconciled with the website once its content is finalized.
