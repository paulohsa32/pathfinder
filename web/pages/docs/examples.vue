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
            <span class="text-white font-medium">Examples</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">Examples</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            This page provides practical examples of JSONPath generation for various JSON structures and use cases.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Basic Examples</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Simple Object</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Input:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-slate-300"><code>{
  "name": "John Doe",
  "age": 30,
  "active": true
}</code></pre>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Generated JSONPath:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-blue-400"><code>$[?($.name=='John Doe' && $.age==30 && $.active==true)]</code></pre>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Nested Object</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Input:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-slate-300"><code>{
  "user": {
    "profile": {
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    "settings": {
      "theme": "dark",
      "notifications": true
    }
  }
}</code></pre>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Generated JSONPath:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-blue-400"><code>$[?($.user.profile.name=='Jane Smith' && $.user.profile.email=='jane@example.com' && $.user.settings.theme=='dark' && $.user.settings.notifications==true)]</code></pre>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Array Examples</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Array of Primitives</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Input:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-slate-300"><code>{
  "tags": ["javascript", "typescript", "json"]
}</code></pre>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Generated JSONPath:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-blue-400"><code>$[?($.tags[0]=='javascript' && $.tags[1]=='typescript' && $.tags[2]=='json')]</code></pre>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Array of Objects</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Input:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-slate-300"><code>{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 29.99
    }
  ]
}</code></pre>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Generated JSONPath:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre class="text-blue-400"><code>$[?($.products[0].id==1 && $.products[0].name=='Laptop' && $.products[0].price==999.99 && $.products[1].id==2 && $.products[1].name=='Mouse' && $.products[1].price==29.99)]</code></pre>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Examples</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">API Response</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Input:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto max-h-96">
                <pre class="text-slate-300"><code>{
  "success": true,
  "data": {
    "user": {
      "id": "user_12345",
      "username": "johndoe",
      "profile": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "verified": true
      },
      "permissions": ["read", "write"],
      "lastLogin": "2024-01-15T10:30:00Z"
    }
  },
  "timestamp": "2024-01-15T10:35:00Z"
}</code></pre>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Generated JSONPath:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto max-h-96 overflow-y-auto">
                <pre class="text-blue-400 text-sm"><code>$[?($.success==true && $.data.user.id=='user_12345' && $.data.user.username=='johndoe' && $.data.user.profile.firstName=='John' && $.data.user.profile.lastName=='Doe' && $.data.user.profile.email=='john@example.com' && $.data.user.profile.verified==true && $.data.user.permissions[0]=='read' && $.data.user.permissions[1]=='write' && $.data.user.lastLogin=='2024-01-15T10:30:00Z' && $.timestamp=='2024-01-15T10:35:00Z')]</code></pre>
              </div>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Configuration File</h3>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Input:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto max-h-96">
                <pre class="text-slate-300"><code>{
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp",
    "ssl": false,
    "pool": {
      "min": 2,
      "max": 10
    }
  },
  "server": {
    "port": 3000,
    "host": "0.0.0.0",
    "cors": true
  },
  "features": {
    "analytics": true,
    "debug": false,
    "logging": "info"
  }
}</code></pre>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-medium text-white mb-2">Generated JSONPath:</h4>
              <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto max-h-96 overflow-y-auto">
                <pre class="text-blue-400 text-sm"><code>$[?($.database.host=='localhost' && $.database.port==5432 && $.database.name=='myapp' && $.database.ssl==false && $.database.pool.min==2 && $.database.pool.max==10 && $.server.port==3000 && $.server.host=='0.0.0.0' && $.server.cors==true && $.features.analytics==true && $.features.debug==false && $.features.logging=='info')]</code></pre>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Usage Scenarios</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">1. API Testing</h3>
          <p class="text-slate-300 mb-4">Use the generated JSONPath to validate API responses:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># Generate the query
pathfinder expected-response.json --output validation-query.jsonpath

# Use it in tests
curl https://api.example.com/data | jq -f validation-query.jsonpath</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">2. Data Extraction</h3>
          <p class="text-slate-300 mb-4">Extract specific data from large JSON documents:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>// Generated query: $[?($.user.id=='user123' && $.user.active==true)]
const query = '$[?($.user.id==\'user123\' && $.user.active==true)]'
const results = jsonpath.query(largeDataset, query)</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">3. Configuration Validation</h3>
          <p class="text-slate-300 mb-4">Validate configuration files against expected structure:</p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># Generate expected structure query
pathfinder config-template.json --output config-validation.jsonpath

# Validate actual config
jq -f config-validation.jsonpath production-config.json</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Tips for Working with Generated JSONPath</h2>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><strong>Test Against Real Data</strong>: Always test generated paths against actual data</li>
            <li><strong>Handle Edge Cases</strong>: Consider how variations in data might affect matching</li>
            <li><strong>Performance</strong>: Be aware that complex filters can be slow on large datasets</li>
            <li><strong>Validation</strong>: Use multiple test cases to ensure reliability</li>
            <li><strong>Documentation</strong>: Document the purpose and expected behavior of each query</li>
          </ul>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Try It Yourself</h3>
            <p class="text-slate-300 mb-4">
              Ready to try these examples? Use the interactive playground to experiment with different JSON structures and see the generated JSONPath expressions in real-time.
            </p>
            <NuxtLink
              to="/playground"
              class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Open Playground
              <Icon name="uil:arrow-right" class="ml-2" />
            </NuxtLink>
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
  title: 'Examples - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Practical examples of JSONPath generation with Pathfinder' }
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
  @apply text-lg font-medium text-white mb-2;
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