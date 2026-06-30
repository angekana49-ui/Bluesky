# Contributing to Cirrus

Thanks for your interest in improving Cirrus! This template is open source under
the [MIT License](./LICENSE), and contributions of all sizes are welcome.

## Ways to contribute

- 🐛 **Report bugs** — open an issue with steps to reproduce.
- 💡 **Suggest features** — open an issue describing the use case.
- 📝 **Improve docs** — fixes to the README or [DOCS.md](./DOCS.md) are always welcome.
- 🔧 **Submit code** — see the workflow below.

## Development setup

```bash
git clone https://github.com/angekana49-ui/Bluesky.git
cd Bluesky
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Pull request workflow

1. Fork the repository and create a branch from `main`:
   ```bash
   git checkout -b feat/my-change
   ```
2. Make your change. Keep components driven by `SiteConfig` — content belongs in
   the config object, not hard-coded in components.
3. Run the checks before pushing:
   ```bash
   npm run lint
   npm run build
   ```
4. Use clear, conventional commit messages (e.g. `feat:`, `fix:`, `docs:`).
5. Open a pull request describing **what** changed and **why**.

## Code style

- TypeScript, strict mode — no `any` unless unavoidable.
- Follow the existing component and naming conventions.
- Prefer pure SVG over chart libraries (keep the zero-dependency promise).
- Keep the design tokens consistent with the palette in the README.

## Code of conduct

Be respectful and constructive. We want this to be a welcoming project for
everyone.
