import React, { useContext } from "react";
import { Platform, View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Header } from "./components/Header";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View style={styles.wrapper}>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "light"} />
      <Header />
      <View style={styles.main}>
        {todoId ? <TodoScreen /> : <MainScreen />}
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
