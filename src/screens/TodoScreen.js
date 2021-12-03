import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/modals/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const TodoScreen = () => {
  const { todos, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [showModal, setShowModal] = useState(false);

  const onBackPressed = () => changeScreen(null);

  const selectedTodo = todos.find(({ id }) => id === todoId);

  return (
    <View>
      <EditModal
        selectedTodo={selectedTodo}
        visible={showModal}
        onCancel={() => setShowModal(false)}
        onSave={async (title) => await updateTodo(todoId, "title", title)}
      />

      <AppCard style={styles.appCard}>
        <AppTextBold style={styles.title}>{selectedTodo.title}</AppTextBold>
        <AppButton
          onPress={() => setShowModal(true)}
          color={THEME.COLORS.YELLOW}
          textColor={THEME.COLORS.BLACK}
        >
          <FontAwesome name={"edit"} size={20} />
        </AppButton>
      </AppCard>

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <AppButton onPress={onBackPressed} color={THEME.COLORS.GRAY}>
            <AntDesign name={"back"} size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            onPress={() => removeTodo(todoId)}
            color={THEME.COLORS.DANGER}
          >
            <AntDesign name={"delete"} size={20} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
  },
  title: {
    fontSize: 26,
  },
  appCard: {
    marginBottom: 30,
  },
});
