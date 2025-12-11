
import React from 'react';
import { Kitchen } from '../types';
import MenuItemCard from './MenuItemCard';

interface KitchenCardProps {
  kitchen: Kitchen;
  favorites: string[];
  onToggleFavorite: (itemName: string) => void;
}

const KitchenCard: React.FC<KitchenCardProps> = ({ kitchen, favorites, onToggleFavorite }) => {
  return (
    <div className="bg-[#0F2D22] rounded-2xl shadow-lg overflow-hidden border border-[#1F4E38]">
      <div className="p-5 bg-[#0D2A20] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-[#F6F9F7] font-['Playfair_Display']">{kitchen.kitchenName}</h3>
          <p className="text-sm text-[#9CBBA7]">{kitchen.location}</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#123427] text-[#D1E7D4] text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 border border-[#1F4E38]">Seasonal Kitchen</span>
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {kitchen.menuItems.map((item) => (
          <MenuItemCard
            key={item.itemName}
            item={item}
            isFavorite={favorites.includes(item.itemName)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default KitchenCard;
