const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

// Load todos from localStorage
window.onload = function () {
  const savedTodos = JSON.parse(localStorage.getItem('todos'));
  if (savedTodos) {
    todos = savedTodos;
    renderTodos();
  }
};

function renderTodos() {
  todoList.innerHTML = ''; // Clear existing list
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    if (todo.completed) {
      li.classList.add('completed');
    }

    // Toggle completed on click
    li.addEventListener('click', () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent li click event
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const newTask = todoInput.value.trim();
  if (newTask !== '') {
    todos.push({ text: newTask, completed: false });
    saveTodos();
    renderTodos();
    todoInput.value = '';
  }
});
