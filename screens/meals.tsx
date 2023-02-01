import { View, Text, ScrollView, RefreshControl, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import MealProfile from "../components/Meal";
import { MealSpoon } from "../typings";
import { fetch } from "../utils/fetch";
import { getMeals } from "../services/get";
const Meals = ({ navigation }) => {
  const [meals, setMeals] = useState<MealSpoon[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMeals(setMeals);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getMeals(setMeals);
  }, []);
  return (
    <View>
      <Button
        title="ADD MEAL"
        onPress={() => navigation.navigate("PostMeal")}
      />
      <Text className="text-xl font-bold uppercase text-center mt-2 text-gray-700 tracking-tighter">
        Recipes
      </Text>
      <ScrollView
        className="m-2"
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {meals.map((meal) => (
          <MealProfile meal={meal} key={meal.id} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Meals;
