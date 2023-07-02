import "./tasks-filter.css"
import {Component} from "react";

export default class TasksFilter extends Component{
    render() {
        const { completedItem, activeItem, showAllItem} = this.props;
        return (
            <ul className="filters">
                <li>
                    <button className="selected" onClick={showAllItem}>All</button>
                </li>
                <li>
                    <button onClick={activeItem}>Active</button>
                </li>
                <li>
                    <button onClick={completedItem}>Completed</button>
                </li>
            </ul>
        );
    }
}