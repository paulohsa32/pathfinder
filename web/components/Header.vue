<template>
  <header class="flex items-center justify-between p-4 h-16 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
    <!-- Left side: Logo -->
    <div class="flex items-center space-x-4">
      <div class="text-2xl">✈️</div>
      <h1 class="text-xl font-bold text-white">Pathfinder</h1>
    </div>

    <!-- Center: Navigation -->
    <nav class="hidden md:flex items-center space-x-6">
      <NuxtLink
        to="/"
        class="text-slate-300 hover:text-white transition-colors"
        :class="{ 'text-white': $route.path === '/' }"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/playground"
        class="text-slate-300 hover:text-white transition-colors"
        :class="{ 'text-white': $route.path === '/playground' }"
      >
        Playground
      </NuxtLink>
      <NuxtLink
        to="/docs"
        class="text-slate-300 hover:text-white transition-colors"
        :class="{ 'text-white': $route.path.startsWith('/docs') }"
      >
        Documentation
      </NuxtLink>
    </nav>

    <!-- Right side: GitHub and Mobile menu -->
    <div class="flex items-center space-x-4">
      <a href="https://github.com/paulohsa32/pathfinder" target="_blank" rel="noopener noreferrer">
        <Icon name="uil:github" class="text-2xl text-slate-300 hover:text-white transition-colors" />
      </a>

      <!-- Mobile menu button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden text-slate-300 hover:text-white"
      >
        <Icon name="uil:bars" class="text-2xl" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="absolute top-16 left-0 right-0 bg-slate-900 border-b border-slate-700 md:hidden"
    >
      <nav class="flex flex-col p-4 space-y-3">
        <NuxtLink
          to="/"
          class="text-slate-300 hover:text-white transition-colors"
          @click="mobileMenuOpen = false"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/playground"
          class="text-slate-300 hover:text-white transition-colors"
          @click="mobileMenuOpen = false"
        >
          Playground
        </NuxtLink>
        <NuxtLink
          to="/docs"
          class="text-slate-300 hover:text-white transition-colors"
          @click="mobileMenuOpen = false"
        >
          Documentation
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>