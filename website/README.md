# 美的觉醒 - 现代医美科普网站

## 项目概述

这是一个基于《美的觉醒：积极心理学视角下的现代女性美丽成长指南》创建的现代化医美科普网站。网站采用优雅的设计风格，注重用户体验和专业性，为现代女性提供科学、理性的美丽成长指导。

## 设计特色

### 🎨 视觉设计
- **中性优雅色调**：主色调使用高级灰、米白、浅驼色等中性色系
- **渐变配色方案**：柔和的薄荷绿、淡紫、粉蓝等冷暖结合色彩
- **现代字体系统**：使用 Noto Sans SC 和 Inter 字体，确保中英文显示协调
- **轻量化图标**：使用 Material Symbols 和定制 SVG 图标

### 🖥️ 响应式布局
- **移动优先设计**：完全响应式，适配各种屏幕尺寸
- **流畅动画效果**：CSS3 动画和 JavaScript 交互增强用户体验
- **无障碍访问**：符合 WCAG 2.1 标准，支持键盘导航和屏幕阅读器

### 📱 现代化功能
- **平滑滚动导航**：智能导航栏和锚点跳转
- **交互式卡片**：悬停效果和微动画
- **渐进加载**：优化性能，提升加载速度
- **SEO 优化**：完整的元数据和结构化数据

## 技术栈

- **HTML5**：语义化标记，无障碍访问
- **CSS3**：CSS Grid、Flexbox、自定义属性
- **JavaScript ES6+**：现代 JavaScript 特性
- **SVG**：可缩放矢量图形
- **Web Fonts**：Google Fonts 和 Material Symbols

## 文件结构

```
website/
├── index.html              # 主页面
├── assets/
│   ├── css/
│   │   └── style.css       # 主样式文件
│   ├── js/
│   │   └── script.js       # 交互脚本
│   └── svg/                # SVG 图标库
│       ├── hero-illustration.svg
│       ├── beauty-philosophy.svg
│       ├── psychology-icon.svg
│       ├── science-icon.svg
│       ├── practice-icon.svg
│       ├── growth-icon.svg
│       ├── assessment-icon.svg
│       ├── decision-icon.svg
│       ├── bias-icon.svg
│       └── psychology-effects-icon.svg
└── README.md               # 项目说明
```

## 核心功能

### 📖 内容结构
1. **前言导读**：美的哲学和积极心理学介绍
2. **全书概览**：四大部分，十三个章节的完整结构
3. **实用工具**：心理测评、决策工具、认知偏误指南
4. **特色展示**：学术严谨性与实用性结合

### 🎯 用户体验
- **直观导航**：清晰的信息层级和导航结构
- **专业咨询**：集成企业微信咨询二维码
- **联系信息**：完整的医院联系方式和资质信息

## 使用指南

### 本地开发
1. 克隆或下载项目文件
2. 使用现代浏览器打开 `index.html`
3. 或使用本地服务器（推荐）：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx serve .
   
   # 使用 PHP
   php -S localhost:8000
   ```

### 部署到生产环境
1. 将整个 `website` 文件夹上传到 Web 服务器
2. 确保服务器支持 HTTPS（推荐）
3. 配置正确的 MIME 类型：
   - `.svg` → `image/svg+xml`
   - `.css` → `text/css`
   - `.js` → `application/javascript`

### 自定义配置

#### 更换 Logo 和图标
- 替换 HTML 中的 logo 链接：`https://docs.bccsw.cn/logo.png`
- 替换 favicon 链接：`https://docs.bccsw.cn/favicon.png`

#### 修改联系信息
在 `index.html` 的 footer 部分修改：
- 地址：重庆市渝中区临江支路28号
- 电话：023-68726872
- 邮箱：bccsw@cqlhlg.work
- ICP备案：渝ICP备2024023473号

#### 更新二维码
替换咨询二维码：
- 图片链接：`https://docs.bccsw.cn/consultant.png`
- 跳转链接：`https://work.weixin.qq.com/kfid/kfcfc2a809493f31e8f`

## 性能优化

### 🚀 加载优化
- **字体预加载**：Google Fonts 预连接
- **图片懒加载**：Intersection Observer API
- **CSS/JS 压缩**：生产环境建议压缩资源
- **缓存策略**：设置适当的 Cache-Control 头

### 📊 SEO 优化
- **元标签完整**：Title、Description、Keywords
- **Open Graph**：社交媒体分享优化
- **结构化数据**：搜索引擎友好
- **语义化 HTML**：提高可访问性

## 浏览器兼容性

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ IE 11（基本功能，部分动画可能不支持）

## 维护说明

### 内容更新
- 修改 HTML 文件中的文本内容
- 更新 SVG 图标（保持风格一致）
- 添加新的章节或工具

### 样式调整
- CSS 变量定义在 `:root` 中，便于全局修改
- 响应式断点：768px（平板）、480px（手机）
- 颜色主题可通过 CSS 变量快速切换

### 功能扩展
- JavaScript 模块化设计，易于添加新功能
- 预留移动端菜单接口
- 支持未来的动态内容加载

## 作者信息

- **作者**：联合丽格（西南中心）医生团队
- **时间**：2025年8月
- **版权**：重庆联合丽格科技有限公司
- **备案**：渝ICP备2024023473号

## License

本项目仅供重庆联合丽格科技有限公司内部使用，未经授权不得复制或商业使用。

## 技术支持

如需技术支持或定制开发，请联系：
- 邮箱：bccsw@cqlhlg.work
- 电话：023-68726872