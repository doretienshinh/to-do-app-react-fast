import React from "react";
import './TaskField.css';
import SearchTask from './SearchTask';
import TaskList  from "./TaskList";
import TaskFooter from "./TaskFooter";

const TaskField = (props) => {

    const changeDone = (id) =>{
        props.changeDoneTask(id);
    }

    return (
        <div className='root_task_list'>
            <div className='padding_task_list'>
                <div className='header_task_list'>To Do List</div>
                <SearchTask></SearchTask>
                <TaskList items={props.items} changeDone = {changeDone}></TaskList>
            </div>
            <TaskFooter></TaskFooter>
        </div>
    )
}

export default TaskField;