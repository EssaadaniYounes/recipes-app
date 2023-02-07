import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals, MealDetails, PostMeal, Login } from "./screens";
import RootNavigation from "./stacks/MainStack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return <RootNavigation />;
}
