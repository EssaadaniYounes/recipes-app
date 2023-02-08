import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Meals,
  MealDetails,
  PostMeal,
  Profile,
  EditProfile,
  Favorites,
} from "../screens";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HeaderProfile from "../components/HeaderProfile";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({
  title,
  navigation,
  Component,
}: {
  title: string;
  navigation: any;
  Component: JSX.Element;
}) => {
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
        {Component && <Component />}
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#374151" }}>
          {title}
        </Text>
        <HeaderProfile navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default function UserStack() {
  const Stack = createNativeStackNavigator();
  const options = (navigation, title, component?) => {
    return {
      header: () => (
        <Header title={title} navigation={navigation} Component={component} />
      ),
    };
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Meals" headerMode="none">
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={({ navigation }) => options(navigation, "Recipes")}
          />
          <Stack.Screen
            name="Recipe"
            component={MealDetails}
            options={({ navigation }) =>
              options(navigation, "Recipe", () => (
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => navigation.navigate("Meals")}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    padding: 8,
                    width: 48,
                    height: 48,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="home" size={35} color="black" />
                </TouchableOpacity>
              ))
            }
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={({ navigation }) =>
              options(navigation, "Favorites", () => (
                <TouchableOpacity
                  activeOpacity={0.4}
                  onPress={() => navigation.navigate("Meals")}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    padding: 8,
                    width: 48,
                    height: 48,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="home" size={35} color="black" />
                </TouchableOpacity>
              ))
            }
          />
          <Stack.Screen name="PostMeal" component={PostMeal} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
