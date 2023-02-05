import { View, Text } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View>
      <View className="border border-gray-300 shadow my-1 rounded-md p-4 max-w-sm w-full mx-auto">
        <View className="animate-pulse flex space-x-4">
          <View className="rounded-full bg-slate-700 h-10 w-10"></View>
          <View className="flex-1 space-y-6 py-1">
            <View className="h-2 bg-slate-700 rounded"></View>
            <View className="space-y-3">
              <View className="grid grid-cols-3 gap-4">
                <View className="h-2 bg-slate-700 rounded col-span-2"></View>
                <View className="h-2 bg-slate-700 rounded col-span-1"></View>
              </View>
              <View className="h-2 bg-slate-700 rounded"></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Loading;
