<template>
  <div class="min-h-screen bg-white transition-colors duration-300 relative">
    
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

          <!-- Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </NuxtLink>
            <ThemeToggle />
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-6 relative z-10">
      <slot />
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
        
        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-600 text-sm">
            © {{ new Date().getFullYear() }} Strands Games Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <!-- PWA Install Prompt -->
    <PWAInstallPrompt />
  </div>
</template>