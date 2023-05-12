import React, { useEffect, useState } from 'react';
import TasksList from '../TasksList/TasksList';
import { Env } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function MainPage(): JSX.Element {
  const dispatch = useDispatch();
  const { tasks } = useSelector((store: RootState) => store.tasks);

  const env: Env = {
    REACT_APP_URL_TASKS_INIT: process.env.REACT_APP_URL_TASKS_INIT as string,
  };

  const [taskTitle, setTaskTitle] = useState('');

  const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setTaskTitle(evt.target.value);
  };

  // Первоначальная инициализация массива задач. Получены из интернета.
  useEffect(() => {
    fetch(env.REACT_APP_URL_TASKS_INIT!)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'TASKS_INIT', payload: data });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch, env.REACT_APP_URL_TASKS_INIT]);

  // Добавление задачи
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const newTask = {
      userId: '1',
      title: taskTitle,
      completed: false,
    };

    fetch('http://localhost:3000/api/tasks/add', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'TASK_ADD', payload: data.task });
        console.log('tasks', tasks);

        setTaskTitle('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <div className="container d-flex flex-column align-items-start">
        <form className="row g-3" onSubmit={(evt) => handleSubmit(evt)}>
          <div className="col-auto ">
            <label htmlFor="inputPassword2" className="visually-hidden">
              What needs to be done?
            </label>
            <input type="text" className="form-control" id="inputPassword" placeholder="What needs to be done?" value={taskTitle} onChange={(evt) => handleTitleChange(evt)} />
          </div>
          <div className="col-auto">
            <button type="submit" className="add-btn btn btn-primary mb-3">
              Add
            </button>
          </div>
        </form>
        <div className="to-do-title">Todo List with React Redux</div>
        {tasks.length === 0 ? <h2>Загрузка...</h2> : <TasksList />}
      </div>
    </div>
  );
}

export default MainPage;
