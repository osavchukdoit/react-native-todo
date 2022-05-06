import React, { useContext, useReducer } from "react";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import {
  ADD_TODO,
  CLEAR_ERROR,
  FETCH_TODOS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO,
} from "../types";
import { ScreenContext } from "../screen/screenContext";
import { Alert } from "react-native";
import { Http } from "../../http";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const createAlert = ({ title, message, buttons }) =>
    Alert.alert(title, message, buttons);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = (error) => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  const addTodo = async (title, done = false) => {
    clearError();
    try {
      const { name } = await Http.post(
        "https://rn-todo-app-14a2f-default-rtdb.europe-west1.firebasedatabase.app/todos.json",
        { title, done }
      );
      dispatch({ type: ADD_TODO, title, id: name, done });
    } catch (e) {
      showError(e);
    }
  };

  const fetchTodos = async () => {
    showLoader();
    clearError();
    try {
      const todosResponse = await Http.get(
        "https://rn-todo-app-14a2f-default-rtdb.europe-west1.firebasedatabase.app/todos.json"
      );
      const todos = todosResponse
        ? Object.keys(todosResponse).map((key) => ({
            ...todosResponse[key],
            id: key,
          }))
        : [];
      dispatch({ type: FETCH_TODOS, todos });
    } catch (e) {
      showError(e);
    } finally {
      hideLoader();
    }
  };

  const removeTodo = (id) => {
    const todoToRemove = state.todos.find((todo) => todo.id === id);
    createAlert({
      title: `Remove ${todoToRemove.title}?`,
      message: "You will not be able to restore deleted task",
      buttons: [
        { text: "Cancel" },
        {
          text: "OK",
          onPress: async () => {
            changeScreen(null);
            try {
              await Http.delete(
                `https://rn-todo-app-14a2f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
              );
              dispatch({ type: REMOVE_TODO, id });
            } catch (e) {
              showError(e);
            }
          },
        },
      ],
    });
  };

  const updateTodo = async (id, field, value) => {
    console.log(id, field, value);
    clearError();
    try {
      await Http.patch(
        `https://rn-todo-app-14a2f-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`,
        { [field]: value }
      );
      dispatch({ type: UPDATE_TODO, id, field, value });
    } catch (e) {
      showError(e);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
        loading: state.loading,
        error: state.error,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
