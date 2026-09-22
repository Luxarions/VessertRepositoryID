import { ICON_STROKE_WIDTH } from '../constants.js';

export default ( size, className = '' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${ ICON_STROKE_WIDTH }" stroke-linecap="round" stroke-linejoin="round" class="${ className }">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
    <path d="m15 5 4 4"></path>
  </svg>`;
