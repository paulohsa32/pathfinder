<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
        <div class="bg-slate-900 px-6 py-4 border-b border-slate-700">
          <div class="flex items-center space-x-4 lg:hidden">
            <button
              @click="$router.push('/docs')"
              class="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="uil:arrow-left" class="text-lg" />
            </button>
            <span class="text-white font-medium">Best Practices</span>
          </div>
        </div>

        <div class="p-6 lg:p-8">
          <h1 class="text-3xl font-bold text-white mb-6">Best Practices</h1>

          <p class="text-slate-300 mb-6 leading-relaxed">
            Follow these best practices to get the most out of Pathfinder and ensure your JSONPath expressions are reliable, maintainable, and efficient.
          </p>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Input Data Preparation</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Use Representative Samples</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Choose JSON samples that accurately represent the data you want to match:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// ✅ Good: Representative sample with real data
{
  "user": {
    "id": "user_12345",
    "email": "user@example.com",
    "status": "active",
    "lastLogin": "2024-01-15T10:30:00Z"
  }
}

// ❌ Bad: Sample with placeholder data
{
  "user": {
    "id": "test",
    "email": "test@example.com",
    "status": "test",
    "lastLogin": "test-date"
  }
}</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Include All Relevant Fields</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Ensure your sample contains all the fields that are important for matching:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li>Include unique identifiers (IDs, emails, usernames)</li>
            <li>Include status fields that distinguish between different record types</li>
            <li>Include timestamps if they're relevant to your matching criteria</li>
            <li>Include array elements that are important for the structure</li>
          </ul>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Use Realistic Values</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Use actual data values rather than generic placeholders:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// ✅ Good: Realistic data
{
  "user": {
    "name": "Sarah Johnson",
    "age": 28,
    "email": "sarah.johnson@company.com"
  }
}

// ❌ Bad: Generic placeholders
{
  "user": {
    "name": "name",
    "age": "age",
    "email": "email@example.com"
  }
}</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Query Management</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Version Control Your Queries</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Store generated JSONPath queries in version control alongside your code:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>queries/
├── user-profile.jsonpath
├── order-status.jsonpath
├── api-response.jsonpath
└── test-data.jsonpath</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Use Descriptive Names</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Name your query files descriptively to indicate their purpose:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li><code class="bg-slate-700 px-2 py-1 rounded text-blue-400">active-user-validation.jsonpath</code></li>
            <li><code class="bg-slate-700 px-2 py-1 rounded text-blue-400">completed-order-filter.jsonpath</code></li>
            <li><code class="bg-slate-700 px-2 py-1 rounded text-blue-400">error-response-check.jsonpath</code></li>
            <li>❌ <code class="bg-slate-700 px-2 py-1 rounded text-blue-400">query1.jsonpath</code>, <code class="bg-slate-700 px-2 py-1 rounded text-blue-400">test.jsonpath</code></li>
          </ul>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Document Query Purpose</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Add comments or documentation to explain what each query matches:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code># Matches active users with verified emails and recent activity
$[?($.status=='active' && $.emailVerified==true && $.lastLogin>='2024-01-01')]

# Identifies failed payment transactions with specific error codes
$[?($.transaction.status=='failed' && $.error.code=='PAYMENT_DECLINED')]</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Testing and Validation</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Test Against Multiple Datasets</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Validate your JSONPath expressions against various data scenarios:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li>Test with valid matching data</li>
            <li>Test with data that should not match</li>
            <li>Test with edge cases (empty arrays, null values, missing fields)</li>
            <li>Test with large datasets to check performance</li>
          </ul>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Automate Testing</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Include JSONPath validation in your automated test suites:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-yellow-400"><code>// Example test using jsonpath
const jsonpath = require('jsonpath');
const query = '$[?($.status=="active" && $.verified==true)]';

describe('User validation', () => {
  it('should match active verified users', () => {
    const testData = require('./fixtures/active-user.json');
    const results = jsonpath.query(testData, query);
    expect(results).toHaveLength(1);
  });

  it('should not match inactive users', () => {
    const testData = require('./fixtures/inactive-user.json');
    const results = jsonpath.query(testData, query);
    expect(results).toHaveLength(0);
  });
});</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Performance Testing</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Monitor performance when using JSONPath expressions on large datasets:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Measure execution time
console.time('jsonpath-query');
const results = jsonpath.query(largeDataset, complexQuery);
console.timeEnd('jsonpath-query');
console.log(`Matched ${results.length} records`);</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Integration Patterns</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">CI/CD Integration</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Integrate Pathfinder into your continuous integration pipelines:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-green-400"><code># .github/workflows/api-validation.yml
name: API Response Validation

on: [push, pull_request]

