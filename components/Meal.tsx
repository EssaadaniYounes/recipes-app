import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Favorite, MealSpoon } from "../typings";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import {
  deleteDoc,
  doc,
  Firestore,
  getFirestore,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import useGetAuth from "../hooks/useGetAuth";
import * as firebase from "firebase/app";
const MealProfile = ({
  navigation,
  meal,
  favorites,
  onDelete,
}: {
  meal: MealSpoon;
  navigation: any;
  favorites: Favorite[];
  onDelete?: (id: number) => void;
}) => {
  const [favorited, setFavorited] = useState(false);
  useEffect(() => {
    if (favorites.length > 0) {
      const isFav = favorites.filter((f) => f.data().meal_id == meal.id)[0];
      if (isFav) {
        setFavorited(true);
        return;
      }
      setFavorited(false);
    }
  }, [favorites.length]);
  const uid = useGetAuth().currentUser?.uid;
  const handleFavorite = async () => {
    initializeApp(firebaseConfig);
    const fireStore = getFirestore();
    const randomId = Math.random();
    if (!favorited) {
      await setDoc(doc(fireStore, "favorites", randomId.toString()), {
        id: randomId,
        meal_id: meal.id,
        favored_by: uid,
      }).then(() => {
        setFavorited(true);
        console.log("is favorite now ");
      });
    } else {
      console.log("DELETING?");
      const isFavorite = favorites
        .filter((f) => f.data().meal_id == meal.id)[0]
        .data();
      if (isFavorite?.id) {
        console.log("ID DETECTED");
        deleteDoc(doc(fireStore, "favorites", isFavorite.id.toString()))
          .then((res) => {
            console.log("We are deleting");
            setFavorited(false);
            onDelete && onDelete(meal.id);
          })
          .catch((er) => console.log("error while deleting"));
      }
    }
  };

  return (
    <View className="w-full min-h-[200px] bg-gray-200 my-2 shadow-sm shadow-gray-400 rounded-sm overflow-hidden p-1.5">
      <Image
        source={{
          uri: meal.image
            ? meal.image
            : "https://spoonacular.com/recipeImages/french-rolls.jpg",
        }}
        alt={meal.title}
        className="w-full h-44 shadow-2xl shadow-black rounded-md object-cover"
      />
      <View className="mt-1 bg-gray-50 w-full min-h-[20px] rounded-sm shadow-lg p-2 flex flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.navigate("Recipe", { mealId: meal.id })}
          activeOpacity={0.3}
          className="flex-shrink"
        >
          <Text className="font-bold text-gray-700 text-xl capitalize border-b flex-shrink border-gray-500">
            {meal.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFavorite}>
          {favorited ? (
            <Ionicons name="md-star-sharp" size={34} color="#e91e63" />
          ) : (
            <Ionicons name="md-star-outline" size={34} color="#e91e63" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MealProfile;
