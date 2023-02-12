import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, Appearance } from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";
import { styled, useColorScheme } from "nativewind";
import useGetAuth from "../hooks/useGetAuth";
import { Panel, UserInfo } from "../components/index";
import useGetUser from "../hooks/useGetUser";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useTheme from "../hooks/useTheme";
import useColors from "../hooks/useColors";
const StyledText = styled(Text);
function Profile({ navigation }) {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useTheme();
  const colors = useColors();
  const auth = useGetAuth();
  const { user } = useGetUser(auth.currentUser, navigation);
  const logout = () => {
    auth
      .signOut()
      .then(() => console.log("Logout Done"))
      .catch((er) => console.error(er));
  };

  return (
    <ScrollView
      className={`${colors.background} duration-100 px-4 py-2 space-y-2`}
    >
      <UserInfo user={user} navigation={navigation} />
      <Panel
        title={t("user.activites")}
        panelItems={[
          {
            title: t("user.favorites"),
            icon: (
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            ),
            callBack() {
              return navigation.navigate("Favorites");
            },
          },
          {
            title: t("user.downloads"),
            icon: <AntDesign name="download" size={24} color="black" />,
          },
        ]}
      />
      <Panel
        title={t("user.preferences")}
        panelItems={[
          {
            title: t("user.language"),
            icon: <Fontisto name="world-o" size={18} color="#5c5959" />,
            callBack() {
              return navigation.navigate("Languages");
            },
          },
          {
            title:
              (theme == "light"
                ? t("user.dark-theme")
                : t("user.light-theme")) +
              " " +
              t("user.theme"),
            icon: (
              <MaterialCommunityIcons
                name="theme-light-dark"
                size={18}
                color="#5c5959"
              />
            ),
            callBack() {
              toggleTheme();
            },
          },
          {
            title: t("user.notifications"),
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
        title={t("user.app")}
        panelItems={[
          {
            title: t("user.rate-us"),
            icon: <AntDesign name="staro" size={20} color="#5c5959" />,
          },
          {
            title: t("user.share"),
            icon: <EvilIcons name="share-google" size={24} color="#5c5959" />,
          },
          {
            title: t("user.about"),
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
          {t("actions.log-out")}
        </Text>
        <AntDesign name="logout" size={18} color="#F9FAFB" />
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Profile;
