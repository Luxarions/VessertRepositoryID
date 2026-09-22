/**
 * @module Modals/CommitHistoryModal
 * @description Commit log modal dialog extending Modal base class.
 * @author prssbayu-oss
 */

import { Modal } from './Modal.js';
import { ICON_SIZE, ICON_SIZE_XS } from '../constants.js';
import { history, x, check } from '../icons.js';

export class CommitHistoryModalClass extends Modal {
	constructor() {
		super( 'history-modal', 'Commit History' );
	}

	render( state ) {
		const { historyModalOpen, repo } = state;
		if ( ! historyModalOpen ) return '';

		return `
			<div id="history-modal-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 z-50 p-4">
				<div id="history-modal-card" class="bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden">
					<div class="flex items-center justify-between px-4 py-3 border-b border-[#30363d]">
						<div class="flex items-center gap-2">
							${ history( ICON_SIZE, 'text-[#7d8590]' ) }
							<span class="font-semibold text-sm text-[#f0f6fc]">Commit History</span>
							<span class="bg-[#30363d] text-[#7d8590] text-xs px-2 py-0.5 rounded-full">${ repo.commits.length }</span>
						</div>
						<button id="history-modal-close-btn" class="text-[#7d8590] hover:text-[#f0f6fc] p-1 rounded transition-colors">
							${ x( ICON_SIZE ) }
						</button>
					</div>

					<div class="max-h-96 overflow-y-auto divide-y divide-[#21262d]">
						${ repo.commits
							.map(
								( commit ) => `
									<div class="p-4 hover:bg-[#21262d]/50 flex items-start justify-between gap-4 text-xs">
										<div class="flex flex-col gap-1">
											<span class="font-semibold text-[#f0f6fc] hover:text-[#58a6ff] cursor-pointer">${ commit.message }</span>
											<div class="flex items-center gap-2 text-[#7d8590] text-[11px]">
												<span class="text-[#c9d1d9] font-medium">${ commit.author }</span>
												<span>committed ${ commit.date }</span>
												${ commit.verified
													? `
														<span class="border border-[#30363d] text-[#3fb950] rounded px-1 text-[10px] flex items-center gap-0.5 font-semibold">
															${ check( ICON_SIZE_XS, 'text-[#3fb950]' ) }
															Verified
														</span>
													`
													: ''
												}
											</div>
										</div>
										<div class="flex items-center gap-2 font-mono text-[11px] text-[#58a6ff] shrink-0">
											<span class="border border-[#30363d] bg-[#0d1117] rounded px-2 py-1">${ commit.hash }</span>
										</div>
									</div>
								`
							)
							.join( '' ) }
					</div>

					<div class="bg-[#0d1117] px-4 py-2 border-t border-[#30363d] text-[11px] text-[#7d8590] flex items-center justify-between">
						<span>Showing all commits on <strong>${ state.currentBranch }</strong></span>
						<kbd class="border border-[#30363d] rounded px-1.5 py-0.5 bg-[#161b22] text-[#7d8590]">esc</kbd>
					</div>
				</div>
			</div>
		`;
	}
}

const defaultCommitModal = new CommitHistoryModalClass();

export function CommitHistoryModal( state ) {
	return defaultCommitModal.render( state );
}

export default CommitHistoryModal;
