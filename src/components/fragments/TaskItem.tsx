import { useDispatch } from "react-redux";
import { toggleTask, removeTask } from "../../features/task/taskSlice";
import { AppDispatch } from "../../store";
import { Task } from "../../features/task/taskSlice";

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md mb-2 shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="mr-2"
        />
        <span
          className={`text-lg ${
            task.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(removeTask(task.id))}
        className="text-red-500 hover:text-red-700 transition duration-200"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
