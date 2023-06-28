import Task from "../task/task";
import './task-list.css'
const TaskList = () => {
    const todoData = [
        {status: "completed", description: 'Completed task', created: "created 17 seconds ago", id:1},
        {status: "editing", description: 'Editing task', created: "created 5 minutes ago", id:2},
        {description: 'Active task', created: "created 10 minutes ago", id:3},
    ];
    return (
        <ul className="todo-list">
        <Task todos={todoData} />
        </ul>
    );
};

export default TaskList;