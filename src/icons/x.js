import { ICON_STROKE_WIDTH } from '../constants.js';

export default ( size, className = '' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${ ICON_STROKE_WIDTH }" stroke-linecap="round" stroke-linejoin="round" class="${ className }">
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>`;
