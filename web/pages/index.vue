<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900/20 to-slate-950 text-white overflow-hidden">
    <Header />

    <main>
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center px-4">
        <!-- Animated background elements -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <!-- Grid pattern overlay -->
        <div class="absolute inset-0 opacity-30 bg-grid-pattern"></div>

        <div class="relative max-w-6xl mx-auto text-center z-10">
          <!-- Animated logo -->
          <div class="flex justify-center mb-8">
            <div class="relative">
              <div class="text-8xl md:text-9xl animate-bounce delay-100">✈️</div>
              <div class="absolute inset-0 text-8xl md:text-9xl animate-ping delay-300 opacity-20">✈️</div>
            </div>
          </div>

          <!-- Main title with gradient text -->
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent animate-gradient">
            Pathfinder
          </h1>

          <!-- Tagline with typewriter effect -->
          <div class="mb-8 h-8">
            <p class="text-2xl md:text-3xl text-slate-300 font-light">
              Convert <span class="text-purple-400 font-semibold">JSON</span> to
              <span class="text-blue-400 font-semibold">JSONPath</span> instantly
            </p>
          </div>

          <!-- Enhanced description -->
          <p class="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Generate precise JSONPath expressions from any JSON structure.
            <span class="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold">Perfect for data extraction, testing, and automation.</span>
          </p>

          <!-- Enhanced CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <NuxtLink
              to="/playground"
              class="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-lg overflow-hidden"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                Try Playground
                <Icon name="uil:arrow-right" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>

            <NuxtLink
              to="/docs"
              class="group relative px-10 py-5 bg-slate-800/50 hover:bg-slate-700/50 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/25 text-lg border border-slate-600 backdrop-blur-sm overflow-hidden"
            >
              <span class="relative z-10 flex items-center justify-center gap-2">
                Read Docs
                <Icon name="uil:book" class="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </NuxtLink>
          </div>

          <!-- Live demo preview -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 max-w-4xl mx-auto">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span class="text-sm text-slate-400">Live Preview</span>
              </div>
              <div class="text-left">
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Input JSON</p>
                    <pre class="text-sm text-slate-300"><code>{
  "user": {
    "name": "Jane Doe",
    "age": 25,
    "active": true
  }
}</code></pre>
                  </div>
                  <div>
                    <p class="text-xs text-slate-500 mb-2 uppercase tracking-wider">Generated JSONPath</p>
                    <pre class="text-sm text-blue-400"><code>$[?($.user.name=='Jane Doe'
  && $.user.age==25
  && $.user.active==true)]</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="uil:angle-down" class="w-8 h-8 text-slate-400" />
        </div>
      </section>

      <!-- Enhanced Features Section -->
      <section class="relative py-32 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Why Pathfinder?
            </h2>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto">
              Experience the power of automated JSONPath generation with cutting-edge features designed for modern developers
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 relative">
            <!-- Background decoration -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>

            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="uil:bolt" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Instant Generation</h3>
                <p class="text-slate-400 leading-relaxed">
                  Convert complex JSON structures to JSONPath queries in milliseconds, not minutes. No manual crafting required.
                </p>
              </div>
            </div>

            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="uil:crosshair" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Precise Matching</h3>
                <p class="text-slate-400 leading-relaxed">
                  Generate exact filter expressions that match your specific JSON structure and values with pinpoint accuracy.
                </p>
              </div>
            </div>

            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="uil:setting" class="w-8 h-8 text-white" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">Developer Tools</h3>
                <p class="text-slate-400 leading-relaxed">
                  Powerful CLI for automation and intuitive web interface for interactive testing and exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Enhanced How It Works Section -->
      <section class="relative py-32 px-4 bg-slate-900/30">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto">
              Transform your JSON workflow with three simple steps
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div class="group flex gap-6 items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-3">Input Your JSON</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Paste or upload any JSON structure - from simple objects to complex nested arrays.
                  </p>
                </div>
              </div>

              <div class="group flex gap-6 items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-3">Process Instantly</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Our algorithm analyzes your JSON structure and generates precise path references automatically.
                  </p>
                </div>
              </div>

              <div class="group flex gap-6 items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white mb-3">Get JSONPath</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Receive a ready-to-use JSONPath expression that exactly matches your JSON structure.
                  </p>
                </div>
              </div>
            </div>

            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div class="flex items-center gap-2 mb-6">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="ml-auto text-sm text-slate-400">Example</span>
                </div>
                <div class="space-y-4">
                  <div>
                    <p class="text-xs text-purple-400 mb-2 uppercase tracking-wider">Input JSON</p>
                    <div class="bg-slate-950/50 rounded-lg p-4">
                      <pre class="text-sm text-slate-300"><code>{
  "user": {
    "name": "Alice",
    "age": 28,
    "role": "developer",
    "skills": ["JavaScript", "Python"]
  }
}</code></pre>
                    </div>
                  </div>
                  <div class="flex justify-center">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                      <Icon name="uil:arrow-down" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <p class="text-xs text-blue-400 mb-2 uppercase tracking-wider">Generated JSONPath</p>
                    <div class="bg-slate-950/50 rounded-lg p-4">
                      <pre class="text-sm text-blue-400"><code>$[?($.user.name=='Alice'
  && $.user.age==28
  && $.user.role=='developer'
  && $.user.skills[0]=='JavaScript'
  && $.user.skills[1]=='Python')]</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Enhanced Use Cases Section -->
      <section class="relative py-32 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto">
              Powerful applications for every stage of your development workflow
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="uil:flask" class="w-7 h-7 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Testing</h3>
                <p class="text-slate-400 leading-relaxed text-sm">
                  Validate API responses and test data extraction patterns with precision
                </p>
              </div>
            </div>

            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="uil:chart-bar" class="w-7 h-7 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Data Analysis</h3>
                <p class="text-slate-400 leading-relaxed text-sm">
                  Extract specific data points from complex JSON structures efficiently
                </p>
              </div>
            </div>

            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="uil:robot" class="w-7 h-7 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Automation</h3>
                <p class="text-slate-400 leading-relaxed text-sm">
                  Integrate JSONPath generation into CI/CD pipelines seamlessly
                </p>
              </div>
            </div>

            <div class="group relative bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="il:search" class="w-7 h-7 text-white" />
                </div>
                <h3 class="text-xl font-bold text-white mb-3">Debugging</h3>
                <p class="text-slate-400 leading-relaxed text-sm">
                  Quickly locate specific data in large JSON documents instantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="relative py-32 px-4 bg-slate-900/30">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Trusted by Developers
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                10K+
              </div>
              <p class="text-xl text-slate-400">JSON Objects Processed</p>
            </div>
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                99.9%
              </div>
              <p class="text-xl text-slate-400">Accuracy Rate</p>
            </div>
            <div class="text-center">
              <div class="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                < 1s
              </div>
              <p class="text-xl text-slate-400">Average Processing Time</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA Section -->
      <section class="relative py-32 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50">
              <h2 class="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Ready to Transform Your JSON Workflow?
              </h2>
              <p class="text-xl text-slate-400 mb-8 leading-relaxed">
                Join thousands of developers who have streamlined their JSONPath generation process.
              </p>
              <div class="flex flex-col sm:flex-row gap-6 justify-center">
                <NuxtLink
                  to="/playground"
                  class="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 text-lg overflow-hidden"
                >
                  <span class="relative z-10 flex items-center justify-center gap-2">
                    Get Started Now
                    <Icon name="uil:rocket" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </NuxtLink>

                <a
                  href="https://github.com/paulohsa32/pathfinder"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group relative px-10 py-5 bg-slate-800/50 hover:bg-slate-700/50 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/25 text-lg border border-slate-600 backdrop-blur-sm"
                >
                  <span class="flex items-center justify-center gap-2">
                    <Icon name="uil:github" class="w-5 h-5" />
                    View on GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Pathfinder - Convert JSON to JSONPath',
  meta: [
    { name: 'description', content: 'Convert JSON samples into JSONPath queries instantly. Perfect for data extraction, testing, and automation.' }
  ]
})
</script>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes slide-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-in-up 0.8s ease-out;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(147, 51, 234, 0.6);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #a855f7, #3b82f6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #9333ea, #2563eb);
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}

/* Glass morphism effects */
.backdrop-blur-xl {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Text selection */
::selection {
  background: rgba(147, 51, 234, 0.3);
  color: white;
}

::-moz-selection {
  background: rgba(147, 51, 234, 0.3);
  color: white;
}

/* Grid pattern background */
.bg-grid-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 60px 60px;
}
</style>