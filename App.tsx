import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals, MealDetails, PostMeal, Login } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Recipe" component={MealDetails} />
        <Stack.Screen name="PostMeal" component={PostMeal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
