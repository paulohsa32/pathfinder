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
            <span class="text-white font-medium">Troubleshooting</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">Troubleshooting</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            This guide helps you resolve common issues and errors you might encounter while using Pathfinder.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">CLI Issues</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Command Not Found</h3>
          <div class="bg-red-950/50 border border-red-600 rounded-xl p-6 mb-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full">
                <Icon name="uil:exclamation-triangle" class="text-white text-xl" />
              </div>
              <h4 class="text-red-400 font-semibold text-lg">Error</h4>
            </div>
            <div class="bg-black/50 rounded-lg p-4 border border-red-900/50">
              <code class="text-red-400 font-mono text-sm">zsh: command not found: pathfinder</code>
            </div>
          </div>

          <div class="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700">
            <h4 class="text-white font-semibold text-lg mb-4 flex items-center">
              <Icon name="uil:search" class="mr-2 text-blue-400" />
              Common Causes
            </h4>
          <ul class="list-disc list-inside text-slate-300 mb-4 space-y-2">
            <li>Pathfinder is not installed globally</li>
            <li>PATH environment variable is not updated</li>
            <li>Using npx without installation</li>
          </ul>

          <div class="bg-green-950/30 border border-green-600/50 rounded-xl p-6 mb-6">
            <h4 class="text-green-400 font-semibold text-lg mb-4 flex items-center">
              <Icon name="uil:check-circle" class="mr-2" />
              Solutions
            </h4>
            <div class="bg-black/30 rounded-lg p-4 overflow-x-auto">
              <pre class="text-green-400"><code># Install globally
npm install -g pathfinder

# Or use npx without global installation
npx pathfinder sample.json

# Verify installation
pathfinder --version</code></pre>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">File Not Found</h3>
          <div class="bg-red-950/50 border border-red-600 rounded-xl p-6 mb-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full">
                <Icon name="uil:exclamation-triangle" class="text-white text-xl" />
              </div>
              <h4 class="text-red-400 font-semibold text-lg">Error</h4>
            </div>
            <div class="bg-black/50 rounded-lg p-4 border border-red-900/50">
              <code class="text-red-400 font-mono text-sm">ENOENT: no such file or directory, open 'sample.json'</code>
            </div>
          </div>

          <div class="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700">
            <h4 class="text-white font-semibold text-lg mb-4 flex items-center">
              <Icon name="uil:search" class="mr-2 text-blue-400" />
              Common Causes
            </h4>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li>Incorrect file path</li>
              <li>File doesn't exist</li>
              <li>Working directory is different than expected</li>
              <li>File permissions issue</li>
            </ul>
          </div>

          <div class="bg-green-950/30 border border-green-600/50 rounded-xl p-6 mb-6">
            <h4 class="text-green-400 font-semibold text-lg mb-4 flex items-center">
              <Icon name="uil:check-circle" class="mr-2" />
              Solutions
            </h4>
            <div class="bg-black/30 rounded-lg p-4 overflow-x-auto">
              <pre class="text-green-400"><code># Check current directory
pwd

# List files in current directory
ls -la

# Use absolute path
pathfinder /full/path/to/sample.json

# Use relative path from current directory
pathfinder ./data/sample.json</code></pre>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Invalid JSON Error</h3>
          <div class="bg-red-950/50 border border-red-600 rounded-xl p-6 mb-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full">
                <Icon name="uil:exclamation-triangle" class="text-white text-xl" />
              </div>
              <h4 class="text-red-400 font-semibold text-lg">Error</h4>
            </div>
            <div class="bg-black/50 rounded-lg p-4 border border-red-900/50">
              <code class="text-red-400 font-mono text-sm">Unexpected token } in JSON at position 123</code>
            </div>
          </div>

          <div class="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700">
            <h4 class="text-white font-semibold text-lg mb-4 flex items-center">
              <Icon name="uil:search" class="mr-2 text-blue-400" />
              Common Causes
            </h4>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li>Malformed JSON syntax</li>
              <li>Trailing commas</li>
              <li>Unquoted property names</li>
              <li>Invalid escape sequences</li>
              <li>Encoding issues</li>
            </ul>
          </div>

          <div class="bg-green-950/30 border border-green-600/50 rounded-xl p-6 mb-6">
            <h4 class="text-green-400 font-semibold text-lg mb-4 flex items-center">
              <Icon name="uil:check-circle" class="mr-2" />
              Solutions
            </h4>
            <div class="bg-black/30 rounded-lg p-4 overflow-x-auto">
              <pre class="text-green-400"><code># Validate JSON with external tool
