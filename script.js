(function () {
  const config = window.COASOBI_CONFIG || {};
  const placeholderMarkers = ["placeholder", "coasobi-placeholder"];

  function isPlaceholder(value) {
    if (!value) return true;
    return placeholderMarkers.some((marker) => String(value).includes(marker));
  }

  function setTextFromConfig() {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const key = element.getAttribute("data-config");
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        element.textContent = config[key];
      }
    });
  }

  function setLinksFromConfig() {
    document.querySelectorAll("[data-link]").forEach((element) => {
      const key = element.getAttribute("data-link");
      const value = config[key];

      if (!value) {
        element.setAttribute("aria-disabled", "true");
        element.href = "#";
        return;
      }

      element.href = value;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    });
  }

  function setupCalendar() {
    const frame = document.querySelector("[data-calendar-frame]");
    const fallback = document.querySelector("[data-calendar-fallback]");
    if (!frame || !fallback) return;

    if (isPlaceholder(config.googleCalendarEmbedUrl)) {
      frame.hidden = true;
      fallback.hidden = false;
      return;
    }

    frame.src = config.googleCalendarEmbedUrl;
    frame.hidden = false;
    fallback.hidden = true;
  }

  setTextFromConfig();
  setLinksFromConfig();
  setupCalendar();
})();
