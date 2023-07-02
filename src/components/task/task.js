import { Component } from "react";
import PropTypes from "prop-types";
export default class Task extends Component {
    static defaultProps = {
        todo: {
            complete: false,
            status: "Active task",
            description: "",
            created: new Date(),
            id: 0
        },
        onDeleted: () => {},
        onToggleCompleted: () => {}
    };
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
                    <input className="toggle" type="checkbox" defaultChecked={complete} onClick={() => onToggleCompleted(todo.id)} />
                    <label>
                        <span className="description">{todo.description}</span>
                        <span className="created">{todo.created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={() => onDeleted(todo.id)}></button>
                </div>
                <input type="text" className="edit" defaultValue="Editing task" />
            </li>
        );
    }
}

Task.propTypes = {
    todo: PropTypes.shape({
        complete: PropTypes.bool,
        status: PropTypes.string,
        description: PropTypes.string,
        created: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.string
        ]),
        id: PropTypes.number
    }),
    onDeleted: PropTypes.func,
    onToggleCompleted: PropTypes.func
};