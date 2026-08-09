# 深圳公众急救手册（静态网站）

这是将《深圳公众急救培训手册（第二版）》整理为适合手机阅读和分享的公益静态网站。网站不依赖框架或第三方服务，可直接由 GitHub Pages 托管。

## 本地预览

```bash
python3 -m http.server 8080
```

然后访问 `http://127.0.0.1:8080/`。

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库，并把本目录提交、推送到 `main` 分支。
2. 打开仓库 **Settings → Pages**。
3. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
4. 推送后，`.github/workflows/pages.yml` 会自动发布网站。

## 内容说明

- 主要来源：深圳市急救中心编制的《深圳公众急救培训手册（第二版）》，2021 年。
- 网站对扫描版进行了 OCR、结构化整理和少量错字修正。
- 急救指南会更新。网站特别标注了成人气道异物处理、止血带和 CPR 比例等需要更新或订正的内容。
- 本站用于知识复习，不能替代专业培训、120 调度指导或医疗诊治。

## 文件结构

- `index.html`：全部可搜索、可复制的急救内容
- `styles.css`：响应式与无障碍样式
- `app.js`：菜单、主题搜索和折叠交互
- `深圳公众急救培训手册.pdf`：原版扫描 PDF
- `.github/workflows/pages.yml`：GitHub Pages 自动发布流程
