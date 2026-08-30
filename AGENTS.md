# AGENTS.md

## Source of truth

The canonical source for this project is the GitHub repository:

- Repository: https://github.com/PatrickPaul-Perso/dt-diorama
- Authoritative branch: `main`

From this point forward, treat the latest committed state of `origin/main` as the authoritative reference for the website, its content, images, documents, configuration, and project notes.

Do not treat any hosted-site checkout, deployment output, chat attachment, generated preview, temporary workspace, or older local copy as authoritative.

## Required workflow

Before making changes:

1. Identify the `PatrickPaul-Perso/dt-diorama` repository.
2. Fetch or pull the latest `origin/main`.
3. Review the repository's current files and existing instructions.
4. Base all edits on that current repository state.

When making changes:

1. Modify the repository source files and locally stored assets.
2. Keep the website independent from the Google Photos album or other temporary external image sources.
3. Preserve existing project content unless the user explicitly requests a change.
4. Clearly distinguish confirmed facts from approximate values and unfinished concepts.
5. Do not edit generated build output when a source file exists.

After making changes:

1. Run the relevant build, validation, or tests.
   - Run `npm test` for the ChatGPT Sites output when site source changes.
   - Run `npm run test:pages` when a change could affect the GitHub Pages export.
2. Commit the completed changes to GitHub with a clear message.
3. Push the changes to the appropriate branch.
4. Update or redeploy the hosted site from the repository when deployment is part of the request.
5. Report the commit or pull request and any deployment status.

## Deployment targets

- GitHub Pages publishes the static export at
  `https://patrickpaul-perso.github.io/dt-diorama/` from the workflow in
  `.github/workflows/pages.yml`.
- ChatGPT Sites remains a separate deployment target and continues to build
  from the domain root.
- Preserve both targets. GitHub-specific path handling must be conditional and
  must not break the ChatGPT Sites build.

## Reconciliation rule

If the live hosted website differs from GitHub, use GitHub `main` as the baseline. Do not copy live-site differences back into the repository unless the user explicitly asks to preserve or reconcile those differences.

If project conversation details, the published one-page summaries, and the repository disagree, treat the website content on `main` as the primary public reference and flag the conflict before replacing confirmed repository content. Approximate values may remain approximate when the exact inventory is not finalized.
