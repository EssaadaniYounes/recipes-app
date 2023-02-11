import { View, Text } from "react-native";
import React from "react";
import { PanelItem } from "../../typings";
import { PanelItemContainer } from "../";

const Panel = ({
  title,
  panelItems,
}: {
  title: string;
  panelItems: PanelItem[];
}) => {
  return (
    <View
      className={`bg-white py-3 px-2 rounded-md shadow-sm shadow-gray-600 space-y-1 mt-2 `}
    >
      <Text className="w-full rounded bg-gray-100 text-gray-500 uppercase tracking-widest font-semibold text-[14px] px-2 py-2 my-1">
        {title}
      </Text>
      {panelItems.map((item) => (
        <PanelItemContainer item={item} key={item.title} />
      ))}
    </View>
  );
};

export default Panel;
