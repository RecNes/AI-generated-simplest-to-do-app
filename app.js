let todos = JSON.parse(localStorage.getItem('todos')) || [];

function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function render() {
    const container = document.getElementById('todo-container');
    
    if (container) {
        container.innerHTML = todos.map((todo, i) => `
            <div class="todo-item">
                <input type="checkbox" 
                       ${todo.done ? 'checked' : ''} 
                       onchange="toggle(${i})">
                <span class="${todo.done ? 'done' : ''}">${escapeHtml(todo.text)}</span>
                <button onclick="removeTodo(${i})">×</button>
            </div>
        `).join('');
    }
}

function addTodo(text) {
    if (!text.trim()) return;
    
    todos.push({ text: text, done: false });
    save();
    render();
}

function toggle(index) {
    todos[index].done = !todos[index].done;
    save();
    render();
}

function removeTodo(index) {
    todos.splice(index, 1);
    save();
    render();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

document.getElementById('todo-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') addTodo(document.getElementById('todo-input').value);
});

render();
