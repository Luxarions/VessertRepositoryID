/**
 * @module Repo/RepoDetailSections
 * @description About, Releases, Packages, and Contributors sidebar panels.
 * @author prssbayu-oss
 */

import { ICON_SIZE_XS, ICON_SIZE_SMALL } from '../constants.js';
import { bookOpen, star, eye, fork, tag, activity } from '../icons.js';
import { pluralize } from '../utils.js';

function RepoDetailSections( state ) {
	const { repo } = state;

	return `
		<div class="flex flex-col gap-6 text-xs text-[#7d8590]">
			<div>
				<h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">About</h3>
				<p class="text-[#c9d1d9] mb-3 leading-relaxed">${ repo.description }</p>
				<div class="flex flex-col gap-2.5">
					<a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
						${ bookOpen( ICON_SIZE_XS ) }
						<span>Readme</span>
					</a>
					<a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
						${ activity( ICON_SIZE_XS ) }
						<span>Activity</span>
					</a>
					<a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
						${ star( ICON_SIZE_XS ) }
						<span>${ pluralize( repo.stars, 'star' ) }</span>
					</a>
					<a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
						${ eye( ICON_SIZE_XS ) }
						<span>${ pluralize( repo.watching, 'watching' ) }</span>
					</a>
					<a href="#" class="flex items-center gap-2 text-[#c9d1d9] hover:text-[#58a6ff]">
						${ fork( ICON_SIZE_XS ) }
						<span>${ pluralize( repo.forks, 'fork' ) }</span>
					</a>
				</div>
			</div>

			<div class="border-t border-[#30363d] pt-4">
				<h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">Releases</h3>
				<div class="flex items-center gap-1.5 text-[#7d8590]">
					${ tag( ICON_SIZE_SMALL ) }
					<span>No releases published</span>
				</div>
				<a href="#" class="inline-block mt-2 text-[#58a6ff] hover:underline font-medium">Create a new release</a>
			</div>

			<div class="border-t border-[#30363d] pt-4">
				<h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">Packages</h3>
				<p class="text-[#7d8590] mb-2">No packages published</p>
				<a href="#" class="text-[#58a6ff] hover:underline font-medium">Publish your first package</a>
			</div>

			<div class="border-t border-[#30363d] pt-4">
				<h3 class="font-semibold text-sm text-[#f0f6fc] mb-2">Contributors</h3>
				<div class="flex items-center gap-2">
					<div class="w-6 h-6 rounded-full bg-[#1f6feb] border border-[#30363d] flex items-center justify-center text-[10px] text-white font-bold">
						${ repo.owner.slice( 0, 1 ).toUpperCase() }
					</div>
					<a href="#" class="text-[#58a6ff] hover:underline font-medium">${ repo.owner }</a>
				</div>
			</div>
		</div>
	`;
}

export { RepoDetailSections };
export default RepoDetailSections;
