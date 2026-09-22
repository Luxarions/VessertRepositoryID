/**
 * @module Header/GitHubHeader
 * @description Top GitHub navigation bar.
 * @author prssbayu-oss
 */

import { ICON_SIZE, ICON_SIZE_XS } from '../constants.js';
import { octocat, menu, search, inbox, gitPullRequest, circleDot } from '../icons.js';

export function GitHubHeader() {
	return `
		<header class="bg-[#010409] border-b border-[#21262d] px-4 py-3 flex items-center justify-between">
			<div class="flex items-center gap-3">
				<button class="p-1.5 text-[#7d8590] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-md transition-colors">
					${ menu( ICON_SIZE ) }
				</button>
				<a href="#" class="text-[#f0f6fc] hover:opacity-80 transition-opacity">
					${ octocat( 32 ) }
				</a>
			</div>

			<div class="flex-1 max-w-md mx-4 hidden md:block">
				<div id="header-search-trigger" class="relative cursor-pointer">
					<div class="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5 text-xs text-[#7d8590] flex items-center justify-between hover:border-[#8b949e] transition-colors">
						<span class="flex items-center gap-2">
							${ search( ICON_SIZE_XS ) }
							<span>Type <kbd class="border border-[#30363d] rounded px-1 py-0.5 text-[10px] bg-[#161b22] text-[#7d8590]">/</kbd> to search</span>
						</span>
					</div>
				</div>
			</div>

			<div class="flex items-center gap-2">
				<button class="p-1.5 text-[#7d8590] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-md transition-colors relative">
					${ inbox( ICON_SIZE ) }
				</button>
				<button class="p-1.5 text-[#7d8590] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-md transition-colors">
					${ gitPullRequest( ICON_SIZE ) }
				</button>
				<button class="p-1.5 text-[#7d8590] hover:text-[#f0f6fc] hover:bg-[#21262d] rounded-md transition-colors">
					${ circleDot( ICON_SIZE ) }
				</button>
				<div class="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 border border-[#30363d] flex items-center justify-center text-xs font-bold text-white cursor-pointer ml-1">
					P
				</div>
			</div>
		</header>
	`;
}

export default GitHubHeader;
