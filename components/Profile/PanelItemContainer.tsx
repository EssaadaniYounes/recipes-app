import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { PanelItem } from "../../typings";

function PanelItemContainer({ item }: { item: PanelItem }) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      className="bg-gray-50 rounded-md flex-row justify-between items-center px-2"
    >
      <View className=" flex-row  py-3 space-x-2 items-center">
        {item.icon}
        <Text className="text-[15px] text-gray-600 font-medium capitalize ">
          {item.title}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="#5c5959" />
    </TouchableOpacity>
  );
}

export default PanelItemContainer;
