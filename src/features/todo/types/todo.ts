export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoFilter = 'all' | 'active' | 'completed';
