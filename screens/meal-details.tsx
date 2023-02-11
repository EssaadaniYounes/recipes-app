import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Details from "../components/MealDetails";
import { MealDetail } from "../typings";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
type Route = { params: { mealId: number } };
const MealDetails = ({ route }: { route: Route }) => {
  const [meal, setMeal] = useState<MealDetail>();
  useEffect(() => {
    const getMeal = async () => {
      initializeApp(firebaseConfig);
      const db = getFirestore();
      const q = query(
        collection(db, "meals"),
        where("id", "==", route.params.mealId)
      );

      const querySnapshot = await getDocs(q);
      setMeal(querySnapshot.docs[0].data());
      console.log(querySnapshot.docs[0].data().extendedIngredients);
    };
    getMeal();
  }, []);
  return (
    <ScrollView>
      <Details meal={meal} />
    </ScrollView>
  );
};

export default MealDetails;
