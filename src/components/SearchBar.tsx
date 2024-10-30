import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-bar z-20 relative">
      <form>
        <div className="flex">
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari negara, kota atau guide"
                className="w-full px-4 py-2 rounded-l-full border-0 focus:ring-2 focus:ring-red-600"
              />
            </div>
          </div>
          <button type="submit" className="px-6 bg-black text-white rounded-r-full hover:bg-gray-800">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;