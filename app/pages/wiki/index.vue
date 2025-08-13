<template>
  <div class="min-h-screen bg-gray-50">
    <div class="apple-container apple-spacing">
      
      <!-- Hero Section -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-4">🎯</div>
        <h1 class="apple-title text-4xl mb-4">Word Games Wiki</h1>
        <p class="apple-subtitle text-xl">
          Your comprehensive guide to word puzzles, game mechanics, and strategies
        </p>
      </div>

      <!-- Featured Articles Section -->
      <div class="space-y-4">
        
        <!-- Articles List -->
        <div class="space-y-4">
          
          <!-- Article: Everything About Word Games -->
          <article class="apple-card apple-spacing apple-article-card hover:shadow-lg cursor-pointer group">
            <a href="/wiki/everything-about-word-games" class="block h-full">
              <div class="card-content">
                <div class="card-icon-tag">
                  <span class="card-icon">📖</span>
                  <div class="flex gap-2">
                    <span class="card-tag bg-blue-100 text-blue-800">Word Games</span>
                    <span class="card-tag bg-green-100 text-green-800">Guide</span>
                  </div>
                </div>
                <div class="card-main-content">
                  <h3 class="card-title">Everything About Word Games You Need to Know</h3>
                  <p class="card-description">
                    A comprehensive guide to NYT's letter-connection games including Spelling Bee, Letter Boxed, and Strands. Learn the mechanics, strategies, and differences between each game type.
                  </p>
                  <div class="card-footer">
                    <div class="card-meta">
                      <span>⏱️ 15 min read</span>
                    </div>
                    <span class="card-link">Read →</span>
                  </div>
                </div>
              </div>
            </a>
          </article>

          <!-- Article: Best Strands Game Free Online -->
          <article class="apple-card apple-spacing apple-article-card hover:shadow-lg cursor-pointer group">
            <a href="/wiki/best-strands-game-free-online" class="block h-full">
              <div class="card-content">
                <div class="card-icon-tag">
                  <span class="card-icon">🌟</span>
                  <div class="flex gap-2">
                    <span class="card-tag bg-purple-100 text-purple-800">Strands</span>
                    <span class="card-tag bg-yellow-100 text-yellow-800">Free</span>
                  </div>
                </div>
                <div class="card-main-content">
                  <h3 class="card-title">Best Strands Game Free Online</h3>
                  <p class="card-description">
                    Discover the top free Strands games available online. Compare features, gameplay options, and find the perfect word puzzle experience without any subscription fees.
                  </p>
                  <div class="card-footer">
                    <div class="card-meta">
                      <span>⏱️ 12 min read</span>
                    </div>
                    <span class="card-link">Read →</span>
                  </div>
                </div>
              </div>
            </a>
          </article>

          <!-- Coming Soon Placeholder -->
          <article class="apple-card apple-spacing border-2 border-dashed border-gray-300">
            <div class="flex items-center justify-center py-12">
              <div class="text-center">
                <div class="text-4xl mb-4">📝</div>
                <h3 class="font-medium text-gray-600 mb-2">More Articles Coming Soon</h3>
                <p class="text-sm text-gray-500">
                  Advanced strategies, game reviews, and puzzle-solving techniques
                </p>
              </div>
            </div>
          </article>

        </div>

        <!-- Meanwhile, explore our main features -->
        <div class="apple-card apple-spacing mt-6">
          <div class="text-center">
            <h3 class="apple-title text-xl mb-4">Meanwhile, play Strands Game</h3>
            <p class="text-gray-600 mb-6">
              While we're building our wiki, don't miss out on our daily word puzzles
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/" class="apple-button bg-blue-500 hover:bg-blue-600 text-white">
                🎮 Play Daily Strands
              </a>
              <a href="/about" class="apple-button bg-gray-800 hover:bg-gray-900 text-white">
                📚 Learn About Strands
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script setup>
useHead({
  title: 'Word Games Wiki - Comprehensive Guide to Puzzle Games',
  meta: [
    {
      name: 'description',
      content: 'Your comprehensive guide to word puzzles, game mechanics, strategies, and everything you need to know about modern word games including NYT Spelling Bee, Letter Boxed, and Strands.'
    },
    {
      name: 'keywords',
      content: 'word games wiki, puzzle games guide, spelling bee guide, letter boxed strategy, strands game tips, word puzzle mechanics, game strategies'
    },
    { property: 'og:title', content: 'Word Games Wiki - Comprehensive Guide to Puzzle Games' },
    { property: 'og:description', content: 'Your comprehensive guide to word puzzles, game mechanics, strategies, and everything you need to know about modern word games.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://strandsgames.net/wiki' }
  ],
  link: [
    { rel: 'canonical', href: 'https://strandsgames.net/wiki' }
  ]
})
</script>

<style scoped>
/* Apple-style container and spacing */
.apple-container {
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
}

.apple-spacing {
  padding: 1.5rem;
}

/* Apple-style cards */
.apple-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.apple-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Apple-style typography */
.apple-title {
  font-weight: 700;
  color: #1f2937;
  line-height: 1.2;
}

.apple-subtitle {
  color: #6b7280;
  line-height: 1.6;
}

/* Apple-style buttons */
.apple-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
}

.apple-button:hover {
  transform: translateY(-1px);
}

/* Article card specific styles */
.apple-article-card .card-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
}

.apple-article-card .card-icon-tag {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;
}

.apple-article-card .card-icon {
  font-size: 2rem;
}

.apple-article-card .card-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.apple-article-card .card-main-content {
  min-width: 0;
}

.apple-article-card .card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.apple-article-card .card-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.apple-article-card .card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.apple-article-card .card-meta {
  color: #9ca3af;
  font-size: 0.75rem;
}

.apple-article-card .card-link {
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 600;
}

.apple-article-card:hover .card-link {
  color: #1d4ed8;
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .apple-container {
    padding: 0 0.75rem;
  }
  
  .apple-spacing {
    padding: 1rem;
  }
  
  .apple-article-card .card-content {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .apple-article-card .card-icon-tag {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-width: unset;
    gap: 0.5rem;
  }
  
  .apple-article-card .card-icon {
    font-size: 1.5rem;
  }
  
  .apple-article-card .card-title {
    font-size: 1rem;
    margin-bottom: 0.375rem;
  }
  
  .apple-article-card .card-description {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
}
</style>