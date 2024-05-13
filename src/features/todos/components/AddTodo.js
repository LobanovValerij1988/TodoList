import { useState } from "react";
import { useDispatch } from "react-redux";

import { todoAdded } from "../actionsTodo";

export const AddTodo = () => {
  const [task, setTask] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleChangeTaskName = (e) => setTask(e.target.value);
  const handleChangeTaskDescription = (e) => setTaskDescription(e.target.value);

  const handleKeyDown = async (e) => {
    // delete spaces
    const trimmedTask = task.trim();
    // If the user pressed the Enter key:
    if (e.which === 13) {
      if (!trimmedTask) {
        alert("Task can not be empty");
        return;
      }
      const trimmedDescription = taskDescription.trim();
      dispatch(
        todoAdded({ task: trimmedTask, description: trimmedDescription })
      );
      // And clear out the text input
      setTask("");
      setTaskDescription("");
    }
  };

  return (
    <>
      <input
        className="new-todo"
        placeholder="Enter task and press Enter"
        value={task}
        onChange={handleChangeTaskName}
        onKeyDown={handleKeyDown}
      />
      <input
        className="new-todo"
        placeholder="Enter description and press Enter"
        value={taskDescription}
        onChange={handleChangeTaskDescription}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
