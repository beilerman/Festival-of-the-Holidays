
import React from 'react';
import { MenuItem } from '../types';
import { LEAF_ICON, COOKIE_ICON, GLUTEN_FREE_ICON, DAIRY_FREE_ICON } from '../constants';

interface MenuItemCardProps {
  item: MenuItem;
  isFavorite: boolean;
  onToggleFavorite: (itemName: string) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, isFavorite, onToggleFavorite }) => {
  const { nutritionalEstimates: nutrition } = item;

  return (
    <div className="bg-[#0D2A20] rounded-xl p-3 flex flex-col h-full border border-[#1F4E38] shadow-md">
      <div className="flex-grow space-y-2">
        <div className="flex justify-between items-start gap-3">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-white leading-tight">{item.itemName}</h4>
            {item.description && <p className="text-xs text-[#9CBBA7] leading-snug">{item.description}</p>}
          </div>
          <div className="flex items-center gap-2">
            {item.price !== "N/A" && <span className="text-sm font-semibold text-[#FBBF24] whitespace-nowrap">{item.price}</span>}
    <div className="bg-[#0D2A20] rounded-xl p-4 flex flex-col h-full border border-[#1F4E38] shadow-md">
      <div className="flex-grow space-y-3">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <h4 className="text-lg font-semibold text-white leading-tight">{item.itemName}</h4>
            {item.description && <p className="text-sm text-[#9CBBA7]">{item.description}</p>}
          </div>
          <div className="flex items-center gap-2">
            {item.price !== "N/A" && <span className="text-base font-semibold text-[#FBBF24] whitespace-nowrap">{item.price}</span>}
            <button
              onClick={() => onToggleFavorite(item.itemName)}
              className={`p-2 rounded-full border ${
                isFavorite
                  ? 'border-[#FBBF24] text-[#FBBF24] bg-[#123427]'
                  : 'border-transparent text-[#9CBBA7] hover:text-white hover:border-[#1F4E38]'
              } transition-colors`}
              aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {item.plantBased && (
            <span className="text-[11px] font-semibold inline-flex items-center px-2 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
        <div className="flex flex-wrap gap-2">
          {item.plantBased && (
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
              {LEAF_ICON} Plant-Based
            </span>
          )}
          {item.cookieStroll && (
            <span className="text-[11px] font-semibold inline-flex items-center px-2 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
              {COOKIE_ICON} Cookie Stroll
            </span>
          )}
          {item.glutenFree && (
            <span className="text-[11px] font-semibold inline-flex items-center px-2 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
              {GLUTEN_FREE_ICON} Gluten-Free
            </span>
          )}
          {item.dairyFree && (
            <span className="text-[11px] font-semibold inline-flex items-center px-2 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-1 rounded-full bg-[#123427] text-[#D1E7D4] border border-[#1F4E38]">
              {DAIRY_FREE_ICON} Dairy-Free
            </span>
          )}
        </div>
      </div>

      <div className="pt-2 border-t border-[#1F4E38] space-y-1.5 text-xs text-[#D1E7D4]">
        <div className="flex items-center justify-between">
          <span className="text-[#9CBBA7]">Carbohydrates</span>
          <span className="font-semibold text-white">{nutrition.carbohydrates_g}g</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
      <div className="pt-3 border-t border-[#1F4E38] space-y-2">
        <div className="flex items-center justify-between text-sm text-[#D1E7D4]">
          <span className="text-[#9CBBA7]">Carbohydrates</span>
          <span className="font-semibold text-white">{nutrition.carbohydrates_g}g</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#D1E7D4]">
          <div className="flex justify-between"><span className="text-[#9CBBA7]">Calories</span> <span className="font-medium">{nutrition.calories}</span></div>
          <div className="flex justify-between"><span className="text-[#9CBBA7]">Protein</span> <span className="font-medium">{nutrition.protein_g}g</span></div>
          <div className="flex justify-between"><span className="text-[#9CBBA7]">Fat</span> <span className="font-medium">{nutrition.fat_g}g</span></div>
          <div className="flex justify-between"><span className="text-[#9CBBA7]">Fiber</span> <span className="font-medium">{nutrition.fiber_g}g</span></div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
