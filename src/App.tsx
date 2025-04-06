import NavBar from "./components/NavBar";
import CategoryForm from "./components/Category";
import { useEffect, useState } from "react";
import { Category } from "./types/CategoryType";
import ProductsForm from "./components/Products";
import ProductsList from "./components/ProductList";
import { Product } from "./types/ProductType";
import Filter from "./components/Filter";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [categories, setCategories] = useLocalStorage<Category[]>(
    "categories",
    []
  );
  const [products, setProducts] = useLocalStorage<Product[]>("products", []);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = filterSelectedCategory(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  const selectCategoryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const filterSearchTitle = (array: Product[]) => {
    return array.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  };

  const sortDate = (array: Product[]) => {
    const sortedProducts = [...array];
    sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
      return 0; // Default case to satisfy TypeScript
    });
    return sortedProducts;
  };

  const filterSelectedCategory = (array: Product[]) => {
    if (!selectedCategory) return array;
    return array.filter((product) => product.categoryId === selectedCategory);
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <NavBar numOfProducts={filteredProducts.length} />
      <div className="container max-w-xl mx-auto p-4">
        <CategoryForm setCategories={setCategories} />
        <ProductsForm categories={categories} setProducts={setProducts} />
        <Filter
          sort={sort}
          searchValue={searchValue}
          categories={categories}
          onSort={sortHandler}
          onSearch={searchHandler}
          onSelectCategory={selectCategoryHandler}
          selectedCategory={selectedCategory}
        />
        <ProductsList
          products={filteredProducts}
          categories={categories}
          setProducts={setProducts}
        />
      </div>
    </div>
  );
}

export default App;
