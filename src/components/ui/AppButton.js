import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { AppTextBold } from "./AppTextBold";
import { THEME } from "../../theme";

export const AppButton = ({
  children,
  onPress,
  style,
  color = THEME.COLORS.WHITE,
  textColor = THEME.COLORS.WHITE,
}) => {
  const platform = Platform.OS;
  const Wrapper =
    platform === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress} activeOpacity={0.7} style={style}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={{ ...styles.text, color: textColor }}>
          {children}
        </AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: THEME.COLORS.WHITE,
  },
});
