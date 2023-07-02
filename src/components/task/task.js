import { Component } from "react";

export default class Task extends Component {


    render() {
        const { todo, onDeleted, onToggleCompleted} = this.props;
        const complete = todo.complete
        let classNames = todo.status;
        if (todo.complete) {
            classNames = 'completed';
        } else if (classNames !== "editing") {
            classNames = "Active Task";
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={complete} onClick={() => onToggleCompleted(todo.id)} />
                    <label>
                        <span className="description">{todo.description}</span>
                        <span className="created">{todo.created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={() => onDeleted(todo.id)}></button>
                </div>
                <input type="text" className="edit" value="Editing task" />
            </li>
        );
    }
}
