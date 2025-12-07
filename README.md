# 学校公告站点

这是一个现代化、响应式的学校公告站点模板，采用毛玻璃设计风格，可用于各类学校的公告信息发布。

## 功能特点

- **现代化UI设计**：采用毛玻璃效果（Glassmorphism）设计，视觉效果出众
- **响应式布局**：完美适配桌面端和移动端设备
- **完整的页面结构**：
  - 首页（index.html）- 展示重要公告和最新消息
  - 公告列表页（announcements.html）- 按分类、时间筛选公告
  - 公告详情页（announcement-detail.html）- 显示公告详细内容
  - 发布示例页（publish-example.html）- 公告发布表单示例
- **交互功能**：搜索、筛选、图片轮播、附件下载等
- **无障碍访问**：遵循ARIA标准，支持键盘导航
- **SEO友好**：包含完整的meta标签

## 技术栈

- HTML5 + CSS3 + JavaScript (原生)
- [Tailwind CSS](https://tailwindcss.com/) - 通过CDN引入
- [Font Awesome](https://fontawesome.com/) - 图标库，通过CDN引入

## 快速开始

1. 克隆或下载此仓库
2. 直接在浏览器中打开 `index.html` 文件即可查看效果
3. 可通过修改HTML文件顶部的变量快速自定义为不同学校使用

## 自定义配置

每个HTML文件顶部都有以下可配置变量：

```html
<!-- 
可替换变量:
SCHOOL_NAME = 学校名称
LOGO_PATH = 学校Logo图片路径
PRIMARY_COLOR_HEX = 主色调HEX值
BACKGROUND_IMAGE_URL = 背景图片URL
-->
```

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 部署方式

可直接部署到任何静态网站托管服务，例如：
- GitHub Pages
- Netlify
- Vercel
- 传统Web服务器

## 许可证

本项目为开源项目，可根据需要自由使用和修改。