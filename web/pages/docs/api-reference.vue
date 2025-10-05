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
            <span class="text-white font-medium">API Reference</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">API Reference</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            Complete API reference for Pathfinder's programmatic interface. Use these functions and types to integrate Pathfinder into your JavaScript/TypeScript applications.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Installation</h2>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code>npm install pathfinder
# or
yarn add pathfinder
# or
pnpm add pathfinder</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Core Function</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">useJsonPath</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            The main function that converts JSON samples into JSONPath expressions.
          </p>

          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>import { useJsonPath } from 'pathfinder'

const jsonPath = useJsonPath(sample)
console.log(jsonPath)
// Output: $[?($.name=='John' && $.age==30)]</code></pre>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Parameters</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-blue-400 font-mono mr-2">sample</span>
              <span class="text-slate-300 text-sm">object | array</span>
            </div>
            <p class="text-slate-300 text-sm">The JSON object or array to analyze and convert to a JSONPath expression.</p>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Returns</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-green-400 font-mono mr-2">string</span>
            </div>
            <p class="text-slate-300 text-sm">A JSONPath filter expression that matches the structure and values of the input sample.</p>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Example</h4>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>import { useJsonPath } from 'pathfinder'

// Example 1: Simple object
const sample1 = {
  user: {
    name: "Alice",
    age: 28,
    active: true
  }
}
const path1 = useJsonPath(sample1)
console.log(path1)
// Output: $[?($.user.name=='Alice' && $.user.age==28 && $.user.active==true)]

// Example 2: Array with objects
const sample2 = {
  products: [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Mouse", price: 29.99 }
  ]
}
const path2 = useJsonPath(sample2)
console.log(path2)
// Output: $[?($.products[0].id==1 && $.products[0].name=='Laptop' && $.products[0].price==999.99 && $.products[1].id==2 && $.products[1].name=='Mouse' && $.products[1].price==29.99)]

// Example 3: Nested structure
const sample3 = {
  order: {
    id: "ORD-123",
    customer: {
      name: "John Doe",
      email: "john@example.com"
    },
    items: [
      { product: "Book", quantity: 2, price: 19.99 }
    ]
  }
}
const path3 = useJsonPath(sample3)
console.log(path3)
// Output: $[?($.order.id=='ORD-123' && $.order.customer.name=='John Doe' && $.order.customer.email=='john@example.com' && $.order.items[0].product=='Book' && $.order.items[0].quantity==2 && $.order.items[0].price==19.99)]</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Helper Functions</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">isObject</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Checks if a value is a plain object (not an array).
          </p>

          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>import { isObject } from 'pathfinder'

isObject({})        // true
isObject([])        // false
isObject(null)      // false
isObject("string")  // false</code></pre>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Parameters</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-blue-400 font-mono mr-2">item</span>
              <span class="text-slate-300 text-sm">any</span>
            </div>
            <p class="text-slate-300 text-sm">The value to check.</p>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Returns</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-green-400 font-mono mr-2">boolean</span>
            </div>
            <p class="text-slate-300 text-sm">True if the item is an object, false otherwise.</p>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">isArray</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Checks if a value is an array.
          </p>

          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>import { isArray } from 'pathfinder'

isArray([])        // true
isArray({})        // false
isArray(null)      // false
isArray("string")  // false</code></pre>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Parameters</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-blue-400 font-mono mr-2">item</span>
              <span class="text-slate-300 text-sm">any</span>
            </div>
            <p class="text-slate-300 text-sm">The value to check.</p>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Returns</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-green-400 font-mono mr-2">boolean</span>
            </div>
            <p class="text-slate-300 text-sm">True if the item is an array, false otherwise.</p>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">isPrimitive</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Checks if a value is a primitive type (string, number, or boolean).
          </p>

          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>import { isPrimitive } from 'pathfinder'

isPrimitive("hello")  // true
isPrimitive(42)        // true
isPrimitive(true)      // true
isPrimitive(null)      // false
isPrimitive(undefined) // false
isPrimitive({})        // false
isPrimitive([])        // false</code></pre>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Parameters</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-blue-400 font-mono mr-2">item</span>
              <span class="text-slate-300 text-sm">any</span>
            </div>
            <p class="text-slate-300 text-sm">The value to check.</p>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Returns</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-green-400 font-mono mr-2">boolean</span>
            </div>
            <p class="text-slate-300 text-sm">True if the item is a primitive type, false otherwise.</p>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">isValidJsonString</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Validates if a string contains valid JSON.
          </p>

          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>import { isValidJsonString } from 'pathfinder'

