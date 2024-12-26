import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  status: "Todo"|"Doing"|"Done";
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({ id: Date.now().toString(), title: action.payload, status: "Todo" });
    },
    changeStatusTodo: (state, action: PayloadAction<{ id: string; status: "Todo" | "Doing" | "Done" }>) => {
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.status = action.payload.status;
        }
      },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    sortTodos: (state, action: PayloadAction<"Todo" | "Doing" | "Done">) => {
        const priority = action.payload;     
        const sortedTodos = [...state.todos];     
     
        const order: { [key: string]: number } = {
          Todo: 0,
          Doing: 1,
          Done: 2,
        };     
     
        sortedTodos.sort((a, b) => {        
          if (a.status === priority) return -1;
          if (b.status === priority) return 1;         
          return order[a.status] - order[b.status];
        });     
     
        state.todos = sortedTodos;
      },
  },
});

export const { addTodo, changeStatusTodo, editTodo, deleteTodo, sortTodos } = todoSlice.actions;
export default todoSlice.reducer;
