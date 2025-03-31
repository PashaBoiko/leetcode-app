import { QueryClient } from '@tanstack/react-query';
import { Tasks } from "@/features/leetcode/ui/tasks";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <Tasks />
  );
}
