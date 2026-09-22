/**
 * @module Repo/GridHelper
 * @description Layout grid helper responsible for orchestrating the repository content grid,
 * file table, README.md preview container, and sidebar detail sections.
 * @author prssbayu-oss
 */

import { ICON_SIZE, ICON_SIZE_SMALL } from '../constants.js';
import { pencil, people, listUnordered, link, copy, check } from '../icons.js';
import { FileList } from '../files/FileList.js';
import { FileViewer } from '../files/FileViewer.js';
import { RepoDetailSections } from './RepoDetailSections.js';

export function ReadmeBox( state ) {
	const { activeReadmeTab = 'readme', copied } = state;
	const isReadme = activeReadmeTab === 'readme';

	return `
		<div class="border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden my-4">
			<div class="bg-[#161b22] px-4 border-b border-[#30363d] flex items-center justify-between text-xs">
				<div class="flex items-center gap-4">
					<button
						id="readme-tab-btn"
						data-readme-tab="readme"
						class="readme-tab-btn py-3 font-semibold transition-colors flex items-center gap-1.5 ${
							isReadme
								? 'text-[#f0f6fc] border-b-2 border-[#f78166]'
								: 'text-[#7d8590] hover:text-[#c9d1d9]'
						}"
					>
						<span>README</span>
					</button>
					<button
						id="license-tab-btn"
						data-readme-tab="license"
						class="readme-tab-btn py-3 font-semibold transition-colors flex items-center gap-1.5 ${
							! isReadme
								? 'text-[#f0f6fc] border-b-2 border-[#f78166]'
								: 'text-[#7d8590] hover:text-[#c9d1d9]'
						}"
					>
						<span>MIT license</span>
					</button>
				</div>

				<div class="flex items-center gap-3 text-[#7d8590]">
					<span title="Contributors" class="hover:text-[#f0f6fc] cursor-pointer">${ people( ICON_SIZE ) }</span>
					<span title="Edit" class="hover:text-[#f0f6fc] cursor-pointer">${ pencil( ICON_SIZE ) }</span>
					<span title="Outline" class="hover:text-[#f0f6fc] cursor-pointer">${ listUnordered( ICON_SIZE ) }</span>
				</div>
			</div>

			<div class="p-6 md:p-8 text-[#c9d1d9] text-sm leading-relaxed">
				${
					isReadme
						? `
							<div class="space-y-6">
								<div class="border-b border-[#21262d] pb-4">
									<h1 class="text-2xl md:text-3xl font-bold text-[#f0f6fc] flex items-center gap-2">
										<a href="#vessert" class="text-[#7d8590] hover:text-[#58a6ff]">${ link( 20 ) }</a>
										<span>Vessert</span>
									</h1>
									<p class="mt-3 text-[#c9d1d9] text-base">Pure Vanilla JavaScript GitHub repository UI library.</p>
								</div>

								<div class="space-y-3">
									<h2 class="text-lg font-semibold text-[#f0f6fc] flex items-center gap-2 border-b border-[#21262d] pb-2">
										<a href="#install" class="text-[#7d8590] hover:text-[#58a6ff]">${ link( ICON_SIZE ) }</a>
										<span>Install</span>
									</h2>
									<div class="bg-[#161b22] border border-[#30363d] rounded-md p-3.5 flex items-center justify-between font-mono text-xs text-[#c9d1d9]">
										<code>npm install vessert</code>
										<button
											id="copy-install-cmd-btn"
											data-copy-text="npm install vessert"
											class="copy-snippet-btn p-1.5 text-[#7d8590] hover:text-[#f0f6fc] rounded hover:bg-[#21262d] transition-colors"
											title="Copy command"
										>
											${ copied ? check( ICON_SIZE_SMALL, 'text-[#3fb950]' ) : copy( ICON_SIZE_SMALL ) }
										</button>
									</div>
								</div>

								<div class="space-y-4">
									<h2 class="text-lg font-semibold text-[#f0f6fc] flex items-center gap-2 border-b border-[#21262d] pb-2">
										<a href="#usage" class="text-[#7d8590] hover:text-[#58a6ff]">${ link( ICON_SIZE ) }</a>
										<span>Usage</span>
									</h2>

									<div class="space-y-2">
										<p class="text-xs font-semibold text-[#7d8590]">Full library (engine + UI):</p>
										<div class="bg-[#161b22] border border-[#30363d] rounded-md p-3.5 font-mono text-xs text-[#c9d1d9] overflow-x-auto relative group">
											<pre><code>import { mountApp } from 'vessert';

const root = document.getElementById( 'root' );
mountApp( root );</code></pre>
											<button
												data-copy-text="import { mountApp } from 'vessert';\n\nconst root = document.getElementById( 'root' );\nmountApp( root );"
												class="copy-snippet-btn absolute top-2 right-2 p-1.5 text-[#7d8590] hover:text-[#f0f6fc] rounded hover:bg-[#21262d] transition-colors"
												title="Copy snippet"
											>
												${ copy( ICON_SIZE_SMALL ) }
											</button>
										</div>
									</div>
								</div>
							</div>
						`
						: `
							<div class="font-mono text-xs space-y-4 leading-relaxed">
								<h2 class="text-base font-bold text-[#f0f6fc]">MIT License</h2>
								<p class="text-[#7d8590]">Copyright &copy; ${ new Date().getFullYear() } prssbayu-oss</p>
								<p>
									Permission is hereby granted, free of charge, to any person obtaining a copy
									of this software and associated documentation files (the "Software"), to deal
									in the Software without restriction, including without limitation the rights
									to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
									copies of the Software, and to permit persons to whom the Software is
									furnished to do so, subject to the following conditions:
								</p>
								<p>
									The above copyright notice and this permission notice shall be included in all
									copies or substantial portions of the Software.
								</p>
							</div>
						`
				}
			</div>
		</div>
	`;
}

export function GridHelper( state ) {
	return `
		<div id="repo-grid-container" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
			<div class="lg:col-span-8 flex flex-col gap-4">
				${
					state.selectedFile
						? FileViewer( state )
						: `
							${ FileList( state ) }
							${ state.pathSegments.length === 0 ? ReadmeBox( state ) : '' }
						`
				}
			</div>
			<div class="lg:col-span-4">
				${ RepoDetailSections( state ) }
			</div>
		</div>
	`;
}

export default GridHelper;
