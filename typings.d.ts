type Image = {
  path: string;
};

export type Meal = {
  id: number;
  name: string;
  prescriptions?: string[];
  thumbnail?: Image;
  images?: Image[];
  ingredients?: string[];
  cookingTime: number;
};
export type ExtendedIngredient = {
  id: number;
  aisle: string;
  image: string;
  name: string;
  original: string;
};
export type MealSpoon = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};
export type MealDetail = MealSpoon & {
  vegetarian: boolean;
  vegan: boolean;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  readyInMinutes: number;
  sourceUrl: string;
  summary: string;
};
