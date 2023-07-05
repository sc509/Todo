import PropTypes from 'prop-types';

import Task from '../task/task';
import './task-list.css';

function TaskList({ todoData, onDeleted, onToggleCompleted }) {
  return (
    <ul className="todo-list">
      {todoData.map((todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          todo={todo}
          onDeleted={() => onDeleted(todo.id)}
          onToggleCompleted={() => onToggleCompleted(todo.id)}
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
};

TaskList.propTypes = {
  todo: PropTypes.shape({
    complete: PropTypes.bool,
    status: PropTypes.string,
    description: PropTypes.string,
    created: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    id: PropTypes.number,
  }),
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};

export default TaskList;
