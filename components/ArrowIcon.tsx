import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { I18nManager } from "react-native";
const ArrowIcon = ({ color }: { color?: string }) => {
  return (
    <AntDesign
      name={I18nManager.isRTL ? "left" : "right"}
      size={18}
      color={color}
    />
  );
};

export default ArrowIcon;
