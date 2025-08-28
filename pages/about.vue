<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <div class="text-6xl mb-4">🌟</div>
        <h1 class="text-4xl font-bold text-gray-900 mb-4">About Strands Games Collection</h1>
        <p class="text-xl text-gray-600">
          A simple collection of word connection games
        </p>
      </div>

      <!-- Main Content -->
      <div class="space-y-8">
        
        <!-- What We Do Section -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <div class="text-6xl md:text-8xl">🎯</div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p class="text-lg text-gray-700 mb-4">
                We collect and organize various word connection games like Strands, Letter Boxed, and Spelling Bee in one convenient place.
              </p>
              <p class="text-gray-600">
                This is a simple gaming collection website where you can find different types of word puzzles. No fancy features, no complicated systems - just games you can play.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Game Collection Section -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="text-center mb-8">
            <div class="text-6xl mb-4">🎮</div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Game Collection</h2>
            <p class="text-lg text-gray-600">
              Word connection games we've gathered for easy access
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <!-- Strands -->
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div class="text-3xl mb-3">🧩</div>
              <h3 class="font-semibold text-blue-900 mb-2">Strands Game</h3>
              <p class="text-blue-800 text-sm">
                Daily themed word puzzles where you find connected words in a 6x8 grid, including the special spangram.
              </p>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div class="text-3xl mb-3">📦</div>
              <h3 class="font-semibold text-purple-900 mb-2">Letter Boxed</h3>
              <p class="text-purple-800 text-sm">
                Strategic word formation using letters arranged around a square frame.
              </p>
            </div>
            
            <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div class="text-3xl mb-3">🐝</div>
              <h3 class="font-semibold text-yellow-900 mb-2">Spelling Bee</h3>
              <p class="text-yellow-800 text-sm">
                Create words using letters from a honeycomb arrangement, with the center letter required.
              </p>
            </div>
          </div>
        </div>

        <!-- Simple Facts Section -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div class="text-center mb-8">
            <div class="text-6xl mb-4">📝</div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Simple and Honest</h2>
          </div>
          
          <div class="space-y-4 max-w-2xl mx-auto">
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <p class="text-gray-700">
                <strong>No subscriptions:</strong> All games are free to play
              </p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <p class="text-gray-700">
                <strong>No accounts needed:</strong> Just visit and play
              </p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <p class="text-gray-700">
                <strong>Collection website:</strong> We gather games, not create them
              </p>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-2xl">✅</span>
              <p class="text-gray-700">
                <strong>Simple purpose:</strong> Easy access to word connection games
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
          <div class="text-center space-y-4">
            <div class="text-4xl">📧</div>
            <h3 class="font-semibold text-gray-800 text-lg">Have Questions?</h3>
            <p class="text-gray-700 text-sm max-w-2xl mx-auto">
              If you have any questions about our game collection or suggestions for new games to include, 
              feel free to reach out.
            </p>
            <div class="pt-4">
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                Contact Us
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta tags for About page
useHead({
  title: 'About Us - Strands Games Collection | Simple Word Game Collection',
  meta: [
    {
      name: 'description',
      content: 'About Strands Games Collection - a simple website that gathers word connection games like Strands, Letter Boxed, and Spelling Bee in one place for easy access.'
    },
    {
      name: 'keywords',
      content: 'about strands games, word connection games collection, strands letter boxed spelling bee, word game website, puzzle collection'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph tags
    { property: 'og:title', content: 'About Us - Strands Games Collection' },
    { property: 'og:description', content: 'A simple word game collection website with Strands, Letter Boxed, Spelling Bee and other word connection puzzles.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://strandsgames.net/about' },
    { property: 'og:site_name', content: 'Strands Games Collection' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'About Us - Strands Games Collection' },
    { name: 'twitter:description', content: 'Simple word game collection website with easy access to various word connection puzzles.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://strandsgames.net/about' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Strands Games Collection",
        "description": "A simple word game collection website that gathers various word connection puzzles for easy access",
        "url": "https://strandsgames.net/about",
        "mainEntity": {
          "@type": "WebSite",
          "name": "Strands Games Collection",
          "url": "https://strandsgames.net",
          "description": "A collection of word connection games including Strands, Letter Boxed, and Spelling Bee"
        }
      })
    }
  ]
})
</script>

<style scoped>
/* 响应式调整 */
@media (max-width: 768px) {
  .grid-cols-1.md\\:grid-cols-3 {
    gap: 1rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
}
</style>