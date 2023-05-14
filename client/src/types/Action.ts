import { Task } from './Task/Task';

export type Action =
  | {
      type: 'TASKS_INIT';
      payload: Task[];
    }
  | {
      type: 'TASK_ADD';
      payload: Task;
    }
  | {
      type: 'TASK_DELETE';
      payload: string;
    };
