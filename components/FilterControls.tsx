import React from 'react';
import { LEAF_ICON, COOKIE_ICON, GLUTEN_FREE_ICON, DAIRY_FREE_ICON, FAVORITE_ICON } from '../constants';
import { SortOption } from '../types';

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
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
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

  const baseChip =
    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-colors';
  const activeBtnClasses = `${baseChip} border-[#FBBF24] bg-[#1B3A2D] text-white shadow-[0_0_0_1px_#FBBF24]`;
  const inactiveBtnClasses = `${baseChip} border-[#1F4E38] bg-[#0F2D22] text-[#D1E7D4] hover:border-[#2F7F5D]`;

  return (
    <section className="sticky top-4 z-10 bg-[#0D2A20]/90 backdrop-blur-md p-6 rounded-2xl border border-[#1F4E38] shadow-lg space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8BB89F]">Find dishes quickly</p>
          <p className="text-sm text-[#D1E7D4]">Showing {itemCount} matching items</p>
        </div>
        <div className="w-full sm:w-80">
          <label className="sr-only" htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search by item, kitchen, or location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0F2D22] border border-[#1F4E38] rounded-lg px-4 py-2.5 text-white placeholder-[#9CBBA7] focus:ring-2 focus:ring-[#FBBF24] focus:border-[#FBBF24] transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={() => handleFilterChange('showFavorites')}
            className={filters.showFavorites ? activeBtnClasses : inactiveBtnClasses}
          >
            {FAVORITE_ICON}
            <span>Favorites</span>
          </button>
          <button
            onClick={() => handleFilterChange('plantBased')}
            className={filters.plantBased ? activeBtnClasses : inactiveBtnClasses}
          >
            {LEAF_ICON}
            <span>Plant-Based</span>
          </button>
          <button
            onClick={() => handleFilterChange('cookieStroll')}
            className={filters.cookieStroll ? activeBtnClasses : inactiveBtnClasses}
          >
            {COOKIE_ICON}
            <span>Cookie Stroll</span>
          </button>
          <button
            onClick={() => handleFilterChange('glutenFree')}
            className={filters.glutenFree ? activeBtnClasses : inactiveBtnClasses}
          >
            {GLUTEN_FREE_ICON}
            <span>Gluten-Free</span>
          </button>
          <button
            onClick={() => handleFilterChange('dairyFree')}
            className={filters.dairyFree ? activeBtnClasses : inactiveBtnClasses}
          >
            {DAIRY_FREE_ICON}
            <span>Dairy-Free</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort-by" className="text-sm text-[#D1E7D4]">Sort by</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#0F2D22] border border-[#1F4E38] rounded-lg px-3 py-2 text-sm text-white focus:ring-2 focus:ring-[#FBBF24] focus:border-[#FBBF24] transition"
          >
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="carbs_low_high">Carbs (Low-High)</option>
            <option value="carbs_high_low">Carbs (High-Low)</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterControls;