<template>
  <div class="min-h-screen bg-white transition-colors duration-300 relative">
    
    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-6 relative z-10">
      <div class="homepage-content">
    <!-- Hero Section -->
    <div class="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-12 md:py-16 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <!-- Main Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Free NYT Strands Game Online
        </h1>
        
        <!-- Media Coverage -->
        <div class="mb-4 space-y-0 flex flex-col justify-center">
          <!-- New York Times Coverage -->
          <div class="flex justify-center">
            <img 
              src="/new-york-times.webp" 
              alt="New York Times Strands Game Coverage"
              class="max-w-lg lg:max-w-xl w-full h-auto max-h-24 md:max-h-32 object-contain"
              loading="lazy"
            />
          </div>
          
          <!-- Partners Coverage -->
          <div class="flex justify-center">
            <img 
              src="/partnersWithoutNewYorkTime.webp" 
              alt="Media Partners Coverage of Strands Game"
              class="max-w-lg lg:max-w-xl w-full h-auto max-h-24 md:max-h-32 object-contain"
              loading="lazy"
            />
          </div>
        </div>
        
        <!-- Enhanced Scroll Arrow -->
        <div class="flex flex-col items-center space-y-2 md:space-y-4 cursor-pointer hover:opacity-80 transition-opacity mt-4 md:mt-6" @click="scrollToGame()">
          <span class="text-xs md:text-sm text-gray-600 font-semibold tracking-widest uppercase">Play Now</span>
          <div class="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="md:h-8 md:w-8 h-6 w-6 text-gray-600" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Game Section -->
    <section id="strands-game" class="mb-12">
      <!-- Game iframe wrapper -->
      <div class="game-wrapper relative max-w-4xl mx-auto">
        <!-- Game iframe container with fullscreen button inside -->
        <div class="game-iframe-container portrait">
          <iframe
            ref="gameIframe"
            src="https://games.blrssco.com/word-clues/v1.0.3/index.html"
            title="Strands Word Search Game"
            class="w-full h-full"
            allowfullscreen
            allow="fullscreen; autoplay; clipboard-write; encrypted-media"
          />
          
          <!-- 全屏按钮（iframe内部左上角） -->
          <button @click="toggleFullscreen" class="fullscreen-btn-inside" :aria-label="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'">
            <svg v-if="!isFullscreen" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
            </svg>
            <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- What is Strands Game - Main Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        What is Strands Game? Complete Overview
      </h2>
      
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-xl leading-relaxed text-gray-700 mb-6">
            Strands Game is the innovative daily word puzzle that challenges players to find thematically connected words within a 6x8 letter grid. Unlike traditional word searches, this Strands Game requires strategic thinking and pattern recognition to uncover hidden themes and discover the special "spangram" word that makes Strands Game uniquely engaging.
          </p>
        </div>

        <!-- Game Mechanics Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Grid Layout -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div class="text-center mb-4">
              <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">6x8 Letter Grid</h3>
            </div>
            <p class="text-gray-600 text-center">
              Each Strands Game puzzle features a carefully crafted 6x8 grid containing 48 letters strategically placed to hide theme-related words throughout the Strands Game board.
            </p>
          </div>

          <!-- Theme Discovery -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div class="text-center mb-4">
              <div class="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Theme Discovery</h3>
            </div>
            <p class="text-gray-600 text-center">
              Master the art of Strands Game by finding words that share a common theme, from simple categories like "Animals" to complex conceptual connections that make Strands Game challenging.
            </p>
          </div>

          <!-- Spangram -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <div class="text-center mb-4">
              <div class="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Special Spangram</h3>
            </div>
            <p class="text-gray-600 text-center">
              Discover the spangram - a special word unique to Strands Game that connects opposite sides of the grid and relates to the puzzle theme, making every Strands Game session exciting.
            </p>
          </div>
        </div>

        <!-- Game Rules -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-12">
          <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">Strands Game Rules & Mechanics</h3>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h4 class="text-lg font-semibold text-blue-600 mb-4">Word Formation Rules</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Words in Strands Game must be at least 4 letters long</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Connect letters vertically, horizontally, or diagonally in Strands Game</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Words can twist and turn through the Strands Game grid</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Each letter can only be used once per word in Strands Game</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-purple-600 mb-4">Strands Game Features</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Daily Strands Game puzzles with fresh themes</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Hint system for challenging Strands Game puzzles</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Color-coded feedback system in Strands Game</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-gray-700">Unlimited practice mode available for Strands Game</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Scoring System -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 class="text-2xl font-bold text-center mb-8">Understanding Strands Game Feedback</h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-white">🟦</span>
              </div>
              <h4 class="font-semibold mb-2">Blue Words</h4>
              <p class="text-blue-100 text-sm">Regular theme words you've correctly identified in Strands Game</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-white">🟨</span>
              </div>
              <h4 class="font-semibold mb-2">Yellow Spangram</h4>
              <p class="text-yellow-100 text-sm">The special spangram word connecting opposite sides of the Strands Game grid</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">💡</span>
              </div>
              <h4 class="font-semibold mb-2">Hint Indicator</h4>
              <p class="text-gray-100 text-sm">Shows when you've used the hint system in Strands Game</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Play Strands Game -->
    <section class="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        How to Play Strands Game
      </h2>
      
      <div class="max-w-5xl mx-auto">
        <!-- Tutorial Slider -->
        <div class="relative overflow-hidden rounded-xl">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            
            <!-- Slide 1: Find Theme Words -->
            <div class="w-full flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                    <h3 class="text-2xl font-bold text-gray-900">Find Theme Words</h3>
                  </div>
                  <div class="space-y-4 text-gray-700">
                    <p class="font-semibold">Find theme words to fill the board in Strands Game. Theme words stay highlighted in blue when found.</p>
                    <ul class="space-y-2 text-sm">
                      <li>• Drag or tap letters to create words in Strands Game. If tapping, double tap the last letter to submit.</li>
                      <li>• Theme words fill the entire Strands Game board. No theme words overlap in Strands Game.</li>
                    </ul>
                  </div>
                </div>
                <div class="order-1 md:order-2 flex justify-center">
                  <img 
                    src="/strands/1.gif" 
                    alt="Finding theme words in Strands game"
                    class="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Slide 2: Find the Spangram -->
            <div class="w-full flex-shrink-0 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 md:p-12">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                    <h3 class="text-2xl font-bold text-gray-900">Find the "Spangram"</h3>
                  </div>
                  <div class="space-y-4 text-gray-700">
                    <ul class="space-y-3 text-sm">
                      <li>• The spangram in Strands Game describes the puzzle's theme and touches two opposite sides of the board. It may be two words.</li>
                      <li>• The spangram highlights in yellow when found in Strands Game.</li>
                      <li>• An example Strands Game spangram with corresponding theme words: 
                        <span class="inline-block mt-1">
                          <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-1">PEAR</span>
                          <span class="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs font-medium mr-1">FRUIT</span>
                          <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-1">BANANA</span>
                          <span class="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-medium">APPLE</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="order-1 md:order-2 flex justify-center">
                  <img 
                    src="/strands/2.png" 
                    alt="Finding the spangram in Strands game"
                    class="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Slide 3: Need a Hint -->
            <div class="w-full flex-shrink-0 bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                  <div class="flex items-center mb-4">
                    <div class="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                    <h3 class="text-2xl font-bold text-gray-900">Need a Hint?</h3>
                  </div>
                  <div class="space-y-4 text-gray-700">
                    <ul class="space-y-3 text-sm">
                      <li>• Find non-theme words in Strands Game to get hints.</li>
                      <li>• For every 3 non-theme words you find in Strands Game, you earn a hint.</li>
                    </ul>
                  </div>
                </div>
                <div class="order-1 md:order-2 flex justify-center">
                  <img 
                    src="/strands/3.gif" 
                    alt="Getting hints in Strands game"
                    class="max-w-full h-auto rounded-lg shadow-lg border border-gray-200"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>

          <!-- Navigation Arrows -->
          <button 
            @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
            :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
            :disabled="currentSlide === 0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
          
          <button 
            @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
            :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 2 }"
            :disabled="currentSlide === 2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        </div>

        <!-- Slide Indicators -->
        <div class="flex justify-center mt-6 space-x-2">
          <button 
            v-for="n in 3" 
            :key="n"
            @click="currentSlide = n - 1"
            class="w-3 h-3 rounded-full transition-colors duration-200"
            :class="currentSlide === n - 1 ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'"
          ></button>
        </div>
      </div>
    </section>

    <!-- More Word Games You'll Love -->
    <section class="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        More Word Games You'll Love
      </h2>
      
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-xl leading-relaxed text-gray-700 mb-6">
            If you enjoy playing Strands Game, you'll love these other letter-connection games from The New York Times. Each offers unique challenges that test your word-forming skills in different ways, just like our Strands Game experience.
          </p>
        </div>

        <!-- Games Grid -->
        <div class="grid md:grid-cols-1 gap-8">
          <!-- Spelling Bee -->
          <div class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-8 border border-yellow-200">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-2xl">🐝</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-yellow-700 mb-3">1. Spelling Bee</h3>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-800 mb-2">Format:</h4>
                  <p class="text-gray-700">Central honeycomb with seven letters, where the center letter must be included in every word.</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-800 mb-2">Gameplay:</h4>
                  <p class="text-gray-700">Create words of 4+ letters using these letters, always including the center letter. Find the "Pangram" (word using all seven letters) for bonus points.</p>
                </div>
                <div class="bg-yellow-100 rounded-lg p-3">
                  <p class="text-sm text-yellow-800 font-medium">Core Experience: Spelling + Letter Connection</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Letter Boxed -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-2xl">📦</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-blue-700 mb-3">2. Letter Boxed</h3>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-800 mb-2">Format:</h4>
                  <p class="text-gray-700">Letters arranged around a square frame (3 letters per side, 12 total letters).</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-800 mb-2">Gameplay:</h4>
                  <p class="text-gray-700">Form words using all letters, but cannot connect consecutive letters from the same side. Goal is to use all letters in the fewest possible words.</p>
                </div>
                <div class="bg-blue-100 rounded-lg p-3">
                  <p class="text-sm text-blue-800 font-medium">Core Experience: Strategic Letter Connection</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Strands -->
          <div class="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 border border-purple-200">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-2xl">🧩</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-purple-700 mb-3">3. Strands</h3>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-800 mb-2">Format:</h4>
                  <p class="text-gray-700">6×8 letter grid with 48 letters strategically placed.</p>
                </div>
                <div class="mb-4">
                  <h4 class="font-semibold text-gray-800 mb-2">Gameplay:</h4>
                  <p class="text-gray-700">Connect letters in any direction (including curves) to find theme-related words. Includes a special "Spangram" word that spans opposite sides of the grid.</p>
                </div>
                <div class="bg-purple-100 rounded-lg p-3">
                  <p class="text-sm text-purple-800 font-medium">Core Experience: Thematic Letter Connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other NYT Games Note -->
        <div class="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h4 class="text-lg font-semibold text-gray-800 mb-3">Other Popular NYT Games (Non-Connection Based)</h4>
          <div class="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <span class="font-medium">Wordle:</span> Word guessing with position feedback
            </div>
            <div>
              <span class="font-medium">Connections:</span> Group words by categories
            </div>
            <div>
              <span class="font-medium">Crossword:</span> Traditional fill-in puzzle
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="mt-8 text-center">
          <p class="text-lg text-gray-700">
            <strong>Spelling Bee</strong>, <strong>Letter Boxed</strong>, and <strong>Strands Game</strong> represent the core "word connection" games in the NYT Games collection. Each game, including our featured Strands Game, offers unique challenges in letter-based word formation that will enhance your Strands Game skills.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        Frequently Asked Questions
      </h2>
      
      <div class="max-w-4xl mx-auto">
        <div class="space-y-8">
          <!-- FAQ 1 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              What is Strands Game?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Strands Game is a daily word puzzle game from The New York Times where players find thematically connected words within a 6x8 letter grid. The goal of Strands Game is to discover all theme-related words and the special "spangram" that connects opposite sides of the Strands Game grid.
            </p>
          </div>

          <!-- FAQ 2 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              How do I play Strands Game?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Connect adjacent letters (horizontally, vertically, or diagonally) to form words of 4+ letters in Strands Game. All words must relate to the Strands Game puzzle's theme. Words can twist and turn through the Strands Game grid, but each letter can only be used once per word. Find all theme words and the spangram to complete your Strands Game puzzle.
            </p>
          </div>

          <!-- FAQ 3 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              What is a spangram?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              A spangram is a special word in Strands Game that connects two opposite sides of the grid and relates to the puzzle theme. It's typically longer than other theme words in Strands Game and serves as a key clue to understanding the Strands Game puzzle's overall theme.
            </p>
          </div>

          <!-- FAQ 4 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Are there hints available?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Yes! Strands Game includes a hint system to help when you're stuck. The Strands Game provides feedback through color coding: blue highlights for correct theme words, yellow for the spangram, and hint indicators when you use the Strands Game help system.
            </p>
          </div>

          <!-- FAQ 5 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Is this the official NYT Strands Game?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              This is a Strands Game-style word puzzle that follows the same gameplay mechanics as the popular NYT Strands Game. We provide a similar Strands Game experience with themed word finding and spangram discovery for Strands Game enthusiasts who love this type of word puzzle challenge.
            </p>
          </div>

          <!-- FAQ 6 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Can I play on mobile devices?
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Absolutely! Our Strands Game is fully optimized for mobile devices, tablets, and desktop computers. The responsive Strands Game design ensures a great playing experience across all screen sizes with touch-friendly controls, making it easy to enjoy Strands Game anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>

      </div>
    </main>

    <!-- Scroll to Top Button - Direct Implementation -->
    <button
      v-if="showScrollToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
      aria-label="回到顶部"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" 
        class="h-5 w-5" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
