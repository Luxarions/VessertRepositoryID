/**
 * @module Modals/Modal
 * @description Base class for all modal dialogs.
 * Implements classical OOP inheritance for modal components.
 * @author prssbayu-oss
 */

import { ICON_SIZE } from '../constants.js';
import { x } from '../icons.js';

export class Modal {
	constructor( id = 'modal', title = '' ) {
		this.id = id;
		this.title = title;
	}

	renderShell( { content = '', headerExtra = '', footer = '', maxWidth = 'max-w-xl' } = {} ) {
		return `
			<div id="${ this.id }-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 z-50 p-4">
				<div id="${ this.id }-card" class="bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl w-full ${ maxWidth } overflow-hidden animate-in fade-in zoom-in-95 duration-150">
					<div class="flex items-center justify-between px-4 py-3 border-b border-[#30363d]">
						<div class="flex items-center gap-2">
							${ headerExtra }
							<span class="font-semibold text-sm text-[#f0f6fc]">${ this.title }</span>
						</div>
						<button id="${ this.id }-close-btn" class="text-[#7d8590] hover:text-[#f0f6fc] p-1 rounded transition-colors">
							${ x( ICON_SIZE ) }
						</button>
					</div>

					<div class="modal-body">
						${ content }
					</div>

					${ footer ? `
						<div class="bg-[#0d1117] px-4 py-2 border-t border-[#30363d] text-[11px] text-[#7d8590] flex items-center justify-between">
							${ footer }
						</div>
					` : '' }
				</div>
			</div>
		`;
	}
}

export default Modal;
