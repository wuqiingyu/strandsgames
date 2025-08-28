<template>
  <!-- Header Component - Clean Design -->
  <div>
    <!-- Desktop Header -->
    <header class="hidden md:block bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo and Category -->
          <div class="flex items-center space-x-8 flex-1">
            <div class="flex items-center space-x-2">
              <img src="/icons/icon.svg" alt="Strands Games Logo" class="w-8 h-8" />
              <NuxtLink to="/" class="text-xl font-bold text-gray-900">
                Strands Games
              </NuxtLink>
            </div>
            <!-- Game Category Component -->
            <div class="hidden lg:block flex-1 max-w-2xl">
              <GameCategory />
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/landing" class="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-300/50">
              Games
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </NuxtLink>
            <NuxtLink to="/wiki" class="text-gray-600 hover:text-blue-600 transition-colors">
              Wiki
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Mobile Header -->
    <header class="md:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
      <div class="flex items-center justify-between h-16 px-4">
        <!-- Hamburger Menu -->
        <button @click="toggleMobileMenu" class="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="/icons/icon.svg" alt="Strands Games Logo" class="w-6 h-6" />
          <NuxtLink to="/" class="text-lg font-bold text-gray-900">
            Strands Games
          </NuxtLink>
        </div>

        <!-- Games Link -->
        <NuxtLink to="/landing" class="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-2 rounded-full text-sm font-semibold hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-pink-300/50">
          Games
        </NuxtLink>
      </div>

      <!-- Mobile Category Dropdown -->
      <div v-if="showMobileMenu" class="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
        <div class="p-4">
          <div class="space-y-3">
            <!-- Navigation Links -->
            <NuxtLink to="/about" @click="closeMobileMenu" class="block text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
              About
            </NuxtLink>
            <NuxtLink to="/wiki" @click="closeMobileMenu" class="block text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
              Wiki
            </NuxtLink>
          </div>
          
          <!-- Game Categories -->
          <div class="mt-6 pt-4 border-t border-gray-100">
            <h3 class="text-sm font-semibold text-gray-900 mb-3">Game Categories</h3>
            <GameCategory />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile menu state
const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  if (showMobileMenu.value && !event.target.closest('header')) {
    closeMobileMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Clean header styles - using Tailwind classes */
/* Mobile menu transition */
@media (max-width: 767px) {
  .mobile-category-dropdown {
    animation: slideDown 0.2s ease-out;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>