<template>
  <div class="min-h-screen bg-white transition-colors duration-300 relative">
    
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4DJM63K"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <!-- Performance Monitor -->
    <PerformanceMonitor />
    
    <!-- Header Component - Inline -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <img src="/icons/icon.svg" alt="Strands Games Logo" class="w-8 h-8" />
            <NuxtLink to="/" class="text-xl font-bold text-gray-900">
              Strands Games
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </NuxtLink>
            <NuxtLink to="/wiki" class="text-gray-600 hover:text-blue-600 transition-colors">
              Wiki
            </NuxtLink>
            <AddToHomeScreen />
            <ThemeToggle />
          </nav>

          <!-- Mobile Controls -->
          <div class="md:hidden flex items-center space-x-3">
            <AddToHomeScreen />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-6 relative z-10">
      <slot></slot>
    </main>
    
    <!-- Footer Component - Inline -->
    <footer class="bg-gray-50 border-t border-gray-200 mt-12 relative z-10">
      <div class="max-w-6xl mx-auto px-4 py-12">
        <!-- Footer Content Grid -->
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <img src="/icons/icon.svg" alt="Strands Games Logo" class="w-8 h-8" />
              <h3 class="text-xl font-bold text-gray-900">Strands Games</h3>
            </div>
            <p class="text-gray-600 mb-4 max-w-md">
              We are a dedicated word game community where players discover, learn, and master various word puzzles. From NYT Strands to classic word challenges, we share tips, strategies, and daily solutions to enhance your word gaming experience.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/" class="text-gray-600 hover:text-blue-600 transition-colors">Home</NuxtLink></li>
              <li><NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">About</NuxtLink></li>
            </ul>
          </div>
          
          <!-- Legal -->
          <div>
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Legal</h4>
            <ul class="space-y-2">
              <li><NuxtLink to="/privacy-policy" class="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</NuxtLink></li>
              <li><NuxtLink to="/terms" class="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</NuxtLink></li>
              <li><NuxtLink to="/cookies" class="text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</NuxtLink></li>
              <li><NuxtLink to="/contact" class="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</NuxtLink></li>
            </ul>
          </div>
        </div>
        
        <!-- Mobile Navigation Bar (Only on mobile) -->
        <div class="md:hidden pt-6 border-t border-gray-200">
          <div class="flex justify-center">
            <nav class="flex items-center space-x-6">
              <NuxtLink 
                to="/about" 
                class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="text-xs font-medium">About</span>
              </NuxtLink>
              
              <NuxtLink 
                to="/wiki" 
                class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <span class="text-xs font-medium">Wiki</span>
              </NuxtLink>
              
              <NuxtLink 
                to="/contact" 
                class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-xs font-medium">Contact</span>
              </NuxtLink>
              
              <NuxtLink 
                to="/privacy-policy" 
                class="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span class="text-xs font-medium">Privacy</span>
              </NuxtLink>
            </nav>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm">
            © {{ new Date().getFullYear() }} Strands Games Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <!-- PWA Manager (Install + Notifications) -->
    <PWAManager />
    
    <!-- Scroll to Top Button - Direct Implementation -->
    <button
      v-if="showScrollToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
      aria-label="回到顶部"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// AdSense和Google Tag Manager配置
useHead({
  script: [
    // Google Tag Manager
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M4DJM63K');`,
      type: 'text/javascript'
    },
    // AdSense
    {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2472509388621380',
      crossorigin: 'anonymous'
    }
  ]
})

// ScrollToTop functionality
const showScrollToTop = ref(false)

const checkScrollPosition = () => {
  showScrollToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  console.log('Layout with ScrollToTop mounted')
  
  // 初始检查
  checkScrollPosition()
  
  // 添加滚动监听
  window.addEventListener('scroll', checkScrollPosition)
  
  // 开发模式测试 - 3秒后显示
  if (process.dev) {
    setTimeout(() => {
      console.log('Dev mode: showing scroll to top button')
      showScrollToTop.value = true
    }, 3000)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped>
/* 移动端适配ScrollToTop按钮 */
@media (max-width: 768px) {
  .fixed.bottom-6.right-6 {
    bottom: 5rem; /* 避开移动端footer导航 */
  }
}
</style>