# Task-Management-System


This is a simple task management application built using Flask for the backend and HTML/CSS/JavaScript for the frontend. Users can create, view, edit, and delete tasks. Tasks are stored in an SQLite database for simplicity.

---

## Features

- **Create Task**: Add a new task with a title, description, due date, and status.
- **View Tasks**: See all tasks displayed in a list view.
- **Edit Task**: Modify an existing task.
- **Delete Task**: Remove a task from the list.
- **Task Filters**: Filter tasks by status (e.g., Pending, Completed).

---

## Tech Stack

- **Backend**: Python, Flask
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite

---

## Installation and Setup

### Prerequisites
- Python 3.7 or above installed on your machine.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    cd task-management-app
    ```

2. Create a virtual environment (optional but recommended):
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Initialize the database:
    ```bash
    flask db init
    flask db migrate
    flask db upgrade
    ```

5. Run the application:
    ```bash
    flask run
    ```

6. Open the application in your browser at:
    ```
    http://127.0.0.1:5000
    ```

---

---

## Usage Instructions

1. Navigate to the "Create Task" page to add a new task.
2. After creating a task, you'll be redirected to the "View Tasks" page.
3. Use the edit and delete buttons to manage tasks as needed.
4. Filter tasks by status to view specific categories (e.g., Pending, Completed).

---
## Demo Video

[Click here to watch the demo video](https://drive.google.com/file/d/1N_fPbqnR-1WAgUJZgP9V5Ew_HU2byaZU/view?usp=sharing)


## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.


