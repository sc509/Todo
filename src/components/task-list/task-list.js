import { Component } from "react";
import Task from "../task/task";
import "./task-list.css";

export default class TaskList extends Component {
    render() {
        const { todoData, onDeleted, onToggleCompleted } = this.props;

        return (
            <ul className="todo-list">
                {todoData.map(todo => (
                    <Task key={todo.id}
                          todo={todo}
                          onDeleted={onDeleted}
                          onToggleCompleted={onToggleCompleted}
                    />
                ))}
            </ul>
        );
    }
}
