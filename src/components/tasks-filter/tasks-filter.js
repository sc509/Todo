import PropTypes from 'prop-types';

import './tasks-filter.css';

function TasksFilter({ completedItem, activeItem, showAllItem }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" className="selected" onClick={showAllItem}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={activeItem}>
          Active
        </button>
      </li>
      <li>
        <button type="button" onClick={completedItem}>
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.defaultProps = {
  completedItem: () => {},
  activeItem: () => {},
  showAllItem: () => {},
};

TasksFilter.propTypes = {
  completedItem: PropTypes.func,
  activeItem: PropTypes.func,
  showAllItem: PropTypes.func,
};

export default TasksFilter;
