# Strands Games - PWA & Cloudflare Pages 部署指南

## 项目概述
基于 Nuxt 4 构建的 NYT Strands 游戏网站，支持 PWA 功能并优化用于 Cloudflare Pages 部署。

## 已实现功能

### ✅ PWA 支持
- **Service Worker**: 自动缓存静态资源
- **Web App Manifest**: 支持安装到主屏幕
- **离线功能**: 基础页面离线可用
- **安装提示**: 智能PWA安装提示组件

### ✅ Cloudflare Pages 优化
- **静态生成**: 使用 `nuxt generate` 预生成页面
- **Headers 配置**: 优化缓存策略和安全头
- **构建配置**: 针对 Cloudflare Pages 优化

### ✅ 性能优化
- **Core Web Vitals**: 性能监控
- **图片优化**: 懒加载组件
- **代码分割**: 自动路由分割
- **缓存策略**: 分级缓存配置

## 部署步骤

### 1. 本地构建测试
```bash
npm run generate
```

### 2. Cloudflare Pages 部署
1. 登录 Cloudflare Dashboard
2. 进入 Pages 页面
3. 连接 GitHub 仓库
4. 配置构建设置:
   - **构建命令**: `npm run generate`
   - **构建输出目录**: `dist`
   - **Node.js 版本**: `20`

### 3. 环境变量配置
在 Cloudflare Pages 设置中添加:
```
NUXT_PUBLIC_SITE_URL=https://strandsgames.net
```

## 项目结构

```
strandsgames/
├── app/
│   ├── assets/css/main.css      # 主样式文件
│   ├── components/              # Vue 组件
│   │   ├── Navigation.vue       # 导航组件
│   │   ├── ThemeToggle.vue      # 主题切换
│   │   ├── PWAInstallPrompt.vue # PWA安装提示
│   │   ├── OptimizedImage.vue   # 图片优化组件
│   │   └── PerformanceMonitor.vue # 性能监控
│   ├── layouts/
│   │   └── default.vue          # 默认布局
│   └── pages/
│       └── index.vue            # 首页
├── public/
│   ├── robots.txt               # SEO robots文件
│   ├── sitemap.xml              # 站点地图
│   └── icons/                   # PWA图标目录
├── scripts/
│   └── generate-icons.sh        # 图标生成脚本
├── _headers                     # Cloudflare头部配置
├── .env                         # 开发环境变量
├── .env.production              # 生产环境变量
└── nuxt.config.ts               # Nuxt配置文件
```

## 核心配置说明

### PWA 配置
```typescript
pwa: {
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,svg,ico}']
  },
  manifest: {
    name: 'Strands Games Online',
    short_name: 'Strands Games',
    display: 'standalone',
    theme_color: '#2563eb'
  }
}
```

### Cloudflare Pages 配置
```typescript
nitro: {
  preset: 'cloudflare-pages',
  prerender: {
    crawlLinks: false,
    routes: ['/']
  }
}
```

## 性能特性

### 缓存策略
- **静态资源**: 1年缓存
- **HTML文件**: 无缓存，支持即时更新
- **Service Worker**: 无缓存，确保及时更新

### Core Web Vitals 监控
- **LCP**: 最大内容绘制
- **FID**: 首次输入延迟
- **CLS**: 累积布局偏移

## SEO 优化

### 已实现
- **结构化数据**: JSON-LD Schema
- **Meta标签**: 完整的Open Graph和Twitter Cards
- **Canonical URL**: 规范化URL
- **Robots.txt**: 搜索引擎指引
- **Sitemap**: XML站点地图

## 开发和维护

### 开发服务器
```bash
npm install
npm run dev
```

### 构建和部署
```bash
npm run generate  # 生成静态文件
npx wrangler pages dev dist  # 本地预览
```

### 图标生成
```bash
npm run icons  # 生成PWA图标(需要先准备源图标)
```

## 下一步改进建议

### 功能增强
1. **多页面支持**: 添加 /today, /solver, /archive 等页面
2. **真实图标**: 替换占位符图标为高质量设计
3. **推送通知**: 每日puzzle提醒
4. **离线数据**: 缓存puzzle数据

### 性能优化
1. **图片格式**: WebP/AVIF支持
2. **预加载**: 关键资源预加载
3. **字体优化**: 字体显示优化
4. **Bundle分析**: 构建产物分析

项目已成功配置PWA和Cloudflare Pages支持，可以直接部署使用！