isValidJsonString('{"name": "John"}')  // true
isValidJsonString('invalid json')       // false
isValidJsonString('')                    // false
isValidJsonString('null')                // true
isValidJsonString('[]')                  // true</code></pre>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Parameters</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-blue-400 font-mono mr-2">str</span>
              <span class="text-slate-300 text-sm">string</span>
            </div>
            <p class="text-slate-300 text-sm">The string to validate as JSON.</p>
          </div>

          <h4 class="text-lg font-medium text-white mb-2 mt-6">Returns</h4>
          <div class="bg-slate-700 rounded-lg p-4 mb-4">
            <div class="flex items-center mb-2">
              <span class="text-green-400 font-mono mr-2">boolean</span>
            </div>
            <p class="text-slate-300 text-sm">True if the string contains valid JSON, false otherwise.</p>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Types</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">PathRef</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Internal interface used to represent path references during JSON analysis.
          </p>

          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-blue-400"><code>interface PathRef {
  id: string;           // Unique identifier for this path reference
  key: string;          // The property name or array index
  value: any;           // The value at this path
  type: string;         // Data type (object, array, string, number, boolean)
  layer: number;        // Nesting depth (0 for root)
  parentId?: string;    // Reference to parent path reference
  fullPath?: string;    // Complete JSONPath to this node
}</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Usage Examples</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Basic Usage</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>import { useJsonPath, isValidJsonString } from 'pathfinder'

// Function to safely parse and generate JSONPath
function generateJsonPath(jsonString) {
  if (!isValidJsonString(jsonString)) {
    throw new Error('Invalid JSON string')
  }

  const data = JSON.parse(jsonString)
  return useJsonPath(data)
}

// Usage
try {
  const jsonString = '{"user": {"name": "John", "age": 30}}'
  const jsonPath = generateJsonPath(jsonString)
  console.log(jsonPath)
  // Output: $[?($.user.name=='John' && $.user.age==30)]
} catch (error) {
  console.error('Error:', error.message)
}</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Integration with JSONPath Libraries</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>import { useJsonPath } from 'pathfinder'
import * as jsonpath from 'jsonpath'

// Sample data to search in
const largeDataset = {
  users: [
    { id: 1, name: "Alice", status: "active", role: "admin" },
    { id: 2, name: "Bob", status: "inactive", role: "user" },
    { id: 3, name: "Charlie", status: "active", role: "user" }
  ]
}

// Target sample we want to find
const targetSample = {
  id: 1,
  name: "Alice",
  status: "active",
  role: "admin"
}

// Generate JSONPath from our target
const searchQuery = useJsonPath(targetSample)
console.log('Generated query:', searchQuery)
// Output: $[?($.id==1 && $.name=='Alice' && $.status=='active' && $.role=='admin')]

// Apply to the larger dataset
const results = jsonpath.query(largeDataset, {
  $: `$.users[?(${searchQuery.slice(2, -1)})]` // Remove $[?(...)] wrapper for array
})

console.log('Found matches:', results)
// Output: [{ id: 1, name: "Alice", status: "active", role: "admin" }]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">TypeScript Usage</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>import { useJsonPath } from 'pathfinder'

interface User {
  id: number
  name: string
  email: string
  active: boolean
}

interface ApiResponse {
  success: boolean
  data: {
    users: User[]
  }
  timestamp: string
}

// Type-safe usage
function generateUserQuery(user: User): string {
  return useJsonPath(user)
}

const sampleUser: User = {
  id: 123,
  name: "John Doe",
  email: "john@example.com",
  active: true
}

const userQuery = generateUserQuery(sampleUser)
console.log(userQuery)
// Output: $[?($.id==123 && $.name=='John Doe' && $.email=='john@example.com' && $.active==true)]</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Error Handling</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Common Errors</h3>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>import { useJsonPath, isValidJsonString } from 'pathfinder'

// 1. Invalid JSON input
try {
  const invalidData = JSON.parse('invalid json')
  const path = useJsonPath(invalidData) // This will never execute
} catch (error) {
  console.error('JSON parsing error:', error.message)
}

// 2. Circular references (rare but possible)
const obj: any = { name: "test" }
obj.self = obj

try {
  const path = useJsonPath(obj) // May cause issues with deep recursion
} catch (error) {
  console.error('Circular reference error:', error.message)
}

// 3. Very large objects
try {
  const largeObj = {} // Very large object
  for (let i = 0; i < 100000; i++) {
    largeObj[`prop${i}`] = `value${i}`
  }
  const path = useJsonPath(largeObj) // May be slow or hit memory limits
} catch (error) {
  console.error('Large object error:', error.message)
}</code></pre>
          </div>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Version Compatibility</h3>
            <p class="text-slate-300 mb-4">
              Pathfinder is compatible with:
            </p>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Node.js</strong>: Version 16.0.0 and higher</li>
              <li><strong>TypeScript</strong>: Version 4.5.0 and higher</li>
              <li><strong>Browsers</strong>: Modern browsers with ES2020 support</li>
              <li><strong>JSONPath</strong>: Compatible with standard JSONPath specification</li>
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
  title: 'API Reference - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Complete API reference for Pathfinder JSONPath generator' }
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