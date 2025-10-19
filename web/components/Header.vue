<template>
  <header class="flex items-center justify-between p-4 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 sticky top-0 z-50 transition-all duration-300">
    <!-- Left side: Logo -->
    <NuxtLink to="/" class="flex items-center space-x-4 group">
      <div class="text-3xl transform transition-transform duration-300 group-hover:scale-110">✈️</div>
      <h1 class="text-xl font-black text-white">Pathfinder</h1>
    </NuxtLink>

    <!-- Center: Navigation -->
    <nav class="hidden md:flex items-center space-x-8">
      <NuxtLink
        to="/"
        class="relative text-slate-300 hover:text-white transition-all duration-300 group"
        :class="{ 'text-white font-semibold': $route.path === '/' }"
      >
        <span class="relative z-10">Home</span>
        <div
          class="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-400 transform origin-left transition-transform duration-300"
          :class="{ 'scale-x-100': $route.path === '/', 'scale-x-0 group-hover:scale-x-100': $route.path !== '/' }"
        ></div>
      </NuxtLink>

      <NuxtLink
        to="/playground"
        class="relative text-slate-300 hover:text-white transition-all duration-300 group"
        :class="{ 'text-white font-semibold': $route.path === '/playground' }"
      >
        <span class="relative z-10 flex items-center gap-2">
          Playground
        </span>
        <div
          class="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-400 transform origin-left transition-transform duration-300"
          :class="{ 'scale-x-100': $route.path === '/playground', 'scale-x-0 group-hover:scale-x-100': $route.path !== '/playground' }"
        ></div>
      </NuxtLink>

      <NuxtLink
        to="/docs"
        class="relative text-slate-300 hover:text-white transition-all duration-300 group"
        :class="{ 'text-white font-semibold': $route.path.startsWith('/docs') }"
      >
        <span class="relative z-10 flex items-center gap-2">
          Documentation
        </span>
        <div
          class="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-400 transform origin-left transition-transform duration-300"
          :class="{ 'scale-x-100': $route.path.startsWith('/docs'), 'scale-x-0 group-hover:scale-x-100': !$route.path.startsWith('/docs') }"
        ></div>
      </NuxtLink>
    </nav>

    <!-- Right side: GitHub and Mobile menu -->
    <div class="flex items-center space-x-4">
      <a
        href="https://github.com/paulohsa32/pathfinder"
        target="_blank"
        rel="noopener noreferrer"
        class="relative group"
      >
        <div class="absolute -inset-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
        <Icon name="uil:github" class="relative text-2xl text-slate-300 hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
      </a>

      <!-- CTA Button for desktop -->
      <div class="hidden lg:block">
        <NuxtLink
          to="/playground"
          class="group relative px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-sm overflow-hidden"
        >
          <span class="relative z-10 flex items-center gap-2">
            Get Started
            <Icon name="uil:arrow-right" class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </span>
        </NuxtLink>
      </div>

      <!-- Mobile menu button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden relative group p-2"
      >
        <div class="absolute -inset-2 bg-slate-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
        <Icon
          name="uil:bars"
          class="relative text-2xl text-slate-300 hover:text-white transition-all duration-300 group-hover:scale-110"
          :class="{ 'rotate-90': mobileMenuOpen }"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileMenuOpen"
        class="absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 md:hidden"
      >
        <nav class="flex flex-col p-6 space-y-4">
          <NuxtLink
            to="/"
            class="flex items-center justify-between p-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            <span>Home</span>
            <Icon name="uil:home" class="w-5 h-5" />
          </NuxtLink>

          <NuxtLink
            to="/playground"
            class="flex items-center justify-between p-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            <span>Playground</span>
            <Icon name="uil:play" class="w-5 h-5" />
          </NuxtLink>

          <NuxtLink
            to="/docs"
            class="flex items-center justify-between p-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            <span>Documentation</span>
            <Icon name="uil:book" class="w-5 h-5" />
          </NuxtLink>

          <div class="pt-4 border-t border-slate-800">
            <NuxtLink
              to="/playground"
              class="w-full flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              @click="mobileMenuOpen = false"
            >
              Get Started
              <Icon name="uil:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
