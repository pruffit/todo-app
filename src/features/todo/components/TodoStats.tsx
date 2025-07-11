import { Button } from '@/shared/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';
import { TodoFilter } from '@/features/todo/types/todo';

const TodoStats = ({
  activeCount,
  filter,
  setFilter,
  onClearCompleted,
}: {
  activeCount: number;
  filter: TodoFilter;
  setFilter: (filter: TodoFilter) => void;
  onClearCompleted: () => void;
}) => {
  const handleValueChange = (value: string) => {
    if (value === 'all' || value === 'active' || value === 'completed') {
      setFilter(value as TodoFilter);
    }
  };

  return (
    <div className="mt-4">
      <Tabs value={filter} onValueChange={handleValueChange} className="mb-4">
        <TabsList className="grid grid-cols-3 dark:bg-gray-700">
          <TabsTrigger value="all" className="dark:data-[state=active]:bg-gray-600">
            All
          </TabsTrigger>
          <TabsTrigger value="active" className="dark:data-[state=active]:bg-gray-600">
            Active
          </TabsTrigger>
          <TabsTrigger value="completed" className="dark:data-[state=active]:bg-gray-600">
            Completed
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {activeCount} {activeCount === 1 ? 'task' : 'tasks'} left
        </span>
        <Button variant="outline" size="sm" onClick={onClearCompleted}>
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default TodoStats;
