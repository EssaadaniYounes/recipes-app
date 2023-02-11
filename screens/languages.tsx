import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
  return (
    <View>
      {languages.map((l) => (
        <TouchableOpacity
          activeOpacity={0.4}
          key={l.key}
          onPress={() => i18n.changeLanguage(l.key)}
          className="bg-gray-300 p-3 border-b border-b-gray-400"
        >
          <Text className="capitalize text-gray-700 font-semibold text-[18px]">
            {t(l.path)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Languages;
