import { IoIosSearch } from "react-icons/io";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-gray-900 text-gray-300"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-500 hover:bg-gray-900 text-white"
      >
        <IoIosSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
