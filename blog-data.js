// Add posts here. Use a unique, permanent slug; set published: false to hide drafts.
// Blocks support p, h2, h3, blockquote, ul, ol and pre (plain text code).
window.BLOG_POSTS = [
  {
    slug: "a-place-for-notes",
    title: "给想法留一个位置",
    tags: ["Reflections", "Learning"],
    summary: "关于这个空间可以记录什么：学习中的问题、阅读后的思考，以及尚未完成的想法。",
    lang: "zh-CN",
    example: true,
    published: true,
    blocks: [
      { type: "p", text: "这是一篇用于预览博客结构的示例文章，不代表作者已经发表的观点。你可以用自己的第一篇文章替换它。" },
      { type: "h2", text: "记录学习的过程" },
      { type: "p", text: "一篇学习笔记可以从一个具体的问题开始：这个概念为什么成立？推导中的某一步用了什么假设？换一种条件，结论是否仍然适用？" },
      { type: "blockquote", text: "不必一次讲清所有事情，先把一个问题想清楚。" },
      { type: "h2", text: "可以写些什么" },
      { type: "ul", items: ["阅读论文后留下的问题和理解。", "从公式到直觉：一个概念的学习过程。", "实验中的观察、失败尝试和后续计划。"] },
      { type: "h2", text: "给未完成的想法留出空间" },
      { type: "p", text: "正文可以区分已验证的结论、个人理解和待验证的猜想。以后有了新的认识，也可以回来补充，让笔记保留思考发展的过程。" }
    ]
  }
];
