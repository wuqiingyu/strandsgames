<template>
  <div class="pwa-notification-manager">
    <!-- Install Prompt -->
    <div 
      v-if="showInstallPrompt" 
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50"
    >
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0">
          <svg class="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-sm">Install Strands Games</h3>
          <p class="text-blue-100 text-xs mt-1">Add to your home screen for quick access!</p>
        </div>
      </div>
      <div class="flex gap-2 mt-3">
        <button 
          @click="installPWA" 
          class="bg-white text-blue-600 px-3 py-1 rounded text-sm font-medium hover:bg-blue-50 transition-colors"
        >
          Install
        </button>
        <button 
          @click="dismissInstall" 
          class="bg-blue-700 text-white px-3 py-1 rounded text-sm hover:bg-blue-800 transition-colors"
        >
          Later
        </button>
      </div>
    </div>

    <!-- Push Notification Permission -->
    <div 
      v-if="showNotificationPrompt" 
      class="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50"
    >
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0">
          <svg class="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM7 7h3l-3-3v3zM21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h6"></path>
          </svg>
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-sm">Enable Notifications</h3>
          <p class="text-green-100 text-xs mt-1">Get notified about new daily puzzles!</p>
        </div>
      </div>
      <div class="flex gap-2 mt-3">
        <button 
          @click="enableNotifications" 
          class="bg-white text-green-600 px-3 py-1 rounded text-sm font-medium hover:bg-green-50 transition-colors"
        >
          Enable
        </button>
        <button 
          @click="dismissNotifications" 
          class="bg-green-700 text-white px-3 py-1 rounded text-sm hover:bg-green-800 transition-colors"
        >
          Skip
        </button>
      </div>
    </div>

    <!-- Notification Status (for testing) -->
    <div v-if="notificationStatus" class="fixed top-4 right-4 z-50">
      <div 
        class="bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-sm"
        :class="{
          'border-green-200 bg-green-50': notificationStatus.includes('granted'),
          'border-red-200 bg-red-50': notificationStatus.includes('denied'),
          'border-yellow-200 bg-yellow-50': notificationStatus.includes('default')
        }"
      >
        <p class="text-sm text-gray-700">{{ notificationStatus }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showInstallPrompt = ref(false)
const showNotificationPrompt = ref(false)
const notificationStatus = ref('')
const deferredPrompt = ref(null)

// PWA Install functionality
const handleBeforeInstallPrompt = (e) => {
  e.preventDefault()
  deferredPrompt.value = e
  
  // Show install prompt after a short delay
  setTimeout(() => {
    showInstallPrompt.value = true
  }, 3000)
}

const installPWA = async () => {
  if (!deferredPrompt.value) return
  
  showInstallPrompt.value = false
  deferredPrompt.value.prompt()
  
  const { outcome } = await deferredPrompt.value.userChoice
  console.log(`User ${outcome} the install prompt`)
  deferredPrompt.value = null
}

const dismissInstall = () => {
  showInstallPrompt.value = false
  localStorage.setItem('pwa-install-dismissed', Date.now().toString())
}

// Push Notifications functionality  
const checkNotificationSupport = () => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications')
    return false
  }
  return true
}

const enableNotifications = async () => {
  if (!checkNotificationSupport()) {
    notificationStatus.value = 'Notifications not supported in this browser'
    return
  }

  try {
    const permission = await Notification.requestPermission()
    
    if (permission === 'granted') {
      notificationStatus.value = 'Notifications enabled successfully!'
      showNotificationPrompt.value = false
      
      // Show a welcome notification
      new Notification('Welcome to Strands Games!', {
        body: 'You will now receive updates about new daily puzzles.',
        icon: '/icons/icon-192x192.svg',
        badge: '/icons/icon-72x72.svg'
      })
      
      // Register for push notifications if service worker is available
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        registerPushNotifications()
      }
      
      // Hide status after 3 seconds
      setTimeout(() => {
        notificationStatus.value = ''
      }, 3000)
    } else if (permission === 'denied') {
      notificationStatus.value = 'Notifications blocked. Enable in browser settings.'
      setTimeout(() => {
        notificationStatus.value = ''
      }, 5000)
    } else {
      notificationStatus.value = 'Notification permission not granted'
      setTimeout(() => {
        notificationStatus.value = ''
      }, 3000)
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error)
    notificationStatus.value = 'Error enabling notifications'
    setTimeout(() => {
      notificationStatus.value = ''
    }, 3000)
  }
}

const registerPushNotifications = async () => {
  try {
    const registration = await navigator.serviceWorker.ready
    console.log('Service Worker ready for push notifications')
    
    // In a real app, you would subscribe to push notifications here
    // const subscription = await registration.pushManager.subscribe({
    //   userVisibleOnly: true,
    //   applicationServerKey: 'your-vapid-public-key'
    // })
    
    // Send subscription to your server
    // await fetch('/api/push-subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify(subscription)
    // })
    
  } catch (error) {
    console.error('Error registering for push notifications:', error)
  }
}

const dismissNotifications = () => {
  showNotificationPrompt.value = false
  localStorage.setItem('notifications-dismissed', Date.now().toString())
}

// Show notification prompt after install or after some time
const showNotificationPromptDelayed = () => {
  const dismissed = localStorage.getItem('notifications-dismissed')
  const dayAgo = Date.now() - 24 * 60 * 60 * 1000
  
  if (!dismissed || parseInt(dismissed) < dayAgo) {
    setTimeout(() => {
      if (Notification.permission === 'default') {
        console.log('Showing notification prompt')
        showNotificationPrompt.value = true
      }
    }, 10000) // Show after 10 seconds
  }
}

// Force show install prompt for testing in development
const forceShowInstallPrompt = () => {
  if (process.dev) {
    console.log('Development mode: forcing install prompt after 3 seconds')
    setTimeout(() => {
      if (!showInstallPrompt.value) {
        // Create a mock deferred prompt for testing
        deferredPrompt.value = {
          prompt: () => {
            console.log('Mock install prompt triggered - this simulates the real PWA install dialog')
            alert('PWA Install Dialog\n\nIn a real browser with PWA support, this would show the install prompt.')
            return Promise.resolve()
          },
          userChoice: Promise.resolve({ outcome: 'accepted' })
        }
        showInstallPrompt.value = true
      }
    }, 3000)
  }
}

// Lifecycle
onMounted(() => {
  console.log('PWAManager mounted')
  
  // Check if already installed
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('App is running in standalone mode')
    return
  }
  
  // Check if install was recently dismissed
  const dismissed = localStorage.getItem('pwa-install-dismissed')
  const dayAgo = Date.now() - 24 * 60 * 60 * 1000
  
  if (!dismissed || parseInt(dismissed) < dayAgo) {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }
  
  // Force show install prompt in development mode
  forceShowInstallPrompt()
  
  // Show notification prompt
  showNotificationPromptDelayed()
})

onUnmounted(() => {
  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
})

// Test function for development
const sendTestNotification = () => {
  if (Notification.permission === 'granted') {
    new Notification('Test Notification', {
      body: 'This is a test notification from Strands Games!',
      icon: '/icons/icon-192x192.svg',
      badge: '/icons/icon-72x72.svg'
    })
  }
}

// Expose test function globally for development
if (process.dev) {
  window.sendTestNotification = sendTestNotification
}
</script>

<style scoped>
.pwa-notification-manager {
  /* Base styles already included in template */
}
</style>