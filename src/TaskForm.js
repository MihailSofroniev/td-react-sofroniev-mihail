import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form data-cy="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Indiquez la nouvelle tache..."
        data-cy="task-input"
        className = "taskToAdd"
      />
      <button type="submit" data-cy="add-task-btn">Add Task</button>
    </form>
  );
}

export default TaskForm;
