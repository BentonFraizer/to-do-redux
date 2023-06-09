import { Action } from '../../types/Action';
import { State } from '../../types/Task/State';

const initialState: State = { tasks: [] };

export const tasksReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'TASKS_INIT':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'TASK_ADD':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case 'TASK_DELETE':
      return {
        ...state,
        tasks: state.tasks.filter((task) => Number(task.id) !== Number(action.payload)),
      };
    case 'TASK_UPDATE': {
      const { id, completed } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: completed };
          } else {
            return task;
          }
        }),
      };
    }

    default:
      return state;
  }
};
