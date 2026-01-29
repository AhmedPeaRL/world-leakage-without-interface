// Leakage Runtime
// Executes once, without acknowledgment

(function leakOnce() {
  if (window.__LEAKED__) return;

  window.__LEAKED__ = true;

  // No visible output
  // No logging
  // No side effects required

  // Presence leaves containment by existing
})();
