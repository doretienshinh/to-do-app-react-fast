import React, { useState } from "react";
import './TaskField.css';
import SearchTask from './SearchTask';
import TaskList from "./TaskList";
import TaskFooter from "./TaskFooter";

const TaskField = (props) => {
    const [searchFilter, setSearchFilter] = useState('');
    const changeDone = (id) => {
        props.changeDoneTask(id);
    }
    const removeTask = (id) => {
        props.removeTask(id);
    }
    const filterChangeHandler = (value) => {
        console.log(value);
        setSearchFilter(value);
    }
    console.log(props.items);
    let filterTask = props.items == null ? null : props.items.filter(element => element.title.search(searchFilter) >= 0);
    return (
        <div className='root_task_list'>
            <div className='padding_task_list'>
                <div className='header_task_list'>To Do List</div>
                <SearchTask onChangeFilter={filterChangeHandler}></SearchTask>
                <TaskList items={filterTask} changeDone={changeDone} removeTask={removeTask}></TaskList>
            </div>
            <TaskFooter></TaskFooter>
        </div>
    )
}

export default TaskField;