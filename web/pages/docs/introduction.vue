<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div class="bg-slate-900 px-6 py-4 border-b border-slate-700">
          <div class="flex items-center space-x-4 lg:hidden">
            <button
              @click="$router.push('/docs')"
              class="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="uil:arrow-left" class="text-lg" />
            </button>
            <span class="text-white font-medium">Introduction</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">Introduction to Pathfinder</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            Pathfinder is a powerful utility that converts JSON samples into
            <a href="https://goessner.net/articles/JsonPath/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300">JSONPath</a>
            query strings. It helps you generate precise JSONPath expressions that can be used to find specific JSON objects within larger JSON structures.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">What is JSONPath?</h2>
          <p class="text-slate-300 mb-4 leading-relaxed">
            JSONPath is a query language for JSON that allows you to select and extract data from JSON documents. It's similar to XPath for XML and provides a way to navigate through JSON structures using path expressions.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Why Use Pathfinder?</h2>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Creating JSONPath expressions manually can be error-prone and time-consuming, especially for complex nested structures. Pathfinder automates this process by:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>Analyzing your JSON sample</strong> to understand its structure</li>
            <li><strong>Generating precise filter expressions</strong> that match your specific data</li>
            <li><strong>Supporting nested objects, arrays, and mixed data types</strong></li>
            <li><strong>Providing both CLI and web interfaces</strong> for different use cases</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Quick Example</h2>
          <p class="text-slate-300 mb-4">Given this JSON input:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>{
  "user": {
    "name": "Jane Doe",
    "age": 25,
    "status": "active"
  }
}</code></pre>
          </div>

          <p class="text-slate-300 mb-4">Pathfinder generates this JSONPath expression:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-blue-400"><code>$[?($.user.name=='Jane Doe' && $.user.age==25 && $.user.status=='active')]</code></pre>
          </div>

          <p class="text-slate-300 mb-6 leading-relaxed">
            This expression can be used to find the exact same user object in a larger JSON document.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Features</h2>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>Automatic Generation</strong>: No need to manually craft complex JSONPath expressions</li>
            <li><strong>Precise Matching</strong>: Generates expressions that match all primitive values in your sample</li>
            <li><strong>Multiple Interfaces</strong>: CLI tool for automation and web interface for interactive use</li>
            <li><strong>TypeScript Support</strong>: Built with TypeScript for better developer experience</li>
            <li><strong>Zero Dependencies</strong>: Lightweight and fast</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Use Cases</h2>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>API Testing</strong>: Validate specific data structures in API responses</li>
            <li><strong>Data Extraction</strong>: Extract specific data points from complex JSON documents</li>
            <li><strong>Automation Scripts</strong>: Integrate JSONPath generation into CI/CD pipelines</li>
            <li><strong>Debugging</strong>: Quickly locate specific data in large JSON structures</li>
            <li><strong>Configuration Management</strong>: Generate paths for configuration validation</li>
          </ul>

          <div class="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-blue-300 mb-2">Ready to get started?</h3>
            <p class="text-blue-200 mb-4">
              Try the interactive playground or install the CLI to start using Pathfinder in your projects.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/playground"
                class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Try Playground
                <Icon name="uil:arrow-right" class="ml-2" />
              </NuxtLink>
              <NuxtLink
                to="/docs/installation"
                class="inline-flex items-center px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors border border-slate-600"
              >
                Installation Guide
                <Icon name="uil:arrow-right" class="ml-2" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Introduction - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Introduction to Pathfinder JSONPath generator' }
  ]
})
</script>

<style scoped>
:deep(h2) {
  @apply text-2xl font-bold text-white mb-4 mt-8;
}

:deep(h3) {
  @apply text-xl font-semibold text-white mb-3 mt-6;
}

:deep(p) {
  @apply text-slate-300 mb-4 leading-relaxed;
}

:deep(ul) {
  @apply list-disc list-inside text-slate-300 mb-4 space-y-2;
}

:deep(strong) {
  @apply text-white font-semibold;
}

:deep(code) {
  @apply bg-slate-900 text-blue-400 px-2 py-1 rounded text-sm font-mono;
}

:deep(pre) {
  @apply bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto;
}

:deep(pre code) {
  @apply bg-transparent p-0;
}

:deep(a) {
  @apply text-blue-400 hover:text-blue-300 underline transition-colors;
}
</style>