import React, { useState } from "react";
import { Modal, View, StyleSheet, Alert } from "react-native";
import { AppInput } from "../ui/AppInput";
import { MaterialIcons } from "@expo/vector-icons";
import { AppButton } from "../ui/AppButton";
import { THEME } from "../../theme";

export const EditModal = ({ selectedTodo, visible, onCancel, onSave }) => {
  const [inputValue, setInputValue] = useState(selectedTodo.title);

  const handleSave = () => {
    if (inputValue.trim()) {
      onSave(inputValue);
      onCancel();
      return;
    }
    Alert.alert("Title is empty");
  };

  return (
    <Modal visible={visible} animationType={"slide"} transparent={false}>
      <View style={styles.wrap}>
        <AppInput
          style={styles.input}
          placeholder={"Task name"}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <View style={styles.buttons}>
          <AppButton
            color={THEME.COLORS.GRAY}
            onPress={() => {
              onCancel();
              setInputValue(selectedTodo.title);
            }}
            style={styles.button}
          >
            <MaterialIcons name="cancel" size={24} />
          </AppButton>
          <AppButton
            onPress={handleSave}
            color={THEME.COLORS.YELLOW}
            style={styles.button}
          >
            <MaterialIcons name="save" size={24} color={THEME.COLORS.BLACK} />
          </AppButton>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    width: "40%",
  },
});
