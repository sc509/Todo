import "./footer.css";
import TasksFilter from "../tasks-filter/tasks-filter";
import {Component} from "react";


export default class Footer extends Component{
    render() {
        const { completedItem, activeItem, showAllItem, deleteComplete, todoCount} = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">{todoCount} items left</span>
                <TasksFilter completedItem={completedItem} activeItem={activeItem} showAllItem={showAllItem} />
                <button className="clear-completed" onClick={deleteComplete}>Clear completed</button>
            </footer>
        );
    }
}