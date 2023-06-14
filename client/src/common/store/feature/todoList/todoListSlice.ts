import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  isDone?: boolean;
};

export type TodoListState = {
  todos: Todo[];
};

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      const itemIndex = state.todos.findIndex((todo) => todo.id === action.payload);

      if (itemIndex < 0) return;

      state.todos.splice(itemIndex, 1);
    },

    markDone: (state, action: PayloadAction<string>) => {
      const itemIndex = state.todos.findIndex((todo) => todo.id === action.payload);

      if (itemIndex < 0) return;
      state.todos[itemIndex].isDone = true;
    },

    markPending: (state, action: PayloadAction<string>) => {
      const itemIndex = state.todos.findIndex((todo) => todo.id === action.payload);

      if (itemIndex < 0) return;
      state.todos[itemIndex].isDone = false;
    },
  },
});

export const { addTodo, markDone, markPending, removeTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