jobs:
  validate-api:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Generate validation queries
        run: |
          pathfinder ./test-data/expected-api-response.json --output ./queries/api-validation.jsonpath

      - name: Validate API responses
        run: |
          curl https://api.example.com/data | jq -f ./queries/api-validation.jsonpath > actual.json
          diff expected.json actual.json</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Script Automation</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Create reusable scripts for common tasks:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>#!/bin/bash
# scripts/validate-data.sh

set -e

# Configuration
EXPECTED_FILE=${1:-"./expected-data.json"}
QUERY_OUTPUT=${2:-"./validation-query.jsonpath"}
ACTUAL_DATA_URL=${3:-"https://api.example.com/data"}

# Generate validation query
echo "🔍 Generating validation query..."
pathfinder "$EXPECTED_FILE" --output "$QUERY_OUTPUT"

# Fetch actual data
echo "📥 Fetching actual data..."
curl -s "$ACTUAL_DATA_URL" > actual-data.json

# Apply query and validate
echo "✅ Validating data..."
MATCHES=$(jq -f "$QUERY_OUTPUT" actual-data.json)

if [ -n "$MATCHES" ]; then
    echo "✨ Validation successful! Found $(echo "$MATCHES" | jq length) matching records"
else
    echo "❌ Validation failed - no matching records found"
    exit 1
fi</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Common Pitfalls to Avoid</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Overly Specific Queries</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Avoid creating queries that are too specific and brittle:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// ❌ Too specific - matches exact timestamp
$[?($.createdAt=="2024-01-15T10:30:00.123Z")]

// ✅ Better - matches recent activity
$[?($.createdAt>="2024-01-15T00:00:00Z" && $.status=="active")]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Ignoring Array Order</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Be aware that Pathfinder generates queries that match specific array order:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// This generated query requires exact array order:
$[?($.items[0].type=="book" && $.items[1].type=="movie")]

// If order doesn't matter, consider using more flexible matching
// (Note: Pathfinder doesn't generate these automatically)</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Missing Field Validation</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Remember that generated queries only check for equality of existing fields:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// This won't validate that the "email" field exists:
$[?($.name=='John' && $.age==30)]

// You may need additional validation in your application code</code></pre>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4 mt-8">Maintenance and Updates</h2>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Regular Review</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Periodically review and update your JSONPath expressions:
          </p>
          <ul class="list-disc list-inside text-slate-300 mb-6 space-y-2">
            <li>Check if queries still match expected data after API changes</li>
            <li>Update queries when data structures evolve</li>
            <li>Remove unused queries to reduce maintenance overhead</li>
            <li>Optimize queries that are performing poorly</li>
          </ul>

          <h3 class="text-xl font-semibold text-white mb-3 mt-6">Query Evolution</h3>
          <p class="text-slate-300 mb-4 leading-relaxed">
            Track changes to your queries over time:
          </p>
          <div class="bg-slate-900 rounded-lg p-4 mb-6 overflow-x-auto">
            <pre class="text-slate-300"><code>// Version your queries
queries/
├── v1/
│   ├── user-profile.jsonpath
│   └── order-status.jsonpath
└── v2/
    ├── user-profile.jsonpath  # Updated with new fields
    └── order-status.jsonpath  # Enhanced validation</code></pre>
          </div>

          <div class="bg-slate-700 rounded-lg p-6 mt-8">
            <h3 class="text-lg font-semibold text-white mb-2">Summary</h3>
            <p class="text-slate-300 mb-4">
              By following these best practices, you can ensure that your JSONPath expressions are:
            </p>
            <ul class="list-disc list-inside text-slate-300 space-y-2">
              <li><strong>Reliable</strong>: Accurately match the data you intend to find</li>
              <li><strong>Maintainable</strong>: Easy to understand and modify as needed</li>
              <li><strong>Testable</strong>: Properly validated against real data</li>
              <li><strong>Performant</strong>: Efficient even with large datasets</li>
              <li><strong>Well-documented</strong>: Clear purpose and usage patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})

useHead({
  title: 'Best Practices - Pathfinder Documentation',
  meta: [
    { name: 'description', content: 'Best practices for using Pathfinder JSONPath generator effectively' }
  ]
})
</script>

<style scoped>
:deep(h2) {
  @apply text-2xl font-bold text-white mb-4 mt-8;
}

:deep(h3) {
  @apply text-xl font-semibold text-white mb-3 mt-6;
}

:deep(p) {
  @apply text-slate-300 mb-4 leading-relaxed;
}

:deep(ul) {
  @apply list-disc list-inside text-slate-300 mb-4 space-y-2;
}

:deep(strong) {
  @apply text-white font-semibold;
}

:deep(code) {
  @apply bg-slate-700 px-2 py-1 rounded text-sm font-mono;
}

:deep(pre) {
  @apply bg-slate-900 rounded-lg p-4 mb-4 overflow-x-auto;
}

:deep(pre code) {
  @apply bg-transparent p-0;
}

:deep(a) {
  @apply text-blue-400 hover:text-blue-300 underline transition-colors;
}
</style>