import { BiSearchAlt2 } from "react-icons/bi";

const SearchForm = () => {
  return (
    <form className="flex items-center">
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 border border-gray-300 text-dark focus:outline-none focus:border-blue-500 w-[500px] rounded-l-2xl"
        />
        <button
          type="submit"
          className="px-4 py-1 border border-gray-300 bg-gray-200 text-dark rounded-r-2xl"
        >
          <div className="text-yellow-900">
            <BiSearchAlt2 />
          </div>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
