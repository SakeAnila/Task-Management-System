document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById('task-list');
    const createTaskForm = document.getElementById('create-task-form');
    const filterStatus = document.getElementById('filter-status');

    // Fetch tasks and render them
    const fetchTasks = async () => {
        const response = await fetch('/tasks');
        const tasks = await response.json();
        renderTasks(tasks);
    };

    const renderTasks = (tasks) => {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task.title} - ${task.status}</span>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    };

    // Create new task
    createTaskForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const id = document.getElementById('task-id').value; // Check if it's an update
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due_date').value;
        const status = document.getElementById('status').value;

        const newTask = { title, description, due_date: dueDate, status };

        if (id) {
            // If ID exists, it's an update request
            await fetch(`/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
            document.getElementById('task-id').value = ''; // Reset the hidden field
        } else {
            // Create new task
            await fetch('/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });
        }

        fetchTasks(); // Refresh task list
    });

    // Edit an existing task
    const editTask = (id) => {
        fetch(`/tasks/${id}`)
            .then(response => response.json())
            .then(task => {
                // Populate the form with the task's current details
                document.getElementById('task-id').value = task.id;
                document.getElementById('title').value = task.title;
                document.getElementById('description').value = task.description;
                document.getElementById('due_date').value = task.due_date;
                document.getElementById('status').value = task.status;
            });
    };

    // Delete a task
    const deleteTask = async (id) => {
        await fetch(`/tasks/${id}`, {
            method: 'DELETE'
        });
        fetchTasks(); // Refresh task list
    };

    // Filter tasks by status
    filterStatus.addEventListener('change', async (event) => {
        const status = event.target.value;
        let tasks = await fetch('/tasks');
        tasks = await tasks.json();
        if (status !== 'All') {
            tasks = tasks.filter(task => task.status === status);
        }
        renderTasks(tasks);
    });

    fetchTasks(); // Initial fetch and render
});
