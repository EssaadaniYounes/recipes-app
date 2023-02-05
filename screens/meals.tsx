import { View, Text, ScrollView, RefreshControl, Button } from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import MealProfile from "../components/Meal";
import { MealSpoon } from "../typings";

import { getMeals } from "../services/get";
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
const getMealsSnapShot = async (
  setState: React.Dispatch<React.SetStateAction<MealSpoon[]>>
) => {
  let random = Math.floor(Math.random() * 40);
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const q = query(
    collection(db, "meals"),
    where("random", ">=", Math.random()),
    limit(10)
  );

  const querySnapshot = await getDocs(q);
  setState(querySnapshot.docs);
};
const Meals = ({ navigation }) => {
  const [meals, setMeals] = useState<MealSpoon[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getMealsSnapShot(setMeals);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getMealsSnapShot(setMeals);
  }, []);
  return (
    <View>
      <Text className="text-xl font-bold uppercase text-center mt-2 text-gray-700 tracking-tighter">
        Recipes
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
              />
            ))}
      </ScrollView>
    </View>
  );
};

export default Meals;
