# Personal Academic Homepage

这是一个无框架、无依赖的响应式学术个人主页骨架，参考了 [wyhuang.org](https://wyhuang.org/) 的信息架构，但使用了独立的视觉设计。它可以直接部署到 GitHub Pages、Netlify 或任意静态服务器。

## 如何填写自己的内容

绝大部分内容只需要修改 `site-data.js`：

- `profile`：姓名、身份、学校、地址、邮箱、头像和社交链接
- `about`：自我介绍、按钮和研究兴趣
- `education`：教育经历
- `research`：研究方向
- `publications`：论文、作者、会议/期刊和相关链接
- `awards`、`skills`、`news`：奖项、技能和动态

如果暂时不需要某个板块，将该板块的 `show: true` 改成 `show: false` 即可；导航也会自动隐藏对应项目。

## 替换文件

1. 将个人照片放入 `assets` 文件夹，例如 `assets/profile.jpg`。
2. 在 `site-data.js` 中把 `profile.photo` 改为 `assets/profile.jpg`。
3. 将简历 PDF 放到项目里，例如 `files/cv.pdf`，再把 `profile.cv` 改为 `files/cv.pdf`。

## 本地预览

你可以直接双击 `index.html`。也可以在项目目录运行一个本地服务器：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 文件结构

```text
personal_webpage/
├── index.html              # 页面语义结构
├── site-data.js            # 主要内容（优先编辑这里）
├── styles.css              # 视觉样式和响应式布局
├── script.js               # 内容渲染、导航和移动端交互
├── assets/
│   ├── avatar-placeholder.svg
│   └── favicon.svg
├── files/
│   ├── Jiajie_Jian_CV.pdf
│   └── publications/       # 论文 PDF
└── README.md
```

## 部署到 GitHub Pages

将这些文件推送到 GitHub 仓库，在仓库的 **Settings → Pages** 中选择从当前分支的根目录部署即可。主页入口已经是 `index.html`，不需要构建步骤。

## Notes & Reflections 博客

侧栏入口指向 `blog.html`，文章地址为 `blog.html#文章slug`，支持直接访问、刷新和浏览器前进后退。

在 `blog-data.js` 的数组里添加文章：`slug` 是唯一且固定的链接标识，`title` 是标题，`tags` 是标签数组，`summary` 是摘要，`lang` 是正文语言。`blocks` 按顺序填写正文，支持 p、h2、h3、blockquote、ul、ol、pre、equation、figure、source；列表使用 items 数组，其余使用 text。所有文本作为纯文本显示，不执行 HTML。列表按数组顺序排列，不显示日期；可将重要主题放在前面。

笔记采用英文，列表只显示可点击标题。published: false 会从界面隐藏文章，但源文件仍然公开，私人草稿不要放在网站目录。此版本无在线编辑后台，也不需要构建步骤。

正文插图：figure 使用 src、alt、caption、width、height；source 使用 label 和 url；equation 使用 text。配图位于 assets/notes/，点击可查看完整矢量图。

## 笔记写作原则

这些是作者的个人学习帖子，以作者自己的观点、感受和思考过程为主。英文表达应自然、精炼、有逻辑，可使用第一人称记录理解和偏好；避免申请或研究意向式包装。只纠正明显的技术错误，把必要条件简短融入原句，避免反复强调边界、反驳作者直觉或写成论文式技术说明。保留作者主旨，不杜撰作者经历。配图和公式服务于理解，正文不添加参考链接。
