# Inventory Management App

A React application for managing inventory items with categories.

## Custom Hooks

### useLocalStorage

This app uses a custom `useLocalStorage` hook to handle data persistence in the browser's localStorage.

#### Usage

```tsx
import useLocalStorage from "./hooks/useLocalStorage";

// Use it just like useState, but with a localStorage key as the first parameter
const [data, setData] = useLocalStorage<DataType>("storage-key", initialValue);

// Now you can use data and setData just like you would with useState,
// but the values will be automatically persisted to localStorage
```

#### Features

- Type-safe: Uses TypeScript generics to provide type safety for your stored data
- Seamless API: Works just like React's built-in useState hook
- Automatic persistence: Data is automatically saved to localStorage whenever it changes
- Error handling: Errors during localStorage operations are caught and logged
- Initial value: You can provide a default value to use when no data is found in localStorage

## Key Components

- **App.tsx**: Main application component that manages state and coordinates other components
- **CategoryForm**: Component for adding and managing product categories
- **ProductsForm**: Component for adding new products to the inventory
- **ProductsList**: Component for displaying and managing existing products
- **Filter**: Component for filtering and sorting the products list

## Data Structure

The app stores two main types of data:

- **Categories**: Product categories with title and description
- **Products**: Inventory items with title, quantity, and associated category
