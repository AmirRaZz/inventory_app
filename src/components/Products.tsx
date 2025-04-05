import { useState } from "react";
import { Category } from "../types/CategoryType";
import { Product } from "../types/ProductType";
import { SetState } from "../types/SetState";

const ProductsForm = ({
  categories,
  setProducts,
}: {
  categories: Category[];
  setProducts: SetState<Product[]>;
}) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const changeHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProductsFormData({ ...productsFormData, [target.name]: target.value });
  };

  const addNewProductHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setProducts((prev) => [
      ...prev,
      {
        ...productsFormData,
        id: new Date().getTime(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setProductsFormData({
      title: "",
      quantity: 0,
      categoryId: "",
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            className="form-input px-3 py-2 bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={productsFormData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            className="form-input px-3 py-2 bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="number"
            name="quantity"
            id="product-quantity"
            value={productsFormData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            name="categoryId"
            id="product-category"
            className="form-select px-3 py-2 bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={productsFormData.categoryId}
            onChange={changeHandler}
          >
            <option className="bg-slate-500 text-slate-300" value="">
              select category
            </option>
            {categories.map((category) => (
              <option
                className="bg-slate-500 text-slate-300"
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProductHandler}
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 hover:bg-slate-400 focus:ring-2 focus:ring-slate-300"
          >
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
