import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals, MealDetails } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Meals">
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Recipe" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
