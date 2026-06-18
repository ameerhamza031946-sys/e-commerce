# E-Commerce Application

A dynamic, fully-featured Single Page Application (SPA) e-commerce platform built with HTML, CSS, and Vanilla JavaScript.

## Features

*   **Product Listings & Search:** Browse products across multiple categories. Search products in real-time.
*   **Shopping Cart:** Add, remove, and adjust product quantities.
*   **Checkout & Secure Payments:** A multi-option checkout portal supporting Credit Card, PayPal, and Apple Pay.
*   **Messaging System:** A modal-based real-time messaging interface for buyers to contact sellers.
*   **Review System:** Users can submit reviews and ratings for products.
*   **Modern UI:** Responsive, modern design with animations and glassmorphism elements.

## Setup & Running Locally

Since this is a client-side application using standard web technologies, there are no complex build steps required.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ameerhamza031946-sys/e-commerce.git
    cd e-commerce
    ```

2.  **Run the application:**
    You can use any local web server to serve the files. For example, if you have Python installed:
    ```bash
    python -m http.server 8000
    ```
    Then, open your browser and navigate to `http://localhost:8000`.
    Alternatively, you can use the Live Server extension in VS Code.

## Architecture

*   **`index.html`:** The main structure and SPA views (listing, product detail, cart, etc.).
*   **`app.js`:** The core logic, handling state management, routing, rendering, search, cart operations, messaging, and payments.
*   **`index.css`:** The styling, utilizing variables and custom properties for a cohesive look.

## State Management

The application manages state primarily in `app.js` using global variables:
*   `cart`: Array of items currently in the shopping cart.
*   `activeCategory` & `activeSearchQuery`: Used for filtering the product listings.
*   `currentCartTotal`: Tracks the final calculated price for checkout.
