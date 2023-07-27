import React, { useState } from 'react';
import './App.css';

//Main Function
function App(){
  const[tasks, setTasks] = useState([]); //store list of tasks
  const[newTask, setnewTask] = useState(''); //string that will hold new task
  
  const addTask =()=> 
  { 
    if (newTask.trim() === '') return; // Check if the newTask is not empty or only contains whitespace
    setTasks([...tasks, { text: newTask, completed: false }]); // Create a new task object and add it to the tasks array
    setnewTask(''); // Reset the newTask state to an empty string, clearing the input field
  };

  const removeTask = (index) =>
  {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array using the spread operator
    updatedTasks.splice(index, 1); // Remove the task at the specified index from the copied array
    setTasks(updatedTasks); // Update the tasks state with the modified array, effectively removing the task from the list
  };

  const toggleTaskCompletion =(index) =>
  {
    const updatedTasks = [...tasks]; // Create a copy of the tasks array using the spread operator
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle the completed property of the task at the specified index
    setTasks(updatedTasks); // Update the tasks state with the modified array, effectively toggling the task completion status
  };

return (
  <div className='App'>
    <h1>To-do List</h1>
    <div className='task-input'>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add</button>
    </div>
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index}>
        <span
        className={task.completed ? 'completed' : ''}
        onClick={() => toggleTaskCompletion(index)}
        >
        {task.text}
        </span>
        <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;
