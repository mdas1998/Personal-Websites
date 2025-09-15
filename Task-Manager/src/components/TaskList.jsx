import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { items, filters } = useSelector((state) => state.tasks);

  const filteredItems = items.filter((task) => {
    if (filters === "completed") return task.completed;
    return true;
  });

  if (filteredItems.length === 0) {
    return <p className="text-gray-600 dark:text-gray-400">No tasks found.</p>;
  }

  return (
    <ul className="space-y-3">
      {filteredItems.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
