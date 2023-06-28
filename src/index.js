import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NewTaskForm from "./components/new-task-form/new-task-form";
import TaskList from "./components/task-list/task-list";
import Footer from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <section className="todoapp">
    <NewTaskForm />
     <section className="main">
     <TaskList />
     <Footer />
     </section>
    </section>
);


