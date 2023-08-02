import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';
import './app.css';

function App() {
  const [maxId, setMaxId] = useState(1);

  const createTodoItem = (text, time = 0) => {
    const created = new Date();
    return {
      status: 'Active task',
      description: text,
      created,
      time,
      complete: false,
      id: maxId,
    };
  };

  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('all');

  const deleteItem = (id) => {
    setTodoData((prevState) => {
      const idx = prevState.findIndex((el) => el.id === id);
      const oldItem = prevState[idx];

      if (oldItem.timerId != null) {
        clearInterval(oldItem.timerId);
      }

      return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
    });
  };

  const addItem = (text, time) => {
    if (text.trim() === '') {
      return;
    }

    const newItem = createTodoItem(text, time);
    setMaxId(maxId + 1);

    setTodoData((prevState) => {
      return [...prevState, newItem];
    });
  };

  const onToggleCompleted = (id) => {
    setTodoData((prevState) => {
      const idx = prevState.findIndex((el) => el.id === id);
      const oldItem = prevState[idx];
      const newItem = { ...oldItem, complete: !oldItem.complete };
      return [...prevState.slice(0, idx), newItem, ...prevState.slice(idx + 1)];
    });
  };

  const deleteComplete = () => {
    setTodoData((prevState) => {
      return prevState.filter((completed) => !completed.complete);
    });
  };

  const completedItem = () => {
    setFilter('completed');
  };

  const activeItem = () => {
    setFilter('Active task');
  };

  const showAllItem = () => {
    setFilter('all');
  };

  const onTimeDecrease = (id) => {
    setTodoData((prevState) => {
      const idx = prevState.findIndex((el) => el.id === id);
      const oldItem = prevState[idx];

      if (!oldItem) {
        return prevState;
      }

      const newTime = oldItem.time > 0 ? oldItem.time - 1 : 0;
      const newItem = { ...oldItem, time: newTime };
      return [...prevState.slice(0, idx), newItem, ...prevState.slice(idx + 1)];
    });
  };

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
      <NewTaskForm onItemAdded={addItem} />
      <section className="main">
        <TaskList
          todoData={visibleItems}
          onDeleted={deleteItem}
          onToggleCompleted={onToggleCompleted}
          onTimeDecrease={onTimeDecrease}
        />
        <Footer
          completedItem={completedItem}
          activeItem={activeItem}
          showAllItem={showAllItem}
          deleteComplete={deleteComplete}
          todoCount={todoCount}
          currentFilter={filter}
        />
      </section>
    </section>
  );
}

export default App;
