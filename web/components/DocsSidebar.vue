<template>
  <aside class="w-64 bg-slate-800 border-r border-slate-700 h-full overflow-y-auto sticky">
    <div class="p-4">

      <nav class="space-y-6">
        <!-- Getting Started Section -->
        <div>
          <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Getting Started
          </h3>
          <ul class="space-y-1">
            <li>
              <NuxtLink
                to="/docs/introduction"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/introduction')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:book" class="mr-3 text-base" />
                Introduction
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/docs/installation"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/installation')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:package" class="mr-3 text-base" />
                Installation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/docs/cli-usage"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/cli-usage')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="bitcoin-icons:console-filled" class="mr-3 text-base" />
                CLI Usage
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Guides Section -->
        <div>
          <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Guides
          </h3>
          <ul class="space-y-1">
            <li>
              <NuxtLink
                to="/docs/how-it-works"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/how-it-works')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:cog" class="mr-3 text-base" />
                How It Works
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/docs/examples"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/examples')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:file-alt" class="mr-3 text-base" />
                Examples
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/docs/best-practices"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/best-practices')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:check-circle" class="mr-3 text-base" />
                Best Practices
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Reference Section -->
        <div>
          <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Reference
          </h3>
          <ul class="space-y-1">
            <li>
              <NuxtLink
                to="/docs/api-reference"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/api-reference')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:code" class="mr-3 text-base" />
                API Reference
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/docs/troubleshooting"
                class="flex items-center px-3 py-2 text-sm rounded-md transition-colors"
                :class="isActive('/docs/troubleshooting')
                  ? 'bg-slate-700 text-white font-medium'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white'"
              >
                <Icon name="uil:exclamation-circle" class="mr-3 text-base" />
                Troubleshooting
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- External Links -->
        <div class="border-t border-slate-700 pt-6">
          <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Resources
          </h3>
          <ul class="space-y-1">
            <li>
              <a
                href="https://github.com/paulohsa32/pathfinder"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors"
              >
                <Icon name="uil:github" class="mr-3 text-base" />
                GitHub Repository
              </a>
            </li>
            <li>
              <a
                href="https://goessner.net/articles/JsonPath/"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors"
              >
                <Icon name="uil:external-link-alt" class="mr-3 text-base" />
                JSONPath Spec
              </a>
            </li>
            <li>
              <NuxtLink
                to="/playground"
                class="flex items-center px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white rounded-md transition-colors"
              >
                <Icon name="uil:play" class="mr-3 text-base" />
                Playground
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}
</script>
