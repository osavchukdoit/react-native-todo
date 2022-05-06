import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "./ui/AppButton";
import { decrement, increment, reset } from "../reducers/counterSlice";
import React from "react";
import { THEME } from "../theme";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{count}</Text>
      <AppButton onPress={() => dispatch(increment())}><Text style={styles.counter}>+1</Text></AppButton>
      <AppButton onPress={() => dispatch(decrement())}><Text style={styles.counter}>-1</Text></AppButton>
      <AppButton onPress={() => dispatch(reset())}><Text style={styles.counter}>reset</Text></AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 24,
    color: THEME.COLORS.BLACK,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
