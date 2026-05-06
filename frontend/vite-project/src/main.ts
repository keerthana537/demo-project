import './style.css';

document.querySelector('#app')!.innerHTML = `
  <div>
    <h1>Task Manager App</h1>

    <input id="taskInput" placeholder="Enter task" />

    <select id="priority">
      <option>Low</option>
      <option>Medium</option>
      <option>High</option>
    </select>

    <button id="addBtn">Add Task</button>

    <div id="taskList"></div>
  </div>
`;