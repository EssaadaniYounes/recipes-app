import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { User } from "../../typings";
import { Card } from "../index";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
type Props = {
  user: User;
  navigation: { navigate: (screen: string, options?: {}) => {} };
};
const UserInfo = ({ user, navigation }: Props) => {
  return (
    <View>
      <Card>
        <View className="bg-gray-200 rounded-full w-20 h-20 ">
          <Image
            source={
              !user?.photoURL
                ? require("../../assets/images/user-64.png")
                : { uri: user.photoURL }
            }
            className="w-20 h-20 rounded-full"
          />
        </View>
        <Text className="capitalize font-semibold text-lg tracking-wide text-gray-700 mt-2">
          {user.displayName}
        </Text>
        <Text className="font-semibold text-sm text-gray-500 tracking-tighter my-2">
          {user?.email}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile")}
          activeOpacity={0.5}
          className="bg-[#3083ff] flex-row w-32 rounded-3xl p-3 px-4 items-center justify-center"
        >
          <Text className="text-gray-50 font-medium">Edit Profile</Text>
          <AntDesign name="right" size={18} color="#F9FAFB" />
        </TouchableOpacity>
      </Card>
      <Card style={{ marginTop: 8 }}>
        <View className="w-full px-3 items-start space-y-2 py-1.5">
          {user.phone && (
            <View className="flex-row items-center space-x-3 border-b-2 border-gray-200 pb-2 w-full">
              <Feather name="phone" size={22} color="black" />
              <Text className="font-semibold text-gray-600">{user.phone}</Text>
            </View>
          )}
          {user.gender && (
            <View className="flex-row items-center space-x-3 border-b-2 border-gray-200 pb-2 w-full">
              <FontAwesome name="intersex" size={22} color="black" />
              <Text className="font-semibold text-gray-600">{user.gender}</Text>
            </View>
          )}
          {user.relation && (
            <View className="flex-row items-center space-x-3 border-b-2 border-gray-200 pb-2 w-full">
              <Ionicons name="heart-outline" size={22} color="black" />
              <Text className="font-semibold text-gray-600">
                {user.relation}
              </Text>
            </View>
          )}
          {user.birthday && (
            <View className="flex-row items-center space-x-3 border-b-2 border-gray-200 pb-2 w-full">
              <Fontisto name="date" size={20} color="black" />
              <Text className="font-semibold text-gray-600">
                {user.birthday}
              </Text>
            </View>
          )}
          {user.city && (
            <View className="flex-row items-center space-x-3 pb-2 w-full">
              <MaterialCommunityIcons
                name="city-variant-outline"
                size={22}
                color="black"
              />
              <Text className="font-semibold text-gray-600">{user.city}</Text>
            </View>
          )}
        </View>
      </Card>
    </View>
  );
};

export default UserInfo;
