<template>
  <div 
    :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
    class="transition-opacity duration-300 ease-in-out"
  >
    <img
      ref="imageRef"
      :src="loaded ? src : placeholder"
      :alt="alt"
      :width="width"
      :height="height"
      :class="imageClass"
      class="transition-all duration-300 ease-in-out"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>

<script setup>
interface Props {
  src: string
  alt: string
  width?: number | string
  height?: number | string
  placeholder?: string
  imageClass?: string
  eager?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNiAxNkwyNCAxNkwyNCAyNEwxNiAyNFYxNloiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+Cg==',
  imageClass: '',
  eager: false
})

const imageRef = ref<HTMLImageElement>()
const loaded = ref(false)
const error = ref(false)

const onLoad = () => {
  loaded.value = true
  error.value = false
}

const onError = () => {
  error.value = true
  console.warn(`Failed to load image: ${props.src}`)
}

onMounted(() => {
  if (props.eager) {
    // Load immediately for above-the-fold images
    loaded.value = true
    return
  }

  // Use Intersection Observer for lazy loading
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loaded.value = true
          observer.disconnect()
        }
      })
    },
    {
      rootMargin: '50px'
    }
  )

  if (imageRef.value) {
    observer.observe(imageRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>