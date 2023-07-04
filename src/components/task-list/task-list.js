import Task from '../task/task';
import './task-list.css';

function TaskList({ todoData, onDeleted, onToggleCompleted }) {
  return (
    <ul className="todo-list">
      {todoData.map((todo) => (
        <Task key={todo.id} todo={todo} onDeleted={onDeleted} onToggleCompleted={onToggleCompleted} />
      ))}
    </ul>
  );
}

export default TaskList;
