// utils/gtm.js
export function sendGTMEvent(event) {
    if (window && window.dataLayer) {
      window.dataLayer.push(event);
    }
  }
  