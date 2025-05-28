const tarefas = [
  { descricao: "Estudar HTML", status: false },
  { descricao: "Praticar CSS", status: false },
];

const taskList = document.getElementById("taskList");

function renderTarefa(tarefa, index) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarefa.status;
  checkbox.dataset.index = index;

  checkbox.addEventListener("change", function () {
    tarefa.status = checkbox.checked;
    span.classList.toggle("completed", tarefa.status);
    console.log(tarefas);
  });

  const span = document.createElement("span");
  span.className = "task-desc";
  span.textContent = tarefa.descricao;
  if (tarefa.status) {
    span.classList.add("completed");
  }

  li.appendChild(checkbox);
  li.appendChild(span);
  taskList.appendChild(li);
}

tarefas.forEach((tarefa, index) => renderTarefa(tarefa, index));

tarefas.forEach(renderTasks);
