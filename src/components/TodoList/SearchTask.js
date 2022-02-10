import React, { useState } from 'react';
import './SearchTask.css';

const SearchTask = (props) => {

    const searchChangeHandler = (event) =>{
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='input_search_task'>
            <input type='text' placeholder='Search . . .' onChange={searchChangeHandler}></input>
        </div>
    )
}

export default SearchTask;