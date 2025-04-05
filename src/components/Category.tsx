import { useState } from "react";
import { Category } from "../types/CategoryType";
import { SetState } from "../types/SetState";



const CategoryForm = ({
  setCategories,
}: {
  // setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  // setCategories: (
  //   value: Category[] | ((prev: Category[]) => Category[])
  // ) => void;
  setCategories: SetState<Category[]>;
}) => {
  const [isShow, setIsShow] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCategoryFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const addNewCategoryHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCategories((prev) => [
      ...prev,
      {
        ...categoryFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCategoryFormData({
      title: "",
      description: "",
    });
  };
  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              type="text"
              name="title"
              id="category-title"
              className="form-input px-3 py-2 bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              className="form-textarea px-3 py-2 bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name="description"
              id="category-description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2 hover:bg-slate-600 focus:ring-2 focus:ring-slate-400"
              id="cancel-add-category"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 hover:bg-slate-400 focus:ring-2 focus:ring-slate-300"
              onClick={addNewCategoryHandler}
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-slate-600 text-lg mb-4 font-medium hover:text-slate-400 ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow((prev) => !prev)}
      >
        Add new Category?
      </button>
    </section>
  );
};

export default CategoryForm;
