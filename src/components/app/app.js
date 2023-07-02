import React, { Component } from "react";
import "./app.css";
import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

export default class App extends Component{

    maxId = 100;

    state = {
        todoData: [
           this.createTodoItem('Learn React'),
           this.createTodoItem('Learn Angular'),
           this.createTodoItem('Learn Vue'),
           this.createTodoItem('Learn NextJs'),
        ],
        filter: 'all'
    };

    createTodoItem(text) {
        return{
            status: "Active task",
            description: text,
            created: 'created 17 seconds ago',
            complete:false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1),
            ];
            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    onToggleCompleted = (id) =>{
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem,
                complete: !oldItem.complete};
            const newArray = [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx + 1),
            ];
            return{
                todoData:newArray
            }
        });
    };

   completedItem = () => {
       this.setState({ filter: 'completed' });
   };

    activeItem = () => {
        this.setState({ filter: 'Active task' });
    };

    showAllItem = () => {
        this.setState({filter: 'all'});
    };

    deleteComplete = () =>{
        this.setState(({ todoData }) => {
          const result = todoData.filter(completed => !completed.complete)

            return {
                todoData: result
            };
        });
        };


    render() {
        const completedCount = this.state.todoData.filter(completed => completed.complete).length
        const todoCount = this.state.todoData.length - completedCount;
        const { todoData, filter } = this.state;
        const visibleItems = todoData.filter(item => {
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
                    />
                    <Footer  completedItem={this.completedItem}
                             activeItem={this.activeItem}
                             showAllItem={this.showAllItem}
                             deleteComplete={this.deleteComplete}
                             todoCount={todoCount}
                    />
                </section>
            </section>
        );
    }
}
