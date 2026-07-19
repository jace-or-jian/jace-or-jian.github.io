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
