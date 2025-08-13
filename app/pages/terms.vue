<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p class="text-sm text-gray-600">Last Updated: {{ lastUpdated }}</p>
      </div>
      
      <!-- Main Content -->
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div class="space-y-8 text-gray-700 leading-relaxed">
          
          <!-- 1. Agreement -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">1. Agreement to Terms</h2>
            <p class="mb-4">
              Welcome to Strands Games Collection! By accessing and using our website and word connection games, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, please do not use our service.
            </p>
            <p>
              Strands Games Collection provides online word connection puzzles including Strands, Letter Boxed, Spelling Bee, and other brain-challenging games for entertainment, education, and mental exercise.
            </p>
          </section>

          <!-- 2. Eligibility -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">2. User Eligibility</h2>
            <p class="mb-4">To use Strands Games Collection, you must:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Be at least 13 years old (or the minimum age required in your jurisdiction)</li>
              <li>Be a human user (automated access, bots, or puzzle-solving scripts are prohibited)</li>
              <li>Provide accurate information when required</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Use our games for personal, non-commercial purposes</li>
            </ul>
            <p class="mt-4">
              Our word connection games are designed to be family-friendly and suitable for all ages with basic reading skills.
            </p>
          </section>

          <!-- 3. Service Description -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">3. Service Description</h2>
            <p class="mb-4">
              Strands Games Collection offers various online word connection puzzles and brain games, including but not limited to:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li><strong>Strands Game</strong> - Daily themed word puzzles with spangram challenges</li>
              <li><strong>Letter Boxed</strong> - Strategic word formation using letters around a square frame</li>
              <li><strong>Spelling Bee</strong> - Honeycomb-based word building with pangram discoveries</li>
              <li><strong>Additional word puzzles</strong> - Various other connection-based brain challenges</li>
              <li><strong>Game guides and solutions</strong> - Helpful hints and strategies for puzzle solving</li>
            </ul>
            <p class="mt-4">
              All games are provided for entertainment and educational purposes. While challenging and mentally stimulating, they should not be considered as professional cognitive assessments.
            </p>
          </section>

          <!-- 4. User Conduct -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">4. User Conduct and Prohibited Activities</h2>
            <p class="mb-4">While using Strands Games Collection, you agree NOT to:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or games</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Interfere with or disrupt the service, servers, or other users' gaming experience</li>
              <li>Use automated scripts, bots, or cheating tools to solve puzzles</li>
              <li>Copy, modify, redistribute, or create derivative works of our games without permission</li>
              <li>Harass, abuse, or harm other users in community features</li>
              <li>Impersonate any person or entity</li>
              <li>Sell, rent, or commercialize access to our word games</li>
            </ul>
          </section>

          <!-- 5. Privacy and Data -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">5. Privacy and Data Collection</h2>
            <p class="mb-4">
              We take your privacy seriously, especially regarding your gaming data and puzzle-solving patterns:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Game progress and scores are stored locally in your browser whenever possible</li>
              <li>We do not store personal puzzle solutions or individual gaming patterns without your explicit consent</li>
              <li>Basic analytics may be collected to improve our game collection and user experience</li>
              <li>We do not sell or share personal gaming information with third parties</li>
              <li>Your puzzle achievements and sharing preferences are under your control</li>
            </ul>
            <p class="mt-4">
              For detailed information about our data practices, please see our 
              <NuxtLink to="/privacy-policy" class="text-blue-600 hover:underline">Privacy Policy</NuxtLink>.
            </p>
          </section>

          <!-- 6. Intellectual Property -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">6. Intellectual Property Rights</h2>
            <p class="mb-4">
              Strands Games Collection and its content are protected by intellectual property laws. This includes:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Website design, layout, and user interface for all word games</li>
              <li>Puzzle algorithms, game mechanics, and scoring systems</li>
              <li>Game graphics, animations, and multimedia content</li>
              <li>Original puzzle content, themes, and word lists</li>
              <li>Software, source code, and technical implementations</li>
              <li>Tutorials, guides, and educational content</li>
            </ul>
            <p class="mt-4">
              You may not reproduce, distribute, or create derivative works of our games without our written permission. You may share your puzzle results and achievements for personal use.
            </p>
          </section>

          <!-- 7. Disclaimers -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">7. Disclaimers and Limitations</h2>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
              <p class="font-semibold text-yellow-800 mb-2">Important Notice:</p>
              <p class="text-yellow-700">
                Strands Games Collection is provided for entertainment, education, and mental exercise. 
                Game scores and performance should not be used for cognitive evaluation, academic assessment, or professional decisions.
              </p>
            </div>
            <p class="mb-4">Our service is provided "as is" without warranties of any kind. We disclaim:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Accuracy or availability of daily puzzles and game content</li>
              <li>Fitness for any particular educational or assessment purpose</li>
              <li>Uninterrupted or error-free operation of games</li>
              <li>Security of data transmission during gaming sessions</li>
              <li>Compatibility with all devices and browsers</li>
            </ul>
          </section>

          <!-- 8. Limitation of Liability -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">8. Limitation of Liability</h2>
            <p class="mb-4">
              To the fullest extent permitted by law, Strands Games Collection and its operators shall not be liable for:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Indirect, incidental, or consequential damages from gaming activities</li>
              <li>Loss of game progress, scores, or achievements due to technical issues</li>
              <li>Damages resulting from puzzle difficulty, game performance, or user frustration</li>
              <li>Issues caused by third-party content, links, or services</li>
              <li>Addiction to word games or excessive gaming behavior</li>
            </ul>
            <p class="mt-4">
              Our total liability shall not exceed the amount you paid to use our service (if any), as our games are provided free of charge.
            </p>
          </section>

          <!-- 9. Game Content and Updates -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">9. Game Content and Updates</h2>
            <p class="mb-4">
              Regarding our word connection games and puzzle content:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>We strive to provide fresh, challenging puzzles regularly</li>
              <li>Game difficulty may vary; some puzzles may be more challenging than others</li>
              <li>We may update game mechanics, add new features, or modify existing games</li>
              <li>Seasonal or special event puzzles may have different rules or formats</li>
              <li>We are not responsible for user frustration with puzzle difficulty</li>
            </ul>
          </section>

          <!-- 10. Third-Party Links -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">10. Third-Party Links and Content</h2>
            <p class="mb-4">
              Strands Games Collection may contain links to external websites, game resources, or puzzle-related content. We:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Do not control or endorse third-party game content or websites</li>
              <li>Are not responsible for external website policies, practices, or game quality</li>
              <li>Recommend reviewing third-party terms and privacy policies</li>
              <li>Disclaim liability for any issues arising from external links or games</li>
            </ul>
          </section>

          <!-- 11. Changes to Service -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">11. Changes to Service and Terms</h2>
            <p class="mb-4">
              We reserve the right to:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Modify, add, or discontinue any word games or puzzle features</li>
              <li>Update these Terms of Service at any time</li>
              <li>Change game mechanics, scoring systems, or puzzle formats</li>
              <li>Suspend or terminate access for violations of these terms</li>
              <li>Implement new games or remove existing ones from our collection</li>
            </ul>
            <p class="mt-4">
              We will notify users of significant changes when possible. Continued use constitutes acceptance of updated terms.
            </p>
          </section>

          <!-- 12. Termination -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">12. Termination</h2>
            <p class="mb-4">
              Either party may terminate this agreement at any time. We may suspend or terminate your access if you:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>Violate these Terms of Service</li>
              <li>Use cheating tools or automated puzzle-solving software</li>
              <li>Engage in prohibited activities that harm our service or other users</li>
              <li>Attempt to commercialize or redistribute our games without permission</li>
            </ul>
            <p class="mt-4">
              Upon termination, your right to use the service and access our word games immediately ceases.
            </p>
          </section>

          <!-- 13. Governing Law -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">13. Governing Law and Jurisdiction</h2>
            <p class="mb-4">
              These Terms of Service are governed by applicable laws and regulations. 
              Any disputes related to our word games or services will be resolved through appropriate legal channels in accordance with applicable jurisdiction.
            </p>
            <p>
              If any provision of these terms is found unenforceable, the remaining provisions will continue in full effect.
            </p>
          </section>

          <!-- 14. Contact Information -->
          <section>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">14. Contact Information</h2>
            <p class="mb-4">
              If you have questions about these Terms of Service or our word connection games, please contact us:
            </p>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p class="text-blue-800">
                <strong>Strands Games Collection Support</strong><br>
                Email: legal@strandsgames.net<br>
                Website: <NuxtLink to="/" class="text-blue-600 hover:underline">https://strandsgames.net</NuxtLink><br>
                Subject: Terms of Service Inquiry
              </p>
            </div>
          </section>

          <!-- Agreement Acknowledgment -->
          <section class="border-t border-gray-200 pt-8">
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 class="font-semibold text-gray-800 mb-3">Acknowledgment</h3>
              <p class="text-gray-700">
                By using Strands Games Collection and playing our word connection puzzles, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                You also acknowledge that these terms constitute a legal agreement between you and Strands Games Collection.
              </p>
            </div>
          </section>

        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-8">
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
// SEO Meta
useHead({
  title: 'Terms of Service - Strands Games Collection | User Agreement',
  meta: [
    { 
      name: 'description', 
      content: 'Terms of Service for Strands Games Collection - word connection puzzles platform. Learn about our user agreement, privacy policies, and service conditions for Strands, Letter Boxed, Spelling Bee games.' 
    },
    { 
      name: 'keywords', 
      content: 'terms of service, user agreement, strands games, word puzzle terms, legal, privacy, game conditions, puzzle rules' 
    },
    { property: 'og:title', content: 'Terms of Service - Strands Games Collection' },
    { 
      property: 'og:description', 
      content: 'Read our Terms of Service to understand your rights and responsibilities when using Strands Games Collection word puzzle platform.' 
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://strandsgames.net/terms' },
    { property: 'og:site_name', content: 'Strands Games Collection' }
  ],
  link: [
    { rel: 'canonical', href: 'https://strandsgames.net/terms' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service - Strands Games Collection",
        "description": "Terms of Service for Strands Games Collection explaining user rights and responsibilities for word connection puzzle games",
        "url": "https://strandsgames.net/terms",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Strands Games Collection",
          "url": "https://strandsgames.net"
        },
        "dateModified": "2025-01-01",
        "inLanguage": "en"
      })
    }
  ]
})

// 最后更新日期
const lastUpdated = 'January 2025'
</script>

<style scoped>
/* 页面特有样式 */
section {
  scroll-margin-top: 2rem;
}

ul li {
  margin-bottom: 0.5rem;
}

h2 {
  color: #1f2937;
}

/* 响应式调整 */
@media (max-width: 768px) {
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