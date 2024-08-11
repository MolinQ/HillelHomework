const apiUrl = 'http://localhost:3000/todos';
document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');

  taskForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const input = document.getElementById('task__input');
    const newTaskText = input.value.trim();
    if (newTaskText) {
      try {
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: newTaskText }),
        });
        input.value = '';
        getTodos();
      } catch (err) {
        console.error('Failed to add todo:', err);
      }
    }
  });
  getTodos();
});

async function getTodos() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const todos = await response.json();
    const list = document.getElementById('task__list');
    list.innerHTML = '';

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.text;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editTodo(todo._id));
      editButton.style.marginLeft = '15px'

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => deleteTodo(todo._id));

      li.appendChild(editButton);
      li.appendChild(deleteButton);
      list.appendChild(li);
    });
  } catch (err) {
    console.error('Failed to fetch todos:', err);
  }
}

async function editTodo(id) {
  const newText = prompt('Enter new message:');
  if (newText) {
    try {
      await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText }),
      });
      getTodos();
    } catch (err) {
      console.error('Failed to update todo:', err);
    }
  }
}

async function deleteTodo(id) {
  try {
    await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });
    getTodos();
  } catch (err) {
    console.error('Failed to delete todo:', err);
  }
}