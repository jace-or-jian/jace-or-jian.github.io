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
  const meta = post => {
    const row = node("div", "blog-meta");
    post.tags.forEach(tag => row.append(node("span", "blog-tag", tag)));
    if (post.example) row.append(node("span", "blog-tag", "示例文章 · Preview"));
    return row;
  };
  const render = (focus = false) => {
    root.replaceChildren();
    let slug;
    try { slug = decodeURIComponent(location.hash.slice(1)); } catch { slug = "invalid"; }
    const post = posts.find(p => p.slug === slug);
    let title = "Notes & Reflections";
    let description = "Notes & Reflections";
    if (!slug) {
      root.append(node("p", "blog-kicker", "THE NOTEBOOK"), node("h2", "blog-title", title));
      root.append(node("p", "blog-count", `${posts.length} ${posts.length === 1 ? "entry" : "entries"}`));
      const list = node("div", "blog-list");
      posts.forEach(p => {
        const item = node("article", "blog-card"); item.lang = p.lang || "en";
        const heading = node("h3");
        heading.append(link(p.title, `#${encodeURIComponent(p.slug)}`, "blog-post-link"));
        item.append(meta(p), heading, node("p", "blog-summary", p.summary),
          link("Read entry →", `#${encodeURIComponent(p.slug)}`, "blog-read"));
        list.append(item);
      });
      if (!posts.length) list.append(node("p", "blog-intro", "No entries yet. Check back soon."));
      root.append(list);
    } else {
      root.append(link("← All entries", "blog.html", "blog-back"));
      if (!post) {
        title = "Entry not found";
        root.append(node("h2", "blog-title", title), node("p", "blog-intro", "This entry is unavailable. Browse all entries to continue."));
      } else {
        title = post.title; description = post.summary;
        const article = node("article", "blog-article"); article.lang = post.lang || "en";
        article.append(meta(post), node("h2", "blog-title", post.title), node("p", "blog-intro", post.summary));
        const body = node("div", "blog-prose");
        post.blocks.forEach(block => {
          if (!["p", "h2", "h3", "blockquote", "ul", "ol", "pre"].includes(block.type)) return;
          const element = node(block.type);
          if (["ul", "ol"].includes(block.type)) block.items.forEach(text => element.append(node("li", "", text)));
          else element.textContent = block.text;
          body.append(element);
        });
        article.append(body, link("← Back to all entries", "blog.html", "blog-back"));
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
  document.querySelector(".blog-entry").setAttribute("aria-current", "page");
  window.addEventListener("hashchange", () => render(true));
  render();
})();
