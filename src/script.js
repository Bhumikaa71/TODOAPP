const addButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const task = taskInput.value.trim(); 
    
    if (task) {
        createTaskElement(task);
        taskInput.value = "";
        
    } else {
        alert('please enter the task');
    }
}

addButton.addEventListener('click', addTask);

function createTaskElement(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    listItem.classList.add('p-2', 'bg-white', 'mb-8', 'rounded-xl', 'text-5xl'); 
    taskList.appendChild(listItem);
}

function saveTasks() {
    let task = [];
    taskList.querySelectorAll('li').forEach(function(item) {
        task.push(item.textContent);
    });
}
