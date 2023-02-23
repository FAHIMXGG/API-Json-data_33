function loadToDos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayToDos(data))
}

function displayToDos(todos){
    const toDoCon = document.getElementById('todo-container')
    for (const todo of todos ){
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `
            <h3> title: ${todo.title}</h3> 
            <p> User: ${todo.userId} </p>
            <p> User: ${todo.completed === true ? 'complete' : 'not Complete'} </p>

        `;
        toDoCon.appendChild(todoDiv);
    }
}
loadToDos()