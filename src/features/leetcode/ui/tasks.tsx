'use client';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Tabs, TabsContent } from '@radix-ui/react-tabs';
import { Separator } from '@radix-ui/react-separator';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { TaskList } from '@/features/leetcode/ui/task-list';
import { TaskDisplay } from '@/features/leetcode/ui/task-display';
import { useTask } from '@/features/leetcode/hooks/useTask';
import { useGetDataQuery } from '@/features/leetcode/store/api/tasks';

export const Tasks = () => {
  const defaultLayout = [30, 70];

  const dispatch = useDispatch();
  const { data: payload, error, isLoading } = useGetDataQuery();
  const { setTasks } = useTask();
  
  const tasks = payload?.data || [];

  useEffect(() => {
    if (tasks) {
      dispatch(setTasks(tasks));
    }
  }, [payload, dispatch]);

  return (
    <>
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel defaultSize={defaultLayout[0]} minSize={20}>
          <Tabs defaultValue="all">
            <div className="flex items-center px-4 py-2">
              <h1 className="text-xl font-bold">Leedcode Tasks</h1>
            </div>
            <Separator />
            <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8" />
                </div>
              </form>
            </div>
            <TabsContent value="all" className="m-0">
              <TaskList items={tasks} />
            </TabsContent>
            <TabsContent value="unread" className="m-0">
              <TaskList items={tasks.filter((item) => !item.read)} />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={40}>
          <TaskDisplay
            task={tasks.length && tasks[0]}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
    </>
  )
}