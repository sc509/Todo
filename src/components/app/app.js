import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Learn React', 10),
      this.createTodoItem('Learn Angular', 20),
      this.createTodoItem('Learn Vue', 30),
      this.createTodoItem('Learn NextJs', 40),
    ],
    filter: 'all',
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];

      if (oldItem.timerId != null) {
        clearInterval(oldItem.timerId);
      }

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text, time) => {
    if (text.trim() === '') {
      return;
    }

    const newItem = this.createTodoItem(text, time);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, complete: !oldItem.complete };
      const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  deleteComplete = () => {
    this.setState(({ todoData }) => {
      const result = todoData.filter((completed) => !completed.complete);
      return {
        todoData: result,
      };
    });
  };

  completedItem = () => {
    this.setState({ filter: 'completed' });
  };

  activeItem = () => {
    this.setState({ filter: 'Active task' });
  };

  showAllItem = () => {
    this.setState({ filter: 'all' });
  };

  startTimer = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex((el) => el.id === id);
      const oldItem = state.todoData[idx];
      if (oldItem.timerId != null) {
        return {};
      }
      const timerId = setInterval(() => {
        this.setState((currentState) => {
          const currentIdx = currentState.todoData.findIndex((el) => el.id === id);
          const currentOldItem = currentState.todoData[currentIdx];
          if (currentOldItem.time <= 1) {
            clearInterval(timerId);
            const newItem = { ...currentOldItem, time: 0, timerId: null };
            const newArray = [
              ...currentState.todoData.slice(0, currentIdx),
              newItem,
              ...currentState.todoData.slice(currentIdx + 1),
            ];
            return {
              todoData: newArray,
            };
          }
          const newItem = { ...currentOldItem, time: currentOldItem.time - 1 };
          const newArray = [
            ...currentState.todoData.slice(0, currentIdx),
            newItem,
            ...currentState.todoData.slice(currentIdx + 1),
          ];
          return {
            todoData: newArray,
          };
        });
      }, 1000);
      const newItem = { ...oldItem, timerId };
      const newArray = [...state.todoData.slice(0, idx), newItem, ...state.todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  stopTimer = (id) => {
    this.setState((state) => {
      const idx = state.todoData.findIndex((el) => el.id === id);
      const oldItem = state.todoData[idx];
      if (oldItem.timerId == null) {
        return {};
      }
      clearInterval(oldItem.timerId);
      const newItem = { ...oldItem, timerId: null };
      const newArray = [...state.todoData.slice(0, idx), newItem, ...state.todoData.slice(idx + 1)];
      return {
        todoData: newArray,
      };
    });
  };

  createTodoItem(text, time) {
    const created = new Date();
    return {
      status: 'Active task',
      description: text,
      created,
      time,
      complete: false,
      id: this.maxId++,
    };
  }

  render() {
    const { todoData, filter } = this.state;
    const todoCount = todoData.filter((task) => !task.complete).length;
    const visibleItems = todoData
      .map((item) => {
        const createdTimeString = `created ${formatDistanceToNow(item.created, { includeSeconds: true })} ago`;
        return {
          ...item,
          created: createdTimeString,
        };
      })
      .filter((item) => {
        switch (filter) {
          case 'Active task':
            return !item.complete;
          case 'completed':
            return item.complete;
          default:
            return true;
        }
      });

    return (
      <section className="todoapp">
        <NewTaskForm onItemAdded={this.addItem} />
        <section className="main">
          <TaskList
            todoData={visibleItems}
            onDeleted={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
          />
          <Footer
            completedItem={this.completedItem}
            activeItem={this.activeItem}
            showAllItem={this.showAllItem}
            deleteComplete={this.deleteComplete}
            todoCount={todoCount}
            currentFilter={filter}
          />
        </section>
      </section>
    );
  }
}
