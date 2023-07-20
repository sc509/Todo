import PropTypes from 'prop-types';
import { Component } from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    sec: '',
    min: '',
  };

  onLabelChange = (e) => {
    const { value } = e.target;
    this.setState({
      label: value,
    });
  };

  onSecChange = (e) => {
    const { value } = e.target;
    this.setState({
      sec: value,
    });
  };

  onMinChange = (e) => {
    const { value } = e.target;
    this.setState({
      min: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { label, min, sec } = this.state;
    const { onItemAdded } = this.props;

    const time = (parseInt(min, 10) || 0) * 60 + (parseInt(sec, 10) || 0);
    onItemAdded(label, time);
    this.setState({
      label: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { label, min, sec } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}
            required
          />
          <input
            type="text"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={sec}
            onChange={this.onSecChange}
            pattern="\d*"
            title="Please enter only numbers."
          />
          <input
            type="text"
            className="new-todo-form__timer"
            placeholder="Min"
            value={min}
            onChange={this.onMinChange}
            pattern="\d*"
            title="Please enter only numbers."
          />
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </header>
    );
  }
}

NewTaskForm.defaultProps = {
  onItemAdded: () => {},
};

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func,
};
