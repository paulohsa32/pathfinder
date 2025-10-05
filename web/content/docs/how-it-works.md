---
title: How It Works
description: Understanding the Pathfinder algorithm
---

# How Pathfinder Works

Pathfinder uses a sophisticated algorithm to analyze JSON structures and generate precise JSONPath expressions. Understanding how it works can help you use it more effectively and troubleshoot any issues.

## Algorithm Overview

The core algorithm follows these steps:

1. **Structure Analysis**: Recursively traverse the JSON structure
2. **Path Reference Creation**: Create path references for each node
3. **Primitive Value Filtering**: Identify and filter for primitive values
4. **Expression Generation**: Build the final JSONPath filter expression

## Detailed Process

### 1. Structure Traversal

Pathfinder starts by recursively traversing your JSON sample:

```javascript
// Example JSON
{
  "user": {
    "name": "John",
    "details": {
      "age": 30,
      "active": true
    }
  }
}
```

The algorithm visits each node and creates a hierarchical representation of the structure.

### 2. Path Reference Generation

For each node in the JSON structure, Pathfinder creates a `PathRef` object containing:

- **id**: Unique identifier for the node
- **key**: The property name or array index
- **value**: The actual value at this node
- **type**: Data type (object, array, string, number, boolean)
- **layer**: Nesting depth (0 for root, 1 for direct children, etc.)
- **parentId**: Reference to the parent node
- **fullPath**: The complete JSONPath to this node

### 3. Primitive Value Identification

Pathfinder focuses on **primitive values** (strings, numbers, booleans) because these are the most reliable identifiers for data matching:

```javascript
// Primitive values that will be used in the filter
{
  "user": {
    "name": "John",        // ← String: used in filter
    "details": {
      "age": 30,           // ← Number: used in filter
      "active": true       // ← Boolean: used in filter
    }
  }
}
```

Objects and arrays themselves are not directly used in the filter expression, but their contents are analyzed.

### 4. JSONPath Expression Building

The final JSONPath expression is built by combining all primitive value conditions with logical AND operators:

```jsonpath
$[?($.user.name=='John' && $.user.details.age==30 && $.user.details.active==true)]
```

## Path Generation Logic

### Object Properties

For object properties, Pathfinder generates dot notation:

```javascript
// Input
{
  "user": {
    "name": "John"
  }
}

// Generated paths
$.user
$.user.name
```

### Array Elements

For array elements, Pathfinder uses bracket notation with indices:

```javascript
// Input
{
  "items": ["apple", "banana", "cherry"]
}

// Generated paths
$.items[0]    // "apple"
$.items[1]    // "banana"
$.items[2]    // "cherry"
```

### Mixed Structures

For complex nested structures, Pathfinder combines both notations:

```javascript
// Input
{
  "data": {
    "users": [
      {
        "id": 1,
        "profile": {
          "name": "Alice"
        }
      }
    ]
  }
}

// Generated paths
$.data.users[0].id
$.data.users[0].profile.name
```

## Value Formatting

### String Values

String values are wrapped in single quotes and properly escaped:

```javascript
// Input: { "message": "Hello, world!" }
// Output: $.message=='Hello, world!'
```

### Number Values

Numbers are used as-is:

```javascript
// Input: { "count": 42 }
// Output: $.count==42
```

### Boolean Values

Booleans are used as-is:

```javascript
// Input: { "active": true }
// Output: $.active==true
```

### Special Values

- **null values**: Currently ignored in filter generation
- **undefined values**: Not included in the filter
- **Empty strings**: Treated as regular string values

## Edge Cases

### Empty Objects

```javascript
// Input: {}
// Output: $[?()]
```

### Empty Arrays

```javascript
// Input: []
// Output: $[?()]
```

### Objects with No Primitive Values

```javascript
// Input: { "nested": { "deep": {} } }
// Output: $[?()]
```

### Arrays of Objects

```javascript
// Input
{
  "users": [
    { "name": "Alice", "age": 30 },
    { "name": "Bob", "age": 25 }
  ]
}

// Output
$[?($.users[0].name=='Alice' && $.users[0].age==30 && $.users[1].name=='Bob' && $.users[1].age==25)]
```

## Performance Considerations

### Time Complexity
- **O(n)** where n is the number of nodes in the JSON structure
- Linear time complexity makes it efficient for most use cases

### Space Complexity
- **O(n)** for storing path references
- Additional memory for the hierarchical representation

### Optimization Features
- **Single-pass traversal**: Processes the JSON structure in one pass
- **Efficient path generation**: Builds paths incrementally
- **Minimal memory overhead**: Cleans up intermediate data structures

## Limitations

### Current Limitations

1. **No Wildcard Support**: Doesn't generate wildcard expressions
2. **No Recursive Descent**: Doesn't use `..` recursive descent operators
3. **No Conditional Logic**: Doesn't support OR conditions or complex logic
4. **No Function Calls**: Doesn't use JSONPath functions like `length()` or `contains()`

### Design Decisions

These limitations are intentional design choices:

- **Precision over Flexibility**: Focuses on exact matching rather than pattern matching
- **Simplicity over Complexity**: Generates readable, maintainable expressions
- **Reliability over Features**: Prioritizes correctness and predictable behavior

## Future Enhancements

Potential future features could include:

- **Wildcard generation** for flexible matching
- **Partial matching** for subset identification
- **Custom filters** for user-defined conditions
- **Optimization hints** for better performance

## Understanding the Output

When you use Pathfinder, the generated JSONPath expression will:

1. **Match the exact structure** of your input JSON
2. **Include all primitive values** as equality conditions
3. **Use logical AND** to combine all conditions
4. **Generate a single expression** that matches your sample precisely

This approach ensures that the generated JSONPath will only match JSON structures that are identical to your sample in all the important ways.

## Next Steps

- [See practical examples of generated JSONPath expressions](/docs/examples)
- [Learn about best practices](/docs/best-practices)
- [Try the algorithm in the playground](/playground)