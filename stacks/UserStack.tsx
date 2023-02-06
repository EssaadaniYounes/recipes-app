import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Meals, MealDetails, PostMeal, Profile } from "../screens";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Logout from "../components/Logout";

const Header = ({ title, navigation }: { title: string }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#eee",
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 8,
          position: "relative",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#374151" }}>
          {title}
        </Text>
        <Logout navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default function UserStack() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Meals" headerMode="none">
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={({ navigation }) => {
              return {
                header: () => <Header title="Meals " navigation={navigation} />,
              };
            }}
          />
          <Stack.Screen name="Recipe" component={MealDetails} />
          <Stack.Screen name="PostMeal" component={PostMeal} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
