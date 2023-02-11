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
  image?: string;
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
export type Favorite = {
  id: number;
  meal_id: number;
  favored_by: string;
};
type Relation = "single" | "married" | "engaged" | "in-relation" | "widower";
type Mixed = string | null | undefined;
type Gender = "male" | "female" | undefined;
export type User = {
  id?: string;
  displayName?: Mixed;
  email?: Mixed;
  password?: string;
  photoURL?: Mixed;
  gender?: Gender;
  relation?: Relation;
  city?: Mixed;
  birthday?: Mixed;
  phone?: string;
};
export type AppUser = User;

export type PanelItem = {
  icon: JSX.Element;
  title: string;
  callBack?: () => void;
};
