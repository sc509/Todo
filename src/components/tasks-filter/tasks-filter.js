import "./tasks-filter.css"
import {Component} from "react";
import PropTypes from "prop-types";
export default class TasksFilter extends Component{
    static defaultProps = {
        completedItem: () => {},
        activeItem: () => {},
        showAllItem: () => {}
    };
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

TasksFilter.propTypes = {
    completedItem: PropTypes.func,
    activeItem: PropTypes.func,
    showAllItem: PropTypes.func
};