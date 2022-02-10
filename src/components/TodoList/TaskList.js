import React, { useState } from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = (props) => {

    const changeDone = (id) =>{
        props.changeDone(id);
    }
    const removeTask = (id) =>{
        props.removeTask(id);
    }
    if (props.items == null) {
        return <div className="">Found no task.</div>
    }
    else
        return (
            <div className='root_taskList'>
                    {props.items.map((task) => (
                        <TaskItem
                            key={task.id}
                            items={task}
                            changeDone = {changeDone}
                            removeTask = {removeTask}
                        />
                    ))}
            </div>
        )
}

export default TaskList;