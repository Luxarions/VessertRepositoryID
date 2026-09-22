import { ICON_STROKE_WIDTH } from '../constants.js';

export default ( size, className = '' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" stroke="#7d8590" stroke-width="${ ICON_STROKE_WIDTH }" stroke-linecap="round" stroke-linejoin="round" class="${ className }">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <line x1="10" x2="14" y1="13" y2="13"></line>
    <line x1="10" x2="14" y1="17" y2="17"></line>
  </svg>`;
