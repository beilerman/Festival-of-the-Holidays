import React, { useState, useMemo, useEffect } from 'react';
import { kitchenData } from './data/kitchenData';
import { Kitchen, MenuItem, SortOption } from './types';
import Header from './components/Header';
import KitchenCard from './components/KitchenCard';
import FilterControls from './components/FilterControls';
import GeminiPlanner from './components/GeminiPlanner';

const Snowfall: React.FC = () => {
    const snowflakes = useMemo(() => {
        const flakeCount = 50;
        return Array.from({ length: flakeCount }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationName: 'snowfall',
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 10}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            };
            return <div key={i} className="absolute top-0 bg-white rounded-full" style={style} />;
        });
    }, []);

    return <div className="fixed inset-0 pointer-events-none z-0">{snowflakes}</div>;
};


const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ 
    plantBased: false, 
    cookieStroll: false, 
    glutenFree: false, 
    dairyFree: false,
    showFavorites: false,
  });
  const [sortBy, setSortBy] = useState<SortOption>('name');

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const savedFavorites = window.localStorage.getItem('epcotFavorites');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Could not load favorites from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('epcotFavorites', JSON.stringify(favorites));
    } catch (error) {
      console.error("Could not save favorites to localStorage", error);
    }
  }, [favorites]);

  const favoritesSet = useMemo(() => new Set(favorites), [favorites]);

  const sortComparator = useMemo(() => {
    if (sortBy === 'carbs_low_high') {
      return (a: MenuItem, b: MenuItem) =>
        a.nutritionalEstimates.carbohydrates_g - b.nutritionalEstimates.carbohydrates_g;
    }

    if (sortBy === 'carbs_high_low') {
      return (a: MenuItem, b: MenuItem) =>
        b.nutritionalEstimates.carbohydrates_g - a.nutritionalEstimates.carbohydrates_g;
    }

    return (a: MenuItem, b: MenuItem) => a.itemName.localeCompare(b.itemName);
  }, [sortBy]);

  const toggleFavorite = (itemName: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(itemName)) {
        return prevFavorites.filter(name => name !== itemName);
      } else {
        return [...prevFavorites, itemName];
      }
    });
  };

  const { filteredKitchens, totalItemCount } = useMemo(() => {
    let itemCount = 0;
    const lowerCaseSearchTerm = searchTerm.trim().toLowerCase();

    const processedKitchens = kitchenData.reduce<Kitchen[]>((result, kitchen) => {
      const kitchenMatchesSearch =
        kitchen.kitchenName.toLowerCase().includes(lowerCaseSearchTerm) ||
        kitchen.location.toLowerCase().includes(lowerCaseSearchTerm);

      const filteredItems = kitchen.menuItems.filter((item) => {
        const itemMatchesSearch =
          item.itemName.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.description?.toLowerCase().includes(lowerCaseSearchTerm);

        const matchesSearch = lowerCaseSearchTerm === '' || kitchenMatchesSearch || itemMatchesSearch;

        const matchesPlantBased = !filters.plantBased || item.plantBased;
        const matchesCookieStroll = !filters.cookieStroll || item.cookieStroll;
        const matchesGlutenFree = !filters.glutenFree || item.glutenFree;
        const matchesDairyFree = !filters.dairyFree || item.dairyFree;
        const matchesFavorites = !filters.showFavorites || favoritesSet.has(item.itemName);

        return (
          matchesSearch &&
          matchesPlantBased &&
          matchesCookieStroll &&
          matchesGlutenFree &&
          matchesDairyFree &&
          matchesFavorites
        );
      });

      const sortedItems = filteredItems.length > 1 ? [...filteredItems].sort(sortComparator) : filteredItems;

      if (sortedItems.length > 0) {
        itemCount += sortedItems.length;
        result.push({ ...kitchen, menuItems: sortedItems });
      }

      return result;
    }, []);

    if (sortBy === 'location') {
      processedKitchens.sort((a, b) => a.location.localeCompare(b.location));
    }

    return { filteredKitchens: processedKitchens, totalItemCount: itemCount };
  }, [searchTerm, filters, sortBy, sortComparator, favoritesSet]);

  return (
    <div className="min-h-screen font-sans bg-[#0B241B] text-white">
        <Snowfall />
        <main className="container mx-auto px-4 py-8 relative z-10 space-y-8">
            <Header />
            <GeminiPlanner />
            <FilterControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
                sortBy={sortBy}
                setSortBy={setSortBy}
                itemCount={totalItemCount}
            />
            
            {filteredKitchens.length > 0 ? (
                <div>
                    {filteredKitchens.map((kitchen) => (
                        <KitchenCard 
                          key={kitchen.kitchenName} 
                          kitchen={kitchen} 
                          favorites={favorites}
                          onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <h3 className="text-2xl font-semibold text-[#F3E5AB]">No Matching Items Found</h3>
                    <p className="text-[#A89C8C] mt-2">Try adjusting your search or filter criteria.</p>

                </div>
            )}
        </main>
    </div>
  );
};

export default App;