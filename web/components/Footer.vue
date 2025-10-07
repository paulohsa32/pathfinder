<template>
  <footer class="bg-slate-900 border-t border-slate-700 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="text-2xl">✈️</div>
            <h3 class="text-lg font-semibold text-white">Pathfinder</h3>
          </div>
          <p class="text-slate-400 text-sm">
            Convert JSON samples into JSONPath queries instantly.
          </p>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Product</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/playground" class="text-slate-400 hover:text-white text-sm transition-colors">
                Playground
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" class="text-slate-400 hover:text-white text-sm transition-colors">
                Documentation
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">Developer</h4>
          <ul class="space-y-2">
            <li>
              <a href="https://github.com/paulohsa32/pathfinder" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white text-sm transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/package/pathfinder" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white text-sm transition-colors">
                npm Package
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">JSONPath Resources</h4>
          <ul class="space-y-2">
            <li>
              <a href="https://goessner.net/articles/JsonPath/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white text-sm transition-colors">
                JSONPath Specification
              </a>
            </li>
            <li>
              <a href="https://restfulapi.net/json-jsonpath/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white text-sm transition-colors">
                JSONPath Tutorial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
