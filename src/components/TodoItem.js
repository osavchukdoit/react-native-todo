import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";

export const TodoItem = ({ todoItem }) => {
  // const { changeScreen } = useContext(ScreenContext);
  const { title, id, done } = todoItem;
  // const { updateTodo } = useContext(TodoContext);

  // const switchItemIsDone = async () => {
  //   await updateTodo(id, "done", !done);
  // };

  const logo = {
    uri: "https://reactnative.dev/img/tiny_logo.png",
    width: 20,
    height: 20,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      // onPress={() => switchItemIsDone()}
      // onLongPress={() => changeScreen(id)}
      onPress={() => {}}
      onLongPress={() => {}}
    >
      <View style={styles.itemWrapper}>
        <Image source={logo} style={styles.image} />
        <AppText style={done && styles.itemDone}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: THEME.COLORS.YELLOW,
    marginBottom: 10,
    padding: 10,
    borderRadius: 3,
  },
  itemDone: {
    textDecorationLine: "line-through",
  },
  image: {
    marginRight: 10,
  },
});
