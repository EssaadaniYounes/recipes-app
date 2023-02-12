import React, { useEffect, useState, useCallback } from "react";
import { MMKVStorage } from "../utils/MMKV";
import useTheme from "./useTheme";

function useColors() {
  const { theme } = useTheme();
  const lightColors = {
    theme: "light",
    background: "bg-gray-100",
    color: "text-gray-700",
    "background-50": "bg-gray-50",
    "color-800": "text-gray-800",
  };
  const darkColors = {
    theme: "dark",
    background: "bg-gray-800",
    color: "text-gray-100",
    "background-50": "bg-gray-50",
    "color-200": "text-gray-200",
  };
  const [colors, setColors] = useState({});
  useEffect(() => {
    theme == "dark" ? setColors(lightColors) : setColors(darkColors);
    console.log("UEF");
  }, [MMKVStorage.getString("theme")]);
  return colors;
}

export default useColors;
