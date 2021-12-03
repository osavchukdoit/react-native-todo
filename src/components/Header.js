import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { AppText } from "./ui/AppText";
import { THEME } from "../theme";

export const Header = () => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
      <AppText
        style={{
          ...styles.text,
          ...Platform.select({
            ios: styles.textIos,
            android: styles.textAndroid,
          }),
        }}
      >
        React Native Demo
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerIos: {
    backgroundColor: THEME.COLORS.WHITE,
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.BLACK,
  },
  headerAndroid: {
    backgroundColor: THEME.COLORS.BLACK,
  },
  text: {
    fontSize: 30,
  },
  textIos: {
    color: THEME.COLORS.BLACK,
  },
  textAndroid: {
    color: THEME.COLORS.WHITE,
  },
});
