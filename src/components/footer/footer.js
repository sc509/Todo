import PropTypes from 'prop-types';

import './footer.css';
import TasksFilter from '../tasks-filter/tasks-filter';

function Footer({ completedItem, activeItem, showAllItem, deleteComplete, todoCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCount} items left</span>
      <TasksFilter completedItem={completedItem} activeItem={activeItem} showAllItem={showAllItem} />
      <button type="button" className="clear-completed" onClick={deleteComplete}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  completedItem: () => {},
  activeItem: () => {},
  showAllItem: () => {},
  deleteComplete: () => {},
  todoCount: 0,
};

Footer.propTypes = {
  completedItem: PropTypes.func,
  activeItem: PropTypes.func,
  showAllItem: PropTypes.func,
  deleteComplete: PropTypes.func,
  todoCount: PropTypes.number,
};

export default Footer;