// Vue导入
import { ref, computed, onMounted, onUnmounted } from 'vue'

// SEO Head configuration with enhanced meta tags and JSON-LD
useHead({
  title: 'Strands Games Collection - Word Connection Puzzles & Daily Challenges',
  meta: [
    {
      name: 'description',
      content: 'Discover the ultimate collection of word connection games including Strands, Letter Boxed, Spelling Bee and more. Daily puzzles, hints, and solutions for all your favorite word games.'
    },
    {
      name: 'keywords',
      content: 'word connection games, strands game, letter boxed, spelling bee, word puzzles, daily word games, nyt word games, word game collection, puzzle games'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'author',
      content: 'Strands Games Online'
    },
    {
      name: 'language',
      content: 'en'
    },
    {
      name: 'geo.region',
      content: 'US'
    },
    {
      name: 'geo.placename',
      content: 'United States'
    },
    // Open Graph tags
    { property: 'og:title', content: 'Strands Games Collection - Word Connection Puzzles & Daily Challenges' },
    { property: 'og:description', content: 'Discover the ultimate collection of word connection games including Strands, Letter Boxed, Spelling Bee and more. Daily puzzles, hints, and solutions for all your favorite word games.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://strandsgames.net' },
    { property: 'og:site_name', content: 'Strands Games Collection' },
    { property: 'og:image', content: 'https://strandsgames.net/og-image-strands.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Strands Game - Free Online Word Puzzle' },
    { property: 'og:locale', content: 'en_US' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@strandsgames' },
    { name: 'twitter:creator', content: '@strandsgames' },
    { name: 'twitter:title', content: 'Strands Games Collection - Word Connection Puzzles & Daily Challenges' },
    { name: 'twitter:description', content: 'Discover the ultimate collection of word connection games including Strands, Letter Boxed, Spelling Bee and more.' },
    { name: 'twitter:image', content: 'https://strandsgames.net/og-image-strands.jpg' },
    { name: 'twitter:image:alt', content: 'Strands Game - Free Online Word Puzzle' },
    // Additional SEO meta tags
    { name: 'theme-color', content: '#2563eb' },
    { name: 'msapplication-TileColor', content: '#2563eb' },
    { name: 'apple-mobile-web-app-title', content: 'Word Games Collection' },
    { name: 'application-name', content: 'Strands Games Collection' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'canonical', href: 'https://strandsgames.net' },
    { rel: 'alternate', href: 'https://strandsgames.net', hreflang: 'en' },
    { rel: 'alternate', href: 'https://strandsgames.net', hreflang: 'x-default' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Strands Games Collection",
        "alternateName": "Word Connection Games",
        "url": "https://strandsgames.net/",
        "description": "Discover the ultimate collection of word connection games including Strands, Letter Boxed, Spelling Bee and more. Daily puzzles, hints, and solutions for all your favorite word games.",
        "publisher": {
          "@type": "Organization",
          "name": "Strands Games Collection",
          "url": "https://strandsgames.net",
          "logo": {
            "@type": "ImageObject",
            "url": "https://strandsgames.net/icons/icon.svg",
            "width": 512,
            "height": 512
          }
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://strandsgames.net/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "sameAs": [
          "https://twitter.com/strandsgames",
          "https://facebook.com/strandsgames"
        ]
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Word Connection Games Collection",
        "description": "A comprehensive collection of word connection puzzles including Strands, Letter Boxed, Spelling Bee and other daily word challenges.",
        "url": "https://strandsgames.net",
        "image": "https://strandsgames.net/og-image-strands.jpg",
        "about": "Word Connection Games",
        "publisher": {
          "@type": "Organization",
          "name": "Strands Games Collection"
        },
        "inLanguage": "en",
        "keywords": "word connection games, strands, letter boxed, spelling bee, word puzzles, daily word games"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Strands Game?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Strands Game is a daily word puzzle game from The New York Times where players find thematically connected words within a 6x8 letter grid. The goal of Strands Game is to discover all theme-related words and the special 'spangram' that connects opposite sides of the Strands Game grid."
            }
          },
          {
            "@type": "Question",
            "name": "How do I play Strands Game?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Connect adjacent letters (horizontally, vertically, or diagonally) to form words of 4+ letters in Strands Game. All words must relate to the Strands Game puzzle's theme. Words can twist and turn through the Strands Game grid, but each letter can only be used once per word."
            }
          },
          {
            "@type": "Question",
            "name": "What is a spangram?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A spangram is a special word in Strands Game that connects two opposite sides of the grid and relates to the puzzle theme. It's typically longer than other theme words in Strands Game and serves as a key clue to understanding the Strands Game puzzle's overall theme."
            }
          },
          {
            "@type": "Question",
            "name": "Are there hints available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Strands Game includes a hint system to help when you're stuck. The Strands Game provides feedback through color coding: blue highlights for correct theme words, yellow for the spangram, and hint indicators when you use the Strands Game help system."
            }
          }
        ]
      })
    }
  ]
})