jq . sample.json

# Or use node
node -e "console.log(JSON.parse(require('fs').readFileSync('sample.json', 'utf8')))"

# Common JSON validation fixes:
# 1. Remove trailing commas
# 2. Quote all property names
# 3. Check for proper escaping
# 4. Ensure UTF-8 encoding</code></pre>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Programmatic Usage Issues</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Module Not Found</h3>
          <div class="bg-red-900/20 border border-red-700 rounded-lg p-4 mb-4">
            <h4 class="text-red-400 font-medium mb-2">Error:</h4>
            <div class="bg-slate-900 rounded p-3 font-mono text-sm text-red-300">
              Module not found: Can't resolve 'pathfinder'
            </div>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Causes:</h4>
          <ul class="list-disc list-inside text-slate-300 mb-4 space-y-2">
            <li>Package not installed</li>
            <li>Incorrect import statement</li>
            <li>Node modules not resolved correctly</li>
            <li>TypeScript configuration issues</li>
          </ul>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Solutions:</h4>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># Install the package
npm install pathfinder

# Check if installed
npm list pathfinder

# Verify import statement
import { useJsonPath } from 'pathfinder'  // ✅ Correct
import { useJsonPath } from './pathfinder' // ❌ Incorrect (relative path)</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">TypeScript Errors</h3>
          <div class="bg-red-900/20 border border-red-700 rounded-lg p-4 mb-4">
            <h4 class="text-red-400 font-medium mb-2">Error:</h4>
            <div class="bg-slate-900 rounded p-3 font-mono text-sm text-red-300">
              Cannot find module 'pathfinder' or its corresponding type declarations.
            </div>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Causes:</h4>
          <ul class="list-disc list-inside text-slate-300 mb-4 space-y-2">
            <li>TypeScript configuration issues</li>
            <li>Missing type definitions</li>
            <li>Node modules not included in tsconfig</li>
          </ul>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Solutions:</h4>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># Install types if needed
npm install --save-dev @types/node

# Check tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}

# Restart TypeScript server (VS Code: Ctrl+Shift+P -> TypeScript: Restart)</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Output Issues</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Empty or Unexpected Results</h3>
          <div class="bg-amber-950/50 border border-amber-600 rounded-xl p-6 mb-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full">
                <Icon name="uil:info-circle" class="text-white text-xl" />
              </div>
              <h4 class="text-amber-400 font-semibold text-lg">Symptom</h4>
            </div>
            <div class="bg-black/50 rounded-lg p-4 border border-amber-900/50">
              <code class="text-amber-400 font-mono text-sm">$[?()]  or  Empty string</code>
            </div>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Causes:</h4>
          <ul class="list-disc list-inside text-slate-300 mb-4 space-y-2">
            <li>Empty object or array as input</li>
            <li>No primitive values in the JSON structure</li>
            <li>All values are null or undefined</li>
            <li>Object contains only nested objects/arrays without primitives</li>
          </ul>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Examples and Solutions:</h4>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Empty input → Empty result
useJsonPath({})        // Output: $[?()]
useJsonPath([])        // Output: $[?()]

// No primitive values → Empty result
useJsonPath({
  nested: {
    empty: {}
  }
})                    // Output: $[?()]

// Add primitive values to get meaningful results
useJsonPath({
  user: {
    name: "John",     // ✅ Primitive value
    profile: {}       // ❌ Empty object
  }
})                    // Output: $[?($.user.name=='John')]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Very Long JSONPath Expressions</h3>
          <div class="bg-amber-950/50 border border-amber-600 rounded-xl p-6 mb-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full">
                <Icon name="uil:info-circle" class="text-white text-xl" />
              </div>
              <h4 class="text-amber-400 font-semibold text-lg">Symptom</h4>
            </div>
            <div class="bg-black/50 rounded-lg p-4 border border-amber-900/50">
              <p class="text-amber-400 font-medium">Generated JSONPath is extremely long and hard to read</p>
            </div>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Causes:</h4>
          <ul class="list-disc list-inside text-slate-300 mb-4 space-y-2">
            <li>Large JSON objects with many fields</li>
            <li>Deeply nested structures</li>
            <li>Arrays with many elements</li>
          </ul>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Solutions:</h4>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># Focus on key identifying fields
