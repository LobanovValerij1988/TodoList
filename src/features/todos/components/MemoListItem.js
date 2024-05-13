import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { todoToggle, todoRemove } from "../actionsTodo";
import { ReactComponent as TimesSolid } from "../svg/time-solid.svg";
import { Checkbox } from "../../../sharedComponents/Checkbox";
import { Button } from "../../../sharedComponents/Button";

export const MemoListItem = memo(function TodoListItem({ id }) {
  const todo = useSelector((state) =>
    state.todos.entities.find((entity) => entity.id === id)
  );
  const { task, isDone, description } = todo;

  const dispatch = useDispatch();

  const handleIsDoneChanged = () => {
    dispatch(todoToggle(todo.id));
  };

  const onDelete = () => {
    dispatch(todoRemove(todo.id));
  };

  const taskClass = isDone ? "todo-task-done" : "";

  return (
    <div className="view">
      <div className="segment label">
        <Checkbox isChecked={isDone} onChange={handleIsDoneChanged} />
        <div className="todo-text">
          <div className={taskClass}> TASK: {task}</div>
          <div className="todo-description"> description: {description} </div>
        </div>
      </div>
      <div className="segment buttons">
        <Button className="destroy" onClick={onDelete}>
          <TimesSolid />
        </Button>
      </div>
    </div>
  );
});
