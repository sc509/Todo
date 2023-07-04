import PropTypes from 'prop-types';

function Task({ todo, onDeleted, onToggleCompleted }) {
  const { complete, status } = todo;

  let classNames = status;
  if (complete) {
    classNames = 'completed';
  } else if (classNames !== 'editing') {
    classNames = 'Active Task';
  }

  return (
    <li className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={complete}
          onClick={() => onToggleCompleted(todo.id)}
          id="toggle"
        />
        <label htmlFor="toggle">
          <span className="description">{todo.description}</span>
          <span className="created">{todo.created}</span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button type="button" className="icon icon-destroy" onClick={() => onDeleted(todo.id)} />
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
