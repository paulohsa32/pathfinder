---
title: Installation
description: How to install and set up Pathfinder
---

# Installation

Pathfinder can be used in multiple ways depending on your needs. Choose the method that best fits your workflow.

## npm Installation

Install Pathfinder as a development dependency in your project:

```bash
npm install --save-dev pathfinder
```

Or with yarn:

```bash
yarn add --dev pathfinder
```

Or with pnpm:

```bash
pnpm add -D pathfinder
```

## Global Installation

Install Pathfinder globally to use the CLI anywhere:

```bash
npm install -g pathfinder
```

## Building from Source

If you want to contribute or use the latest development version:

```bash
# Clone the repository
git clone https://github.com/paulohsa32/pathfinder.git
cd pathfinder

# Install dependencies
npm install

# Build the CLI
npm run build:cli

# The built CLI will be available at ./dist/cli.mjs
```

## Usage Options

### CLI Usage

After installation, you can use the CLI directly:

```bash
# Local installation
npx pathfinder <path-to-json-file>

# Global installation
pathfinder <path-to-json-file>

# From source
node ./dist/cli.mjs <path-to-json-file>
```

### Programmatic Usage

Use Pathfinder in your Node.js applications:

```javascript
import { useJsonPath } from 'pathfinder'

const sample = {
  user: {
    name: "John Doe",
    age: 30
  }
}

const jsonPath = useJsonPath(sample)
console.log(jsonPath)
// Output: $[?($.user.name=='John Doe' && $.user.age==30)]
```

### Web Interface

Use the interactive web interface for testing and exploration:

```bash
# Clone the repository
git clone https://github.com/paulohsa32/pathfinder.git
cd pathfinder

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then visit `http://localhost:3000` to access the web interface.

## Development Dependencies

If you're developing with Pathfinder, you might want to install it as a development dependency:

```bash
npm install --save-dev pathfinder
```

Then add it to your `package.json` scripts:

```json
{
  "scripts": {
    "generate-jsonpath": "pathfinder ./sample.json --output ./query.jsonpath"
  }
}
```

## Requirements

- **Node.js**: Version 16 or higher
- **npm**: Version 7 or higher (or equivalent package manager)

## Browser Usage

The web interface works in all modern browsers. No additional installation required - just use the [online playground](/playground).

## Next Steps

After installation, you can:

1. [Learn the CLI basics](/docs/cli-usage)
2. [Explore the web playground](/playground)
3. [Understand the algorithm](/docs/how-it-works)
4. [See practical examples](/docs/examples)