import PropTypes from 'prop-types';
import { useState } from 'react';

import './new-task-form.css';

function NewTaskForm({ onItemAdded }) {
  const [label, setLabel] = useState('');
  const [sec, setSec] = useState('');
  const [min, setMin] = useState('');

  const onLabelChange = (e) => {
    const { value } = e.target;
    setLabel(value);
  };

  const onSecChange = (e) => {
    const { value } = e.target;
    setSec(value);
  };

  const onMinChange = (e) => {
    const { value } = e.target;
    setMin(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const time = (parseInt(min, 10) || 0) * 60 + (parseInt(sec, 10) || 0);
    onItemAdded(label, time);
    setLabel('');
    setMin('');
    setSec('');
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <input
          className="new-todo"
          type="text"
          placeholder="What needs to be done?"
          onChange={onLabelChange}
          value={label}
          required
        />
        <input
          type="text"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={onSecChange}
          pattern="\d*"
          title="Please enter only numbers."
        />
        <input
          type="text"
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={onMinChange}
          pattern="\d*"
          title="Please enter only numbers."
        />
        <input type="submit" style={{ display: 'none' }} />
      </form>
    </header>
  );
}

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};

export default NewTaskForm;
