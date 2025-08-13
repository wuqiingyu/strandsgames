<template>
  <nav class="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <NuxtLink to="/" class="flex items-center space-x-2 text-xl font-bold text-primary">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
              <path d="M8 8L16 16M8 16L16 8" stroke="currentColor" stroke-width="2"/>
            </svg>
            <span class="gradient-text">Strands Games</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/today" class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            Today's Puzzle
          </NuxtLink>
          <NuxtLink to="/solver" class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            Solver
          </NuxtLink>
          <NuxtLink to="/archive" class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            Archive
          </NuxtLink>
          <NuxtLink to="/how-to-play" class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
            How to Play
          </NuxtLink>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <ThemeToggle />
          
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
        <div class="flex flex-col space-y-4">
          <NuxtLink 
            to="/" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-2 py-1"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/today" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-2 py-1"
          >
            Today's Puzzle
          </NuxtLink>
          <NuxtLink 
            to="/solver" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-2 py-1"
          >
            Solver
          </NuxtLink>
          <NuxtLink 
            to="/archive" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-2 py-1"
          >
            Archive
          </NuxtLink>
          <NuxtLink 
            to="/how-to-play" 
            @click="mobileMenuOpen = false"
            class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-2 py-1"
          >
            How to Play
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Close mobile menu when clicking outside or on escape
onMounted(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest('nav')) {
      mobileMenuOpen.value = false
    }
  }
  
  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      mobileMenuOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.text-primary {
  color: var(--primary-color);
}

.gradient-text {
  background: linear-gradient(90deg, var(--primary-color), #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>