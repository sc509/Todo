import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './task.css';

function Task({ todo, onDeleted, onToggleCompleted, onTimeDecrease }) {
  const timerId = useRef(null);

  const startTimer = () => {
    if (timerId.current === null) {
      timerId.current = setInterval(() => {
        console.log('timer');
        onTimeDecrease();
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  useEffect(() => {
    return stopTimer;
  }, []);

  const { complete, status } = todo;

  let classNames = status;
  if (complete) {
    classNames = 'completed';
  } else if (classNames !== 'editing') {
    classNames = 'Active Task';
  }

  const handleToggle = () => {
    onToggleCompleted();
  };

  const handleDelete = () => {
    stopTimer();
    onDeleted();
  };

  const uniqueId = `toggle${todo.id}`;

  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={complete} onChange={handleToggle} id={uniqueId} required />
        <label>
          <span className="description">{todo.description}</span>
          <span className="created">
            {todo.created}
            <button type="button" className="icon icon-play" onClick={startTimer} />
            <button type="button" className="icon icon-pause" onClick={stopTimer} />
            <span>{`${Math.floor(todo.time / 60)
              .toString()
              .padStart(2, '0')}:${(todo.time % 60).toString().padStart(2, '0')}`}</span>
          </span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={handleDelete} />
      </div>
      <input type="text" className="edit" defaultValue="Editing task" />
    </li>
  );
}

Task.defaultProps = {
  todo: {
    complete: false,
    status: 'Active task',
    description: '',
    created: new Date(),
    id: 0,
    time: 0,
  },
  onDeleted: () => {},
  onToggleCompleted: () => {},
  onTimeDecrease: () => {},
};

Task.propTypes = {
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

export default Task;
