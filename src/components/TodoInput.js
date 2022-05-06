import React, { useContext, useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { AppInput } from "./ui/AppInput";
import { Entypo } from "@expo/vector-icons";
import { TodoContext } from "../context/todo/todoContext";
import {useDispatch} from "react-redux";
import {addTodo} from "../reducers/todoSlice";
import {addTask} from "../api/todo";

export const TodoInput = () => {
  // const { addTodo } = useContext(TodoContext);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = async () => {
    if (inputValue.trim()) {
      // addTodo(inputValue);
      // dispatch(addTodo({ id: Date.now(), title: inputValue }));
      const name = await addTask(inputValue);
      dispatch(addTodo({ id: name, title: inputValue }));
      setInputValue("");
      Keyboard.dismiss();
    }
  };

  return (
    <View style={styles.inputContainer}>
      <AppInput
        placeholder={"New task"}
        setInputValue={setInputValue}
        inputValue={inputValue}
        style={styles.input}
      />
      <Entypo
        name="add-to-list"
        size={32}
        color="black"
        onPress={handleAddTodo}
        style={styles.addBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
  },
  addBtn: {
    padding: 10,
  },
});
