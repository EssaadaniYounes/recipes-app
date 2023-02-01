import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MealSpoon } from "../typings";
const MealProfile = ({
  navigation,
  meal,
}: {
  meal: MealSpoon;
  navigation: any;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className="w-full min-h-[200px] bg-gray-200 my-2 shadow-sm shadow-gray-400 rounded-sm overflow-hidden p-1.5"
      onPress={() => navigation.navigate("Recipe", { mealId: meal.id })}
    >
      <Image
        source={{ uri: meal.image }}
        alt={meal.title}
        className="w-full h-44 shadow-2xl shadow-black rounded-md "
      />
      <View className="mt-1 bg-gray-50 w-full rounded-sm shadow-lg p-2 flex flex-row items-center justify-between">
        <Text className="font-bold text-gray-700 text-xl capitalize">
          {meal.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MealProfile;
