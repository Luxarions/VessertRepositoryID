# Vessert

Pure Vanilla JavaScript GitHub repository UI library.

## Install

```bash
npm install vessert
```

Usage

Full library (engine + UI):

```js
import { mountApp } from 'vessert';

const root = document.getElementById( 'root' );
mountApp( root );
```

Engine only (Node.js, CLI, tests):

```js
import { calculateStarToggle, escapeHtml } from 'vessert/core';
```

UI only (browser):

```js
import { FileList } from 'vessert/ui';
```

Development

Clone the repo, then serve the project root with any static server:

```bash
# Option 1 — Python (built-in)
python3 -m http.server 3000

# Option 2 — Node.js
npx serve .
```

Then open http://localhost:3000/examples/basic.html.

No build step. No transpile. No bundler. src/ is shipped as-is.

Structure

· examples/ — HTML demos (not published to npm)
· src/ — JavaScript source (pure JS, ES modules)
· src/engine/ — Pure logic (no DOM)
· src/components/ — DOM components

Conventions:

· No index.js anywhere — barrels are folder.js next to folder/.
· One topic per file.
· Dependencies flow one way: Constants → Utils → engine → components.
· VessertCore.js is DOM-free; VessertUi.js requires a browser.

License

MIT
