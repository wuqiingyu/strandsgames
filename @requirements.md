# 项目依赖和安装记录

## 核心依赖 (dependencies)

### Nuxt.js 框架
- **nuxt** `^4.0.3` - Vue.js 全栈框架
- **vue** `^3.5.18` - Vue.js 核心框架
- **vue-router** `^4.5.1` - Vue.js 路由管理

### 性能监控
- **web-vitals** `^5.1.0` - Core Web Vitals 性能监控

## 开发依赖 (devDependencies)

### UI 和样式
- **@nuxtjs/tailwindcss** `^6.14.0` - Tailwind CSS 集成

### PWA 支持
- **@vite-pwa/nuxt** `^1.0.4` - Nuxt.js PWA 插件

## 功能特性

### PWA (Progressive Web App)
- Service Worker 自动生成
- Web App Manifest 配置
- 离线缓存支持
- 安装提示组件

### 部署配置
- Cloudflare Pages 预设配置
- 静态生成支持
- 缓存头配置
- 性能优化配置

### 自定义组件
- PWAInstallPrompt.vue - PWA 安装提示
- ThemeToggle.vue - 主题切换
- PerformanceMonitor.vue - 性能监控
- OptimizedImage.vue - 图像优化组件

### 已删除的文件
- ~~AppHeader.vue~~ - 已删除，功能已内联到default.vue
- ~~AppFooter.vue~~ - 已删除，功能已内联到default.vue
- ~~FluidCursor.vue~~ - 已删除，移除鼠标特效功能
- ~~lib/utils.ts~~ - 已删除，相关工具函数

### 已解决的技术问题
- ✅ Vue.js模板中script标签编译错误（移动JSON-LD到useHead配置）
- ✅ Nuxt 4组件自动导入问题（改为default.vue中内联header和footer）
- ✅ Header和Footer组件渲染问题（最终采用直接在layout中内联的方式）
- ✅ 游戏iframe URL更新为 https://games.blrssco.com/WordSearch/index.html

### SEO 优化
- 结构化数据 (JSON-LD)
- Meta 标签配置
- Open Graph 和 Twitter Cards
- Canonical URL 配置
- Robots.txt 和 Sitemap.xml

## 安装历史

1. **初始化项目**: `npx nuxi@latest init strandsgames`
2. **安装 Tailwind CSS**: `npm install @nuxtjs/tailwindcss`
3. **安装 PWA 插件**: `npm install @vite-pwa/nuxt`
4. **安装性能监控**: `npm install web-vitals`

## 构建和部署

### 本地开发
```bash
npm run dev
```

### 生产构建
```bash
npm run generate
```

### Cloudflare Pages 部署
- 构建命令: `npm run generate`
- 输出目录: `dist`
- Node.js 版本: 20

## 配置文件

### 主要配置
- `nuxt.config.ts` - Nuxt 主配置
- `_headers` - Cloudflare 头部配置
- `public/robots.txt` - SEO robots 配置
- `public/sitemap.xml` - 站点地图

### 环境变量
- `NUXT_PUBLIC_SITE_URL` - 网站URL配置

## 部署就绪

项目已完全配置好，可以直接部署到Cloudflare Pages：
- ✅ PWA 功能完整
- ✅ 静态生成优化
- ✅ 缓存策略配置
- ✅ SEO 优化完成
- ✅ 游戏iframe集成
- ✅ 响应式设计和用户体验优化