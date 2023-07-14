import PropTypes from 'prop-types';
import './task.css';

function Task({ todo, onDeleted, onToggleCompleted, startTimer, stopTimer }) {
  const { complete, status } = todo;

  let classNames = status;
  if (complete) {
    classNames = 'completed';
  } else if (classNames !== 'editing') {
    classNames = 'Active Task';
  }

  const handleToggle = () => {
    onToggleCompleted(todo.id);
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
            <button type="button" className="icon icon-play" onClick={startTimer} />
            <button type="button" className="icon icon-pause" onClick={stopTimer} />
            <span>{`${Math.floor(todo.time / 60)
              .toString()
              .padStart(2, '0')}:${Math.floor(todo.time % 60)
              .toString()
              .padStart(2, '0')}`}</span>
          </span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
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
  },
  onDeleted: () => {},
  onToggleCompleted: () => {},
};

Task.propTypes = {
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

export default Task;
