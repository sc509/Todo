import PropTypes from 'prop-types';

import './tasks-filter.css';

function TasksFilter({ completedItem, activeItem, showAllItem, currentFilter }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={showAllItem} className={currentFilter === 'all' ? 'selected' : ''}>
          All
        </button>
      </li>
      <li>
        <button type="button" onClick={activeItem} className={currentFilter === 'Active task' ? 'selected' : ''}>
          Active
        </button>
      </li>
      <li>
        <button type="button" onClick={completedItem} className={currentFilter === 'completed' ? 'selected' : ''}>
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
  currentFilter: 'all',
};

TasksFilter.propTypes = {
  completedItem: PropTypes.func,
  activeItem: PropTypes.func,
  showAllItem: PropTypes.func,
  currentFilter: PropTypes.string,
};

export default TasksFilter;
