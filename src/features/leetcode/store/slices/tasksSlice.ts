import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  name: string;
  level: 'easy' | 'medium' | 'hard';
  subject: string;
  code: string;
  date: string;
  read: boolean;
  labels: string[];
};

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (_, action: PayloadAction<Task[]>) => {
      return action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  }
});

export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;