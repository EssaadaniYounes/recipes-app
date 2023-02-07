import { View, Text } from "react-native";
import React from "react";

const Card = ({ children, style }: { children?: JSX.Element; style?: {} }) => {
  return (
    <View
      style={style}
      className="bg-white py-3 rounded-md shadow-sm shadow-gray-600 justify-center items-center"
    >
      {children}
    </View>
  );
};

export default Card;
