import { SetStateAction } from "react";
import { MealSpoon } from "../typings";
import { fetch } from "../utils/fetch";

export async function getMeals(
  setMeals: React.Dispatch<React.SetStateAction<MealSpoon[]>>
) {
  const { data } = await fetch(
    "GET",
    "/random?apiKey=280f93ef4b2b4a58916945e8e71d6963&number=10"
  );
  setMeals(data.recipes);
}
