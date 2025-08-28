<template>
  <!-- Footer Component - Clean Design -->
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
</template>

<script setup>
// Clean footer component from original project
</script>

<style scoped>
/* Mobile navigation styles */
@media (max-width: 768px) {
  .flex.justify-center nav {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .flex.justify-center nav::-webkit-scrollbar {
    display: none;
  }
}
</style>