<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <Header />

    <main class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <div class="bg-slate-900 px-6 py-4 border-b border-slate-700">
            <div class="flex items-center space-x-4">
              <NuxtLink
                to="/docs"
                class="text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Docs
              </NuxtLink>
            </div>
          </div>

          <div class="p-6">
            <ContentDoc>
              <template #not-found>
                <div class="text-center py-12">
                  <h1 class="text-2xl font-bold text-white mb-4">Documentation Not Found</h1>
                  <p class="text-slate-400 mb-6">
                    The documentation page you're looking for doesn't exist.
                  </p>
                  <NuxtLink
                    to="/docs"
                    class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Back to Documentation
                  </NuxtLink>
                </div>
              </template>
            </ContentDoc>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Documentation - Pathfinder',
  meta: [
    { name: 'description', content: 'Complete documentation for Pathfinder JSONPath generator' }
  ]
})
</script>

<style scoped>
:deep(h1) {
  @apply text-3xl font-bold text-white mb-6 mt-8 first:mt-0;
}

:deep(h2) {
  @apply text-2xl font-bold text-white mb-4 mt-8;
}

:deep(h3) {
  @apply text-xl font-semibold text-white mb-3 mt-6;
}

:deep(h4) {
  @apply text-lg font-semibold text-white mb-2 mt-4;
}

:deep(p) {
  @apply text-slate-300 mb-4 leading-relaxed;
}

:deep(ul) {
  @apply list-disc list-inside text-slate-300 mb-4 space-y-2;
}

:deep(ol) {
  @apply list-decimal list-inside text-slate-300 mb-4 space-y-2;
}

:deep(li) {
  @apply leading-relaxed;
}

:deep(code) {
  @apply bg-slate-900 text-blue-400 px-2 py-1 rounded text-sm font-mono;
}

:deep(pre) {
  @apply bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto;
}

:deep(pre code) {
  @apply bg-transparent p-0 text-slate-300;
}

:deep(blockquote) {
  @apply border-l-4 border-blue-500 pl-4 my-6 text-slate-400 italic;
}

:deep(a) {
  @apply text-blue-400 hover:text-blue-300 underline transition-colors;
}

:deep(table) {
  @apply w-full text-slate-300 mb-4;
}

:deep(th) {
  @apply bg-slate-700 px-4 py-2 text-left font-semibold text-white;
}

:deep(td) {
  @apply border-t border-slate-700 px-4 py-2;
}

:deep(.language-jsonpath) {
  @apply text-blue-400;
}

:deep(.language-bash) {
  @apply text-green-400;
}

:deep(.language-javascript) {
  @apply text-yellow-400;
}
</style>