<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'

// Performance monitoring for Core Web Vitals
if (process.client) {
  // Largest Contentful Paint (LCP)
  const observeLCP = () => {
    try {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          console.log('CLS:', metric)
          // You can send this data to analytics
        })

        getFID((metric) => {
          console.log('FID:', metric)
        })

        getFCP((metric) => {
          console.log('FCP:', metric)
        })

        getLCP((metric) => {
          console.log('LCP:', metric)
        })

        getTTFB((metric) => {
          console.log('TTFB:', metric)
        })
      })
    } catch (error) {
      console.log('Web Vitals not available:', error)
    }
  }

  // Monitor page load performance
  const monitorPageLoad = () => {
    window.addEventListener('load', () => {
      // Navigation timing
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation) {
        const metrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          download: navigation.responseEnd - navigation.responseStart,
          dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          total: navigation.loadEventEnd - navigation.navigationStart
        }
        
        console.log('Page Load Metrics:', metrics)
      }
    })
  }

  // Resource timing
  const monitorResourceTiming = () => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) { // Log slow resources (>1s)
          console.log(`Slow resource: ${entry.name} took ${entry.duration}ms`)
        }
      })
    })
    
    observer.observe({ entryTypes: ['resource'] })
  }

  onMounted(() => {
    // Small delay to ensure page is ready
    setTimeout(() => {
      observeLCP()
      monitorPageLoad()
      monitorResourceTiming()
    }, 100)
  })
}
</script>