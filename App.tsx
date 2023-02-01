import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals, MealDetails, PostMeal } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Meals">
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Recipe" component={MealDetails} />
        <Stack.Screen name="PostMeal" component={PostMeal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
