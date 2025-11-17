
import React from 'react';
import { Kitchen } from '../types';
import MenuItemCard from './MenuItemCard';

interface KitchenCardProps {
  kitchen: Kitchen;
  favorites: string[];
  onToggleFavorite: (itemName: string) => void;
}

const HollyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 opacity-80 -rotate-12">
        <path d="M12.91 10.2A5.05 5.05 0 0 0 12 5a5.05 5.05 0 0 0-.91 5.2 5.1 5.1 0 0 0 5.21 4.75c1.8.09 3.26-1.22 3.51-2.95a5.1 5.1 0 0 0-4.81-5.2z"/>
        <path d="M12 12a5.05 5.05 0 0 1 5.2-4.91A5.1 5.1 0 0 1 22 12a5.1 5.1 0 0 1-5.05 5.2c-1.8-.09-3.26-1.22-3.51-2.95A5.05 5.05 0 0 1 12 12z"/>
        <path d="M11.09 13.8A5.05 5.05 0 0 0 12 19a5.05 5.05 0 0 0 .91-5.2A5.1 5.1 0 0 0 7.7 9.05c-1.8-.09-3.26 1.22-3.51 2.95A5.1 5.1 0 0 0 9.24 17a5.05 5.05 0 0 0 1.85-3.2z"/>
        <circle cx="6" cy="7" r="1.5" fill="#B91C1C" stroke="#B91C1C"/>
        <circle cx="17" cy="18" r="1.5" fill="#B91C1C" stroke="#B91C1C"/>
        <circle cx="18" cy="5" r="1.5" fill="#B91C1C" stroke="#B91C1C"/>
    </svg>
);

const KitchenCard: React.FC<KitchenCardProps> = ({ kitchen, favorites, onToggleFavorite }) => {
  return (
    <div className="bg-[#024933] rounded-xl shadow-lg overflow-hidden border border-[#B91C1C] mb-8">
      <div className="p-6 bg-[#024933]/50 flex justify-between items-center">
        <div>
          <h3 className="text-3xl font-bold text-[#FFD700] font-['Playfair_Display']">{kitchen.kitchenName}</h3>
          <p className="text-sm text-[#D1C4A8] mt-1">{kitchen.location}</p>
        </div>
        <HollyIcon />
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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