import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
const Login = () => {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={require("../assets/images/meals/logo.png")}
        className="w-40 h-52"
      />
      <View className="mx-2 flex gap-y-4 pb-4 max-w-full w-[360px] bg-white shadow-sm shadow-gray-700 rounded-md">
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            placeholder="Email@gmail.com"
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px] "
          />
        </View>
        <View className="flex flex-row p-4 border mx-2 rounded-lg border-gray-500">
          <Ionicons name="key-outline" size={24} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            className="mx-2 pl-1 placeholder-gray-800 font-semibold min-w-[300px]"
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.4}
          className=" mx-auto bg-blue-300 w-36 py-3 rounded-xl shadow-md flex flex-row items-center justify-center"
        >
          <AntDesign name="login" size={24} color="white" />
          <Text className="font-semibold text-white text-lg tracking-widest ml-3">
            Login
          </Text>
        </TouchableOpacity>
        <Text className="mx-auto font-semibold text-gray-800 capitalize">
          you don't have any account ?{" "}
          <View>
            <Text className="-mb-1 text-blue-500 font-bold">Sign Up</Text>
          </View>
        </Text>
      </View>
    </View>
  );
};

export default Login;
