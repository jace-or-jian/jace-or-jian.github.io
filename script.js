(function () {
  "use strict";

  const data = window.SITE_DATA;
  if (!data) return;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const externalLink = (label, url, className = "") => {
    const link = el("a", className, label);
    link.href = url;
    if (url.startsWith("http") || /\.pdf(?:$|[?#])/i.test(url)) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    return link;
  };

  const makeSection = (id, eyebrow, title) => {
    const icons = { education: "📖", research: "🔬", publications: "📝", projects: "🛰️", awards: "🏅", skills: "📚", news: "🔥" };
    const section = el("section", "section-block");
    section.id = id;
    section.dataset.section = id;
    const heading = el("div", "section-heading");
    const text = el("div");
    const headingText = document.body.classList.contains("theme-editorial")
      ? title
      : `${icons[id] ?? ""} ${title}`.trim();
    text.append(el("p", "section-kicker", eyebrow), el("h2", "section-title", headingText));
    const sectionNumber = document.querySelectorAll("#dynamic-sections .section-block").length + 1;
    heading.append(text, el("span", "section-index", String(sectionNumber).padStart(2, "0")));
    section.append(heading);
    return section;
  };

  const renderProfile = () => {
    const profile = data.profile;
    document.title = `${profile.name} · Academic Homepage`;
    document.querySelector('meta[name="description"]').content = `Academic homepage of ${profile.name} — research, publications, education, and news.`;
    document.querySelectorAll("[data-short-name]").forEach((node) => (node.textContent = profile.shortName));
    document.querySelectorAll("[data-initials]").forEach((node) => (node.textContent = profile.initials));
    document.getElementById("profile-name").textContent = profile.name;
    document.getElementById("profile-role").textContent = profile.role;
    document.getElementById("profile-affiliation").textContent = profile.affiliation;
    document.querySelector(".sidebar-note").textContent = profile.availability;

    const photo = document.getElementById("profile-photo");
    photo.src = profile.photo;
    photo.alt = profile.photoAlt;

    const meta = document.getElementById("profile-meta");
    meta.append(
      profileMetaItem("Location", profile.location, "location"),
      profileMetaItem("Email", profile.email, "email"),
    );

    const links = document.getElementById("profile-links");
    profile.links.forEach((item) => links.append(externalLink(item.label, item.url, "profile-link")));
  };

  const profileMetaItem = (label, value, type) => {
    const item = el("div", "meta-item");
    const icon = el("span", "meta-icon", type === "email" ? "↗" : "⌖");
    icon.setAttribute("aria-hidden", "true");
    const content = type === "email" ? externalLink(value, `mailto:${value}`) : el("span", "", value);
    content.setAttribute("aria-label", `${label}: ${value}`);
    item.append(icon, content);
    return item;
  };

  const renderNavigation = () => {
    const desktop = document.getElementById("desktop-navigation");
    const mobile = document.getElementById("mobile-navigation");
    data.navigation.forEach((item) => {
      const sectionData = item.id === "about" ? { show: true } : data[item.id];
      if (sectionData && sectionData.show !== false) {
        [desktop, mobile].forEach((container) => {
          const link = externalLink(item.label, `#${item.id}`, "nav-link");
          link.dataset.target = item.id;
          container.append(link);
        });
      }
    });
  };

  const renderAbout = () => {
    document.getElementById("hero-heading").textContent = data.about.heading;
    const copy = document.getElementById("intro-copy");
    data.about.paragraphs.forEach((paragraph) => copy.append(el("p", "", paragraph)));

    const actions = document.getElementById("hero-actions");
    data.about.actions.forEach((action) => {
      if (action.kind === "copy-email") {
        const button = el("button", `button button-${action.style}`, `${action.label}  ⧉`);
        button.type = "button";
        button.dataset.copyEmail = data.profile.email;
        button.dataset.defaultLabel = button.textContent;
        button.setAttribute("aria-live", "polite");
        actions.append(button);
        return;
      }

      let url = action.url;
      if (action.label.toLowerCase().includes("email")) url = `mailto:${data.profile.email}`;
      if (action.label.toLowerCase().includes("cv") && data.profile.cv) url = data.profile.cv;
      actions.append(externalLink(`${action.label}  ↗`, url, `button button-${action.style}`));
    });

    const strip = document.getElementById("research-strip");
    strip.append(el("p", "strip-label", "Research interests"));
    const tags = el("div", "interest-tags");
    data.about.interests.forEach((interest) => tags.append(el("span", "interest-tag", interest)));
    strip.append(tags);
  };

  const renderEducation = (root) => {
    const section = makeSection("education", data.education.eyebrow, data.education.title);
    const timeline = el("div", "timeline");
    data.education.items.forEach((item) => {
      const entry = el("article", "timeline-item");
      const date = el("p", "timeline-date", item.period);
      const body = el("div", "timeline-body");
      body.append(el("h3", "", item.degree), el("p", "timeline-school", item.school));
      if (item.location) body.append(el("p", "timeline-location", item.location));
      if (item.details?.length) {
        const list = el("ul", "detail-list");
        item.details.forEach((detail) => list.append(el("li", "", detail)));
        body.append(list);
      }
      entry.append(date, body);
      timeline.append(entry);
    });
    section.append(timeline);
    root.append(section);
  };

  const renderResearch = (root) => {
    const section = makeSection("research", data.research.eyebrow, data.research.title);
    if (data.research.intro) section.append(el("p", "section-intro", data.research.intro));
    const grid = el("ul", "research-grid simple-list");
    data.research.items.forEach((item) => {
      const card = el("li", "research-card");
      if (document.body.classList.contains("theme-editorial") && item.number) {
        card.append(el("span", "research-number", item.number));
      }
      card.append(el("strong", "", item.title));
      if (item.description) {
        const separator = document.body.classList.contains("theme-editorial") ? "" : ": ";
        card.append(el("span", "research-description", `${separator}${item.description}`));
      }
      grid.append(card);
    });
    section.append(grid);
    root.append(section);
  };

  const renderPublications = (root) => {
    const section = makeSection("publications", data.publications.eyebrow, data.publications.title);
    const list = el("div", "publication-list");
    data.publications.items.forEach((item) => {
      const article = el("article", `publication${item.featured ? " publication-featured" : ""}`);
      const meta = el("div", "publication-meta");
      meta.append(el("span", "publication-year", item.year), el("span", "publication-venue", item.venue));
      const body = el("div", "publication-body");
      if (item.featured) body.append(el("p", "featured-label", "Featured work"));
      body.append(el("h3", "", item.title), el("p", "publication-authors", item.authors));
      if (item.description) body.append(el("p", "publication-description", item.description));
      if (item.supplementaryNote) body.append(el("p", "publication-supplementary", item.supplementaryNote));
      if (item.manuscriptNote) body.append(el("p", "publication-manuscript-note", item.manuscriptNote));
      if (item.abstract) {
        const abstractDetails = el("details", "publication-abstract");
        abstractDetails.append(
          el("summary", "publication-abstract-toggle", "Abstract"),
          el("p", "publication-abstract-copy", item.abstract),
        );
        body.append(abstractDetails);
      }
      if (item.figures?.length) {
        const gallery = el(
          "div",
          `publication-figures${item.figures.length === 1 ? " publication-figures-single" : ""}`,
        );
        item.figures.forEach((figure) => {
          const figureElement = el("figure", "publication-figure");
          const imageLink = document.createElement("a");
          imageLink.href = figure.src;
          imageLink.target = "_blank";
          imageLink.rel = "noopener noreferrer";
          imageLink.setAttribute("aria-label", `Open full-size figure: ${figure.caption || item.title}`);

          const image = document.createElement("img");
          image.src = figure.src;
          image.alt = figure.alt || "";
          image.loading = "lazy";
          image.decoding = "async";
          imageLink.append(image);
          figureElement.append(imageLink);
          if (figure.caption) figureElement.append(el("figcaption", "", figure.caption));
          gallery.append(figureElement);
        });
        body.append(gallery);
      }
      if (item.links?.length) {
        const links = el("div", "publication-links");
        item.links.forEach((link) => links.append(externalLink(`${link.label} ↗`, link.url)));
        body.append(links);
      }
      article.append(meta, body);
      list.append(article);
    });
    section.append(list);
    if (data.publications.note) section.append(el("p", "section-note", data.publications.note));
    root.append(section);
  };

  const renderProjects = (root) => {
    const section = makeSection("projects", data.projects.eyebrow, data.projects.title);
    const list = el("div", "project-list");
    data.projects.items.forEach((item) => {
      const article = el("article", "project");
      const meta = el("div", "project-meta");
      meta.append(el("span", "project-period", item.period), el("span", "project-status", item.status));

      const body = el("div", "project-body");
      body.append(el("h3", "", item.title));
      if (item.description) body.append(el("p", "project-description", item.description));

      if (item.figures?.length) {
        const gallery = el("div", "project-figures");
        item.figures.forEach((figure) => {
          const figureElement = el("figure", "project-figure");
          const imageLink = document.createElement("a");
          imageLink.href = figure.url || figure.src;
          imageLink.target = "_blank";
          imageLink.rel = "noopener noreferrer";
          imageLink.setAttribute("aria-label", `Open full-size figure: ${figure.caption || item.title}`);

          const image = document.createElement("img");
          image.src = figure.src;
          image.alt = figure.alt || "";
          image.loading = "lazy";
          image.decoding = "async";
          imageLink.append(image);
          figureElement.append(imageLink);
          if (figure.caption) figureElement.append(el("figcaption", "", figure.caption));
          gallery.append(figureElement);
        });
        body.append(gallery);
      }

      article.append(meta, body);
      list.append(article);
    });
    section.append(list);
    root.append(section);
  };

  const renderAwards = (root) => {
    const section = makeSection("awards", data.awards.eyebrow, data.awards.title);
    const list = el("div", "award-list");
    data.awards.items.forEach((item) => {
      const award = el("article", "award-item");
      award.append(el("p", "award-year", item.year));
      const body = el("div");
      body.append(el("h3", "", item.title), el("p", "", item.organization));
      award.append(body);
      list.append(award);
    });
    section.append(list);
    root.append(section);
  };

  const renderSkills = (root) => {
    const section = makeSection("skills", data.skills.eyebrow, data.skills.title);
    const grid = el("div", "skills-grid");
    data.skills.groups.forEach((group) => {
      const card = el("article", "skill-group");
      card.append(el("h3", "", group.label));
      const items = el("div", "skill-items");
      group.items.forEach((item) => items.append(el("span", "", item)));
      card.append(items);
      grid.append(card);
    });
    section.append(grid);
    root.append(section);
  };

  const renderNews = (root) => {
    const section = makeSection("news", data.news.eyebrow, data.news.title);
    const list = el("div", "news-list");
    data.news.items.forEach((item, index) => {
      const row = el("article", "news-item");
      row.append(el("time", "news-date", item.date), el("p", "", item.text));
      if (index === 0) row.append(el("span", "new-badge", "Latest"));
      list.append(row);
    });
    section.append(list);
    root.append(section);
  };

  const renderSections = () => {
    const root = document.getElementById("dynamic-sections");
    const renderers = { education: renderEducation, research: renderResearch, publications: renderPublications, projects: renderProjects, awards: renderAwards, skills: renderSkills, news: renderNews };
    Object.entries(renderers).forEach(([key, renderer]) => {
      if (data[key]?.show !== false) renderer(root);
    });
  };

  const addInteractions = () => {
    const copyWithSelection = (value) => {
      const textArea = document.createElement("textarea");
      textArea.value = value;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.append(textArea);
      textArea.select();
      const copied = document.execCommand("copy");
      textArea.remove();
      return copied;
    };

    const copyText = async (value) => {
      if (copyWithSelection(value)) return;
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
      }
      throw new Error("Clipboard copy was not available");
    };

    const copyEmailButton = document.querySelector("[data-copy-email]");
    let copyFeedbackTimer;
    copyEmailButton?.addEventListener("click", async () => {
      window.clearTimeout(copyFeedbackTimer);
      copyEmailButton.disabled = true;

      try {
        await copyText(copyEmailButton.dataset.copyEmail);
        copyEmailButton.textContent = "Email copied  ✓";
        copyEmailButton.classList.add("is-copied");
      } catch (error) {
        console.error("Email copy failed", error);
        copyEmailButton.textContent = copyEmailButton.dataset.copyEmail;
      }

      copyFeedbackTimer = window.setTimeout(() => {
        copyEmailButton.textContent = copyEmailButton.dataset.defaultLabel;
        copyEmailButton.classList.remove("is-copied");
        copyEmailButton.disabled = false;
      }, 2200);
    });

    const button = document.querySelector(".menu-button");
    const nav = document.querySelector(".mobile-nav");
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      button.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
        document.body.classList.remove("menu-open");
      }
    });

    const links = document.querySelectorAll(".nav-link");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => link.classList.toggle("is-active", link.dataset.target === visible.target.id));
      },
      { rootMargin: "-20% 0px -68%", threshold: [0.05, 0.25, 0.5] },
    );
    document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));

    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const preview = el("div", "image-hover-preview");
    const previewImage = document.createElement("img");
    preview.setAttribute("aria-hidden", "true");
    preview.append(previewImage);
    document.body.append(preview);

    let previewTimer;
    let pendingPreviewImage;
    let pendingPointerEvent;

    const hideImagePreview = () => {
      window.clearTimeout(previewTimer);
      previewTimer = undefined;
      pendingPreviewImage = undefined;
      pendingPointerEvent = undefined;
      preview.classList.remove("is-visible");
    };

    const showImagePreview = (image, pointerEvent) => {
      if (!hoverQuery.matches || !image.complete || !image.naturalWidth) return;

      const sourceRect = image.getBoundingClientRect();
      const viewportPadding = 16;
      const scale = 1.75;
      const maxWidth = Math.min(720, window.innerWidth - viewportPadding * 2);
      const maxHeight = window.innerHeight - viewportPadding * 2;
      const aspectRatio = image.naturalWidth / image.naturalHeight;
      const isPortrait = image.id === "profile-photo";

      let width;
      let height;
      if (isPortrait) {
        width = Math.min(sourceRect.width * scale, maxWidth);
        height = width / aspectRatio;
        if (height > maxHeight) {
          height = maxHeight;
          width = height * aspectRatio;
        }
      } else {
        width = Math.min(680, maxWidth);
        height = Math.min(400, maxHeight);
      }

      const hasPointer = Number.isFinite(pointerEvent?.clientX) && Number.isFinite(pointerEvent?.clientY);
      const pointerX = hasPointer ? pointerEvent.clientX : sourceRect.left + sourceRect.width / 2;
      const pointerY = hasPointer ? pointerEvent.clientY : sourceRect.top + sourceRect.height / 2;
      const anchorX = Math.max(0, Math.min(1, (pointerX - sourceRect.left) / sourceRect.width));
      const anchorY = Math.max(0, Math.min(1, (pointerY - sourceRect.top) / sourceRect.height));

      let left = pointerX - width * anchorX;
      let top = pointerY - height * anchorY;
      left = Math.max(viewportPadding, Math.min(left, window.innerWidth - viewportPadding - width));
      top = Math.max(viewportPadding, Math.min(top, window.innerHeight - viewportPadding - height));

      previewImage.src = image.currentSrc || image.src;
      preview.classList.toggle("is-portrait", isPortrait);
      preview.style.width = `${width}px`;
      preview.style.height = `${height}px`;
      preview.style.left = `${left}px`;
      preview.style.top = `${top}px`;
      preview.style.transformOrigin = `${anchorX * 100}% ${anchorY * 100}%`;
      preview.classList.add("is-visible");
    };

    const scheduleImagePreview = (image, pointerEvent) => {
      window.clearTimeout(previewTimer);
      pendingPreviewImage = image;
      pendingPointerEvent = { clientX: pointerEvent.clientX, clientY: pointerEvent.clientY };
      previewTimer = window.setTimeout(() => {
        const imageToShow = pendingPreviewImage;
        const pointerToUse = pendingPointerEvent;
        previewTimer = undefined;
        pendingPreviewImage = undefined;
        pendingPointerEvent = undefined;
        showImagePreview(imageToShow, pointerToUse);
      }, 1000);
    };

    document
      .querySelectorAll(".portrait-frame img, .publication-figure img, .project-figure img")
      .forEach((image) => {
        const trigger = image.closest("a") || image;
        trigger.classList.add("image-preview-trigger");
        trigger.addEventListener("pointerenter", (event) => scheduleImagePreview(image, event));
        trigger.addEventListener("pointermove", (event) => {
          if (pendingPreviewImage === image) {
            pendingPointerEvent = { clientX: event.clientX, clientY: event.clientY };
          }
        });
        trigger.addEventListener("pointerleave", hideImagePreview);
        trigger.addEventListener("focus", () => showImagePreview(image));
        trigger.addEventListener("blur", hideImagePreview);
      });

    window.addEventListener("resize", hideImagePreview);
  };

  renderProfile();
  renderNavigation();
  renderAbout();
  renderSections();
  addInteractions();
  document.getElementById("current-year").textContent = new Date().getFullYear();
})();
