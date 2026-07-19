(function () {
  "use strict";

  const measurementId = "G-X6P8K4KZQJ";
  const trackedHosts = new Set(["jace-or-jian.github.io"]);
  const currentHost = window.location.hostname.toLowerCase();

  // Never send analytics from local previews or copied versions of the site.
  if (!trackedHosts.has(currentHost)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const googleTag = document.createElement("script");
  googleTag.async = true;
  googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(googleTag);

  const cleanText = (value) => value.trim().replace(/\s+/g, " ").slice(0, 100);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const linkText = cleanText(link.textContent || link.getAttribute("aria-label") || "");
    const publication = link.closest(".publication");
    const publicationTitle = publication?.querySelector("h3")?.textContent?.trim();
    const isPdf = /\.pdf(?:$|[?#])/i.test(href);
    const isCvPage = /(?:^|\/)cv\.html(?:$|[?#])/i.test(href);
    const isCvPdf = /Jiajie_Jian_CV\.pdf(?:$|[?#])/i.test(href);

    if (isCvPage) {
      window.gtag("event", "cv_view", {
        link_text: linkText,
        link_url: link.href,
      });
    }

    if (isCvPdf) {
      window.gtag("event", "cv_download", {
        link_text: linkText,
        link_url: link.href,
      });
    } else if (isPdf && publicationTitle) {
      window.gtag("event", "publication_download", {
        publication_title: publicationTitle,
        link_text: linkText,
        link_url: link.href,
      });
    }
  });
})();
