import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/task/taskSlice';

const FilterTask = () => {
  const filter = useSelector((state) => state.tasks.filters);
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 mb-6">
      {["all", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition
            ${filter === f 
              ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-white" 
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterTask;
