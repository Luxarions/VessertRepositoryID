import { ICON_STROKE_WIDTH } from '../constants.js';

export default ( size, className = '' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${ ICON_STROKE_WIDTH }" stroke-linecap="round" stroke-linejoin="round" class="${ className }">
    <polyline points="4 7 4 4 20 4 20 7"></polyline>
    <line x1="9" x2="15" y1="20" y2="20"></line>
    <line x1="12" x2="12" y1="4" y2="20"></line>
  </svg>`;
