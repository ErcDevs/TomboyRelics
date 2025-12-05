// public/config.js — automatically picks sandbox or production
window.SQUARE_CONFIG = {
  // SANDBOX — safe for testing (use on dev branch)
  sandbox: {
    applicationId: "sandbox-sq0idb-0L0vJ8Dj3GLr0xGiQ5pZAg",   // ← your sandbox Application ID
    locationId: "L93AFY32TSKHG"         // ← your sandbox Location ID
  },
  // PRODUCTION — real money (use on main branch)
  production: {
    applicationId: "sq0idp-Bw2OZrLNREC4xHwCJ0AWvQ",   // ← your PRODUCTION Application ID
    locationId: "0ANZDKS7A3R2Q"         // ← your PRODUCTION Location ID
  }
};