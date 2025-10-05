<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative">
    <Header />

    <div class="flex">
      <!-- Desktop Sidebar -->
      <aside class="hidden lg:block w-64 bg-slate-800 border-r border-slate-700 h-[calc(100vh-4rem)] overflow-y-auto sticky top-16">
        <DocsSidebar />
      </aside>

      <!-- Mobile Sidebar -->
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 z-50 flex"
      >
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-black/50"
          @click="mobileMenuOpen = false"
        />

        <!-- Sidebar -->
        <aside class="relative w-64 bg-slate-800 border-r border-slate-700 h-full">
          <div class="flex justify-between items-center p-4 border-b border-slate-700">
            <NuxtLink
              to="/docs"
              class="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
              @click="mobileMenuOpen = false"
            >
              <Icon name="uil:arrow-left" class="text-lg" />
              <span class="font-medium">Docs</span>
            </NuxtLink>
            <button
              @click="mobileMenuOpen = false"
              class="text-slate-300 hover:text-white"
            >
              <Icon name="uil:times" class="text-xl" />
            </button>
          </div>
          <div class="h-[calc(100%-4rem)] overflow-y-auto">
            <DocsSidebar />
          </div>
        </aside>
      </div>

      <!-- Main Content -->
      <main class="flex-1 min-h-[calc(100vh-4rem)] overflow-y-auto">
        <!-- Mobile menu toggle -->
        <div class="lg:hidden bg-slate-800 border-b border-slate-700 px-4 py-3">
          <button
            @click="mobileMenuOpen = true"
            class="flex items-center space-x-2 text-slate-300 hover:text-white"
          >
            <Icon name="uil:bars" class="text-lg" />
            <span>Menu</span>
          </button>
        </div>

        <!-- Page content -->
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
