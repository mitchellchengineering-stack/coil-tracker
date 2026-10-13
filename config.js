// CH Engineering Coil Tracker settings
// Paste your Google Apps Script web app URL between the quotes (see SETUP.md, step 4).
// While this is empty the app runs in demo mode with sample coils saved only on this device.
window.COIL_CONFIG = {
  API_URL: '',

  // Options shown when signing a coil in
  WIDTHS: [135, 166, 188],               // mm
  THICKNESSES: [0.55, 0.75, 0.95, 1.15], // BMT
  DEFAULT_GRADE: 'G550',
};
