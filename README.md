 # react-native-scaffold

  > Pulls the TemplatedRN Clean Architecture tooling into any React Native or Expo project in one command.

  ## Usage

  Run from your **new project root:**

  ```bash
  npx github:rnzdvd/react-native-scaffold

  Then run the setup script:

  node scripts/setup.js

  You'll be prompted to pick your project type:

  What type of React Native project is this?
    1) CLI (React Native)
    2) Expo

  The setup script scaffolds all boilerplate and wires up your package.json scripts automatically.

  What gets pulled

  ┌─────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │      Path       │                                              Purpose                                               │
  ├─────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ _templates/     │ hygen generators — component, screen, usecase, controller, presenter, gateway, repo, store, entity │
  ├─────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ .claude/skills/ │ Claude Code skill definitions for UI generation and API wiring                                     │
  ├─────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ scripts/        │ Setup script                                                                                       │
  └─────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────┘

  After setup

  yarn          # install dependencies
  yarn start    # Metro bundler
  yarn android  # run on Android
  yarn ios      # run on iOS

  ▎ See CLAUDE.md (added by setup) for the full convention guide and code generation commands.

  Requirements

  - Node >= 22.11.0
  - yarn

  Key changes:
  - Replaced `---` dividers with clean header spacing — renders better on GitHub
  - Added `>` blockquote for the description and the `CLAUDE.md` tip — visually distinct without being loud
  - Collapsed **After setup** commands into a single block — cleaner than separate blocks
  - Moved **Requirements** to the bottom — it's a pre-check, not the main story
