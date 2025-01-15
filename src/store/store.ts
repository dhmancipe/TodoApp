import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