const minimalSample = {
  id: user.id,        // ✅ Keep unique identifier
  email: user.email,  // ✅ Keep unique field
  status: user.status // ✅ Keep important status
  // Skip less important fields...
}

# Split complex objects into multiple smaller queries
const userQuery = useJsonPath({ id: user.id, email: user.email })
const profileQuery = useJsonPath({
  name: user.profile.name,
  role: user.profile.role
})</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Performance Issues</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Slow Generation</h3>
          <div class="bg-amber-950/50 border border-amber-600 rounded-xl p-6 mb-6">
            <div class="flex items-center space-x-3 mb-4">
              <div class="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full">
                <Icon name="uil:clock" class="text-white text-xl" />
              </div>
              <h4 class="text-amber-400 font-semibold text-lg">Symptom</h4>
            </div>
            <div class="bg-black/50 rounded-lg p-4 border border-amber-900/50">
              <p class="text-amber-400 font-medium">useJsonPath() takes a long time to process large JSON objects</p>
            </div>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Causes:</h4>
          <ul class="list-disc list-inside text-slate-300 mb-4 space-y-2">
            <li>Very large JSON objects (thousands of fields)</li>
            <li>Deep nesting (many levels)</li>
            <li>Large arrays with many elements</li>
            <li>Limited memory available</li>
          </ul>

          <h4 class="text-lg font-medium text-white mb-2 mt-4">Solutions:</h4>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># 1. Simplify input
const simplified = {
  id: data.id,
  type: data.type,
  status: data.status
  // Only include essential fields
}

# 2. Split into multiple smaller queries
const basicInfo = useJsonPath({ id: data.id, type: data.type })
const details = useJsonPath({ status: data.status, date: data.date })

# 3. Process in chunks if dealing with arrays
const chunkSize = 100
const chunks = []
for (let i = 0; i < largeArray.length; i += chunkSize) {
  const chunk = largeArray.slice(i, i + chunkSize)
  chunks.push(useJsonPath({ items: chunk }))
}</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Environment-Specific Issues</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Browser Compatibility</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// For browser usage, ensure proper bundling
import { useJsonPath } from 'pathfinder'

// Check if running in browser
if (typeof window !== 'undefined') {
  // Browser environment
  const result = useJsonPath(data)
}

// For older browsers, you may need polyfills
# Install core-js if needed
npm install core-js</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Node.js Version Compatibility</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code># Check Node.js version
node --version  # Should be 16.0.0 or higher

# For older Node.js versions, you may need:
npm install pathfinder@legacy  # If available

# Or update Node.js:
# Using nvm:
nvm install 18
nvm use 18

# Using n:
n 18</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Getting Help</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Debug Steps</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>1. Verify input data
console.log('Input:', JSON.stringify(data, null, 2))

2. Check data types
console.log('Type:', Array.isArray(data) ? 'array' : typeof data)

3. Test with simple data
const simpleTest = { name: "test", value: 123 }
console.log('Simple test:', useJsonPath(simpleTest))

4. Check for circular references
function hasCircularReferences(obj) {
  const seen = new WeakSet()
  function detect(item) {
    if (typeof item !== 'object' || item === null) return false
    if (seen.has(item)) return true
    seen.add(item)
    for (const key in item) {
      if (detect(item[key])) return true
    }
    return false
  }
  return detect(obj)
}</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Reporting Issues</h3>
          <p class="text-slate-300 mb-4">
            If you encounter an issue not covered here, please report it with:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li>Complete error message and stack trace</li>
            <li>Version of Pathfinder being used</li>
            <li>Node.js version and environment</li>
            <li>Minimal code example that reproduces the issue</li>
            <li>Sample input data (sanitized if necessary)</li>
          </ul>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Common Fixes Summary</h3>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <span class="text-green-400">✓</span>
                <div>
                  <strong>Invalid JSON:</strong> Use online JSON validators or jq to validate
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-green-400">✓</span>
                <div>
                  <strong>Empty results:</strong> Ensure your input contains primitive values
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-green-400">✓</span>
                <div>
                  <strong>Performance issues:</strong> Simplify large inputs or split into smaller queries
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-green-400">✓</span>
                <div>
                  <strong>Module not found:</strong> Verify installation and import statements
                </div>
              </div>
            </div>
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
  title: 'Troubleshooting - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Troubleshooting guide for Pathfinder JSONPath generator' }
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

:deep(h4) {
  @apply text-lg font-medium text-white mb-2 mt-4;
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