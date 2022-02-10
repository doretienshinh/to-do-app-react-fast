import react from "react";
import './TaskFooter.css';

const TaskFooter = () => {
    return (
        <div className="root_taskFooter">
            <div className="taskFooter">
                <div>Bulk Action:</div>
                <div className="button_taskFooter">
                    <div>
                        <button className="detail_button_taskFooter">Done</button>
                    </div>
                    <div>
                        <button className="remove_button_taskFooter">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskFooter;