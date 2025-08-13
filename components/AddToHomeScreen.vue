<template>
  <button 
    v-if="showInstallButton"
    @click="installPWA"
    class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    :disabled="isInstalling"
    :aria-label="isInstalling ? 'Installing app...' : 'Add to home screen'"
  >
    <!-- Install Icon -->
    <svg 
      v-if="!isInstalling" 
      class="w-4 h-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
      />
    </svg>
    
    <!-- Loading Spinner -->
    <svg 
      v-else 
      class="w-4 h-4 animate-spin" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    
    <!-- Button Text -->
    <span class="hidden sm:inline">
      {{ isInstalling ? 'Installing...' : 'Install App' }}
    </span>
    
    <!-- Mobile Text -->
    <span class="sm:hidden">
      {{ isInstalling ? '...' : 'Install' }}
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showInstallButton = ref(false)
const isInstalling = ref(false)
const deferredPrompt = ref(null)

// Handle the beforeinstallprompt event
const handleBeforeInstallPrompt = (e) => {
  console.log('beforeinstallprompt event fired')
  e.preventDefault()
  deferredPrompt.value = e
  showInstallButton.value = true
}

// Install PWA function
const installPWA = async () => {
  if (!deferredPrompt.value) {
    console.log('No deferred prompt available')
    return
  }
  
  isInstalling.value = true
  
  try {
    // Show the install prompt
    deferredPrompt.value.prompt()
    
    // Wait for the user's response
    const { outcome } = await deferredPrompt.value.userChoice
    
    console.log(`User ${outcome} the install prompt`)
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
      showInstallButton.value = false
    } else {
      console.log('User dismissed the install prompt')
    }
    
    // Reset the deferred prompt
    deferredPrompt.value = null
    
  } catch (error) {
    console.error('Error during PWA installation:', error)
  } finally {
    isInstalling.value = false
  }
}

// Check if app is already installed
const checkIfInstalled = () => {
  // Check if running in standalone mode (already installed)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App is already installed')
    showInstallButton.value = false
    return true
  }
  
  // Check if running as PWA in browser
  if (window.navigator.standalone) {
    console.log('App is running in standalone mode')
    showInstallButton.value = false
    return true
  }
  
  return false
}

// Handle app installed event
const handleAppInstalled = () => {
  console.log('PWA was installed')
  showInstallButton.value = false
  deferredPrompt.value = null
}

onMounted(() => {
  // Check if already installed
  if (checkIfInstalled()) {
    return
  }
  
  // Listen for the beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  
  // Listen for the appinstalled event
  window.addEventListener('appinstalled', handleAppInstalled)
  
  // For testing in development - show button after 2 seconds if no prompt
  if (process.dev) {
    setTimeout(() => {
      if (!deferredPrompt.value && !showInstallButton.value) {
        console.log('Development mode: showing install button for testing')
        // Create a mock deferred prompt for testing
        deferredPrompt.value = {
          prompt: () => {
            console.log('Mock install prompt triggered')
            return Promise.resolve()
          },
          userChoice: Promise.resolve({ outcome: 'accepted' })
        }
        showInstallButton.value = true
      }
    }, 2000)
  }
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  window.removeEventListener('appinstalled', handleAppInstalled)
})
</script>

<style scoped>
/* Additional responsive styles if needed */
@media (max-width: 640px) {
  button {
    padding: 0.5rem 0.75rem;
  }
}
</style>