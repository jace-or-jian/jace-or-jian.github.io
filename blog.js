(function () {
  "use strict";
  const root = document.getElementById("blog-content");
  const posts = (window.BLOG_POSTS || []).filter(p => p.published !== false);
  const node = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  const link = (text, href, cls) => {
    const a = node("a", cls, text); a.href = href; return a;
  };
  const render = (focus = false) => {
    root.replaceChildren();
    let slug;
    try { slug = decodeURIComponent(location.hash.slice(1)); } catch { slug = "invalid"; }
    const post = posts.find(p => p.slug === slug);
    let title = "Notes & Reflections";
    let description = "Notes & Reflections";
    if (!slug) {
      root.append(node("h2", "blog-title", title));
      const list = node("div", "blog-list");
      posts.forEach(p => {
        const item = node("article", "blog-card"); item.lang = p.lang || "en";
        const heading = node("h3");
        heading.append(link(p.title, `#${encodeURIComponent(p.slug)}`, "blog-post-link"));
        item.append(heading);
        list.append(item);
      });
      if (!posts.length) list.append(node("p", "blog-intro", "No entries yet. Check back soon."));
      root.append(list);
    } else {
      root.append(link("← All notes", "index.html#notes", "blog-back"));
      if (!post) {
        title = "Entry not found";
        root.append(node("h2", "blog-title", title), node("p", "blog-intro", "This entry is unavailable. Browse all entries to continue."));
      } else {
        title = post.title; description = post.summary;
        const article = node("article", "blog-article"); article.lang = post.lang || "en";
        article.append(node("h2", "blog-title", post.title));
        const body = node("div", "blog-prose");
        post.blocks.forEach(block => {
          if (block.type === "figure") {
            const figure = node("figure", "note-figure");
            if (Number.isFinite(block.maxWidth) && block.maxWidth > 0) {
              figure.style.maxWidth = `${block.maxWidth}px`;
              figure.style.marginInline = "auto";
            }
            const a = link("", block.src, "note-figure-link");
            const img = node("img");
            img.src = block.src; img.alt = block.alt; img.loading = "lazy";
            img.width = block.width || 900; img.height = block.height || 560;
            a.append(img); figure.append(a);
            if (block.caption) figure.append(node("figcaption", "", block.caption));
            body.append(figure); return;
          }
          if (block.type === "source") {
            const p = node("p", "note-source");
            p.append(link(block.label, block.url)); body.append(p); return;
          }
          if (block.type === "equation") {
            const equation = node("div", "note-equation");
            if (Array.isArray(block.parts) && block.parts.length) {
              block.parts.forEach(part => {
                const tag = ["sub", "sup", "strong"].includes(part.tag) ? part.tag : "span";
                equation.append(node(tag, "", part.text));
              });
            } else equation.textContent = block.text;
            body.append(equation); return;
          }
          if (!["p", "h2", "h3", "blockquote", "ul", "ol", "pre"].includes(block.type)) return;
          const element = node(block.type);
          if (["ul", "ol"].includes(block.type)) block.items.forEach(text => element.append(node("li", "", text)));
          else element.textContent = block.text;
          body.append(element);
        });
        article.append(body, link("← Back to all notes", "index.html#notes", "blog-back"));
        root.append(article);
      }
    }
    document.title = `${title} · ${window.SITE_DATA.profile.name}`;
    document.querySelector('meta[name="description"]').content = description;
    if (focus) {
      const heading = root.querySelector(".blog-title");
      heading.tabIndex = -1; heading.focus({ preventScroll: true });
      root.scrollIntoView({ block: "start" });
    }
  };
  window.addEventListener("hashchange", () => render(true));
  render();
})();
