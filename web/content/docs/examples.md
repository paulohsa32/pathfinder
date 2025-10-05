---
title: Examples
description: Practical examples of JSONPath generation
---

# Examples

This page provides practical examples of JSONPath generation for various JSON structures and use cases.

## Basic Examples

### Simple Object

**Input:**
```json
{
  "name": "John Doe",
  "age": 30,
  "active": true
}
```

**Generated JSONPath:**
```jsonpath
$[?($.name=='John Doe' && $.age==30 && $.active==true)]
```

### Nested Object

**Input:**
```json
{
  "user": {
    "profile": {
      "name": "Jane Smith",
      "email": "jane@example.com"
    },
    "settings": {
      "theme": "dark",
      "notifications": true
    }
  }
}
```

**Generated JSONPath:**
```jsonpath
$[?($.user.profile.name=='Jane Smith' && $.user.profile.email=='jane@example.com' && $.user.settings.theme=='dark' && $.user.settings.notifications==true)]
```

## Array Examples

### Array of Primitives

**Input:**
```json
{
  "tags": ["javascript", "typescript", "json"]
}
```

**Generated JSONPath:**
```jsonpath
$[?($.tags[0]=='javascript' && $.tags[1]=='typescript' && $.tags[2]=='json')]
```

### Array of Objects

**Input:**
```json
{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 29.99
    }
  ]
}
```

**Generated JSONPath:**
```jsonpath
$[?($.products[0].id==1 && $.products[0].name=='Laptop' && $.products[0].price==999.99 && $.products[1].id==2 && $.products[1].name=='Mouse' && $.products[1].price==29.99)]
```

### Mixed Structure

**Input:**
```json
{
  "order": {
    "id": "ORD-123",
    "items": [
      {
        "product": "Book",
        "quantity": 2,
        "price": 19.99
      },
      {
        "product": "Pen",
        "quantity": 5,
        "price": 1.99
      }
    ],
    "status": "shipped"
  }
}
```

**Generated JSONPath:**
```jsonpath
$[?($.order.id=='ORD-123' && $.order.items[0].product=='Book' && $.order.items[0].quantity==2 && $.order.items[0].price==19.99 && $.order.items[1].product=='Pen' && $.order.items[1].quantity==5 && $.order.items[1].price==1.99 && $.order.status=='shipped')]
```

## Real-World Examples

### API Response

