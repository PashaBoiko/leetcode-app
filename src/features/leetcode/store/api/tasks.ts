import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { readTask } from "@/features/leetcode/actions/index";
import { Task } from "../slices/tasksSlice";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getData: builder.query<{ data: Task[] }, void>({
      queryFn: async () => {
        try {
          const data = await readTask();
          return { data };
        } catch (error) {
          return { error: error as Error };
        }
      },
    }),
  }),
});

export const { useGetDataQuery } = taskApi;