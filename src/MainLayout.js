import React, { useContext } from "react";
import { Platform, View, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "./components/Header";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";
import { useSelector, useDispatch, Provider } from "react-redux";
import { AppButton } from "./components/ui/AppButton";
import { decrement, increment, reset } from "./reducers/counterSlice";
import store from "./store";

export const MainLayout = () => {
  // const { todoId } = useContext(ScreenContext);
  // console.log('state=', useSelector((state) => state));
  const { todoId } = useSelector((state) => state.todo);

  return (
    <View style={styles.wrapper}>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "light"} />
      <Header />
      <View style={styles.main}>
        {/*{todoId ? <TodoScreen /> : <MainScreen />}*/}
        <MainScreen />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: THEME.PADDINGS.HORIZONTAL,
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
});
