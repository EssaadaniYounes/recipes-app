import { I18nManager, StyleSheet } from "react-native";
import { Relation } from "./typings";

export const styles = StyleSheet.create({
  input: {
    textAlign: I18nManager.isRTL ? "right" : "left",
  },
});

export const RELATIONS: Relation[] = [
  "single",
  "married",
  "engaged",
  "in-relation",
  "widower",
];
