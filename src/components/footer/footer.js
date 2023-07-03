import './footer.css';
import TasksFilter from '../tasks-filter/tasks-filter';
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
  static defaultProps = {
    completedItem: () => {},
    activeItem: () => {},
    showAllItem: () => {},
    deleteComplete: () => {},
    todoCount: 0,
  };
  render() {
    const { completedItem, activeItem, showAllItem, deleteComplete, todoCount } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{todoCount} items left</span>
        <TasksFilter completedItem={completedItem} activeItem={activeItem} showAllItem={showAllItem} />
        <button className="clear-completed" onClick={deleteComplete}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  completedItem: PropTypes.func,
  activeItem: PropTypes.func,
  showAllItem: PropTypes.func,
  deleteComplete: PropTypes.func,
  todoCount: PropTypes.number,
};
