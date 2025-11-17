
import { Kitchen } from '../types';

export const kitchenData: Kitchen[] = [
  {
    "kitchenName": "American Holiday Table",
    "location": "American Adventure Pavilion",
    "menuItems": [
      { "itemName": "Slow-roasted Turkey", "price": "$6.50", "description": "Traditional holiday turkey plate with stuffing, mashed potatoes, green beans, and cranberry sauce", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 32, "carbohydrates_g": 38, "fat_g": 14, "fiber_g": 4 } },
      { "itemName": "Blackened Catfish", "price": "$6.75", "description": "Southern-style blackened catfish with Hoppin' John and Comeback Sauce", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 385, "protein_g": 28, "carbohydrates_g": 32, "fat_g": 15, "fiber_g": 5 } },
      { "itemName": "Chocolate Cookie featuring SNICKERS bar pieces and salted caramel", "price": "$3.75", "description": "Chocolate cookie with SNICKERS pieces and caramel", "plantBased": false, "cookieStroll": true, "nutritionalEstimates": { "calories": 310, "protein_g": 4, "carbohydrates_g": 42, "fat_g": 14, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Victory Brewing Co. Chocolate Cherry Stout", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 220, "protein_g": 2, "carbohydrates_g": 22, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Crooked Can Brewing Company Bah HOPbug IPA", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 200, "protein_g": 2, "carbohydrates_g": 16, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "3 Daughters Brewing Eggnog White Porter", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 210, "protein_g": 2, "carbohydrates_g": 20, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Regional White Wine", "price": "$7.00", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 120, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Regional Red Wine", "price": "$6.50", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Bavaria Holiday Kitchen",
    "location": "Germany Pavilion",
    "menuItems": [
      { "itemName": "Pork Schnitzel", "price": "$6.75", "description": "Breaded pork cutlet with mushroom sauce, spätzle, and braised red cabbage", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 520, "protein_g": 30, "carbohydrates_g": 42, "fat_g": 24, "fiber_g": 4 } },
      { "itemName": "Cheese Fondue", "price": "$8.50", "description": "Melted cheese served in edible bread bowl with steamed baby vegetables and marble potatoes", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 680, "protein_g": 26, "carbohydrates_g": 58, "fat_g": 38, "fiber_g": 5 } },
      { "itemName": "Hazelnut Linzer Cookie", "price": "$3.75", "description": "Traditional Austrian sandwich cookie with raspberry jam", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 280, "protein_g": 4, "carbohydrates_g": 36, "fat_g": 13, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Weihenstephaner Kristallweissbier", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 2, "carbohydrates_g": 15, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Possmann Pure Hard Cider", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 0, "carbohydrates_g": 21, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "von Trapp Brewing Trösten Smoked Dark Lager", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 170, "protein_g": 2, "carbohydrates_g": 15, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Regional Riesling", "price": "$9.00", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 120, "protein_g": 0, "carbohydrates_g": 6, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Glühwein (hot spiced wine)", "price": "$9.75", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 0, "carbohydrates_g": 20, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Chestnuts and Good Cheer",
    "location": "Near Disney Traders (World Showcase)",
    "menuItems": [
      { "itemName": "Cinnamon-glazed Almonds", "price": "$6.00", "plantBased": true, "cookieStroll": false, "glutenFree": true, "nutritionalEstimates": { "calories": 320, "protein_g": 10, "carbohydrates_g": 28, "fat_g": 20, "fiber_g": 6 } },
      { "itemName": "Cinnamon-glazed Cashews", "price": "$6.00", "plantBased": true, "cookieStroll": false, "glutenFree": true, "nutritionalEstimates": { "calories": 340, "protein_g": 9, "carbohydrates_g": 32, "fat_g": 22, "fiber_g": 2 } },
      { "itemName": "Cinnamon-glazed Pecans", "price": "$6.00", "plantBased": true, "cookieStroll": false, "glutenFree": true, "nutritionalEstimates": { "calories": 360, "protein_g": 5, "carbohydrates_g": 28, "fat_g": 28, "fiber_g": 5 } },
      { "itemName": "Fire-roasted Chestnuts", "price": "$6.00", "plantBased": true, "cookieStroll": false, "glutenFree": true, "dairyFree": true, "nutritionalEstimates": { "calories": 180, "protein_g": 3, "carbohydrates_g": 38, "fat_g": 2, "fiber_g": 4 } },
      { "itemName": "Eggnog (Non-alcoholic)", "price": "$4.00", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 170, "protein_g": 4, "carbohydrates_g": 22, "fat_g": 7, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Southern Tier Brewing Co. Chestnut Praline Imperial Ale", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 240, "protein_g": 2, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Eggnog with choice of liqueur (Fireball or Skrewball)", "price": "$12.25", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 4, "carbohydrates_g": 26, "fat_g": 7, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Experimental Prototype Cookies of Tomorrow",
    "location": "CommuniCore Hall (World Celebration)",
    "menuItems": [
      { "itemName": "Prototype Cookie: Sugar cookie with orange-cranberry icing and dark chocolate", "price": "$4.75", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 350, "protein_g": 4, "carbohydrates_g": 48, "fat_g": 16, "fiber_g": 2 } },
      { "itemName": "Ginger-Molasses Cookie with cream cheese icing", "price": "$3.50", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 290, "protein_g": 3, "carbohydrates_g": 42, "fat_g": 12, "fiber_g": 1 } },
      { "itemName": "Salted Caramel Spaceship Earth Cookie", "price": "$5.50", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 5, "carbohydrates_g": 56, "fat_g": 20, "fiber_g": 2 } },
      { "itemName": "Gingerbread Milk Shake (Non-alcoholic)", "price": "$5.25", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 480, "protein_g": 8, "carbohydrates_g": 72, "fat_g": 18, "fiber_g": 1 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Gingerbread Milk Shake with whipped cream vodka", "price": "$12.50", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 580, "protein_g": 8, "carbohydrates_g": 74, "fat_g": 18, "fiber_g": 1 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Hot Cocoa by Joffrey's (Non-alcoholic)", "price": "$4.00", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 3, "carbohydrates_g": 32, "fat_g": 5, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Hot Cocoa with whipped cream vodka", "price": "$12.25", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 280, "protein_g": 3, "carbohydrates_g": 34, "fat_g": 5, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Crooked Can Brewing Company Gingerbread Bock", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 210, "protein_g": 2, "carbohydrates_g": 20, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Gulf Stream Brewing Baking Spirits Bright Gingerbread Red Ale", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 200, "protein_g": 2, "carbohydrates_g": 19, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Ivanhoe Park Brewing Co. Frosted Gingerbread White Stout", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 230, "protein_g": 2, "carbohydrates_g": 23, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Seasonal Wine", "price": "$12.75", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 5, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Favorites of Festivals Past",
    "location": "CommuniCore Plaza (Near Odyssey Pavilion)",
    "menuItems": [
      { "itemName": "Reuben Croquettes", "price": "N/A", "description": "with pastrami, sauerkraut, and Swiss cheese with Thousand Island dipping sauce", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 450, "protein_g": 22, "carbohydrates_g": 35, "fat_g": 24, "fiber_g": 3 } },
      { "itemName": "Brown Sugar and Mustard-glazed Ham Sliders", "price": "N/A", "description": "with cranberry and apple coleslaw on Hawaiian roll", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 20, "carbohydrates_g": 42, "fat_g": 14, "fiber_g": 2 } },
      { "itemName": "Panettone Holiday Trifle", "price": "N/A", "description": "with eggnog custard topped with cranberry-cherry compote and sugared almonds", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 6, "carbohydrates_g": 58, "fat_g": 18, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Cigar City Brewing Oatmeal Raisin Cookie Brown Ale", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 210, "protein_g": 2, "carbohydrates_g": 21, "fat_g": 0, "fiber_g": 1 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Keel Farms Pecan Pie Hard Cider", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 220, "protein_g": 0, "carbohydrates_g": 28, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Southern Tier Brewing Co. Tiramisu Imperial Stout", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 250, "protein_g": 3, "carbohydrates_g": 26, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Seasonal White Wine", "price": "N/A", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 120, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Seasonal Red Wine", "price": "N/A", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Martin Ray Chardonnay", "price": "N/A", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 123, "protein_g": 0, "carbohydrates_g": 3, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Katherine Goldschmidt Cabernet Sauvignon", "price": "N/A", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Holiday Hearth Desserts",
    "location": "Odyssey Pavilion",
    "menuItems": [
      { "itemName": "Cranberry-Oatmeal Cookie", "price": "$3.50", "plantBased": true, "cookieStroll": true, "nutritionalEstimates": { "calories": 260, "protein_g": 4, "carbohydrates_g": 38, "fat_g": 10, "fiber_g": 3 } },
      { "itemName": "Red Velvet Cake Pop", "price": "$5.50", "description": "with festive sprinkles", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 240, "protein_g": 3, "carbohydrates_g": 32, "fat_g": 11, "fiber_g": 1 } },
      { "itemName": "Reindeer Chow", "price": "$6.75", "description": "featuring M&M'S Milk Chocolate Candies Holiday Blend", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 6, "carbohydrates_g": 62, "fat_g": 18, "fiber_g": 3 } },
      { "itemName": "Apple-Caramel Crumb Cake", "price": "$5.00", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 340, "protein_g": 4, "carbohydrates_g": 52, "fat_g": 13, "fiber_g": 2 } },
      { "itemName": "Chocolate-covered Toffee Brittle", "price": "$4.75", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 310, "protein_g": 2, "carbohydrates_g": 38, "fat_g": 16, "fiber_g": 1 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Hot Cocoa by Joffrey's (Non-alcoholic)", "price": "$4.00", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 3, "carbohydrates_g": 32, "fat_g": 5, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Frozen Caramel Hot Cocoa", "price": "$5.50", "description": "featuring TWIX cookie bar pieces and whipped cream", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 520, "protein_g": 7, "carbohydrates_g": 78, "fat_g": 20, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "BRLO Winter Hard Cider", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 190, "protein_g": 0, "carbohydrates_g": 23, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Keel Farms Yukon Maple Bourbon Hard Cider", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 210, "protein_g": 0, "carbohydrates_g": 26, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "3 Daughters Brewing Peppermint Hard Cider", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 200, "protein_g": 0, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Wicked Weed Brewing Jack Frost IPA", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 195, "protein_g": 2, "carbohydrates_g": 16, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Ivanhoe Park Brewing Co. Cranberry Vanilla Wheat Ale", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 185, "protein_g": 2, "carbohydrates_g": 17, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Brewery Ommegang Gilded Noel White Chocolate Imperial Blonde Stout", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 240, "protein_g": 2, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Cocoa Peppermint Warmer", "price": "$12.75", "description": "Hot Cocoa with peppermint schnapps", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 280, "protein_g": 3, "carbohydrates_g": 38, "fat_g": 5, "fiber_g": 2 } }
    ]
  },
  {
    "kitchenName": "Holiday Sweets and Treats",
    "location": "Near Port of Entry (World Showcase)",
    "menuItems": [
      { "itemName": "Peppermint Sundae", "price": "$6.50", "description": "Chocolate ice cream, whipped cream, and peppermint candy", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 6, "carbohydrates_g": 52, "fat_g": 16, "fiber_g": 3 } },
      { "itemName": "Festive Flight featuring Hot Cocoa by Joffrey's (Non-alcoholic)", "price": "$6.50", "description": "Three 4 oz samples: Christmas Sugar Cookie, Gingerbread, Cookie Butter", "servingSize": "three 4 oz samples", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 270, "protein_g": 5, "carbohydrates_g": 48, "fat_g": 8, "fiber_g": 3 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Hot Cocoa by Joffrey's (Non-alcoholic)", "price": "$4.00", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 3, "carbohydrates_g": 32, "fat_g": 5, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Chocolate-Peppermint Shake", "price": "$5.25", "description": "featuring Twinings Peppermint Cheer Tea", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 460, "protein_g": 8, "carbohydrates_g": 68, "fat_g": 17, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Carib Brewery Oh Christmas Tree IPA", "price": "$12.50", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 205, "protein_g": 2, "carbohydrates_g": 17, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Stevens Point Brewery Whole Hog Hazelnut Brownie Porter", "price": "$12.50", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 230, "protein_g": 2, "carbohydrates_g": 23, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Hot Cocoa with choice of liqueur", "price": "$12.25 - $15.50", "description": "Baileys, Buffalo Trace Bourbon Cream, or Skrewball", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 4, "carbohydrates_g": 36, "fat_g": 10, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Chocolate-Peppermint Shake with whipped cream vodka", "price": "$12.50", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 560, "protein_g": 8, "carbohydrates_g": 70, "fat_g": 17, "fiber_g": 2 } }
    ]
  },
  {
    "kitchenName": "L'Chaim! Holiday Kitchen",
    "location": "Between France and Morocco Pavilions",
    "menuItems": [
      { "itemName": "Pastrami on Rye", "price": "$6.00", "description": "with house-made pickles and deli mustard", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 26, "carbohydrates_g": 28, "fat_g": 11, "fiber_g": 3 } },
      { "itemName": "Smoked Salmon Potato Latke", "price": "$6.25", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 290, "protein_g": 18, "carbohydrates_g": 24, "fat_g": 13, "fiber_g": 2 } },
      { "itemName": "Potato Latkes", "price": "N/A", "plantBased": true, "cookieStroll": false, "nutritionalEstimates": { "calories": 240, "protein_g": 3, "carbohydrates_g": 28, "fat_g": 13, "fiber_g": 3 } },
      { "itemName": "Mickey-shaped Almond Black and White Cookie", "price": "$4.00", "plantBased": false, "cookieStroll": true, "nutritionalEstimates": { "calories": 330, "protein_g": 5, "carbohydrates_g": 44, "fat_g": 15, "fiber_g": 2 } },
      { "itemName": "Rugelach", "price": "$4.25", "description": "Pastry with raspberry jam, walnuts, and cinnamon", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 310, "protein_g": 5, "carbohydrates_g": 36, "fat_g": 16, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Brooklyn Brewery Black Chocolate Stout", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 240, "protein_g": 2, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Frozen New York Whiskey Sour", "price": "N/A", "description": "Manifest Whiskey and Manischewitz Blackberry Wine", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 280, "protein_g": 0, "carbohydrates_g": 32, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Las Posadas Holiday Kitchen",
    "location": "Mexico Pavilion",
    "menuItems": [
      { "itemName": "Tostada de Carne", "price": "$8.00", "description": "Braised beef tips on fried corn tortilla with black beans, crispy onions, and queso fresco", "plantBased": false, "cookieStroll": false, "glutenFree": true, "nutritionalEstimates": { "calories": 420, "protein_g": 28, "carbohydrates_g": 32, "fat_g": 19, "fiber_g": 6 } },
      { "itemName": "Tamal de Pollo con Mole", "price": "$9.00", "description": "Shredded chicken and mole in corn masa with toppings", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 480, "protein_g": 24, "carbohydrates_g": 52, "fat_g": 20, "fiber_g": 5 } },
      { "itemName": "Dulce de Leche Churro", "price": "$6.75", "description": "sprinkled with cinnamon sugar", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 5, "carbohydrates_g": 54, "fat_g": 16, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Chai-mazing Margarita", "price": "N/A", "description": "Chai-infused tequila, apple-ginger juice, chai liqueur", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 260, "protein_g": 0, "carbohydrates_g": 32, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Horchata Margarita", "price": "N/A", "description": "Cinnamon-infused mezcal, corn whiskey, horchata, rum", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 310, "protein_g": 1, "carbohydrates_g": 38, "fat_g": 2, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Holiday Cerveza", "price": "N/A", "description": "Mexican craft lager with black currant liqueur", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 190, "protein_g": 1, "carbohydrates_g": 20, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Le Marche De Noel Holiday Kitchen",
    "location": "France Pavilion",
    "menuItems": [
      { "itemName": "Dinde Rôtie", "price": "$9.25", "description": "Roasted turkey with mushrooms, pearl onions, bacon, gravy, and roasted sweet potatoes", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 460, "protein_g": 34, "carbohydrates_g": 38, "fat_g": 18, "fiber_g": 5 } },
      { "itemName": "Crème de Saumon Fumé", "price": "$9.25", "description": "Smoked salmon spread on sesame brioche roll with cucumber and radishes", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 390, "protein_g": 22, "carbohydrates_g": 32, "fat_g": 18, "fiber_g": 2 } },
      { "itemName": "Macaron de Noël aux Épices", "price": "$9.25", "description": "Large gingerbread macaron with spiced filling", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 5, "carbohydrates_g": 48, "fat_g": 12, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Pierre Sparr Crémant d'Alsace Brut Rosé", "price": "$6.95", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 110, "protein_g": 0, "carbohydrates_g": 3, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Vin Chaud French Mulled Wine", "price": "$9.95", "description": "served warm", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 200, "protein_g": 0, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Frozen Hot Chocolate Martini", "price": "$14.25", "description": "Vodka, cocoa, whipped cream", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 3, "carbohydrates_g": 42, "fat_g": 12, "fiber_g": 2 } }
    ]
  },
  {
    "kitchenName": "Mele Kalikimaka",
    "location": "Near Port of Entry (Hawaii-inspired)",
    "menuItems": [
      { "itemName": "Kālua Pork", "price": "$6.00", "description": "with coconut, sweet potatoes, and mango salad", "plantBased": false, "cookieStroll": false, "glutenFree": true, "dairyFree": true, "nutritionalEstimates": { "calories": 340, "protein_g": 26, "carbohydrates_g": 28, "fat_g": 12, "fiber_g": 4 } },
      { "itemName": "Lomi Lomi Salmon", "price": "$6.50", "description": "with tomatoes, onions, salmon roe, yuzu mayo, and yuca chips", "plantBased": false, "cookieStroll": false, "glutenFree": true, "dairyFree": true, "nutritionalEstimates": { "calories": 310, "protein_g": 20, "carbohydrates_g": 22, "fat_g": 15, "fiber_g": 2 } },
      { "itemName": "Coffee-Mocha Cookie", "price": "$3.75", "description": "topped with coffee buttercream, cocoa nibs, and chocolate espresso beans", "plantBased": false, "cookieStroll": true, "nutritionalEstimates": { "calories": 300, "protein_g": 4, "carbohydrates_g": 40, "fat_g": 14, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Maui Brewing Co. Mango Stickee Rice IPA", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 215, "protein_g": 2, "carbohydrates_g": 20, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Florida Orange Groves Winery Pineapple Sparkling Wine", "price": "$12.50", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 130, "protein_g": 0, "carbohydrates_g": 8, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Melon Breeze", "price": "$14.25", "description": "Pineapple juice, lime juice, melon liqueur, spiced rum", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 280, "protein_g": 0, "carbohydrates_g": 36, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Nochebuena Cocina",
    "location": "Between Morocco and France Pavilions (Latin American Christmas)",
    "menuItems": [
      { "itemName": "Pan de Jamón", "price": "$6.00", "description": "Traditional Latin Christmas bread with rolled ham, raisins, and green olives", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 14, "carbohydrates_g": 42, "fat_g": 11, "fiber_g": 2 } },
      { "itemName": "Plant-based Chorizo Tamale", "price": "$5.50", "description": "with plant-based cotija and spicy red chile sauce", "plantBased": true, "cookieStroll": false, "glutenFree": true, "dairyFree": true, "nutritionalEstimates": { "calories": 280, "protein_g": 12, "carbohydrates_g": 38, "fat_g": 10, "fiber_g": 6 } },
      { "itemName": "Cinnamon-spiced Chocolate Crinkle Cookie", "price": "$3.50", "plantBased": false, "cookieStroll": true, "nutritionalEstimates": { "calories": 270, "protein_g": 3, "carbohydrates_g": 38, "fat_g": 12, "fiber_g": 2 } },
      { "itemName": "Ponche Navideño", "price": "$4.00", "description": "Christmas punch with fruits and spices (served warm, non-alcoholic)", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 120, "protein_g": 0, "carbohydrates_g": 30, "fat_g": 0, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Left Hand Brewing Co. Mexican Hot Chocolate Milk Stout", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 220, "protein_g": 2, "carbohydrates_g": 22, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Shi Wasu Holiday Kitchen",
    "location": "Japan Pavilion",
    "menuItems": [
      { "itemName": "Strawberry Bun", "price": "$7.95", "description": "Soft pink dessert bao with sweet strawberry cream filling and coconut sauce", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 310, "protein_g": 6, "carbohydrates_g": 52, "fat_g": 8, "fiber_g": 2 } },
      { "itemName": "Sushi Tree Roll", "price": "$7.50", "description": "Christmas tree-shaped sushi with krab, cream cheese, spicy mayo, rice pearls", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 340, "protein_g": 14, "carbohydrates_g": 48, "fat_g": 10, "fiber_g": 2 } },
      { "itemName": "Toshikoshi Soba", "price": "$7.50", "description": "Buckwheat noodles in dashi soup with shrimp tempura and green onion", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 360, "protein_g": 18, "carbohydrates_g": 52, "fat_g": 10, "fiber_g": 4 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Yuzu Refresher", "price": "$7.00", "description": "Yuzu and passion fruit with lemonade and green apple boba pearls", "servingSize": "16 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 0, "carbohydrates_g": 46, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Sapporo Premium Black Beer", "price": "$5.75 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 165, "protein_g": 2, "carbohydrates_g": 14, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Chocolate Nigori Sake", "price": "$14.00", "servingSize": "4 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 1, "carbohydrates_g": 22, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Japanese Punch", "price": "$8.25", "description": "Shōchū, plum wine, white cranberry juice, lemon juice", "servingSize": "6 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 200, "protein_g": 0, "carbohydrates_g": 26, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Swirled Showcase",
    "location": "Near Disney Traders (Holiday sweets & soft-serve)",
    "menuItems": [
      { "itemName": "Liquid Nitrogen Chocolate-Peppermint Mousse", "price": "N/A", "description": "featuring M&M'S Holiday Mint Chocolate Candies", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 340, "protein_g": 5, "carbohydrates_g": 46, "fat_g": 15, "fiber_g": 2 } },
      { "itemName": "Soft-serve in a waffle cone (Vanilla, Apple-Cinnamon, or Dark Chocolate)", "price": "N/A", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 300, "protein_g": 5.5, "carbohydrates_g": 45, "fat_g": 11.5, "fiber_g": 2 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Soda Float", "price": "$5.50", "description": "Barq's Red Creme Soda or Root Beer with vanilla soft-serve", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 4, "carbohydrates_g": 58, "fat_g": 8, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Yuletide Float", "price": "N/A", "description": "Fireball Whisky, Barq's Red Creme Soda, apple-cinnamon soft-serve", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 3, "carbohydrates_g": 62, "fat_g": 8, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Coffee Float", "price": "N/A", "description": "Dark chocolate soft-serve, cold brew, Mozart liqueur", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 5, "carbohydrates_g": 52, "fat_g": 14, "fiber_g": 3 } }
    ]
  },
  {
    "kitchenName": "Tangierine Cafe: Flavors of the Medina",
    "location": "Morocco Pavilion",
    "menuItems": [
      { "itemName": "Moroccan Wrap - Chermoula Chicken", "price": "N/A", "description": "with tomato-cucumber relish and garlic sauce on warm flatbread", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 28, "carbohydrates_g": 36, "fat_g": 14, "fiber_g": 4 } },
      { "itemName": "Moroccan Wrap - Moroccan-spiced Lamb", "price": "N/A", "description": "with tomato-cucumber relish and garlic sauce on warm flatbread", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 26, "carbohydrates_g": 36, "fat_g": 20, "fiber_g": 4 } },
      { "itemName": "Moroccan Wrap - Falafel", "price": "N/A", "description": "with tomato-cucumber relish and garlic sauce on warm flatbread", "plantBased": true, "cookieStroll": false, "nutritionalEstimates": { "calories": 340, "protein_g": 12, "carbohydrates_g": 42, "fat_g": 14, "fiber_g": 8 } },
      { "itemName": "Stone-baked Moroccan Bread", "price": "N/A", "description": "with assorted dips", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 320, "protein_g": 8, "carbohydrates_g": 48, "fat_g": 11, "fiber_g": 3 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "3 Daughters Brewing Golden Fig Hard Cider", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 200, "protein_g": 0, "carbohydrates_g": 26, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Keel Farms Frostbite Blueberry Ginger Hard Cider", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 195, "protein_g": 0, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Gulf Stream Brewing Holiday Snakebite", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 185, "protein_g": 1, "carbohydrates_g": 20, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Sparkling Holiday Fig Cocktail", "price": "N/A", "description": "Sparkling wine, Kleiner Feigling liqueur, white cranberry juice", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 220, "protein_g": 0, "carbohydrates_g": 22, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Tuscany Holiday Kitchen",
    "location": "Italy Pavilion",
    "menuItems": [
      { "itemName": "Salsiccia e Peperoni", "price": "$8.75", "description": "Sweet sausage, roasted peppers, and focaccia", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 480, "protein_g": 24, "carbohydrates_g": 38, "fat_g": 24, "fiber_g": 3 } },
      { "itemName": "Pizza e Cioccolato", "price": "$7.00", "description": "Fried pizza dough with sugar, cinnamon, and chocolate", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 420, "protein_g": 6, "carbohydrates_g": 58, "fat_g": 18, "fiber_g": 3 } },
      { "itemName": "Montanara", "price": "$7.50", "description": "Fried pizza dough with pomodoro sauce, Parmesan, and fresh basil", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 12, "carbohydrates_g": 48, "fat_g": 16, "fiber_g": 3 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Peroni Pilsner", "price": "$6.50 / $12.00", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 165, "protein_g": 2, "carbohydrates_g": 14, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Tiramisu Stout", "price": "N/A", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 230, "protein_g": 2, "carbohydrates_g": 23, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Prosecco", "price": "$12.00", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 100, "protein_g": 0, "carbohydrates_g": 3, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Moscato", "price": "$12.00", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 12, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Chianti", "price": "$12.00", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Italian Red Sangria", "price": "$12.00", "servingSize": "8 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 0, "carbohydrates_g": 24, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Italian-inspired Blood Orange Margarita", "price": "$13.00", "servingSize": "6 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 240, "protein_g": 0, "carbohydrates_g": 28, "fat_g": 0, "fiber_g": 0 } }
    ]
  },
  {
    "kitchenName": "Yukon Holiday Kitchen",
    "location": "Canada Pavilion",
    "menuItems": [
      { "itemName": "Seared Salmon", "price": "$7.50", "description": "with butternut squash purée, maple-bourbon glaze, fennel-arugula salad", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 380, "protein_g": 28, "carbohydrates_g": 22, "fat_g": 20, "fiber_g": 4 } },
      { "itemName": "Beef Bourguignon", "price": "$7.25", "description": "with crushed potatoes", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 460, "protein_g": 32, "carbohydrates_g": 28, "fat_g": 24, "fiber_g": 3 } },
      { "itemName": "Maple Leaf Shortbread Cookie", "price": "$4.00", "description": "with maple buttercream", "plantBased": false, "cookieStroll": true, "nutritionalEstimates": { "calories": 320, "protein_g": 3, "carbohydrates_g": 42, "fat_g": 15, "fiber_g": 1 } },
      { "itemName": "Frozen Joffrey's Coffee (Non-alcoholic)", "price": "$5.25", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 180, "protein_g": 2, "carbohydrates_g": 32, "fat_g": 5, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "81Bay Brewing Co. Peanut Butter Banana Porter", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 210, "protein_g": 2, "carbohydrates_g": 21, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Playalinda Brewing Co. Maple Cookie Blonde Ale", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 195, "protein_g": 2, "carbohydrates_g": 19, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Collective Arts Brewing Brown Sugar Coffee Porter", "price": "$6.00 / $9.75", "servingSize": "6 oz / 12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 220, "protein_g": 2, "carbohydrates_g": 22, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Regional Ice Wine", "price": "$7.50", "servingSize": "3 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 120, "protein_g": 0, "carbohydrates_g": 16, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Regional Red Wine", "price": "$11.00", "servingSize": "5 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 125, "protein_g": 0, "carbohydrates_g": 4, "fat_g": 0, "fiber_g": 0 } },
      // FIX: Added missing plantBased and cookieStroll properties.
      { "itemName": "Frozen Joffrey's Coffee with Tap 357 Canadian Maple Rye Whisky", "price": "$12.75", "servingSize": "12 oz", "plantBased": false, "cookieStroll": false, "nutritionalEstimates": { "calories": 280, "protein_g": 2, "carbohydrates_g": 36, "fat_g": 5, "fiber_g": 0 } }
    ]
  }
];
