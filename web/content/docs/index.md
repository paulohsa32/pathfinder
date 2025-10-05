---
title: Introduction
description: Getting started with Pathfinder
---

# Pathfinder Documentation

Pathfinder is a powerful utility that converts JSON samples into [JSONPath](https://goessner.net/articles/JsonPath/) query strings. It helps you generate precise JSONPath expressions that can be used to find specific JSON objects within larger JSON structures.

## What is JSONPath?

JSONPath is a query language for JSON that allows you to select and extract data from JSON documents. It's similar to XPath for XML and provides a way to navigate through JSON structures using path expressions.

## Why Use Pathfinder?

Creating JSONPath expressions manually can be error-prone and time-consuming, especially for complex nested structures. Pathfinder automates this process by:

- **Analyzing your JSON sample** to understand its structure
- **Generating precise filter expressions** that match your specific data
- **Supporting nested objects, arrays, and mixed data types**
- **Providing both CLI and web interfaces** for different use cases

## Quick Example

Given this JSON input:

```json
{
  "user": {
    "name": "Jane Doe",
    "age": 25,
    "status": "active"
  }
}
```

Pathfinder generates this JSONPath expression:

```jsonpath
$[?($.user.name=='Jane Doe' && $.user.age==25 && $.user.status=='active')]
```

This expression can be used to find the exact same user object in a larger JSON document.

## Key Features

- **Automatic Generation**: No need to manually craft complex JSONPath expressions
- **Precise Matching**: Generates expressions that match all primitive values in your sample
- **Multiple Interfaces**: CLI tool for automation and web interface for interactive use
- **TypeScript Support**: Built with TypeScript for better developer experience
- **Zero Dependencies**: Lightweight and fast

## Use Cases

- **API Testing**: Validate specific data structures in API responses
- **Data Extraction**: Extract specific data points from complex JSON documents
- **Automation Scripts**: Integrate JSONPath generation into CI/CD pipelines
- **Debugging**: Quickly locate specific data in large JSON structures
- **Configuration Management**: Generate paths for configuration validation

## Getting Started

1. **Try the Playground**: Use the [web playground](/playground) to experiment with different JSON samples
2. **Install the CLI**: Add Pathfinder to your project for automated usage
3. **Read the Guides**: Learn about advanced features and best practices

Ready to start? Try the [playground](/playground) or continue with the [installation guide](/docs/installation).