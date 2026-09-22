export default ( size = 20, className = 'rounded' ) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 16 16" class="${ className }">
    <rect width="16" height="16" fill="#1f6feb" rx="2"/>
    <circle cx="8" cy="8" r="4" fill="#ffffff" opacity="0.9"/>
    <circle cx="4" cy="4" r="2" fill="#388bfd"/>
    <circle cx="12" cy="4" r="2" fill="#388bfd"/>
    <circle cx="4" cy="12" r="2" fill="#388bfd"/>
    <circle cx="12" cy="12" r="2" fill="#388bfd"/>
  </svg>`;
