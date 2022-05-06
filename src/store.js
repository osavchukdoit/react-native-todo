import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice";
import todoReducer from "./reducers/todoSlice";
import utilsReducer from "./reducers/utilsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    utils: utilsReducer,
  },
});
