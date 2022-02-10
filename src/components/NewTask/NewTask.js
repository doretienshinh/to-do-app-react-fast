import React, { useState } from 'react';
import './NewTask.css';

const NewTask = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredPiority, setEnteredPiority] = useState(2);
    // set default time
    const date = new Date();
    const futureDate = date.getDate();
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-CA');

    const [enteredDate, setEnteredDate] = useState(defaultValue);

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
    const submitHandler = (event) => {
        event.preventDefault();
        const taskData = {
            id: Math.random().toString(),
            title: enteredTitle,
            description: enteredDescription,
            piority: enteredPiority,
            date: enteredDate,
        }
        props.onSaveTaskData(taskData);
        setEnteredTitle('');
        setEnteredDescription('');
        setEnteredDate(defaultValue);
        setEnteredPiority(2);
    }
    
    
    return <div className='root'>
        <div className='padding'>
            <div className='Header'>Header</div>
            <form onSubmit={submitHandler}>
                <div>
                    <div className='input-title'>
                        <input type='text' placeholder='Add new task ...' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='description'>
                        <label>Description</label>
                        <textarea value={enteredDescription} onChange={descriptionChangeHandler}></textarea>
                    </div>
                    <div className='date-piority'>
                        <div className='date'>
                            <label>Due Date</label>
                            <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                        </div>
                        <div className='piority'>
                            <label>Piority</label>
                            <select id="piority" onChange={piorityChangeHandler} value={enteredPiority}>
                                <option value="1">low</option>
                                <option value="2">normal</option>
                                <option value="3">high</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='add-button'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    </div>
}

export default NewTask;