import React, { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import TaskField from './components/TodoList/TaskField';

// const TASK_DATA = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     description: "hahahah",
//     piority: 1,
//     date: new Date(2020, 7, 14),
//   }
// ];
const TASK_DATA = JSON.parse(localStorage.getItem('todoListData'));
function App() {

  const [tasks, setTasks] = useState(TASK_DATA);
  localStorage.setItem('todoListData', JSON.stringify(tasks));
  const addNewTaskHandler = (task) => {
    setTasks((prevTasks) => {
      if(tasks != null){
        return [task, ...prevTasks];
      }
      else return[task];
    });
    console.log(tasks);
  };
  const changeDoneTask = (id) =>{
    tasks.forEach(element => {
      if(element.id === id){
        element.done = !element.done;
        localStorage.setItem('todoListData', JSON.stringify(tasks));
      }
    });
  }
  const removeTask = (id) =>{
    let tasksNew = tasks.filter(task => task.id !== id);
    localStorage.setItem('todoListData', JSON.stringify(tasksNew));
  }
  return (
    <div className="App">
      <div className="container">
        <NewTask className="NewTask" onSaveTaskData={addNewTaskHandler}></NewTask>
        <div className="ListTask">
        <TaskField items={tasks} changeDoneTask={changeDoneTask} removeTask={removeTask}></TaskField>
        </div>
      </div>
    </div>
  );
}

export default App;
