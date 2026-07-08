#!/usr/bin/env node
// Usage (from any new project root — works on Windows, macOS, Linux):
//   npx github:rnzdvd/react-native-scaffold
// then: node scripts/setup.js

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO = 'rnzdvd/templated-rn';

const items = [
  { src: `${REPO}/_templates`, dest: '_templates' },
  { src: `${REPO}/.claude/skills`, dest: '.claude/skills' },
  { src: `${REPO}/.claude/agents`, dest: '.claude/agents' },
  { src: `${REPO}/scripts`, dest: 'scripts' },

  // This folder in your template repo should contain:
  // .mcp-template/
  //   └── .mcp.json
  { src: `${REPO}/.mcp-template`, dest: '.mcp-template' },
];

console.log('\nPulling TemplatedRN tooling...\n');

for (const { src, dest } of items) {
  console.log(`  → ${dest}`);

  const result = spawnSync(
    'npx',
    ['degit', src, dest, '--force'],
    {
      stdio: 'inherit',
      shell: true,
    }
  );

  if (result.status !== 0) {
    console.error(`\nFailed to pull ${dest}.`);
    process.exit(result.status ?? 1);
  }
}

// Move .mcp.json into the project root
const tempDir = path.join(process.cwd(), '.mcp-template');
const sourceFile = path.join(tempDir, '.mcp.json');
const targetFile = path.join(process.cwd(), '.mcp.json');

if (fs.existsSync(sourceFile)) {
  fs.copyFileSync(sourceFile, targetFile);
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log('  ✓ .mcp.json');
}

console.log('\nDone! Run `node scripts/setup.js` to initialize the project.\n');
