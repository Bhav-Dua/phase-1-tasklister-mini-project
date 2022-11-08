document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', createTask);
})

function createTask(e){
  e.preventDefault();

  const todo = e.target.elements['new-task-description'].value;
  const li = document.createElement('li');
  const btn = document.createElement('button');

  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  li.textContent = `${todo} `;

  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
  
  e.target.reset();
}

function handleDelete(e){
  e.target.parentNode.remove();
}
