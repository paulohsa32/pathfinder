---
title: CLI Usage
description: Using Pathfinder from the command line
---

# CLI Usage

Pathfinder provides a powerful command-line interface for generating JSONPath expressions from JSON files. This is ideal for automation, scripting, and integration into development workflows.

## Basic Syntax

```bash
pathfinder <path-to-json-file> [options]
```

## Arguments

### Required

- **`<path-to-json-file>`**: Path to the input JSON file you want to analyze

### Optional

- **`-o, --output <path>`**: Path to the output file where the JSONPath query will be saved
- **`-h, --help`**: Display help information
- **`-v, --version`**: Display version information

## Examples

### Basic Usage

Generate a JSONPath query and print it to the console:

```bash
pathfinder sample.json
```

Output:
```
$[?($.name=='John Doe' && $.age==30)]
```

### Save to File

Generate a query and save it to a file:

```bash
pathfinder sample.json --output query.jsonpath
```

Output:
```
JsonPath written on file query.jsonpath successfully!
```

### Using with Different File Extensions

Pathfinder works with any file containing valid JSON, regardless of extension:

```bash
# Standard .json files
pathfinder data.json

# Configuration files
pathfinder config.jsonc

# API response samples
pathfinder response-sample.json

# Test data files
pathfinder test-data.json
```

## Integration Examples

### CI/CD Pipeline

Integrate Pathfinder into your CI/CD pipeline to validate API responses:

```bash
# GitHub Actions example
- name: Generate JSONPath for API validation
  run: |
    pathfinder ./test-data/api-response.json --output ./queries/validation.jsonpath

- name: Validate API response
  run: |
    # Use the generated JSONPath to validate actual API responses
    curl https://api.example.com/data | jq -f ./queries/validation.jsonpath
```

### Testing Automation

Use Pathfinder in your test scripts to generate validation queries:

```bash
#!/bin/bash
# generate-test-queries.sh

# Generate queries for different test scenarios
pathfinder ./fixtures/user-profile.json --output ./queries/user.jsonpath
pathfinder ./fixtures/product-list.json --output ./queries/products.jsonpath
pathfinder ./fixtures/error-response.json --output ./queries/error.jsonpath

echo "Test queries generated successfully!"
```

### Batch Processing

Process multiple JSON files in a directory:

```bash
#!/bin/bash
# batch-process.sh

for file in ./samples/*.json; do
  filename=$(basename "$file" .json)
  pathfinder "$file" --output "./queries/$filename.jsonpath"
  echo "Generated query for $filename"
done
```

## Advanced Usage

### Combining with Other Tools

Pathfinder works great with other command-line tools:

```bash
# Generate JSONPath and use it with jq
pathfinder sample.json --output query.jsonpath
jq '$[?($.status=="active")]' large-dataset.json

# Use in shell scripts
QUERY=$(pathfinder sample.json)
echo "Generated query: $QUERY"

# Pipe JSON content
cat sample.json | pathfinder -
```

### Error Handling

The CLI provides clear error messages for common issues:

```bash
# File not found
pathfinder nonexistent.json
# Error: ENOENT: no such file or directory, open 'nonexistent.json'

# Invalid JSON
pathfinder invalid.json
# Error: Unexpected token } in JSON at position 123

# Permission denied
pathfinder /root/sample.json
# Error: EACCES: permission denied, open '/root/sample.json'
```

## Performance Considerations

- **Large Files**: Pathfinder handles JSON files of various sizes, but extremely large files (>100MB) may take longer to process
- **Complex Structures**: Deeply nested structures with many levels may generate longer JSONPath expressions
- **Memory Usage**: The tool processes the entire JSON structure in memory to generate accurate paths

## Exit Codes

- **0**: Success - JSONPath generated successfully
- **1**: Error - File not found, invalid JSON, or other processing error

## Tips and Best Practices

1. **File Organization**: Keep your sample JSON files organized in a dedicated directory
2. **Query Naming**: Use descriptive names for your output query files
3. **Version Control**: Include your JSONPath queries in version control for reproducible tests
4. **Automation**: Create shell scripts for repetitive tasks
5. **Validation**: Always test generated queries against expected data

## Troubleshooting

### Common Issues

**"Unexpected token" error:**
- Check that your JSON file is valid
- Use a JSON validator to verify syntax
- Ensure proper escaping of special characters

**"File not found" error:**
- Verify the file path is correct
- Check file permissions
- Use absolute paths if needed

**Empty output:**
- Ensure your JSON file contains primitive values (strings, numbers, booleans)
- Check that the file is not empty
- Verify the JSON structure is not just empty objects or arrays

### Getting Help

```bash
# Display help information
pathfinder --help

# Check version
pathfinder --version
```

## Next Steps

- [Learn how Pathfinder works internally](/docs/how-it-works)
- [See practical examples](/docs/examples)
- [Explore the web playground](/playground)