import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const AppInput = ({
  inputValue,
  setInputValue,
  style,
  placeholder = "",
  autoCorrect = false,
  autoCapitalize = "none",
  ...props
}) => {
  return (
    <TextInput
      style={{ ...styles.default, ...style }}
      placeholder={placeholder}
      onChangeText={(text) => setInputValue(text)}
      value={inputValue}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    height: 40,
    borderBottomWidth: 2,
    marginBottom: 5,
  },
});
