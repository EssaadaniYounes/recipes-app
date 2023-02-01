import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Details from "../components/MealDetails";
import { MealDetail } from "../typings";
import { fetch } from "../utils/fetch";
type Route = { params: { mealId: number } };
const MealDetails = ({ route }: { route: Route }) => {
  const [meal, setMeal] = useState<MealDetail>();
  useEffect(() => {
    const getMeal = async () => {
      const { data } = await fetch(
        "GET",
        `${route.params.mealId}/information?apiKey=280f93ef4b2b4a58916945e8e71d6963`
      );
      setMeal(data);
    };
    getMeal();
  }, []);
  return (
    <ScrollView>
      <Details meal={meal} />
    </ScrollView>
  );
};

export default MealDetails;
