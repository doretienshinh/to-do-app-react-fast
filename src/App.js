import React, { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import TaskList from './components/TodoList/TaskList';

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

  function test() {
    console.log(tasks);
    // console.log(localStorage.getItem('todoListData', JSON.stringify(tasks)));
    // localStorage.setItem('todoListData', JSON.stringify(tasks));
  }
  return (
    <div className="App">
      <div className="container">
        <NewTask className="NewTask" onSaveTaskData={addNewTaskHandler}></NewTask>
        <div className="ListTask">
        <TaskList></TaskList>
        </div>
      </div>
    </div>
  );
}

export default App;
