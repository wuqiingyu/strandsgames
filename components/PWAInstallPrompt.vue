<template>
  <div 
    v-if="showInstallPrompt" 
    class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50 transform transition-all duration-300"
    :class="{ 'translate-y-full opacity-0': !visible, 'translate-y-0 opacity-100': visible }"
  >
    <div class="flex items-start space-x-3">
      <!-- App Icon -->
      <div class="flex-shrink-0">
        <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M8 8L16 16M8 16L16 8" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
      </div>
      
      <!-- Content -->
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">
          Install Strands Games
        </h4>
        <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">
          Add to your home screen for quick access and offline play
        </p>
        
        <!-- Buttons -->
        <div class="flex space-x-2">
          <button
            @click="installPWA"
            class="flex-1 bg-blue-600 text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Install
          </button>
          <button
            @click="dismissPrompt"
            class="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Not now
          </button>
        </div>
      </div>
      
      <!-- Close Button -->
      <button
        @click="dismissPrompt"
        class="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const showInstallPrompt = ref(false)
const visible = ref(false)
const deferredPrompt = ref(null)

onMounted(() => {
  // Listen for the beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing
    e.preventDefault()
    // Save the event so it can be triggered later
    deferredPrompt.value = e
    
    // Check if user has already dismissed the prompt
    const dismissed = localStorage.getItem('pwa-install-dismissed')
    const installed = localStorage.getItem('pwa-installed')
    
    if (!dismissed && !installed) {
      // Show the install prompt after a delay
      setTimeout(() => {
        showInstallPrompt.value = true
        nextTick(() => {
          visible.value = true
        })
      }, 3000)
    }
  })

  // Listen for successful installation
  window.addEventListener('appinstalled', () => {
    localStorage.setItem('pwa-installed', 'true')
    showInstallPrompt.value = false
    visible.value = false
  })

  // Check if app is already installed (display mode is standalone)
  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    localStorage.setItem('pwa-installed', 'true')
  }
})

const installPWA = async () => {
  if (!deferredPrompt.value) return

  try {
    // Show the install prompt
    deferredPrompt.value.prompt()
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.value.userChoice
    
    if (outcome === 'accepted') {
      localStorage.setItem('pwa-installed', 'true')
    } else {
      localStorage.setItem('pwa-install-dismissed', 'true')
    }
    
    // Clear the deferredPrompt
    deferredPrompt.value = null
    dismissPrompt()
  } catch (error) {
    console.error('Error installing PWA:', error)
  }
}

const dismissPrompt = () => {
  visible.value = false
  setTimeout(() => {
    showInstallPrompt.value = false
  }, 300)
  
  // Remember that user dismissed the prompt
  localStorage.setItem('pwa-install-dismissed', 'true')
}

// Auto-dismiss after 15 seconds
onMounted(() => {
  if (showInstallPrompt.value) {
    setTimeout(() => {
      if (visible.value) {
        dismissPrompt()
      }
    }, 15000)
  }
})
</script>

<style scoped>
/* Custom animations */
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>