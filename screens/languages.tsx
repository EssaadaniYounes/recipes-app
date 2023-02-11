import { View, Text, TouchableOpacity, I18nManager } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as updates from "expo-updates";
const Languages = () => {
  const { t, i18n } = useTranslation();
  const [languages, setLanguages] = useState<{ key: string; path: string }[]>([
    {
      key: "en",
      path: "languages.en",
    },
    {
      key: "ar",
      path: "languages.ar",
    },
  ]);
  const changeLangue = async (key: string) => {
    await i18n.changeLanguage(key).then(() => {
      I18nManager.forceRTL(key == "ar");
      updates.reloadAsync();
    });
  };
  return (
    <View>
      {languages.map((l) => (
        <TouchableOpacity
          activeOpacity={0.4}
          key={l.key}
          onPress={() => changeLangue(l.key)}
          className="bg-white p-3 border-b-2 border-b-gray-100"
        >
          <Text className="capitalize text-gray-700 py-1 font-semibold text-[18px]">
            {t(l.path)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Languages;
