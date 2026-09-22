import { ICON_STROKE_WIDTH } from '../Constants.js';

export default ( size, filled = false, className = '' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="${ filled ? '#e3b341' : 'none' }" stroke="${ filled ? '#e3b341' : 'currentColor' }" stroke-width="${ ICON_STROKE_WIDTH }" stroke-linecap="round" stroke-linejoin="round" class="${ className }">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>`;
