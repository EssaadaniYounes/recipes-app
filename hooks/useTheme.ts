import React, { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { MMKVStorage } from "../utils/MMKV";

function useTheme() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  useEffect(() => {
    const getTheme = async () => {
      // const storedTheme = MMKVStorage.getString("theme");
      setTheme("dark");
    };
    getTheme();
  }, []);
  const toggleTheme = () => {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);
    // MMKVStorage.set("theme", newTheme);
  };
  return { theme, toggleTheme };
}

export default useTheme;
