import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, Image, ScrollView } from "react-native";
import { Meal, MealDetail } from "../typings";
import Ingredient from "./Ingredient";
import Loading from "./Loading";

function Details({ meal }: { meal: MealDetail | undefined }) {
  const { t } = useTranslation();
  return meal?.id ? (
    <View className="bg-gray-100 mx-3 relative">
      <Text className="text-xl font-bold capitalize fixed top-0 text-center text-gray-600 my-1 mr-2">
        {meal?.title}
      </Text>
      <Image
        source={{ uri: meal?.image }}
        alt={meal?.title}
        className="w-full h-44 shadow-2xl shadow-black rounded-md opacity-80"
      />
      <Text className="text-xl uppercase my-3 ml-1 mb-2 font-semibold text-gray-700">
        {t("screens.ingredients")} :
      </Text>
      <View className="flex flex-row flex-wrap justify-between p-1">
        {meal?.extendedIngredients.map((ing, idx) => (
          <Ingredient ingredient={ing} key={ing.name + Math.random() + idx} />
        ))}
      </View>
      <Text className="text-xl uppercase my-3 ml-1 mb-2 font-semibold text-gray-700">
        {t("screens.summary")} :
      </Text>
      <Text className="text-justify px-2 -mt-1  leading-6 tracking-wide text-sm">
        {meal?.summary
          .split("<b>")
          .join(" ")
          .split("</b>")
          .join(" ")
          .split("<a>")
          .join(" ")
          .split("</a>")
          .join(" ")}
      </Text>
      <Text className=" font-bold text-gray-700 mb-1">
        <Text>{meal?.readyInMinutes.toString().concat(t("screens.min"))}</Text>/
        <Text>{meal?.pricePerServing.toString().concat("$")}</Text>
      </Text>
    </View>
  ) : (
    <Loading />
  );
}

export default Details;
