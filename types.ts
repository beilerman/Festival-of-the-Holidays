
export interface NutritionalEstimates {
  calories: number;
  protein_g: number;
  carbohydrates_g: number;
  fat_g: number;
  fiber_g: number;
}

export interface MenuItem {
  itemName: string;
  price: string;
  description?: string;
  plantBased: boolean;
  cookieStroll: boolean;
  servingSize?: string;
  nutritionalEstimates: NutritionalEstimates;
  glutenFree?: boolean;
  dairyFree?: boolean;
}

export interface Kitchen {
  kitchenName: string;
  location: string;
  menuItems: MenuItem[];
}