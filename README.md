# Vessert

Pure Vanilla JavaScript GitHub repository UI library with Three.js-inspired modular architecture and clean OOP inheritance hierarchies.

## Install

```bash
npm install vessert
```

## Usage

### Full Library (Application UI + Reactive Core):

```js
import { mountApp } from 'vessert';

const root = document.getElementById( 'root' );
mountApp( root );
```

### Headless Core (DOM-free for Node.js, CLI, testing):

```js
import { Orchestrator, Counter, StarCounter, EventDispatcher } from 'vessert/core';
```

### UI Component Layer (Browser):

```js
import { FileList, FileViewer, GitHubHeader, GridHelper } from 'vessert/ui';
```

## Architecture & Domain Hierarchy

Modeled after Three.js structure:

```text
src/
├── constants.js          # Global constants
├── utils.js              # Pure utilities
├── icons.js              # Procedural SVG icons
├── Vessert.js            # Main entry point (Three.js style)
├── Vessert.Core.js       # Headless core export alias
├── VessertCore.js        # Headless core entry point
├── Vessert.Ui.js         # UI component export alias
├── VessertUi.js          # UI component entry point
│
├── renderers/            # Three.js-style renderers
│   ├── RepoRenderer.js   # Full repository UI renderer & lifecycle
│   └── renderers.js
│
├── core/                 # EventDispatcher, State, Orchestrator
│   ├── EventDispatcher.js
│   ├── State.js
│   ├── Orchestrator.js
│   └── core.js
│
├── counters/             # OOP Counter inheritance (Counter -> StarCounter, etc.)
│   ├── Counter.js
│   ├── StarCounter.js
│   ├── ForkCounter.js
│   ├── WatchCounter.js
│   └── counters.js
│
├── modals/               # OOP Modal inheritance (Modal -> SearchModal, etc.)
│   ├── Modal.js
│   ├── SearchModal.js
│   ├── CommitHistoryModal.js
│   └── modals.js
│
├── header/               # Header & Navigation
│   ├── GitHubHeader.js
│   ├── NavTabs.js
│   └── header.js
│
├── repo/                 # Repository metadata, branches, clone, grid
│   ├── RepoMeta.js
│   ├── BranchAndCodeBar.js
│   ├── Clone.js
│   ├── RepoDetailSections.js
│   ├── GridHelper.js
│   └── repo.js
│
├── files/                # File explorer, syntax highlighter, code runner
│   ├── FileTree.js
│   ├── FileIcons.js
│   ├── Highlight.js
│   ├── CodeRunner.js
│   ├── FileList.js
│   ├── FileViewer.js
│   └── files.js
│
├── footer/               # Footer component & links
│   ├── Footer.js
│   └── footer.js
│
├── data/                 # Mock repository dataset
│   └── repoData.js
│
└── icons/                # 33 procedural SVG icon modules
```

## Development

Serve the project root with any static server:

```bash
# Option 1 — Python
python3 -m http.server 3000

# Option 2 — Node.js
npx serve .
```

No build step required. No runtime dependencies. `src/` is pure vanilla JavaScript ES modules.

## License

MIT
