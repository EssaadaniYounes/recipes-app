import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { User } from "../typings";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useGetAuth from "../hooks/useGetAuth";
import { styles } from "../constants";
import { useTranslation } from "react-i18next";

const SignUp = ({ navigation }) => {
  const auth = useGetAuth();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    displayName: "",
    photoURL: "",
  });
  const { t } = useTranslation();
  const handleSignUp = async () => {
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) =>
          updateProfile(userCredential.user, { displayName: user.displayName })
            .then((isUpdated) => console.log(isUpdated))
            .catch((er) => console.error("Updating Current User :", er))
        )
        .catch((er) => console.error("Creating New User:", er));
      // await signInWithEmailAndPassword(auth, user.email, user.password);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View className="flex items-center justify-center h-screen">
      <Image
        source={require("../assets/images/meals/logo.png")}
        className="w-40 h-52"
      />
      <View className="mx-2 flex gap-y-4 pb-4 max-w-full w-[360px] bg-white shadow-sm shadow-gray-700 rounded-md">
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <Entypo name="email" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder={t("screens.email-placeholder")}
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
        </View>
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder={t("screens.username-placeholder")}
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
            onChangeText={(text) => setUser({ ...user, displayName: text })}
          />
        </View>
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <Ionicons name="key-outline" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder={t("screens.password-placeholder")}
            secureTextEntry={true}
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        <TouchableOpacity
          onPress={handleSignUp}
          activeOpacity={0.4}
          className=" mx-auto bg-blue-300 w-36 py-3 rounded-xl shadow-md flex flex-row items-center justify-center"
        >
          <AntDesign name="login" size={24} color="white" />
          <Text className="font-semibold text-white text-lg tracking-widest ml-3">
            {t("actions.sign-up")}
          </Text>
        </TouchableOpacity>
        <Text className="mx-auto font-semibold text-gray-800 capitalize">
          {t("screens.have-account")} ?{" "}
          <View>
            <Text
              className="-mb-1 text-blue-500 font-bold"
              onPress={() => navigation.navigate("Login")}
            >
              {t("actions.sign-in")}
            </Text>
          </View>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
