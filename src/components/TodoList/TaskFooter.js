import react from "react";
import './TaskFooter.css';

const TaskFooter = () => {

    const doneAllsubmit = () => {
        const TASK_DATA = JSON.parse(localStorage.getItem('todoListData'));
        TASK_DATA.forEach(element => {
            element.done = true;
        })
        localStorage.setItem('todoListData', JSON.stringify(TASK_DATA));
    }
    const removeAllsubmit = () => {
        localStorage.setItem('todoListData', JSON.stringify(null));
    }
    return (
        <div className="root_taskFooter">
            <div className="taskFooter">
                <div>Bulk Action:</div>
                <div className="button_taskFooter">
                    <form onSubmit={doneAllsubmit}>
                        <button className="detail_button_taskFooter" type='submit'>Done</button>
                    </form>
                    <form onSubmit={removeAllsubmit}>
                        <button className="remove_button_taskFooter">Remove</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskFooter;