// Get references to the input field and the task list container
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the input value and trim whitespace

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('complete-checkbox');
    
    // Create span for task text
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = taskText;

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    // Append the checkbox to the list item
    listItem.appendChild(checkbox);

    // Append the span item to the next task
    listItem.appendChild(span);

    // Append the delete button to the list item
    listItem.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
}

// Optional: You can add an event listener for the Enter key
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// This listens for checkbox changes inside the task list
taskList.addEventListener('change', (event) => {
    if (event.target.classList.contains('complete-checkbox')) {
        const taskText = event.target.nextElementSibling;
        taskText.classList.toggle('completed', event.target.checked);
    }
});
