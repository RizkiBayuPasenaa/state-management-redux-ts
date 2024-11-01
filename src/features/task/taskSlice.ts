import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
