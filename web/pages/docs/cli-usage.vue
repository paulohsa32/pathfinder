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
            <span class="text-white font-medium">CLI Usage</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">CLI Usage</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            Pathfinder provides a powerful command-line interface for generating JSONPath expressions from JSON files. This is ideal for automation, scripting, and integration into development workflows.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Basic Syntax</h2>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>pathfinder &lt;path-to-json-file&gt; [options]</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Arguments</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Required</h3>
          <div class="bg-slate-700 rounded-lg p-4 mb-6">
            <div class="flex items-center mb-2">
              <code class="bg-slate-900 px-3 py-1 rounded text-blue-400 font-mono text-sm">&lt;path-to-json-file&gt;</code>
            </div>
            <p class="text-slate-300 text-sm">Path to the input JSON file you want to analyze</p>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Optional</h3>
          <div class="flex flex-col gap-4">
            <div class="bg-slate-700 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <code class="bg-slate-900 px-3 py-1 rounded text-blue-400 font-mono text-sm">-o, --output &lt;path&gt;</code>
              </div>
              <p class="text-slate-300 text-sm">Path to the output file where the JSONPath query will be saved</p>
            </div>
            <div class="bg-slate-700 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <code class="bg-slate-900 px-3 py-1 rounded text-blue-400 font-mono text-sm">-h, --help</code>
              </div>
              <p class="text-slate-300 text-sm">Display help information</p>
            </div>
            <div class="bg-slate-700 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <code class="bg-slate-900 px-3 py-1 rounded text-blue-400 font-mono text-sm">-v, --version</code>
              </div>
              <p class="text-slate-300 text-sm">Display version information</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Examples</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Basic Usage</h3>
          <p class="text-slate-300 mb-4">Generate a JSONPath query and print it to the console:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code>pathfinder sample.json</code></pre>
          </div>

          <p class="text-slate-300 mb-4">Output:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-blue-400"><code>$[?($.name=='John Doe' && $.age==30)]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Save to File</h3>
          <p class="text-slate-300 mb-4">Generate a query and save it to a file:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code>pathfinder sample.json --output query.jsonpath</code></pre>
          </div>

          <p class="text-slate-300 mb-4">Output:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>JsonPath written on file query.jsonpath successfully!</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Integration Examples</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">CI/CD Pipeline</h3>
          <p class="text-slate-300 mb-4">Integrate Pathfinder into your CI/CD pipeline to validate API responses:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code># GitHub Actions example
- name: Generate JSONPath for API validation
  run: |
    pathfinder ./test-data/api-response.json --output ./queries/validation.jsonpath

- name: Validate API response
  run: |
    # Use the generated JSONPath to validate actual API responses
    curl https://api.example.com/data | jq -f ./queries/validation.jsonpath</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Testing Automation</h3>
          <p class="text-slate-300 mb-4">Use Pathfinder in your test scripts to generate validation queries:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>#!/bin/bash
# generate-test-queries.sh

# Generate queries for different test scenarios
pathfinder ./fixtures/user-profile.json --output ./queries/user.jsonpath
pathfinder ./fixtures/product-list.json --output ./queries/products.jsonpath
pathfinder ./fixtures/error-response.json --output ./queries/error.jsonpath

echo "Test queries generated successfully!"</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Tips and Best Practices</h2>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>File Organization</strong>: Keep your sample JSON files organized in a dedicated directory</li>
            <li><strong>Query Naming</strong>: Use descriptive names for your output query files</li>
            <li><strong>Version Control</strong>: Include your JSONPath queries in version control for reproducible tests</li>
            <li><strong>Automation</strong>: Create shell scripts for repetitive tasks</li>
            <li><strong>Validation</strong>: Always test generated queries against expected data</li>
          </ul>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Next Steps</h3>
            <p class="text-slate-300 mb-4">
              Now that you understand the CLI usage, explore more advanced topics:
            </p>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li><NuxtLink to="/docs/how-it-works" class="text-blue-400 hover:text-blue-300">How Pathfinder works internally</NuxtLink></li>
              <li><NuxtLink to="/docs/examples" class="text-blue-400 hover:text-blue-300">See practical examples</NuxtLink></li>
              <li><NuxtLink to="/playground" class="text-blue-400 hover:text-blue-300">Try the interactive playground</NuxtLink></li>
            </ul>
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
  title: 'CLI Usage - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Complete guide to using Pathfinder CLI tool for JSONPath generation' }
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
  @apply bg-slate-700 px-2 py-1 rounded text-sm font-mono;
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
