import { ICON_STROKE_WIDTH } from '../constants.js';

export default ( size, className = '' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${ ICON_STROKE_WIDTH }" stroke-linecap="round" stroke-linejoin="round" class="${ className }">
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>`;
