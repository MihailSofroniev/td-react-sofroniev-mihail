import React from 'react';

function TaskList({ tasks, toggleTask, filter, deleteTask }) {
  let filteredTasks = tasks;
  if (filter === 'done') {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === 'undone') {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  return (
    <ul data-cy="task-list">
      {filteredTasks.map(task => (
        <li
          key={task.id}
          onClick={(e) => {e.stopPropagation(); toggleTask(task.id)}}
          className={task.completed ? 'completed' : ''}
          data-cy="task-item"
        >
          {task.text}
          <button class="btnDelete" onClick={(e) => {e.stopPropagation();deleteTask(task.id)}}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