// Reactive data
const gameIframe = ref(null)
const isFullscreen = ref(false)
const currentSlide = ref(0)

// Methods
const scrollToGame = () => {
  if (import.meta.client) {
    const gameSection = document.querySelector('#strands-game')
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const nextSlide = () => {
  if (currentSlide.value < 2) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const toggleFullscreen = () => {
  if (!gameIframe.value) return
  
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(err => console.error('Error exiting fullscreen:', err))
  } else {
    // 对于移动端，尝试请求iframe容器的全屏
    const container = gameIframe.value.parentElement
    if (container && container.requestFullscreen) {
      container.requestFullscreen().catch(() => {
        // 如果容器全屏失败，尝试iframe全屏
        gameIframe.value.requestFullscreen().catch(err2 => console.error('Error entering fullscreen:', err2))
      })
    } else {
      gameIframe.value.requestFullscreen().catch(err => console.error('Error entering fullscreen:', err))
    }
  }
}

// 全屏状态监听
const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

// ScrollToTop functionality
const showScrollToTop = ref(false)

const checkScrollPosition = () => {
  showScrollToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 组件挂载时添加事件监听
onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  
  // ScrollToTop functionality
  checkScrollPosition()
  window.addEventListener('scroll', checkScrollPosition)
  
  // 开发模式测试 - 3秒后显示
  if (process.dev) {
    setTimeout(() => {
      console.log('Dev mode: showing scroll to top button')
      showScrollToTop.value = true
    }, 3000)
  }
})

// 组件卸载时移除事件监听
onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<style scoped>
.btn-primary {
  @apply px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-block text-center;
  background-color: var(--primary-color);
  color: var(--button-text);
}

.btn-primary:hover {
  @apply transform -translate-y-0.5;
  opacity: 0.9;
}

.card {
  @apply bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300;
}

.card:hover {
  @apply transform -translate-y-1 shadow-xl;
}

/* 游戏iframe样式 - 参考allofapp-blrssco */
.game-iframe-container {
  aspect-ratio: 16 / 9;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.game-iframe-container.portrait {
  aspect-ratio: 9 / 16;
  max-width: 600px;
  min-height: 600px;
  /* PC端限制最大高度，不超出视口 */
  max-height: min(80vh, 1067px);
}

.game-iframe-container iframe {
  /* 严格限制iframe尺寸，不能超过容器 */
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  border: none;
  border-radius: 8px;
  
  /* 强制iframe内容适应容器尺寸 */
  object-fit: cover;
  
  /* 防止iframe内容溢出 */
  overflow: hidden;
  
  /* 确保iframe不会改变容器大小 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* 移动端iframe特殊处理 */
@media (max-width: 768px) {
  .game-iframe-container {
    aspect-ratio: 9 / 16;
    width: 100%;
    max-width: 100%;
    margin: 0;
    max-height: 85vh; /* 移动端也限制高度 */
  }
  
  .game-iframe-container.portrait {
    aspect-ratio: 9 / 16;
    max-width: 100%;
    min-height: 70vh;
    max-height: 85vh;
  }
  
  .game-iframe-container iframe {
    /* 移动端保持完整尺寸 */
    object-fit: cover;
  }
}

/* 小屏幕桌面端 */
@media (min-width: 769px) and (max-width: 1024px) {
  .game-iframe-container {
    max-width: 500px;
    max-height: min(75vh, 889px); /* 500px * (16/9) */
  }
  
  .game-iframe-container.portrait {
    max-width: 450px;
    max-height: min(75vh, 800px);
  }
  
  .game-iframe-container iframe {
    object-fit: cover;
  }
}

/* 游戏包装器样式 */
.game-wrapper {
  position: relative;
  width: 100%;
  max-width: 600px; /* 适配竖屏 */
  margin: 0 auto;
}

/* 控制按钮外层容器 - 只显示横竖屏按钮 */
.control-buttons-overlay {
  position: absolute;
  top: -50px; /* 按钮在iframe上方 */
  right: 0;
  z-index: 20;
  pointer-events: none; /* 容器不拦截点击 */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 10px;
}

/* 通用控制按钮样式 */
.control-btn {
  pointer-events: auto; /* 按钮本身可以点击 */
  background: rgba(60, 168, 193, 0.9);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.control-btn:hover,
.control-btn:active {
  background: rgba(45, 138, 158, 0.9);
  transform: scale(1.05);
}

.control-btn:active {
  transform: scale(0.95);
}

/* 横竖屏切换按钮定位 */
.orientation-btn {
  order: 2;
}

/* iframe内部全屏按钮样式 */
.fullscreen-btn-inside {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  background: rgba(60, 168, 193, 0.9);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
}

.fullscreen-btn-inside:hover,
.fullscreen-btn-inside:active {
  background: rgba(45, 138, 158, 0.9);
  transform: scale(1.05);
}

.fullscreen-btn-inside:active {
  transform: scale(0.95);
}

/* 移动端按钮优化 */
@media (max-width: 768px) {
  .control-buttons-overlay {
    top: -45px;
    padding: 0 5px;
  }
  
  .control-btn {
    width: 36px;
    height: 36px;
    padding: 6px;
  }
  
  .fullscreen-btn-inside {
    width: 36px;
    height: 36px;
    padding: 6px;
    top: 8px;
    left: 8px;
  }
  
  /* 移动端适配ScrollToTop按钮 */
  .fixed.bottom-6.right-6 {
    bottom: 5rem; /* 避开移动端footer导航 */
  }
}
</style>