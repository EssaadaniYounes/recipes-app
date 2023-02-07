import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ExtendedIngredient } from "../typings";

const Ingredient = ({ ingredient }: { ingredient: ExtendedIngredient }) => {
  return (
    <View className="w-full h-[90px] rounded-md overflow-hidden bg-gray-200 my-1 flex flex-row-reverse shadow-sm shadow-gray-700">
      <Image
        source={{
          uri:
            "https://spoonacular.com/cdn/ingredients_100x100/" +
            ingredient.image,
        }}
        className=" w-1/2 h-full opacity-80"
      />

      <View className="flex justify-between items-start p-2 flex-1">
        <Text className="text-sm capitalize font-bold text-gray-600">
          {ingredient.name}
        </Text>
        <Text className="text-xs max-w-full font-semibold capitalize text-gray-700">
          {ingredient.original}
        </Text>
      </View>
    </View>
  );
};

export default Ingredient;

const styles = StyleSheet.create({});
