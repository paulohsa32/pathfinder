<template>
  <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Documentation
          </h1>
          <p class="text-lg text-slate-300 max-w-2xl mx-auto">
            Learn how to use Pathfinder effectively, from basic usage to advanced techniques.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div class="text-3xl mb-4">🚀</div>
            <h2 class="text-xl font-semibold text-white mb-3">Getting Started</h2>
            <p class="text-slate-400 mb-4">
              New to Pathfinder? Start here to learn the basics and get up and running quickly.
            </p>
            <ul class="space-y-2 text-slate-300">
              <li>
                <NuxtLink to="/docs/introduction" class="text-blue-400 hover:text-blue-300 transition-colors">
                  → Introduction to Pathfinder
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs/installation" class="text-blue-400 hover:text-blue-300 transition-colors">
                  → Installation Guide
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs/cli-usage" class="text-blue-400 hover:text-blue-300 transition-colors">
                  → CLI Usage
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="bg-slate-800 rounded-lg border border-slate-700 p-6">
            <div class="text-3xl mb-4">📚</div>
            <h2 class="text-xl font-semibold text-white mb-3">Guides & Examples</h2>
            <p class="text-slate-400 mb-4">
              Practical examples and in-depth guides to master Pathfinder's capabilities.
            </p>
            <ul class="space-y-2 text-slate-300">
              <li>
                <NuxtLink to="/docs/how-it-works" class="text-blue-400 hover:text-blue-300 transition-colors">
                  → How It Works
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs/examples" class="text-blue-400 hover:text-blue-300 transition-colors">
                  → Practical Examples
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-slate-800 rounded-lg border border-slate-700 p-8">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">Quick Start</h2>

          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-lg font-semibold text-white mb-4">1. Try the Playground</h3>
              <p class="text-slate-300 mb-4">
                The easiest way to get started is using our interactive playground.
              </p>
              <NuxtLink
                to="/playground"
                class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Open Playground
                <Icon name="uil:arrow-right" class="ml-2" />
              </NuxtLink>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-white mb-4">2. Install the CLI</h3>
              <div class="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4">
                <code>npm install -g pathfinder</code>
              </div>
              <p class="text-slate-300 text-sm">
                Then run: <code class="bg-slate-900 px-2 py-1 rounded">pathfinder sample.json</code>
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="mt-12">
          <h2 class="text-2xl font-bold text-white mb-6 text-center">Additional Resources</h2>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center">
              <div class="text-3xl mb-3">📖</div>
              <h3 class="text-lg font-semibold text-white mb-2">JSONPath Spec</h3>
              <p class="text-slate-400 text-sm mb-4">
                Learn about the JSONPath specification and syntax
              </p>
              <a
                href="https://goessner.net/articles/JsonPath/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                View Specification →
              </a>
            </div>

            <div class="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center">
              <div class="text-3xl mb-3">💻</div>
              <h3 class="text-lg font-semibold text-white mb-2">GitHub Repository</h3>
              <p class="text-slate-400 text-sm mb-4">
                View source code, report issues, and contribute
              </p>
              <a
                href="https://github.com/paulohsa32/pathfinder"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                View on GitHub →
              </a>
            </div>

            <div class="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center">
              <div class="text-3xl mb-3">📦</div>
              <h3 class="text-lg font-semibold text-white mb-2">npm Package</h3>
              <p class="text-slate-400 text-sm mb-4">
                Install and use Pathfinder in your projects
              </p>
              <a
                href="https://www.npmjs.com/package/pathfinder"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-400 hover:text-blue-300 text-sm transition-colors"
              >
                View on npm →
              </a>
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
  title: 'Documentation - Pathfinder',
  meta: [
    { name: 'description', content: 'Complete documentation for Pathfinder JSONPath generator including installation, usage, and examples' }
  ]
})
</script>