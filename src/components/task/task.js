import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './task.css';

class Task extends Component {
  timer = null;

  startTimer = () => {
    const { onTimeDecrease } = this.props;
    if (this.timer === null) {
      this.timer = setInterval(() => {
        onTimeDecrease();
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  render() {
    const { todo, onDeleted, onToggleCompleted } = this.props;
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

    const uniqueId = `toggle${todo.id}`;

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={complete} onClick={handleToggle} id={uniqueId} required />
          <label>
            <span className="description">{todo.description}</span>
            <span className="created">
              {todo.created}
              <button type="button" className="icon icon-play" onClick={this.startTimer} />
              <button type="button" className="icon icon-pause" onClick={this.stopTimer} />
              <span>{`${Math.floor(todo.time / 60)
                .toString()
                .padStart(2, '0')}:${(todo.time % 60).toString().padStart(2, '0')}`}</span>
            </span>
          </label>
          <button type="button" className="icon icon-edit" />
          <button type="button" className="icon icon-destroy" onClick={onDeleted} />
        </div>
        <input type="text" className="edit" defaultValue="Editing task" />
      </li>
    );
  }
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
