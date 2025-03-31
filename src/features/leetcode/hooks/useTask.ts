import { useDispatch, useSelector } from 'react-redux';
import type { Task } from '../store/slices/tasksSlice';
import { setTasks } from "../store/slices/tasksSlice";

export function useTask() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return { 
    tasks,
    setTasks: (tasks: Task[]) => dispatch(setTasks(tasks)),
  };
}