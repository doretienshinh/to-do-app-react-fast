import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = (props) => {

    const [checked, setChecked] = useState(props.items.done);
    const [removed, setRemoved] = useState(false);
    const [displayDetail, setDisplayDetail] = useState(false);

    const [enteredTitle, setEnteredTitle] = useState(props.items.title);
    const [enteredDescription, setEnteredDescription] = useState(props.items.description);
    const [enteredPiority, setEnteredPiority] = useState(props.items.piority);

    const [enteredDate, setEnteredDate] = useState(props.items.date);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const piorityChangeHandler = (event) => {
        setEnteredPiority(event.target.value);
    }
    const toggleDetail = () => {
        setDisplayDetail(!displayDetail);
    }
    const changeDone = () => {
        setChecked(!checked);
        props.changeDone(props.items.id);
    }
    const removeTask = () => {
        setRemoved(true);
        props.removeTask(props.items.id);
    }
    const submitHandlerUpdate = () => {
        const TASK_DATA = JSON.parse(localStorage.getItem('todoListData'));
        TASK_DATA.forEach(element => {
            if(element.id === props.items.id){
                element.title = enteredTitle;
                element.description = enteredDescription;
                element.piority = enteredPiority;
                element.date = enteredDate;
                element.done = element.done;
            }
        })
        localStorage.setItem('todoListData', JSON.stringify(TASK_DATA));
    }
    return (
        <div>
            {!removed && <>

                <div className="card_taskItem">
                    <div className="task_title_taskItem">
                        <div className="checkbox">
                            <input type="checkbox" id={`custom-checkbox-${props.items.id}`} onChange={changeDone} checked={checked} />
                            <label htmlFor={`custom-checkbox-${props.items.id}`}><span>{props.items.title}</span></label>
                        </div>
                    </div>
                    <div className="button_taskItem">
                        <div>
                            <button className="detail_button_taskItem" onClick={toggleDetail}>Detail</button>
                        </div>
                        <div>
                            <button className="remove_button_taskItem" onClick={removeTask}>Remove</button>
                        </div>
                    </div>
                </div>
                {
                    displayDetail &&
                    <div className='detail_taskItem'>
                        <form onSubmit={submitHandlerUpdate}>
                            <div>
                                <div className='input_title_new_task'>
                                    <input type='text' placeholder='Add new task . . .' value={enteredTitle} onChange={titleChangeHandler} />
                                </div>
                                <div className='description_new_task'>
                                    <label>Description</label>
                                    <textarea value={enteredDescription} onChange={descriptionChangeHandler}></textarea>
                                </div>
                                <div className='date_piority_new_task'>
                                    <div className='date_new_task'>
                                        <label>Due Date</label>
                                        <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                                    </div>
                                    <div className='piority_new_task'>
                                        <label>Piority</label>
                                        <select id="piority" onChange={piorityChangeHandler} value={enteredPiority}>
                                            <option value="1">low</option>
                                            <option value="2">normal</option>
                                            <option value="3">high</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='add-button_new_task'>
                                <button type='submit'>Update</button>
                            </div>
                        </form>
                    </div>
                }</>
            }
        </div>
    )
}

export default TaskItem;