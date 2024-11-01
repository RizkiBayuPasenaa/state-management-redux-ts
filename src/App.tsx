import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./features/task/taskSlice";
import TaskList from "./components/fragments/TaskList";
import { AppDispatch } from "./store";

function App() {
  const [taskText, setTaskText] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Task Manager + Redux + TS</h1>
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
        />
        <button
          onClick={handleAddTask}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Task
        </button>
      </div>
      <TaskList />
    </div>
  );
}

export default App;
