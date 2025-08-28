<template>
  <client-only>
    <div class="adsense-container" :key="`ad-${adSlot}`">
      <ins 
        ref="adElement"
        class="adsbygoogle"
        :style="style"
        data-ad-client="ca-pub-2472509388621380"
        :data-ad-slot="adSlot"
        :data-ad-format="adFormat"
        :data-full-width-responsive="responsive.toString()">
      </ins>
    </div>
    <template #fallback>
      <div class="ad-placeholder" :style="style">
        <!-- 广告加载中的占位符 -->
      </div>
    </template>
  </client-only>
</template>

<script setup>
const props = defineProps({
  adSlot: { type: String, required: true },
  adFormat: { type: String, default: 'auto' },
  style: { type: String, default: 'display:block' },
  responsive: { type: [Boolean, String], default: true }
})

onMounted(() => {
  // 如果AdSense脚本已加载但广告位没有被处理，手动触发一次
  if (window.adsbygoogle && window.adsbygoogle.loaded) {
    setTimeout(() => {
      const adElement = document.querySelector(`[data-ad-slot="${props.adSlot}"]`)
      if (adElement && !adElement.getAttribute('data-adsbygoogle-status')) {
        try {
          window.adsbygoogle.push({})
        } catch (error) {
          // 静默处理错误
        }
      }
    }, 1000)
  }
})
</script>

<style scoped>
.adsense-container {
  width: 100%;
  display: block;
  text-align: center;
  min-height: 50px;
  position: relative;
}

.adsbygoogle {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  visibility: visible !important;
  opacity: 1 !important;
  background-color: #e3f2fd !important;
  min-height: 90px !important;
}

/* 强制显示广告iframe */
.adsense-container :deep(iframe) {
  visibility: visible !important;
  opacity: 1 !important;
  background-color: #e3f2fd !important;
}

.ad-placeholder {
  width: 100%;
  min-height: 90px;
  background-color: #e3f2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 14px;
}
</style>