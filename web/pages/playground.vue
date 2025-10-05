<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <Header />

    <main class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
          JSONPath Playground
        </h1>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          Convert your JSON samples into precise JSONPath queries. Simply paste your JSON on the left and see the generated query on the right.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Input Section -->
        <div class="flex-1">
          <div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div class="bg-slate-900 px-4 py-3 border-b border-slate-700">
              <h2 class="text-lg font-semibold text-white">Input JSON</h2>
            </div>
            <div class="p-4">
              <MonacoEditor
                v-model="sample"
                lang="json"
                class="editor"
                :options="{
                  theme: 'vs-dark',
                  automaticLayout: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false
                }"
              />
            </div>
          </div>
        </div>

        <!-- Output Section -->
        <div class="flex-1">
          <div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div class="bg-slate-900 px-4 py-3 border-b border-slate-700 flex justify-between items-center">
              <h2 class="text-lg font-semibold text-white">JSONPath Output</h2>
              <button
                v-if="result && result !== 'Invalid JSON'"
                @click="copyResult"
                class="flex items-center space-x-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
              >
                <Icon name="uil:copy" class="text-base" />
                <span>Copy</span>
              </button>
            </div>
            <div class="p-4">
              <div class="bg-slate-900 rounded-lg p-6 min-h-[400px] font-mono text-sm">
                <div
                  v-if="result === 'Invalid JSON'"
                  class="text-red-400"
                >
                  Invalid JSON format. Please check your input.
                </div>
                <div
                  v-else-if="result"
                  class="text-blue-400 break-all"
                >
                  {{ result }}
                </div>
                <div
                  v-else
                  class="text-slate-500 italic"
                >
                  Enter JSON on the left to generate a JSONPath query...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Examples Section -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-white mb-6 text-center">Try These Examples</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="example in examples"
            :key="example.name"
            class="bg-slate-800 rounded-lg border border-slate-700 p-4 cursor-pointer hover:border-blue-500 transition-colors"
            @click="loadExample(example)"
          >
            <h3 class="text-white font-semibold mb-2">{{ example.name }}</h3>
            <p class="text-slate-400 text-sm mb-3">{{ example.description }}</p>
            <div class="text-xs text-blue-400">Click to load example</div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import copy from 'copy-text-to-clipboard'
import destr from 'destr'
import { computed, ref } from 'vue'
import { useJsonPath } from '../../src'
import { isValidJsonString } from '../../src/helpers'

useHead({
  title: 'Playground - Pathfinder',
  meta: [
    { name: 'description', content: 'Interactive JSONPath playground. Convert JSON samples into JSONPath queries in real-time.' }
  ]
})

const sample = ref<string>(JSON.stringify({
  user: {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    active: true
  }
}, null, 2))

const result = computed(() => {
  if (sample.value === '') return ''
  if (!isValidJsonString(sample.value)) {
    return 'Invalid JSON'
  }
  const jsonSample = destr(sample.value)
  return useJsonPath(jsonSample)
})

const examples = [
  {
    name: "User Profile",
    description: "Simple nested object with user data",
    json: {
      user: {
        name: "Jane Smith",
        age: 28,
        email: "jane@example.com",
        active: true
      }
    }
  },
  {
    name: "Product List",
    description: "Object containing array of products",
    json: {
      products: [
        { id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
        { id: 2, name: "Book", price: 29.99, category: "Books" }
      ]
    }
  },
  {
    name: "API Response",
    description: "Complex nested structure with metadata",
    json: {
      status: "success",
      data: {
        users: [
          {
            id: "user123",
            profile: {
              name: "Alice",
              preferences: {
                theme: "dark",
                notifications: true
              }
            }
          }
        ]
      }
    }
  },
  {
    name: "Configuration",
    description: "Settings object with various data types",
    json: {
      database: {
        host: "localhost",
        port: 5432,
        ssl: false,
        timeout: 30000
      },
      features: {
        analytics: true,
        debug: false,
        version: "1.2.3"
      }
    }
  },
  {
    name: "Shopping Cart",
    description: "E-commerce cart with items and totals",
    json: {
      cart: {
        id: "cart456",
        items: [
          { productId: "prod1", quantity: 2, price: 19.99 },
          { productId: "prod2", quantity: 1, price: 49.99 }
        ],
        total: 89.97,
        currency: "USD"
      }
    }
  },
  {
    name: "Log Entry",
    description: "Structured log data with timestamp and metadata",
    json: {
      timestamp: "2024-01-15T10:30:00Z",
      level: "INFO",
      message: "User logged in successfully",
      context: {
        userId: "user789",
        ip: "192.168.1.100",
        userAgent: "Mozilla/5.0..."
      }
    }
  }
]

function copyResult() {
  if (result.value) {
    copy(result.value)
    // You could add a toast notification here
  }
}

function loadExample(example: any) {
  sample.value = JSON.stringify(example.json, null, 2)
}
</script>

<style scoped>
.editor {
  height: 400px;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style>