import { useState, useEffect } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import axios from "axios";
import "../../src/App.css"

const ToDoList = () => {
    // BASE_URL where backend is hosted
  const BASE_URL = "http://127.0.0.1:8000";

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get(`${BASE_URL}/Task/`)
      .then(res => {
        setTasks(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const toggleDescriptionVisibility = (index) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const submitToDo = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', taskName);
    formData.append('description', taskDescription);

    axios.post(`${BASE_URL}/Task/`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
      setTaskName("");
      setTaskDescription("");
      fetchTasks();
    })
    .catch(err => console.log(err));
  };

  const updateTaskStatus = (id, isCompleted) => {
    axios.patch(`${BASE_URL}/Task/${id}/`, { isCompleted: !isCompleted })
      .then(res => {
        const updatedTasks = tasks.map(task => 
          task.id === id ? res.data : task
        );
        setTasks(updatedTasks);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-8 min-h-screen bg-white">
      <h1 className="text-4xl font-semibold mb-8 text-black" style={{ fontFamily: 'Courier New, monospace' }}>
        ToDo List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[35%_60%] gap-6">
        <form
          onSubmit={submitToDo}
          method="post"
          className="space-y-6 bg-white text-black p-8 w-full mx-auto rounded-lg shadow-sm border border-black h-[50vh]"
        >
          <div className="flex flex-col">
            <label htmlFor="taskName" className="mb-2 text-lg text-black">
              Task Name
            </label>
            <input
              type="text"
              placeholder="Task name"
              name="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="p-3 rounded-md border border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="taskDescription"
              className="mb-2 text-lg text-black"
            >
              Task Description
            </label>
            <textarea
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              name="taskDescription"
              className="p-3 rounded-md border border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <input
            type="submit"
            value="Add"
            className="w-full py-3 mt-4 bg-black rounded-md text-white text-lg font-medium cursor-pointer hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </form>

        <div className="bg-white text-black p-8 w-full mx-auto rounded-lg shadow-sm border border-black">
          <span className="text-xl text-black font-semibold" style={{ fontFamily: 'Courier New, monospace' }}>Tasks</span>
          <hr className="my-4 border-black" />

          {tasks.map((task, index) => (
            <div className="space-y-4 pt-4" key={task.id}>
              <div className="flex flex-row space-x-4 items-center">
                <input 
                  type="checkbox" 
                  checked={task.isCompleted}
                  onChange={() => updateTaskStatus(task.id, task.isCompleted)} 
                  className="focus:ring-2 focus:ring-black custom-checkbox"
                />
                <span 
                  className={`flex-grow ${task.isCompleted ? "line-through text-gray-500" : ""} transition-all duration-300 ease-in-out`}
                  style={{ fontFamily: 'Courier New, monospace' }}
                >
                  {task.name}
                </span>
                {task.description && (
                  <button
                    onClick={() => toggleDescriptionVisibility(index)}
                    className="ml-auto text-black hover:text-gray-700 focus:outline-none"
                  >
                    {visibleDescriptions[index] ? (
                      <FaCaretUp />
                    ) : (
                      <FaCaretDown />
                    )}
                  </button>
                )}
              </div>
              {visibleDescriptions[index] && task.description && (
                <div className="pl-12 text-gray-700" style={{ fontFamily: 'Courier New, monospace' }}>{"- " + task.description}</div>
              )}
              <hr className="border-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
