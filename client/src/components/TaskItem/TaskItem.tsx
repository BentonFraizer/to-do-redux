import React, { useContext } from 'react';
import { Task } from '../../types/Task/Task';

type TasItemProps = {
  task: Task;
};

function TaskItem({ task }: TasItemProps): JSX.Element {
  const handleCheckboxClick = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked } = evt.target;
    const updatedTask = {
      userId: task.userId,
      id: task.id,
      title: task.title,
      completed: checked,
    };

    // dispatch({ type: 'TASK_CHANGE', payload: updatedTask });
  };

  const handleDelBtnClick = (id: string): void => {
    // dispatch({ type: 'TASK_DELETE', payload: id });
  };

  return (
    <li className="todo-item d-flex justify-content-between p-3" id={task.id}>
      <div className="to-do-left-container d-flex">
        <input type="checkbox" name="check" className="checkbox me-3" defaultChecked={task.completed} onChange={(evt) => handleCheckboxClick(evt)} />
        {task.completed ? (
          <>
            <button type="button" className="btn btn-outline-success me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </button>
          </>
        ) : (
          <>
            <button type="button" className="btn btn-outline-danger me-3">
              -
            </button>
          </>
        )}

        <span className={task.completed ? 'text-decoration-line-through to-do-text' : 'to-do-text'}>{task.title}</span>
      </div>
      <button type="button" className="btn btn-outline-danger" onClick={() => handleDelBtnClick(task.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
        </svg>
      </button>
    </li>
  );
}

export default TaskItem;
