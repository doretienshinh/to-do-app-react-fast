import React, { useState } from 'react';
import './SearchTask.css';

const SearchTask = (props) => {
    return (
        <div className='input_search_task'>
            <input type='text' placeholder='Search . . .'></input>
        </div>
    )
}

export default SearchTask;