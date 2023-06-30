import React, { Component } from "react";
import "./app.css";
import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

export default class App extends Component{
    state = {
        todoData: [
            { status: "completed", description: "Completed task", created: "created 17 seconds ago", id: 1 },
            { status: "editing", description: "Editing task", created: "created 5 minutes ago", id: 2 },
            { description: "Active task", created: "created 10 minutes ago", id: 3 },
            { status: "completed", description: "Completed task", created: "created 17 seconds ago", id: 4 },
            { status: "completed", description: "Completed task", created: "created 17 seconds ago", id: 5 },
            { status: "completed", description: "Completed task", created: "created 17 seconds ago", id: 6 },
            { status: "completed", description: "Completed task", created: "created 17 seconds ago", id: 7 },
        ],
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1),
            ];
            console.log(newArray)
            return {
                todoData: newArray
            };
        });
    };


    render() {
        return (
            <section className="todoapp">
                <NewTaskForm />
                <section className="main">
                    <TaskList todoData={this.state.todoData} onDeleted={this.deleteItem} />
                    <Footer />
                </section>
            </section>
        );
    }
}

