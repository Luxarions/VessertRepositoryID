/**
 * @module Data/RepoData
 * @description Repository demo data.
 * @author prssbayu-oss
 */

const initialRepoData = {
	owner: 'prssbayu-oss',
	name: 'Aaa',
	description: 't',
	isPrivate: true,
	defaultBranch: 'main',
	branches: ['main'],
	stars: 0,
	forks: 0,
	watching: 0,
	tagsCount: 0,
	lastCommit: {
		author: 'prssbayu-oss',
		date: 'now',
		message: 'Initial commit: Google AI Studio template setup',
		hash: 'e83a21b',
	},
	commits: [
		{
			hash: 'e83a21b',
			message: 'Initial commit: Google AI Studio template setup',
			author: 'prssbayu-oss',
			date: 'now',
			verified: true,
		},
		{
			hash: '7f9c2d1',
			message: 'Add Console.js and Console.d.ts custom utilities',
			author: 'prssbayu-oss',
			date: 'yesterday',
			verified: true,
		},
		{
			hash: '3e2b1a0',
			message: 'Setup project structure with public and src directories',
			author: 'prssbayu-oss',
			date: 'yesterday',
			verified: true,
		},
	],
	files: [
		{
			name: 'README.md',
			type: 'file',
			lastModified: 'now',
			path: 'README.md',
			size: '1.4 KB',
			language: 'markdown',
			content: `# Aaa\n\n> *t*\n\nGenerated from [google-gemini/aistudio-repository-template](https://github.com/google-gemini/aistudio-repository-template)\n\n### Google AI Studio\nThe fastest path from prompt to production with Gemini.\n\n[Start building](#)\n`,
		},
		{
			name: 'Console.js',
			type: 'file',
			lastModified: 'now',
			path: 'Console.js',
			size: '2.8 KB',
			language: 'javascript',
			content: `/**\n * @file Console.js\n * @author prssbayu-oss\n * @description Lightweight JavaScript custom console logger.\n */\n\nexport class CustomConsole {\n  constructor(options = {}) {\n    this.prefix = options.prefix || '[Aaa]';\n    this.timestamps = options.timestamps !== false;\n    this.colorMap = new Map([\n      ['log', '#8b949e'],\n      ['info', '#58a6ff'],\n      ['success', '#3fb950'],\n      ['warn', '#d29922'],\n      ['error', '#f85149'],\n    ]);\n  }\n\n  format(level, message) {\n    const time = this.timestamps ? \`[\${new Date().toLocaleTimeString()}]\` : '';\n    return \`\${time} \${this.prefix} [\${level.toUpperCase()}] \${message}\`;\n  }\n\n  log(...args) {\n    console.log(this.format('log', args.join(' ')));\n  }\n\n  info(...args) {\n    console.info(this.format('info', args.join(' ')));\n  }\n\n  success(...args) {\n    console.log(this.format('success', args.join(' ')));\n  }\n\n  warn(...args) {\n    console.warn(this.format('warn', args.join(' ')));\n  }\n\n  error(...args) {\n    console.error(this.format('error', args.join(' ')));\n  }\n}\n\nexport const defaultConsole = new CustomConsole();\nexport default defaultConsole;\n`,
		},
		{
			name: 'Console.d.ts',
			type: 'file',
			lastModified: 'now',
			path: 'Console.d.ts',
			size: '950 B',
			language: 'typescript',
			content: `export interface CustomConsoleOptions {\n  prefix?: string;\n  timestamps?: boolean;\n}\n\nexport declare class CustomConsole {\n  constructor(options?: CustomConsoleOptions);\n  log(...args: any[]): void;\n  info(...args: any[]): void;\n  success(...args: any[]): void;\n  warn(...args: any[]): void;\n  error(...args: any[]): void;\n}\n\nexport declare const defaultConsole: CustomConsole;\nexport default defaultConsole;\n`,
		},
		{
			name: '.env.example',
			type: 'file',
			lastModified: 'now',
			path: '.env.example',
			size: '210 B',
			language: 'plaintext',
			content: `# Google AI Studio Environment Variables\nGEMINI_API_KEY=""\nAPP_ENV="development"\nPORT="3000"\n`,
		},
		{
			name: '.gitignore',
			type: 'file',
			lastModified: 'now',
			path: '.gitignore',
			size: '180 B',
			language: 'plaintext',
			content: `node_modules/\ndist/\n.env\n.DS_Store\n*.log\n`,
		},
	],
};

export { initialRepoData };
