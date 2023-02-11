import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigation from "./stacks/MainStack";
import { AppSplash } from "./components/AppSplash";
import "./locales/i18n";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <AppSplash isAppReady={true}>
      <RootNavigation />
    </AppSplash>
  );
}
