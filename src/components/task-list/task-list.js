import { Component } from 'react';
import Task from '../task/task';
import './task-list.css';
import PropTypes from 'prop-types';

export default class TaskList extends Component {
  static defaultProps = {
    completedItem: () => {},
    activeItem: () => {},
    showAllItem: () => {},
  };

  render() {
    const { todoData, onDeleted, onToggleCompleted } = this.props;

    return (
      <ul className="todo-list">
        {todoData.map((todo) => (
          <Task key={todo.id} todo={todo} onDeleted={onDeleted} onToggleCompleted={onToggleCompleted} />
        ))}
      </ul>
    );
  }
}

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      complete: PropTypes.bool,
      status: PropTypes.string,
      description: PropTypes.string,
      created: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
      id: PropTypes.number,
    })
  ),
  onDeleted: PropTypes.func,
  onToggleCompleted: PropTypes.func,
};
