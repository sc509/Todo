import PropTypes from 'prop-types';
import { Component } from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    const { value } = e.target;
    this.setState({
      label: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onItemAdded } = this.props;
    const { label } = this.state;
    onItemAdded(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="item-add-form" onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onLabelChange}
            value={label}
          />
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
