import React, { useState } from 'react';
import './TaskItem.css';

const TaskItem = (props) => {
    return (
        <div className="card_taskItem">
            <div className="task_title_taskItem">
                <div class="checkbox">
                    <input type="checkbox" id="checkbox" name="" value="" />
                    <label for="checkbox"><span>{props.title}</span></label>
                </div>
            </div>
            <div className="button_taskItem">
                <div>
                    <button className="detail_button_taskItem">Detail</button>
                </div>
                <div>
                    <button className="remove_button_taskItem">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default TaskItem;