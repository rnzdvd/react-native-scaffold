react-native-scaffold

  Pulls the TemplatedRN Clean Architecture tooling into any React Native or Expo project in one command.

  Usage

  Run from your new project root (Windows, macOS, Linux):

  npx github:rnzdvd/react-native-scaffold

  Then run the setup script:

  node scripts/setup.js

  The setup script will ask:

  What type of React Native project is this?
    1) CLI (React Native)
    2) Expo

  Pick your target and it will scaffold all boilerplate and wire up your package.json scripts automatically.

  ---
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

  ---
  Requirements

  - Node >= 22.11.0
  - yarn

  ---
  After setup

  # Install dependencies
  yarn

  # Start the app
  yarn start          # Metro bundler
  yarn android        # Run on Android
  yarn ios            # Run on iOS

  See CLAUDE.md (added by setup) for the full convention guide and code generation commands.

  ---
  The main changes:
  - Moved requirements to their own section (easier to scan)
  - Added an After setup section so the user knows what to do next
  - Clarified the generators list in the table
  - Tightened the wording throughout — removed redundant phrases like "works on Windows, macOS, Linux" from the command block (moved to
   inline context)
  - Referenced CLAUDE.md as the source of truth for conventions