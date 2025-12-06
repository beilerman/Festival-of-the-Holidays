import React from 'react';
import { LEAF_ICON, COOKIE_ICON, GLUTEN_FREE_ICON, DAIRY_FREE_ICON, FAVORITE_ICON } from '../constants';

interface FilterControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filters: {
    plantBased: boolean;
    cookieStroll: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    showFavorites: boolean;
  };
  setFilters: (filters: {
    plantBased: boolean;
    cookieStroll: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    showFavorites: boolean;
  }) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  itemCount: number;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  setSearchTerm,
  filters,
  setFilters,
  sortBy,
  setSortBy,
  itemCount,
}) => {
  const handleFilterChange = (filterName: 'plantBased' | 'cookieStroll' | 'glutenFree' | 'dairyFree' | 'showFavorites') => {
    setFilters({ ...filters, [filterName]: !filters[filterName] });
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilters({
      plantBased: false,
      cookieStroll: false,
      glutenFree: false,
      dairyFree: false,
      showFavorites: false,
    });
    setSortBy('name');
  };

  const hasActiveFilters = searchTerm !== '' ||
    filters.plantBased || filters.cookieStroll || filters.glutenFree ||
    filters.dairyFree || filters.showFavorites || sortBy !== 'name';

  const activeBtnClasses = 'bg-[#B91C1C] text-white font-bold';
  const inactiveBtnClasses = 'bg-[#024933] text-[#F3E5AB] hover:bg-[#035F43]';

  return (
    <div className="sticky top-0 z-10 bg-[#013220]/80 backdrop-blur-md p-4 mb-8 rounded-lg border border-[#B91C1C] shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Search Input */}
        <div className="md:col-span-1">
          <input
            type="text"
            placeholder="Search by item, kitchen, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#024933] border border-[#B91C1C] rounded-md px-4 py-2 text-white placeholder-[#D1C4A8] focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition"
          />
        </div>

        {/* Filters and Sort */}
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange('showFavorites')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                filters.showFavorites ? activeBtnClasses : inactiveBtnClasses
              }`}
            >
              {FAVORITE_ICON}
              <span>Favorites</span>
            </button>
            <button
              onClick={() => handleFilterChange('plantBased')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                filters.plantBased ? activeBtnClasses : inactiveBtnClasses
              }`}
            >
              {LEAF_ICON}
              <span>Plant-Based</span>
            </button>
            <button
              onClick={() => handleFilterChange('cookieStroll')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                filters.cookieStroll ? activeBtnClasses : inactiveBtnClasses
              }`}
            >
              {COOKIE_ICON}
              <span>Cookie Stroll</span>
            </button>
            <button
              onClick={() => handleFilterChange('glutenFree')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                filters.glutenFree ? activeBtnClasses : inactiveBtnClasses
              }`}
            >
              {GLUTEN_FREE_ICON}
              <span>Gluten-Free</span>
            </button>
            <button
              onClick={() => handleFilterChange('dairyFree')}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                filters.dairyFree ? activeBtnClasses : inactiveBtnClasses
              }`}
            >
              {DAIRY_FREE_ICON}
              <span>Dairy-Free</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="sort-by" className="text-sm text-[#D1C4A8]">Sort By:</label>
            <select
              id="sort-by"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#024933] border border-[#B91C1C] rounded-md px-3 py-2 text-sm text-white focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition"
            >
              <option value="name">Name</option>
              <option value="location">Location</option>
              <option value="carbs_low_high">Carbs (Low-High)</option>
              <option value="carbs_high_low">Carbs (High-Low)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-3">
        <p className="text-sm text-[#A89C8C]">Showing {itemCount} matching items.</p>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-[#FFD700] hover:text-[#FBBF24] underline underline-offset-2 transition-colors"
            aria-label="Clear all filters and reset search"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterControls;