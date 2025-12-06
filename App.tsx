import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { kitchenData } from './data/kitchenData';
import { Kitchen } from './types';
import Header from './components/Header';
import KitchenCard from './components/KitchenCard';
import FilterControls from './components/FilterControls';
import GeminiPlanner from './components/GeminiPlanner';

const Snowfall: React.FC = () => {
    const snowflakes = useMemo(() => {
        const flakeCount = 100;
        return Array.from({ length: flakeCount }).map((_, i) => {
            const style = {
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationName: 'snowfall',
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 10}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
            };
            return <div key={i} className="absolute top-0 bg-white rounded-full" style={style} />;
        });
    }, []);

    return <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">{snowflakes}</div>;
};

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-[#B91C1C] hover:bg-[#991B1B] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 mt-12 py-8 border-t border-[#B91C1C]/50">
            <div className="container mx-auto px-4 text-center">
                <p className="text-[#D1C4A8] text-sm mb-2">
                    EPCOT Festival of the Holidays - A Diabetic's Nutritional Guide
                </p>
                <p className="text-[#A89C8C] text-xs">
                    All nutritional values are estimates. This is not medical advice. Consult your healthcare provider.
                </p>
                <p className="text-[#A89C8C] text-xs mt-2">
                    &copy; {new Date().getFullYear()} | Not affiliated with Walt Disney World
                </p>
            </div>
        </footer>
    );
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
  const [sortBy, setSortBy] = useState('name'); // 'name', 'location', 'carbs_low_high', 'carbs_high_low'

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
    let kitchens: Kitchen[] = JSON.parse(JSON.stringify(kitchenData)); // Deep copy to avoid mutation
    let itemCount = 0;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    let processedKitchens = kitchens
      .map((kitchen) => {
        const kitchenMatchesSearch =
            kitchen.kitchenName.toLowerCase().includes(lowerCaseSearchTerm) ||
            kitchen.location.toLowerCase().includes(lowerCaseSearchTerm);

        const filteredItems = kitchen.menuItems.filter((item) => {
          const itemMatchesSearch =
            item.itemName.toLowerCase().includes(lowerCaseSearchTerm) ||
            item.description?.toLowerCase().includes(lowerCaseSearchTerm);

          const matchesSearch = searchTerm === '' || kitchenMatchesSearch || itemMatchesSearch;
          
          const matchesPlantBased = !filters.plantBased || item.plantBased;
          const matchesCookieStroll = !filters.cookieStroll || item.cookieStroll;
          const matchesGlutenFree = !filters.glutenFree || item.glutenFree;
          const matchesDairyFree = !filters.dairyFree || item.dairyFree;
          const matchesFavorites = !filters.showFavorites || favorites.includes(item.itemName);

          return matchesSearch && matchesPlantBased && matchesCookieStroll && matchesGlutenFree && matchesDairyFree && matchesFavorites;
        });
        return { ...kitchen, menuItems: filteredItems };
      })
      .filter((kitchen) => kitchen.menuItems.length > 0);

    // Sort items within each kitchen first
    processedKitchens.forEach((kitchen) => {
      if (sortBy === 'carbs_low_high') {
        kitchen.menuItems.sort((a, b) => a.nutritionalEstimates.carbohydrates_g - b.nutritionalEstimates.carbohydrates_g);
      } else if (sortBy === 'carbs_high_low') {
        kitchen.menuItems.sort((a, b) => b.nutritionalEstimates.carbohydrates_g - a.nutritionalEstimates.carbohydrates_g);
      } else { // 'name' or 'location' - default item sort to name
         kitchen.menuItems.sort((a, b) => a.itemName.localeCompare(b.itemName));
      }
      itemCount += kitchen.menuItems.length;
    });

    // Sort the kitchens themselves if sorting by location
    if (sortBy === 'location') {
        processedKitchens.sort((a, b) => a.location.localeCompare(b.location));
    }


    return { filteredKitchens: processedKitchens, totalItemCount: itemCount };
  }, [searchTerm, filters, sortBy, favorites]);

  return (
    <div className="min-h-screen font-sans">
        <Snowfall />
        <main id="main-content" className="container mx-auto px-4 py-8 relative z-10">
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
        <Footer />
        <BackToTop />
    </div>
  );
};

export default App;