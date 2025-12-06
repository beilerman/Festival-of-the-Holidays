
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
  const netCarbs = nutrition.carbohydrates_g - nutrition.fiber_g;

  // Color coding for carbs: green (low) < 20g, yellow (medium) 20-40g, red (high) > 40g
  const getCarbColor = (carbs: number) => {
    if (carbs < 20) return 'bg-green-700 border-green-500';
    if (carbs <= 40) return 'bg-yellow-700 border-yellow-500';
    return 'bg-[#B91C1C] border-[#FFD700]/50';
  };

  const getCarbLabel = (carbs: number) => {
    if (carbs < 20) return 'Low';
    if (carbs <= 40) return 'Medium';
    return 'High';
  };

  return (
    <div className="bg-[#024933]/50 rounded-lg p-4 flex flex-col h-full border border-[#B91C1C] hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h4 className="text-lg font-bold text-[#FFD700] flex-1">{item.itemName}</h4>
          <div className="flex items-center">
            <span className="text-lg font-semibold text-[#F3E5AB] whitespace-nowrap">{item.price !== "N/A" ? item.price : ""}</span>
            <button 
              onClick={() => onToggleFavorite(item.itemName)} 
              className={`ml-3 p-1 rounded-full transition-colors ${isFavorite ? 'text-yellow-400 hover:text-yellow-300' : 'text-[#A89C8C] hover:text-[#FFD700]'}`} 
              aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </div>
        </div>
        {item.description && <p className="text-sm text-[#D1C4A8] italic mb-3">{item.description}</p>}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.plantBased && (
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#B91C1C] text-[#F3E5AB]">
              {LEAF_ICON} Plant-Based
            </span>
          )}
          {item.cookieStroll && (
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#B91C1C] text-[#F3E5AB]">
              {COOKIE_ICON} Cookie Stroll
            </span>
          )}
          {item.glutenFree && (
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#B91C1C] text-[#F3E5AB]">
              {GLUTEN_FREE_ICON} Gluten-Free
            </span>
          )}
          {item.dairyFree && (
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#B91C1C] text-[#F3E5AB]">
              {DAIRY_FREE_ICON} Dairy-Free
            </span>
          )}
        </div>
      </div>
      
      <div>
        <h5 className="text-sm font-semibold text-[#D1C4A8] mb-2">Nutritional Estimates</h5>
        <div className="bg-[#013220]/70 rounded-md p-3">
          <div className={`text-center mb-3 rounded-md p-2 shadow-lg border-2 ${getCarbColor(netCarbs)}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">Total Carbs</span>
                <span className="text-xs font-bold text-white px-2 py-0.5 rounded bg-black/20">{getCarbLabel(netCarbs)}</span>
              </div>
              <div className="text-2xl font-extrabold text-white">{nutrition.carbohydrates_g}g</div>
              <div className="text-sm text-white/90 mt-1 border-t border-white/20 pt-1">
                <span className="font-semibold">Net Carbs:</span> {netCarbs}g
              </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#F3E5AB]">
            <div className="flex justify-between"><span>Calories:</span> <span className="font-medium">{nutrition.calories}</span></div>
            <div className="flex justify-between"><span>Protein:</span> <span className="font-medium">{nutrition.protein_g}g</span></div>
            <div className="flex justify-between"><span>Fat:</span> <span className="font-medium">{nutrition.fat_g}g</span></div>
            <div className="flex justify-between"><span>Fiber:</span> <span className="font-medium">{nutrition.fiber_g}g</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;