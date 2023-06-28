const Task = ({ todos }) =>{
    return todos.map((item => {
        return (
            <li className={item.status} key={item.id}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{item.description}</span>
                        <span className="created">{item.created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        );
    }));
};


export default Task;