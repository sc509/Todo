import { Component } from "react";

export default class Task extends Component {
    state = {
        complete: false
    };

    onLabelClick = () => {
        this.setState(prevState => ({
            complete: !prevState.complete
        }));
    };

    render() {
        const { todo, onDeleted } = this.props;
        const { complete } = this.state;

        let classNames = todo.status;
        if (complete) {
            classNames = 'completed';
        } else if (classNames !== "editing") {
            classNames = "Active Task";
        }

        return (
            <li className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={complete} onChange={this.onLabelClick} />
                    <label onClick={this.onLabelClick}>
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
