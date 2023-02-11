import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";

import { updateProfile } from "firebase/auth";
import useGetAuth from "../hooks/useGetAuth";
import { Panel, UserInfo } from "../components/index";
import useGetUser from "../hooks/useGetUser";
function Profile({ navigation }) {
  const auth = useGetAuth();
  const { user } = useGetUser(auth.currentUser, navigation);
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log("Logout Done"))
      .catch((er) => console.error(er));
  };
  return (
    <ScrollView className="bg-gray-100 px-4 py-2 space-y-2">
      <UserInfo user={user} navigation={navigation} />
      <Panel
        title="Activites"
        panelItems={[
          {
            title: "favorites",
            icon: (
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            ),
            callBack() {
              return navigation.navigate("Favorites");
            },
          },
          {
            title: "downloads",
            icon: <AntDesign name="download" size={24} color="black" />,
          },
        ]}
      />
      <Panel
        title="Preferences"
        panelItems={[
          {
            title: "Langue",
            icon: <Fontisto name="world-o" size={18} color="#5c5959" />,
            callBack() {
              return navigation.navigate("Languages");
            },
          },
          {
            title: "Theme",
            icon: (
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={18}
                color="#5c5959"
              />
            ),
          },
          {
            title: "Notifications",
            icon: (
              <Ionicons
                name="notifications-outline"
                size={18}
                color="#5c5959"
              />
            ),
          },
        ]}
      />
      <Panel
        title="App"
        panelItems={[
          {
            title: "Rate us",
            icon: <AntDesign name="staro" size={20} color="#5c5959" />,
          },
          {
            title: "Share with your friends",
            icon: <EvilIcons name="share-google" size={24} color="#5c5959" />,
          },
          {
            title: "About",
            icon: <Feather name="info" size={22} color="#5c5959" />,
          },
        ]}
      />

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={logout}
        className="mb-4 mt-2 bg-red-400 p-3 w-2/3 mx-auto rounded-xl shadow-sm shadow-gray-700 flex-row justify-center items-center space-x-2"
      >
        <Text className="text-center uppercase font-semibold text-white text-[16px]">
          Logout
        </Text>
        <AntDesign name="logout" size={18} color="#F9FAFB" />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Profile;
