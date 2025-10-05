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
            <span class="text-white font-medium">How It Works</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">How Pathfinder Works</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            Pathfinder uses a sophisticated algorithm to analyze JSON structures and generate precise JSONPath expressions. Understanding how it works can help you use it more effectively and troubleshoot any issues.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Algorithm Overview</h2>
          <p class="text-slate-300 mb-4 leading-relaxed">
            The core algorithm follows these steps:
          </p>
          <ol class="list-decimal list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>Structure Analysis</strong>: Recursively traverses the JSON structure</li>
            <li><strong>Path Reference Creation</strong>: Creates path references for each node</li>
            <li><strong>Primitive Value Filtering</strong>: Identifies and filters for primitive values</li>
            <li><strong>Expression Generation</strong>: Builds the final JSONPath filter expression</li>
          </ol>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Detailed Process</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">1. Structure Traversal</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Pathfinder starts by recursively traversing your JSON sample:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Example JSON
{
  "user": {
    "name": "John",
    "details": {
      "age": 30,
      "active": true
    }
  }
}</code></pre>
          </div>

          <p class="text-slate-300 mb-4 leading-relaxed">
            The algorithm visits each node and creates a hierarchical representation of the structure.
          </p>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">2. Path Reference Generation</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            For each node in the JSON structure, Pathfinder creates a <code class="bg-slate-700 px-2 py-1 rounded text-blue-400">PathRef</code> object containing:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>id</strong>: Unique identifier for the node</li>
            <li><strong>key</strong>: The property name or array index</li>
            <li><strong>value</strong>: The actual value at this node</li>
            <li><strong>type</strong>: Data type (object, array, string, number, boolean)</li>
            <li><strong>layer</strong>: Nesting depth (0 for root, 1 for direct children, etc.)</li>
            <li><strong>parentId</strong>: Reference to the parent node</li>
            <li><strong>fullPath</strong>: The complete JSONPath to this node</li>
          </ul>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">3. Primitive Value Identification</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Pathfinder focuses on <strong>primitive values</strong> (strings, numbers, booleans) because these are the most reliable identifiers for data matching:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Primitive values that will be used in the filter
{
  "user": {
    "name": "John",        // ← String: used in filter
    "details": {
      "age": 30,           // ← Number: used in filter
      "active": true       // ← Boolean: used in filter
    }
  }
}</code></pre>
          </div>

          <p class="text-slate-300 mb-4 leading-relaxed">
            Objects and arrays themselves are not directly used in the filter expression, but their contents are analyzed.
          </p>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">4. JSONPath Expression Building</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            The final JSONPath expression is built by combining all primitive value conditions with logical AND operators:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-blue-400"><code>$[?($.user.name=='John' && $.user.details.age==30 && $.user.details.active==true)]</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Path Generation Logic</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Object Properties</h3>
          <p class="text-slate-300 mb-4">For object properties, Pathfinder generates dot notation:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input
{
  "user": {
    "name": "John"
  }
}

// Generated paths
$.user
$.user.name</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Array Elements</h3>
          <p class="text-slate-300 mb-4">For array elements, Pathfinder uses bracket notation with indices:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input
{
  "items": ["apple", "banana", "cherry"]
}

// Generated paths
$.items[0]    // "apple"
$.items[1]    // "banana"
$.items[2]    // "cherry"</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Mixed Structures</h3>
          <p class="text-slate-300 mb-4">For complex nested structures, Pathfinder combines both notations:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input
{
  "data": {
    "users": [
      {
        "id": 1,
        "profile": {
          "name": "Alice"
        }
      }
    ]
  }
}

// Generated paths
$.data.users[0].id
$.data.users[0].profile.name</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Value Formatting</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">String Values</h3>
          <p class="text-slate-300 mb-4">String values are wrapped in single quotes and properly escaped:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input: { "message": "Hello, world!" }
// Output: $.message=='Hello, world!'</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Number Values</h3>
          <p class="text-slate-300 mb-4">Numbers are used as-is:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input: { "count": 42 }
// Output: $.count==42</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Boolean Values</h3>
          <p class="text-slate-300 mb-4">Booleans are used as-is:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input: { "active": true }
// Output: $.active==true</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Edge Cases</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Empty Objects</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input: {}
// Output: $[?()]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Empty Arrays</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input: []
// Output: $[?()]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Top-Level Arrays</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Input
[
  { "type": "book", "author": "Tolkien" },
  { "type": "movie", "director": "Cameron" }
]

// Output
$[?($[0].type=='book' && $[0].author=='Tolkien' &&
     $[1].type=='movie' && $[1].director=='Cameron')]</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Performance Considerations</h2>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>Time Complexity</strong>: O(n) where n is the number of nodes in the JSON structure</li>
            <li><strong>Space Complexity</strong>: O(n) for storing path references</li>
            <li><strong>Optimization Features</strong>:
              <ul class="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Single-pass traversal: Processes the JSON structure in one pass</li>
                <li>Efficient path generation: Builds paths incrementally</li>
                <li>Minimal memory overhead: Cleans up intermediate data structures</li>
              </ul>
            </li>
          </ul>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Understanding the Output</h3>
            <p class="text-slate-300 mb-4">
              When you use Pathfinder, the generated JSONPath expression will:
            </p>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Match the exact structure</strong> of your input JSON</li>
              <li><strong>Include all primitive values</strong> as equality conditions</li>
              <li><strong>Use logical AND</strong> to combine all conditions</li>
              <li><strong>Generate a single expression</strong> that matches your sample precisely</li>
            </ul>
            <p class="text-slate-300 mt-4">
              This approach ensures that the generated JSONPath will only match JSON structures that are identical to your sample in all the important ways.
            </p>
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
  title: 'How It Works - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Understanding the Pathfinder algorithm for JSONPath generation' }
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

:deep(ol) {
  @apply list-decimal list-inside text-slate-300 mb-4 space-y-2;
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