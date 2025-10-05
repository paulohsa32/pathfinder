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
            <span class="text-white font-medium">Installation</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">Installation</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            Pathfinder can be used in multiple ways depending on your needs. Choose the method that best fits your workflow.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">npm Installation</h2>
          <p class="text-slate-300 mb-4">Install Pathfinder as a development dependency in your project:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code>npm install --save-dev pathfinder</code></pre>
          </div>

          <p class="text-slate-300 mb-4">Or with yarn:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-blue-400"><code>yarn add --dev pathfinder</code></pre>
          </div>

          <p class="text-slate-300 mb-4">Or with pnpm:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-orange-400"><code>pnpm add -D pathfinder</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Global Installation</h2>
          <p class="text-slate-300 mb-4">Install Pathfinder globally to use the CLI anywhere:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code>npm install -g pathfinder</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Building from Source</h2>
          <p class="text-slate-300 mb-4">If you want to contribute or use the latest development version:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code># Clone the repository
git clone https://github.com/paulohsa32/pathfinder.git
cd pathfinder

# Install dependencies
npm install

# Build the CLI
npm run build:cli

# The built CLI will be available at ./dist/cli.mjs</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Usage Options</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">CLI Usage</h3>
          <p class="text-slate-300 mb-4">After installation, you can use the CLI directly:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code># Local installation
npx pathfinder &lt;path-to-json-file&gt;

# Global installation
pathfinder &lt;path-to-json-file&gt;

# From source
node ./dist/cli.mjs &lt;path-to-json-file&gt;</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Programmatic Usage</h3>
          <p class="text-slate-300 mb-4">Use Pathfinder in your Node.js applications:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>import { useJsonPath } from 'pathfinder'

const sample = {
  user: {
    name: "John Doe",
    age: 30
  }
}

const jsonPath = useJsonPath(sample)
console.log(jsonPath)
// Output: $[?($.user.name=='John Doe' && $.user.age==30)]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Web Interface</h3>
          <p class="text-slate-300 mb-4">Use the interactive web interface for testing and exploration:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code># Clone the repository
git clone https://github.com/paulohsa32/pathfinder.git
cd pathfinder

# Install dependencies
npm install

# Start the development server
npm run dev</code></pre>
          </div>

          <p class="text-slate-300 mb-6">Then visit <code class="bg-slate-700 px-2 py-1 rounded text-blue-400">http://localhost:3000</code> to access the web interface.</p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Development Dependencies</h2>
          <p class="text-slate-300 mb-4">If you're developing with Pathfinder, you might want to install it as a development dependency:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code>npm install --save-dev pathfinder</code></pre>
          </div>

          <p class="text-slate-300 mb-4">Then add it to your <code class="bg-slate-700 px-2 py-1 rounded text-blue-400">package.json</code> scripts:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>{
  "scripts": {
    "generate-jsonpath": "pathfinder ./sample.json --output ./query.jsonpath"
  }
}</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Requirements</h2>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>Node.js</strong>: Version 16 or higher</li>
            <li><strong>npm</strong>: Version 7 or higher (or equivalent package manager)</li>
          </ul>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Browser Usage</h2>
          <p class="text-slate-300 mb-4">The web interface works in all modern browsers. No additional installation required - just use the <NuxtLink to="/playground" class="text-blue-400 hover:text-blue-300">online playground</NuxtLink>.</p>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Next Steps</h3>
            <p class="text-slate-300 mb-4">
              After installation, you can:
            </p>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li><NuxtLink to="/docs/cli-usage" class="text-blue-400 hover:text-blue-300">Learn the CLI basics</NuxtLink></li>
              <li><NuxtLink to="/playground" class="text-blue-400 hover:text-blue-300">Explore the web playground</NuxtLink></li>
              <li><NuxtLink to="/docs/how-it-works" class="text-blue-400 hover:text-blue-300">Understand the algorithm</NuxtLink></li>
              <li><NuxtLink to="/docs/examples" class="text-blue-400 hover:text-blue-300">See practical examples</NuxtLink></li>
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
  title: 'Installation - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'How to install and set up Pathfinder JSONPath generator' }
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