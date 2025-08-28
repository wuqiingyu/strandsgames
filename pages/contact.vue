<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about word connection games? We're here to help and always excited to hear from our puzzle community!
        </p>
      </div>
      
      <!-- Main Content -->
      <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
        <div class="text-center space-y-8">
          
          <!-- Welcome Message -->
          <div class="mb-8">
            <div class="text-6xl mb-6">📧</div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We'd Love to Hear from You!</h2>
            <p class="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're stuck on a challenging Strands puzzle, have suggestions for new word games, 
              or want to share feedback about our collection - we're here to help!
            </p>
          </div>

          <!-- Contact Reasons Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-shadow">
              <div class="text-3xl mb-3">🧩</div>
              <h3 class="font-semibold text-blue-900 mb-2">Puzzle Help Needed?</h3>
              <p class="text-blue-800 text-sm">
                Stuck on today's Strands puzzle? Need hints for Letter Boxed or Spelling Bee? We're here to guide you through any word connection challenge!
              </p>
            </div>
            
            <div class="bg-green-50 p-6 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
              <div class="text-3xl mb-3">🎮</div>
              <h3 class="font-semibold text-green-900 mb-2">New Game Ideas?</h3>
              <p class="text-green-800 text-sm">
                Have an idea for a new word connection game? Want to see a specific puzzle type added to our collection? Share your creative suggestions!
              </p>
            </div>
            
            <div class="bg-purple-50 p-6 rounded-xl border border-purple-200 hover:shadow-md transition-shadow">
              <div class="text-3xl mb-3">🔧</div>
              <h3 class="font-semibold text-purple-900 mb-2">Technical Issues?</h3>
              <p class="text-purple-800 text-sm">
                Found a bug in our games? Having trouble with the interface? Your feedback helps us improve the gaming experience for everyone!
              </p>
            </div>
            
            <div class="bg-orange-50 p-6 rounded-xl border border-orange-200 hover:shadow-md transition-shadow">
              <div class="text-3xl mb-3">💡</div>
              <h3 class="font-semibold text-orange-900 mb-2">General Inquiries?</h3>
              <p class="text-orange-800 text-sm">
                Questions about our game collection, partnership opportunities, or anything else? We're happy to chat about all things word puzzles!
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <div class="text-4xl mb-4">✉️</div>
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p class="text-gray-600 mb-6">
              Ready to reach out? Drop us a line at our email address:
            </p>
            
            <!-- Email Address -->
            <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div class="flex items-center justify-center space-x-3 mb-4">
                <div class="text-2xl">📮</div>
                <a 
                  href="mailto:contact@strandsgames.net" 
                  class="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  contact@strandsgames.net
                </a>
              </div>
              <p class="text-gray-600 text-sm">
                Click the email address above to open your email client, or copy and paste it into your preferred email app.
              </p>
            </div>
          </div>

          <!-- Response Time -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div class="flex items-center justify-center space-x-2 mb-3">
              <div class="text-2xl">⏱️</div>
              <h3 class="font-semibold text-yellow-900">Response Time</h3>
            </div>
            <p class="text-yellow-800 text-sm">
              We typically respond to emails within 24-48 hours. Please be patient with us - we read every message and want to give you a thoughtful response!
            </p>
          </div>

          <!-- Community Message -->
          <div class="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div class="text-3xl mb-3">🌟</div>
            <h3 class="font-semibold text-gray-800 mb-3">Your Voice Matters</h3>
            <p class="text-gray-700 text-sm leading-relaxed">
              Strands Games Collection is built for our word puzzle community, and your input helps shape our future. Whether you're sharing a brilliant solve, 
              suggesting improvements, or just saying hello - we genuinely appreciate every message we receive!
            </p>
          </div>

          <!-- Social Sharing -->
          <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
            <div class="text-3xl mb-3">📱</div>
            <h3 class="font-semibold text-indigo-900 mb-3">Share Your Victories</h3>
            <p class="text-indigo-800 text-sm">
              Don't forget to share your Strands solutions and word connection achievements on social media! 
              Tag us or use #StrandsGame - we love seeing how our puzzles bring people together and spark conversations.
            </p>
          </div>

        </div>
      </div>

      <!-- Back to Home Button -->
      <div class="text-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
// SEO Meta tags for Contact page
useHead({
  title: 'Contact Us - Strands Games Collection | Word Puzzle Support',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with Strands Games Collection! Have questions about word connection puzzles like Strands, Letter Boxed, or Spelling Bee? Need help with puzzles or have suggestions? We\'re here to help!'
    },
    {
      name: 'keywords',
      content: 'contact strands games, word puzzle help, strands game support, letter boxed help, spelling bee assistance, puzzle questions, game suggestions'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    // Open Graph tags
    { property: 'og:title', content: 'Contact Us - Strands Games Collection' },
    { property: 'og:description', content: 'Have questions about word connection puzzles? Need help with Strands, Letter Boxed, or Spelling Bee? We\'re here to help our puzzle community!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://strandsgames.net/contact' },
    { property: 'og:site_name', content: 'Strands Games Collection' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact Us - Strands Games Collection' },
    { name: 'twitter:description', content: 'Get help with word connection puzzles and share your feedback with our team.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://strandsgames.net/contact' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - Strands Games Collection",
        "description": "Contact page for Strands Games Collection - get help with word connection puzzles and share feedback",
        "url": "https://strandsgames.net/contact",
        "mainEntity": {
          "@type": "Organization",
          "name": "Strands Games Collection",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "contact@strandsgames.net",
            "availableLanguage": "English"
          }
        }
      })
    }
  ]
})
</script>

<style scoped>
/* Email link hover effect */
a[href^="mailto:"] {
  transition: all 0.3s ease;
}

a[href^="mailto:"]:hover {
  transform: translateY(-2px);
  text-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
}

/* Card hover effects */
.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1.md\:grid-cols-2 {
    gap: 1rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-3xl {
    font-size: 1.5rem;
  }
}
</style>