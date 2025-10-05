# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pathfinder is a utility that generates JSONPath query strings from JSON samples. It includes both a CLI tool and a web interface built with Nuxt.

## Common Development Commands

### CLI Usage
- **Run CLI directly**: `npm run pathfinder <path-to-json-file>`
- **Built CLI**: `node dist/cli.mjs <path-to-json-file>` (after running `npm run build:cli`)

### Web Development
- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Generate static site**: `npm run generate`

### Testing & Code Quality
- **Run tests**: `npm test` (uses Vitest)
- **Lint code**: `npm run lint`
- **Fix linting issues**: `npm run lint:fix`

### Build & Release
- **Build CLI**: `npm run build:cli`
- **Full package build**: `npm run prepack`
- **Release**: `npm run release` (includes linting, testing, and building)

## Architecture

### Core Components

**JSONPath Generation Logic** (`src/composables/useJsonPath.ts`):
- Main algorithm that traverses JSON objects/arrays recursively
- Creates `PathRef` objects representing each node in the JSON structure
- Generates JSONPath filter expressions matching all primitive values
- Handles nested objects, arrays, and mixed data structures

**CLI Interface** (`src/cli.ts`):
- Uses `citty` for command-line argument parsing
- Reads JSON files, parses with `destr`, and generates JSONPath
- Supports optional output file via `-o/--output` flag

**Web Interface** (`web/app.vue`):
- Built with Nuxt 3 and Monaco Editor
- Live JSON-to-JSONPath conversion with syntax highlighting
- Copy-to-clipboard functionality

**Data Models** (`src/model.ts`):
- `PathRef` interface represents nodes with properties: id, key, value, type, layer, parentId, fullPath

**Helper Functions** (`src/helpers.ts`):
- Type checking utilities: `isObject`, `isArray`, `isPrimitive`
- JSON validation: `isValidJsonString`

### Key Technical Details

- The algorithm generates path references by recursively traversing the JSON structure
- Each primitive value becomes a condition in the final JSONPath filter expression
- Array indices are handled as numeric keys in path generation
- Root elements use `$` notation, nested elements build on parent paths
- The final output format: `$[?(path1==value1 && path2==value2 && ...)]`

### Dependencies & Tools
- **Runtime**: Uses `jiti` for TypeScript execution in development
- **CLI**: `citty` for command parsing, `destr` for safe JSON parsing
- **Web**: Nuxt 3 with Monaco Editor integration, Tailwind CSS
- **Testing**: Vitest for unit tests
- **Build**: `unbuild` for CLI compilation, Nuxt build system for web

### Testing Strategy
Tests cover various JSON structures including flat objects, nested objects, arrays of primitives, arrays of objects, empty objects, and top-level arrays. The test file is at `test/useJsonPath.test.ts`.