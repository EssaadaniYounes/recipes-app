import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { User } from "../typings";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useGetAuth from "../hooks/useGetAuth";

const Login = ({ navigation }) => {
  const auth = useGetAuth();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const handleLogin = async () => {
    try {
      signInWithEmailAndPassword(auth, user.email, user.password).then((res) =>
        console.log(res.user.displayName)
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex items-center justify-center h-screen"
    >
      <Image
        source={require("../assets/images/meals/logo.png")}
        className="w-40 h-52"
      />
      <View className="mx-2 flex gap-y-4 pb-4 max-w-full w-[360px] bg-white shadow-sm shadow-gray-700 rounded-md">
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            placeholder="Email@gmail.com"
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
        </View>
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <Ionicons name="key-outline" size={24} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
            onChangeText={(text) => setUser({ ...user, password: text })}
          />
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          activeOpacity={0.4}
          className=" mx-auto bg-blue-300 w-36 py-3 rounded-xl shadow-md flex flex-row items-center justify-center"
        >
          <AntDesign name="login" size={24} color="white" />
          <Text className="font-semibold text-white text-lg tracking-widest ml-3">
            Sign in
          </Text>
        </TouchableOpacity>
        <Text className="mx-auto font-semibold text-gray-800 capitalize">
          you don't have any account ?{" "}
          <View>
            <Text
              className="-mb-1 text-blue-500 font-bold"
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </View>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
