import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {id: 0, title: "task 0", done: false},
      {id: 1, title: "task 1", done: true},
    ],
    todoId: null,
  },
  reducers: {
    fetchTodos: (state, { payload }) => ({
      todos: payload,
    }),
    addTodo: (state, { payload }) => {
      const { id, title } = payload;
      return {
        todos: [...state.todos, { id, title, done: false }],
      };
    },
    removeTodo: (state, { payload }) => ({
      todos: state.todos.filter((todo) => todo.id !== payload.id),
    }),
    updateTodo: (state, {payload}) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo[payload.field] = value;
        }
        return todo;
      }),
    }),
  },
});

export const { fetchTodos, addTodo, removeTodo, updateTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
