import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/task/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="flex items-center justify-between p-3 rounded-lg 
                 bg-gray-100 dark:bg-gray-800 shadow-sm"
    >
      <span
        className={`flex-1 mr-3 ${
          task.completed
            ? "line-through text-gray-500 dark:text-gray-400"
            : "text-gray-900 dark:text-gray-100"
        }`}
      >
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleTask(task.id))}
          className="px-2 py-1 text-sm rounded-lg 
                     bg-green-500 text-white hover:bg-green-600 transition"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="px-2 py-1 text-sm rounded-lg 
                     bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
