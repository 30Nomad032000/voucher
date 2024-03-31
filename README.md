# Elysia with Bun runtime

## Development

To start the development server run:

```bash
bun run dev
```

# API Documentation

## Introduction

This document provides documentation for the API endpoints available in the Elysia application.

## Endpoints

### GET /

-   **Description:** Returns a welcome message.
-   **Path:** `/`
-   **Response:**
    ```json
    {
        "message": "Hello Elysia with drizzle"
    }
    ```

### POST /item

-   **Description:** Create a new item.
-   **Path:** `/item`
-   **Request Body:**
    ```json
    {
        "unit": "string",
        "category": "string",
        "price": "string",
        "discountPrice": "string",
        "openingStock": "string",
        "itemName": "string",
        "itemCode": "string",
        "hsnCode": "string",
        "salesPrice": "string",
        "openingStockPrice": "string",
        "taxes": "string",
        "itemType": "string"
    }
    ```

### PATCH /item/:id

-   **Description:** Update an existing item by ID.
-   **Path:** `/item/:id`

### DELETE /item/:id

-   **Description:** Delete an item by ID.
-   **Path:** `/item/:id`

### GET /item/:id

-   **Description:** Get an item by ID.
-   **Path:** `/item/:id`
-   **Response:** Returns the item

### GET /items

-   **Description:** Get all items.
-   **Path:** `/items`
-   **Response:** Returns an array of all items.

### GET /items/:name

-   **Description:** Search for items by name.
-   **Path:** `/items/:name`
-   **Response:** Returns an array of matching items.

Open http://localhost:3000/ with your browser to see the result.
