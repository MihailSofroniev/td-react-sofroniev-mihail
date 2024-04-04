import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filterTasks = (filter) => {
    setFilter(filter);
  };

  let filteredTasks = tasks;
  if (filter === 'done') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'undone') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  return (
    <div class="content">
      <h1 class="title">Todo List</h1>
      <TaskForm addTask={addTask} />
      <div class="filterButtons">
        <button onClick={() => filterTasks('all')} data-cy="filter-btn-all">All</button>
        <button onClick={() => filterTasks('done')} data-cy="filter-btn-done">Complétées</button>
        <button onClick={() => filterTasks('undone')} data-cy="filter-btn-undone">Non complétées</button>
      </div>
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