**Input:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_12345",
      "username": "johndoe",
      "profile": {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "verified": true
      },
      "permissions": ["read", "write"],
      "lastLogin": "2024-01-15T10:30:00Z"
    }
  },
  "timestamp": "2024-01-15T10:35:00Z"
}
```

**Generated JSONPath:**
```jsonpath
$[?($.success==true && $.data.user.id=='user_12345' && $.data.user.username=='johndoe' && $.data.user.profile.firstName=='John' && $.data.user.profile.lastName=='Doe' && $.data.user.profile.email=='john@example.com' && $.data.user.profile.verified==true && $.data.user.permissions[0]=='read' && $.data.user.permissions[1]=='write' && $.data.user.lastLogin=='2024-01-15T10:30:00Z' && $.timestamp=='2024-01-15T10:35:00Z')]
```

### Configuration File

**Input:**
```json
{
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "myapp",
    "ssl": false,
    "pool": {
      "min": 2,
      "max": 10
    }
  },
  "server": {
    "port": 3000,
    "host": "0.0.0.0",
    "cors": true
  },
  "features": {
    "analytics": true,
    "debug": false,
    "logging": "info"
  }
}
```

**Generated JSONPath:**
```jsonpath
$[?($.database.host=='localhost' && $.database.port==5432 && $.database.name=='myapp' && $.database.ssl==false && $.database.pool.min==2 && $.database.pool.max==10 && $.server.port==3000 && $.server.host=='0.0.0.0' && $.server.cors==true && $.features.analytics==true && $.features.debug==false && $.features.logging=='info')]
```

### E-commerce Cart

**Input:**
```json
{
  "cartId": "cart_abc123",
  "customerId": "cust_xyz789",
  "items": [
    {
      "productId": "prod_001",
      "name": "Wireless Headphones",
      "price": 199.99,
      "quantity": 1,
      "category": "Electronics"
    },
    {
      "productId": "prod_002",
      "name": "USB Cable",
      "price": 12.99,
      "quantity": 2,
      "category": "Accessories"
    }
  ],
  "subtotal": 225.97,
  "tax": 18.08,
  "total": 244.05,
  "currency": "USD",
  "status": "pending"
}
```

**Generated JSONPath:**
```jsonpath
$[?($.cartId=='cart_abc123' && $.customerId=='cust_xyz789' && $.items[0].productId=='prod_001' && $.items[0].name=='Wireless Headphones' && $.items[0].price==199.99 && $.items[0].quantity==1 && $.items[0].category=='Electronics' && $.items[1].productId=='prod_002' && $.items[1].name=='USB Cable' && $.items[1].price==12.99 && $.items[1].quantity==2 && $.items[1].category=='Accessories' && $.subtotal==225.97 && $.tax==18.08 && $.total==244.05 && $.currency=='USD' && $.status=='pending')]
```

## Special Cases

### Empty Object

**Input:**
```json
{}
```

**Generated JSONPath:**
```jsonpath
$[?()]
```

### Object with Null Values

**Input:**
```json
{
  "name": "Test",
  "value": null,
  "active": true
}
```

**Generated JSONPath:**
```jsonpath
$[?($.name=='Test' && $.active==true)]
```

Note: `null` values are ignored in the filter generation.

### Top-Level Array

**Input:**
```json
[
  {
    "type": "book",
    "title": "JavaScript Guide"
  },
  {
    "type": "video",
    "title": "Learn TypeScript"
  }
]
```

**Generated JSONPath:**
```jsonpath
$[?($[0].type=='book' && $[0].title=='JavaScript Guide' && $[1].type=='video' && $[1].title=='Learn TypeScript')]
```

## Usage Scenarios

### 1. API Testing

Use the generated JSONPath to validate API responses:

```bash
# Generate the query
pathfinder expected-response.json --output validation-query.jsonpath

# Use it in tests
curl https://api.example.com/data | jq -f validation-query.jsonpath
```

### 2. Data Extraction

Extract specific data from large JSON documents:

```javascript
// Generated query: $[?($.user.id=='123' && $.user.active==true)]
const query = '$[?($.user.id==\'123\' && $.user.active==true)]'
const results = jsonpath.query(largeDataset, query)
```

### 3. Configuration Validation

Validate configuration files against expected structure:

```bash
# Generate expected structure query
pathfinder config-template.json --output config-validation.jsonpath

# Validate actual config
jq -f config-validation.jsonpath production-config.json
```

## Tips for Working with Generated JSONPath

1. **Test Against Real Data**: Always test generated paths against actual data
2. **Handle Edge Cases**: Consider how variations in data might affect matching
3. **Performance**: Be aware that complex filters can be slow on large datasets
4. **Validation**: Use multiple test cases to ensure reliability
5. **Documentation**: Document the purpose and expected behavior of each query

## Common Patterns

### User Identification
```jsonpath
$[?($.user.id=='user123' && $.user.email=='user@example.com')]
```

### Product Filtering
```jsonpath
$[?($.products[0].category=='Electronics' && $.products[0].price>100)]
```

### Status Checking
```jsonpath
$[?($.status=='active' && $.verified==true)]
```

### Time-based Queries
```jsonpath
$[?($.timestamp>='2024-01-01' && $.timestamp<'2024-02-01')]
```

## Next Steps

- [Try these examples in the playground](/playground)
- [Learn about best practices](/docs/best-practices)
- [Understand the algorithm](/docs/how-it-works)