/**
 * @module Data/RepoData
 * @description Repository demo data modeling the authentic Three.js-inspired file tree and commit history.
 * @author prssbayu-oss
 */

const initialRepoData = {
	owner: 'prssbayu-oss',
	name: 'vessert',
	description: 'Pure Vanilla JavaScript GitHub repository UI library.',
	isPrivate: false,
	defaultBranch: 'main',
	branches: ['main', 'develop'],
	stars: 12,
	forks: 3,
	watching: 4,
	tagsCount: 1,
	lastCommit: {
		author: 'prssbayu-oss',
		date: '1 minute ago',
		message: 'refactor: total domain overhaul with clean Three.js OOP architecture',
		hash: 'c83b10e',
	},
	commits: [
		{
			hash: 'c83b10e',
			message: 'refactor: total domain overhaul with clean Three.js OOP architecture',
			author: 'prssbayu-oss',
			date: '1 minute ago',
			verified: true,
		},
		{
			hash: 'a9f24b1',
			message: 'feat: add GridHelper and scrollable file view support',
			author: 'prssbayu-oss',
			date: '10 minutes ago',
			verified: true,
		},
		{
			hash: 'e83a21b',
			message: 'refactor: enforce strict architectural doors and zero runtime dependencies',
			author: 'prssbayu-oss',
			date: '1 hour ago',
			verified: true,
		},
		{
			hash: '7f9c2d1',
			message: 'feat: add vanilla GitHub UI library components and engine',
			author: 'prssbayu-oss',
			date: '2 hours ago',
			verified: true,
		},
	],
	files: [
		// Top-level directories
		{
			name: 'examples',
			type: 'dir',
			lastModified: '1 minute ago',
			path: 'examples',
		},
		{
			name: 'src',
			type: 'dir',
			lastModified: '1 minute ago',
			path: 'src',
		},

		// Root repository files
		{
			name: '.gitignore',
			type: 'file',
			lastModified: '1 minute ago',
			path: '.gitignore',
			size: '180 B',
			language: 'plaintext',
			content: `node_modules/\ndist/\n.env\n.DS_Store\n*.log\n`,
		},
		{
			name: 'LICENSE',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'LICENSE',
			size: '1.1 KB',
			language: 'plaintext',
			content: `MIT License\n\nCopyright (c) 2026 prssbayu-oss\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n`,
		},
		{
			name: 'README.md',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'README.md',
			size: '2.4 KB',
			language: 'markdown',
			content: `# Vessert\n\nPure Vanilla JavaScript GitHub repository UI library.\n\n## Install\n\n\`\`\`bash\nnpm install vessert\n\`\`\`\n\n## Usage\n\n\`\`\`javascript\nimport { mountApp } from 'vessert';\n\nconst root = document.getElementById( 'root' );\nmountApp( root );\n\`\`\`\n`,
		},
		{
			name: 'index.html',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'index.html',
			size: '1.22 KB',
			language: 'html',
			content: `<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Vessert</title>\n  </head>\n  <body class="bg-[#0d1117] text-[#c9d1d9]">\n    <div id="root"></div>\n    <script type="module">\n      import { mountApp } from '/src/Vessert.js';\n      mountApp( document.getElementById('root') );\n    </script>\n  </body>\n</html>`,
		},
		{
			name: 'metadata.json',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'metadata.json',
			size: '220 B',
			language: 'json',
			content: `{\n  "name": "Vessert",\n  "description": "Pure Vanilla JavaScript GitHub repository UI library."\n}\n`,
		},
		{
			name: 'package.json',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'package.json',
			size: '890 B',
			language: 'json',
			content: `{\n  "name": "vessert",\n  "version": "0.1.0",\n  "type": "module",\n  "main": "src/Vessert.js",\n  "exports": {\n    ".": "./src/Vessert.js",\n    "./core": "./src/VessertCore.js",\n    "./ui": "./src/VessertUi.js"\n  }\n}\n`,
		},

		// Nested files: examples
		{
			name: 'basic.html',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'examples/basic.html',
			size: '850 B',
			language: 'html',
			content: `<!doctype html>\n<html>\n<head><title>Vessert Basic Example</title></head>\n<body>\n  <div id="root"></div>\n  <script type="module">\n    import { mountApp } from '../src/Vessert.js';\n    mountApp( document.getElementById('root') );\n  </script>\n</body>\n</html>\n`,
		},
		{
			name: 'oop_inheritance.html',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'examples/oop_inheritance.html',
			size: '1.4 KB',
			language: 'html',
			content: `<!-- Demonstrates class inheritance hierarchy across Counter, Modal, and EventDispatcher -->`,
		},

		// Nested files: src root
		{
			name: 'constants.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/constants.js',
			size: '1.4 KB',
			language: 'javascript',
			content: `export const VERSION = '0.1.0';\nexport const DEFAULT_BRANCH = 'main';\n`,
		},
		{
			name: 'utils.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/utils.js',
			size: '1.1 KB',
			language: 'javascript',
			content: `export function escapeHtml( str ) { return str.replace(/&/g, '&amp;'); }\n`,
		},
		{
			name: 'icons.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/icons.js',
			size: '1.8 KB',
			language: 'javascript',
			content: `export * from './icons/octocat.js';\n`,
		},
		{
			name: 'App.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/App.js',
			size: '7.8 KB',
			language: 'javascript',
			content: `export function renderApp( root ) { /* ... */ }\nexport function mountApp( root ) { /* ... */ }\n`,
		},
		{
			name: 'Vessert.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/Vessert.js',
			size: '850 B',
			language: 'javascript',
			content: `export * from './VessertCore.js';\nexport * from './VessertUi.js';\nexport { mountApp } from './App.js';\n`,
		},
		{
			name: 'VessertCore.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/VessertCore.js',
			size: '620 B',
			language: 'javascript',
			content: `export * from './core/core.js';\nexport * from './counters/counters.js';\n`,
		},
		{
			name: 'VessertUi.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/VessertUi.js',
			size: '620 B',
			language: 'javascript',
			content: `export * from './header/header.js';\nexport * from './repo/repo.js';\nexport * from './files/files.js';\n`,
		},

		// Nested files: src/core
		{
			name: 'EventDispatcher.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/core/EventDispatcher.js',
			size: '1.2 KB',
			language: 'javascript',
			content: `export class EventDispatcher {\n  addEventListener( type, listener ) {}\n  dispatchEvent( event ) {}\n}\n`,
		},
		{
			name: 'State.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/core/State.js',
			size: '1.5 KB',
			language: 'javascript',
			content: `export const state = { /* ... */ };\n`,
		},
		{
			name: 'Orchestrator.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/core/Orchestrator.js',
			size: '4.8 KB',
			language: 'javascript',
			content: `export class OrchestratorController extends EventDispatcher { /* ... */ }\n`,
		},

		// Nested files: src/counters
		{
			name: 'Counter.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/counters/Counter.js',
			size: '1.1 KB',
			language: 'javascript',
			content: `export class Counter {\n  constructor( initialValue = 0 ) { this.value = initialValue; }\n}\n`,
		},
		{
			name: 'StarCounter.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/counters/StarCounter.js',
			size: '1.3 KB',
			language: 'javascript',
			content: `export class StarCounter extends Counter {\n  toggle() { /* ... */ }\n}\n`,
		},

		// Nested files: src/modals
		{
			name: 'Modal.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/modals/Modal.js',
			size: '1.4 KB',
			language: 'javascript',
			content: `export class Modal {\n  renderShell( options ) { /* ... */ }\n}\n`,
		},

		// Nested files: src/files
		{
			name: 'FileList.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/files/FileList.js',
			size: '3.6 KB',
			language: 'javascript',
			content: `export function FileList( state ) { /* ... */ }\n`,
		},
		{
			name: 'FileViewer.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/files/FileViewer.js',
			size: '2.8 KB',
			language: 'javascript',
			content: `export function FileViewer( state ) { /* ... */ }\n`,
		},

		// Nested files: src/repo
		{
			name: 'GridHelper.js',
			type: 'file',
			lastModified: '1 minute ago',
			path: 'src/repo/GridHelper.js',
			size: '4.2 KB',
			language: 'javascript',
			content: `export function GridHelper( state ) { /* ... */ }\n`,
		},
	],
};

export { initialRepoData };
export default initialRepoData;
