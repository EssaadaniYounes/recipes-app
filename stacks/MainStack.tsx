import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../hooks/useAuth";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { useTranslation } from "react-i18next";

export default function RootNavigation() {
  const { user } = useAuth();
  return user ? <UserStack /> : <AuthStack />;
}
