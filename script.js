(function () {
  const config = window.COASOBI_CONFIG || {};
  const placeholderMarkers = ["placeholder", "coasobi-placeholder", "example.com"];

  function isPlaceholder(value) {
    const text = String(value || "").trim();
    if (!text) return true;
    return placeholderMarkers.some((marker) => text.includes(marker));
  }

  function extractIframeSrc(value) {
    const text = String(value || "").trim();
    if (!text) return "";

    const sourceTexts = [text];
    try {
      sourceTexts.push(decodeURIComponent(text));
    } catch (error) {
      // The value may already be a plain URL or iframe tag.
    }

    for (const sourceText of sourceTexts) {
      if (!sourceText.includes("<iframe")) continue;

      const holder = document.createElement("div");
      holder.innerHTML = sourceText;
      const iframe = holder.querySelector("iframe[src]");
      if (iframe) return iframe.getAttribute("src") || "";

      const match = sourceText.match(/<iframe[^>]+src=["']([^"']+)["']/i);
      if (match) return match[1];
    }

    return text;
  }

  function getCalendarEmbedUrl() {
    const value = config.googleCalendarEmbedUrl;
    if (isPlaceholder(value)) return "";

    const url = extractIframeSrc(value).trim();
    if (isPlaceholder(url)) return "";
    return url;
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
      const value = String(config[key] || "").trim();

      if (!value || (element.hasAttribute("data-hide-if-empty") && isPlaceholder(value))) {
        if (element.hasAttribute("data-hide-if-empty")) {
          element.hidden = true;
        }
        element.setAttribute("aria-disabled", "true");
        element.href = "#";
        return;
      }

      element.hidden = false;
      element.href = value;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    });
  }

  function setupCalendar() {
    const frame = document.querySelector("[data-calendar-frame]");
    const fallback = document.querySelector("[data-calendar-fallback]");
    if (!frame || !fallback) return;

    const calendarUrl = getCalendarEmbedUrl();

    if (!calendarUrl) {
      frame.removeAttribute("src");
      frame.hidden = true;
      fallback.hidden = false;
      return;
    }

    frame.src = calendarUrl;
    frame.hidden = false;
    fallback.hidden = true;
  }

  setTextFromConfig();
  setLinksFromConfig();
  setupCalendar();
})();
