import PropTypes from 'prop-types';

import Task from '../task/task';
import './task-list.css';

function TaskList({ todoData, onDeleted, onToggleCompleted, onTimeDecrease }) {
  return (
    <ul className="todo-list">
      {todoData.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          todo={todo}
          onDeleted={() => onDeleted(todo.id)}
          onToggleCompleted={() => onToggleCompleted(todo.id)}
          onTimeDecrease={() => onTimeDecrease(todo.id)}
        />
      ))}
    </ul>
  );
}

TaskList.defaultProps = {
  todo: {
    complete: false,
    status: 'Active task',
    description: '',
    created: new Date(),
    id: 0,
  },
  onDeleted: () => {},
  onToggleCompleted: () => {},
  onTimeDecrease: () => {},
};

TaskList.propTypes = {
  todo: PropTypes.shape({
    complete: PropTypes.bool,
    status: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    id: PropTypes.number,
    time: PropTypes.number,
  }),
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
  onTimeDecrease: PropTypes.func,
};

export default TaskList;
