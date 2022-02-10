import React, { useState } from 'react';
import './TaskList.css';
import SearchTask from './SearchTask';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    if (props.items == null) {
        return <div className="">Found no task.</div>
    }
    else
        return (
            <div className='root_task_list'>
                <div className='padding_task_list'>
                    <div className='header_task_list'>To Do List</div>
                    <SearchTask></SearchTask>
                    {props.items.map((expense) => (
                        <TaskItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}
                </div>
            </div>
        )
}

export default TaskList;