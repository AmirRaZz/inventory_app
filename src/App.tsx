import NavBar from "./components/NavBar";
import CategoryForm from "./components/Category";
import { useState } from "react";
import { Category } from "./types/CategoryType";
import ProductsForm from "./components/Products";
import ProductsList from "./components/ProductList";
import { Product } from "./types/ProductType";



function App() {
  const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar />
      <div className="container max-w-xl mx-auto p-4">
        <CategoryForm setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <ProductsList products={products} categories={categories} setProducts={setProducts} />
      </div>
    </div>
  );
}

export default App;
