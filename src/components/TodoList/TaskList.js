import React, { useState } from 'react';
import './TaskList.css';
import TaskItem from './TaskItem';

const TaskList = (props) => {
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
                        />
                    ))}
            </div>
        )
}

export default TaskList;