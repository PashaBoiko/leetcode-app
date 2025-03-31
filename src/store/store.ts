import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "@/features/leetcode/store/api/tasks";
import tasksReducer from "@/features/leetcode/store/slices/tasksSlice";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});

// Типы для использования в useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;