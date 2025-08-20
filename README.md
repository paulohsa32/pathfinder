# ✈️ Pathfinder

Pathfinder is a utility to generate a [JSONPath](https://goessner.net/articles/JsonPath/) query string from a sample JSON object. Given a small piece of JSON, Pathfinder creates a JSONPath expression that can be used to find that specific object within a larger JSON structure.

This is useful when you need to programmatically locate a specific JSON object based on its structure and values, without having to manually craft a complex JSONPath query.

The project includes both a command-line interface (CLI) for quick conversions and a web interface for a more interactive experience.

## How it Works

Pathfinder works by recursively traversing a given JSON sample. It identifies all primitive values (strings, numbers, booleans) and constructs a JSONPath filter expression that matches an object containing all of those exact key-value pairs.

For example, given this JSON:
```json
{
  "user": {
    "name": "Jane Doe",
    "age": 25
  }
}
```

Pathfinder will generate the following JSONPath query:
```
$[?($.user.name=='Jane Doe' && $.user.age==25)]
```

This query can then be used to find this specific user object in a larger document.

## Installation

To install the necessary dependencies, clone the repository and run:
```bash
npm install
```

## Usage

### Command-Line Interface (CLI)

The primary way to use Pathfinder is through its CLI.

**Syntax:**
```bash
node src/cli.ts <path-to-json-file> [options]
```

**Arguments:**
*   `<path-to-json-file>`: (Required) The path to the input JSON file.
*   `-o, --output`: (Optional) The path to the output file where the JSONPath query will be saved.

**Examples:**

1.  **Generate a query and print it to the console:**
    Create a file named `sample.json`:
    ```json
    {
      "id": 123,
      "status": "active"
    }
    ```
    Run the CLI:
    ```bash
    node src/cli.ts sample.json
    ```
    **Output:**
    ```
    $[?($.id==123 && $.status=='active')]
    ```

2.  **Generate a query and save it to a file:**
    ```bash
    node src/cli.ts sample.json --output my-query.txt
    ```
    This will create a file named `my-query.txt` with the generated JSONPath.

### Web Interface

Pathfinder also includes a web interface built with Nuxt for a more user-friendly experience.

To run the web interface locally:
```bash
npm run dev
```
This will start a development server, and you can access the interface in your web browser.

## Development

### Running Tests

The project includes a test suite to verify the correctness of the JSONPath generation logic. To run the tests:

```bash
npm test
```

This will execute the tests using `vitest` and report the results.
