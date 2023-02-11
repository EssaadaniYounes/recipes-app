import { View, Text, ScrollView, RefreshControl, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import MealProfile from "../components/Meal";
import { Favorite, MealSpoon } from "../typings";

import { initializeApp } from "firebase/app";

import firebaseConfig from "../firebase";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import Loading from "../components/Loading";
import useGetAuth from "../hooks/useGetAuth";
import { useTranslation } from "react-i18next";
const getMealsSnapShot = async (
  setMeals: React.Dispatch<React.SetStateAction<MealSpoon[]>>,
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>,
  uid: string | undefined
) => {
  initializeApp(firebaseConfig);
  const db = getFirestore();
  let q = query(
    collection(db, "meals"),
    where("random", ">=", Math.random()),
    limit(10)
  );

  const mealsQuerySnapshot = await getDocs(q);
  q = query(collection(db, "favorites"), where("favored_by", "==", uid));
  const favoritesQuerySnapshot = await getDocs(q);
  setMeals(mealsQuerySnapshot.docs);
  setFavorites(favoritesQuerySnapshot.docs);
};
const Meals = ({ navigation }) => {
  const [meals, setMeals] = useState<MealSpoon[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const uid = useGetAuth().currentUser?.uid;
  const { t } = useTranslation();
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMealsSnapShot(setMeals, setFavorites, uid);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getMealsSnapShot(setMeals, setFavorites, uid);
  }, []);

  return (
    <View>
      <Text className="text-xl font-bold uppercase text-center mt-2 text-gray-700 tracking-tighter">
        {t("screens.recipes")}
      </Text>
      <ScrollView
        className="m-2"
        contentContainerStyle={{ paddingBottom: 30 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {meals.length == 0
          ? [...Array(10).keys()].map((i) => <Loading key={i} />)
          : meals.map((meal) => (
              <MealProfile
                meal={meal.data()}
                key={meal.id}
                navigation={navigation}
                favorites={favorites}
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default Meals;
