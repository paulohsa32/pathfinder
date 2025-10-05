<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <Header />

    <main>
      <!-- Hero Section -->
      <section class="relative py-20 px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-center mb-6">
            <div class="text-6xl">✈️</div>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            Pathfinder
          </h1>
          <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Convert JSON samples into JSONPath queries instantly
          </p>
          <p class="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
            Generate precise JSONPath expressions from any JSON structure. Perfect for data extraction, testing, and automation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/playground"
              class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Try Playground
            </NuxtLink>
            <NuxtLink
              to="/docs"
              class="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors text-lg border border-slate-600"
            >
              Read Docs
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="py-20 px-4 bg-slate-800/50">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Pathfinder?
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">⚡</div>
              <h3 class="text-xl font-semibold text-white mb-3">Instant Generation</h3>
              <p class="text-slate-400">
                Convert complex JSON structures to JSONPath queries in seconds, no manual crafting required.
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-xl font-semibold text-white mb-3">Precise Matching</h3>
              <p class="text-slate-400">
                Generate exact filter expressions that match your specific JSON structure and values.
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🛠️</div>
              <h3 class="text-xl font-semibold text-white mb-3">Developer Tools</h3>
              <p class="text-slate-400">
                CLI tool for automation and web interface for interactive testing and exploration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Example Section -->
      <section class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            How It Works
          </h2>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-xl font-semibold text-white mb-4">Input JSON</h3>
              <div class="bg-slate-900 rounded-lg p-6 font-mono text-sm">
                <pre class="text-slate-300"><code>{
  "user": {
    "name": "Jane Doe",
    "age": 25,
    "status": "active"
  }
}</code></pre>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white mb-4">Generated JSONPath</h3>
              <div class="bg-slate-900 rounded-lg p-6 font-mono text-sm">
                <pre class="text-blue-400"><code>$[?($.user.name=='Jane Doe' &&
    $.user.age==25 &&
    $.user.status=='active')]</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="py-20 px-4 bg-slate-800/50">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Use Cases
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-slate-900 rounded-lg p-6">
              <div class="text-3xl mb-3">🧪</div>
              <h3 class="text-lg font-semibold text-white mb-2">Testing</h3>
              <p class="text-slate-400 text-sm">
                Validate API responses and test data extraction patterns
              </p>
            </div>
            <div class="bg-slate-900 rounded-lg p-6">
              <div class="text-3xl mb-3">📊</div>
              <h3 class="text-lg font-semibold text-white mb-2">Data Analysis</h3>
              <p class="text-slate-400 text-sm">
                Extract specific data points from complex JSON structures
              </p>
            </div>
            <div class="bg-slate-900 rounded-lg p-6">
              <div class="text-3xl mb-3">🤖</div>
              <h3 class="text-lg font-semibold text-white mb-2">Automation</h3>
              <p class="text-slate-400 text-sm">
                Integrate JSONPath generation into CI/CD pipelines
              </p>
            </div>
            <div class="bg-slate-900 rounded-lg p-6">
              <div class="text-3xl mb-3">🔍</div>
              <h3 class="text-lg font-semibold text-white mb-2">Debugging</h3>
              <p class="text-slate-400 text-sm">
                Quickly locate specific data in large JSON documents
              </p>
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