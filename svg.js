// svg.js
// SVG Icons Library
const SVGIcons = {
  // Menu Icon (3 lines)
  menu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>`,

  // Search Icon
  search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>`,

  // Back Arrow Icon
  backArrow: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>`,

  // Three Dots Icon (More options)
  threeDots: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>`,

  // Checkmark Icon
  checkmark: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.5 17l6 6l13-13"/>
  </svg>`,

  // Checkmark Gray Icon
  checkmarkGray: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32">
    <path fill="none" stroke="#808080" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.5 17l6 6l13-13"/>
  </svg>`,

  // Attachment Clip Icon
  attachmentClip: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g className="attachment-clip-outline">
      <path fill="#666666" fillRule="evenodd" d="M8 7.308c0-.558.186-1.434.659-2.14C9.1 4.504 9.779 4 10.88 4c1.134 0 1.88.499 2.373 1.155c.52.692.746 1.555.746 2.153v7.54a.8.8 0 0 1-.073.223c-.065.141-.166.3-.3.447c-.269.295-.61.482-1.002.482c-.436 0-.777-.18-1.02-.433c-.263-.274-.355-.574-.355-.72v-7.56a1 1 0 0 0-2 0v7.56c0 .75.358 1.527.912 2.105A3.38 3.38 0 0 0 12.625 18c1.085 0 1.93-.532 2.48-1.134c.517-.567.895-1.335.895-2.02V7.308c0-1.001-.35-2.292-1.146-3.354C14.029 2.856 12.716 2 10.88 2c-1.867 0-3.13.925-3.885 2.055A6.13 6.13 0 0 0 6 7.308v8.695C6 19.402 9.003 22 12.5 22c3.498 0 6.5-2.597 6.5-5.997V7a1 1 0 1 0-2 0v9.003C17 18.123 15.079 20 12.5 20C9.923 20 8 18.122 8 16.003z" clipRule="evenodd"/>
    </g>
  </svg>`,

  // Keyboard Icon
  keyboard: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 384">
    <path fill="#666666" d="M384 43q18 0 30.5 12.5T427 85v214q0 17-12.5 29.5T384 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43h341zm-192 64v42h43v-42h-43zm0 64v42h43v-42h-43zm-64-64v42h43v-42h-43zm0 64v42h43v-42h-43zm-21 42v-42H64v42h43zm0-64v-42H64v42h43zm192 150v-43H128v43h171zm0-86v-42h-43v42h43zm0-64v-42h-43v42h43zm64 64v-42h-43v42h43zm0-64v-42h-43v42h43z"/>
  </svg>`,

  // Emoji Icon (Smile)
  emoji: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="#666666" d="M464 256a208 208 0 1 0-416 0a208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m177.3 63.4c15 15.6 41.1 32.6 78.7 32.6s63.7-17 78.7-32.6c9.2-9.6 24.4-9.9 33.9-.7s9.9 24.4.7 33.9c-22.1 23-60 47.4-113.3 47.4s-91.2-24.4-113.3-47.4c-9.2-9.6-8.9-24.8.7-33.9s24.8-8.9 33.9.7M144 208a32 32 0 1 1 64 0a32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64a32 32 0 1 1 0-64"/>
  </svg>`,

  // Microphone Icon
  microphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <g fill="none" stroke="#666666" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 6.5a2.5 2.5 0 0 1-5 0V3a2.5 2.5 0 0 1 5 0Z"/>
      <path d="M12 7h0a4.49 4.49 0 0 1-4.5 4.5h-1A4.49 4.49 0 0 1 2 7h0m5 4.5v2"/>
    </g>
  </svg>`,

  // Send Icon (Paper plane)
  send: `<svg viewBox="0 -0.5 21 21" width="29" height="29" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.61258 9L0.05132 1.31623C-0.22718 0.48074 0.63218 -0.28074 1.42809 0.09626L20.4281 9.0963C21.1906 9.4575 21.1906 10.5425 20.4281 10.9037L1.42809 19.9037C0.63218 20.2807 -0.22718 19.5193 0.05132 18.6838L2.61258 11H8.9873C9.5396 11 9.9873 10.5523 9.9873 10C9.9873 9.4477 9.5396 9 8.9873 9H2.61258z" fill="#3b82f6" fillRule="evenodd" clipRule="evenodd" />
  </svg>`
};

// Make it available globally
window.SVGIcons = SVGIcons;
