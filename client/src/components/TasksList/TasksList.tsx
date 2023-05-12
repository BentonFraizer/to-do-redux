import { RootState } from '../../redux/store';
import TaskItem from '../TaskItem/TaskItem';
import { useSelector } from 'react-redux';

function TasksList(): JSX.Element {
  const { tasks } = useSelector((store: RootState) => store.tasks);
  return (
    <ul className="to-do-list w-100">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TasksList;
