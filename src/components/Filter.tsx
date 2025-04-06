import { Category } from "../types/CategoryType";

const Filter = ({
  sort,
  searchValue,
  categories,
  onSearch,
  onSort,
  onSelectCategory,
  selectedCategory,
}: {
  sort: string;
  searchValue: string;
  categories: Category[];
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSelectCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedCategory: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          placeholder="Search by title"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400 px-3 py-1.5 w-2/5"
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-select" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          name="sort-select"
          id="sort-select"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400 px-3 py-1.5 w-2/5"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="category-select" className="text-slate-500 text-lg">
          Category
        </label>
        <select
          name="category-select"
          id="category-select"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400 px-3 py-1.5 w-2/5"
          value={selectedCategory}
          onChange={onSelectCategory}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories.map((category) => (
            <option
              className="bg-slate-500 text-slate-300"
              key={category.id}
              value={category.id}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Filter;
