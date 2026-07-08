# React Native Scaffold

A scaffold that copies boilerplate and wires up your `package.json` scripts automatically for CLI or Expo projects.

**Stack:** React Native · NativeWind · Expo · MobX · hygen · TypeScript · Claude Code Skills & Sub agents

---

## Getting started

Run inside an existing React Native project directory:

```bash
npx github:rnzdvd/react-native-scaffold
```

Then run the setup script:

```bash
node scripts/setup.js
```

You'll be prompted to pick your project type:

```
What type of React Native project is this?
  1) CLI (React Native)
  2) Expo
```

---

## What the scaffold copies into your project

| Path | Purpose |
| --- | --- |
| `_templates/` | hygen generators — component, screen, usecase, controller, presenter, gateway, repo, store, entity |
| `CLAUDE.md` | Claude Code architecture guide |
| `.claude/skills/` | Claude Code skill definitions for UI generation and API wiring |
| `scripts/` | Setup script |

---

## After scaffolding

```bash
# 1. Install dependencies
yarn

# 2. Start the app
yarn start    # Metro bundler
yarn android  # run on Android
yarn ios      # run on iOS
```

---

## Architecture

```
View (pure UI, props only)
  ↑ props
Container (Observer, wires controller + presenter)
  ↓ calls                          ↑ reads
Controller (orchestrates usecases)   Presenter (reads store, read-only)
  ↓ calls                               ↑ reads
UseCase (business logic)             Store (MobX observable state)
  ↓ calls               ↓ calls          ↑ runInAction
ApiGateway (HTTP)    Repository (writes to store)
```

Every feature is scaffolded with hygen generators — never write boilerplate by hand.

---

## hygen generator commands

| Command | Creates |
| --- | --- |
| `yarn component` | `container.tsx` + `view.tsx` |
| `yarn screen` | `screen.tsx` |
| `yarn case` | `usecase.ts` + `test.ts` |
| `yarn controller` | `controller.ts` |
| `yarn presenter` | `presenter.ts` |
| `yarn gateway` | `<module>.gateway.ts` |
| `yarn repo` | `repository.ts` |
| `yarn store` | `store.ts` |
| `yarn entity` | `entity.ts` |
| `yarn container` | `container.tsx` only |

See `CLAUDE.md` for the full convention guide.

---

## Requirements

- Node >= 22.11.0
- yarn
