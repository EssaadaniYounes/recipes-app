import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import React, { useState, useEffect } from "react";
import useGetAuth from "../hooks/useGetAuth";
import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Relation, User } from "../typings";
import SelectDropdown from "react-native-select-dropdown";
import { updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import useGetUser from "../hooks/useGetUser";
import { RELATIONS, styles } from "../constants";
import { useTranslation } from "react-i18next";

const EditProfile = ({ navigation }) => {
  const auth = useGetAuth();
  const [editing, setEditing] = useState(false);
  const { user, setUser } = useGetUser(auth.currentUser);
  const { t } = useTranslation();

  const update = async () => {
    setEditing(true);
    updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
      .then(async (updated) => {
        initializeApp(firebaseConfig);
        const db = getFirestore();
        if (!user.belongTo) {
          console.log("Creating");
          initializeApp(firebaseConfig);
          const fireStore = getFirestore();
          await setDoc(
            doc(fireStore, "users", auth.currentUser?.uid.toString() || "uid"),
            {
              ...user,
              belongTo: auth.currentUser?.uid,
            }
          );
          return;
        } else {
          updateDoc(
            doc(db, "users", auth.currentUser?.uid.toString() || "uid"),
            {
              ...user,
            }
          )
            .then((res) => console.log("We are updating"))
            .catch((er) => console.log("error while updating"));
        }
      })
      .then((done) => {
        setEditing(false);
        navigation.replace("Profile");
      });
  };
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 80 }}>
      <KeyboardAvoidingView
        behavior="padding"
        className="flex items-center justify-center h-screen space-y-4"
      >
        <View className="bg-gray-200 rounded-lg w-44 h-44 ">
          <Image
            source={
              !user?.photoURL
                ? require("../assets/images/user-64.png")
                : { uri: user.photoURL }
            }
            className="w-44 h-44 rounded-lg"
          />
        </View>
        <View className="mx-2 flex gap-y-4 pb-4 max-w-full w-[360px] bg-white shadow-sm shadow-gray-700 rounded-md">
          {/* Email */}
          <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
            <Entypo name="email" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Email@gmail.com"
              className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
              onChangeText={(text) => setUser({ ...user, email: text })}
              value={user.email || ""}
            />
          </View>
          {/* Name */}
          <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder={t("screens.username-placeholder")}
              className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
              onChangeText={(text) => setUser({ ...user, displayName: text })}
              value={user.displayName || ""}
            />
          </View>
          {/*Gender  */}
          <View className="flex-row justify-around p-4 border mx-2 rounded-lg border-gray-500">
            <View className="flex-row items-center justify-center space-x-2">
              <Ionicons name="man-outline" size={24} color="black" />
              <RadioButton
                value="male"
                status={user.gender === "male" ? "checked" : "unchecked"}
                onPress={() => setUser({ ...user, gender: "male" })}
              />
            </View>
            <View className="flex-row items-center justify-center space-x-2">
              <Ionicons name="woman-outline" size={24} color="black" />
              <RadioButton
                value="female"
                status={user.gender === "female" ? "checked" : "unchecked"}
                onPress={() => setUser({ ...user, gender: "female" })}
              />
            </View>
          </View>
          {/* Relation */}
          <View className="flex-row justify-center px-2">
            <SelectDropdown
              onChangeSearchInputText={() => {}}
              buttonStyle={{
                width: "100%",
                borderRadius: 12,
                backgroundColor: "transparent",
                borderColor: "#6B7280",
                borderWidth: 1,
              }}
              buttonTextStyle={{
                color: "#454649",
              }}
              defaultButtonText={t("actions.select-relation") || ""}
              data={RELATIONS.map((r) => t("relations." + r))}
              onSelect={(selectedItem: Relation, index) => {
                setUser({ ...user, relation: RELATIONS[index] });
              }}
              defaultValue={t(`relations.${user.relation}`)}
            />
          </View>
          {/* PhotoURL */}
          <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
            <AntDesign name="link" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder={t("screens.photo-url")}
              multiline
              className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
              onChangeText={(text) => setUser({ ...user, photoURL: text })}
              value={user.photoURL || ""}
            />
          </View>
          {/* Birthday */}
          <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
            <Fontisto name="date" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder={t("screens.birthday-placeholder")}
              // placeholder="Birthday 02/02/2003"
              className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
              onChangeText={(text) => setUser({ ...user, birthday: text })}
              value={user.birthday || ""}
            />
          </View>
          {/* Phone */}
          <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
            <Feather name="phone" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder={t("screens.phone-placeholder")}
              className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
              onChangeText={(text) => setUser({ ...user, phone: text })}
              value={user.phone}
            />
          </View>
          {/* City */}
          <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={22}
              color="black"
            />
            <TextInput
              style={styles.input}
              placeholder={t("screens.city-placeholder")}
              className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
              onChangeText={(text) => setUser({ ...user, city: text })}
              value={user.city || ""}
            />
          </View>

          {/* Buttons */}
          <View className="flex-row justify-evenly items-center">
            <TouchableOpacity
              onPress={update}
              className="bg-[#3083ff] rounded-lg w-1/3 px-8 py-[10px] "
            >
              <Text className="font-medium text-white text-center">
                {editing ? t("screens.editing") : t("actions.edit")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              className="border-gray-500 border-2 rounded-lg w-1/3  px-8 py-2"
            >
              <Text className="text-gray-500 font-semibold text-center">
                {t("actions.cancel")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditProfile;
