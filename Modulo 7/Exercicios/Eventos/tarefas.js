const taskList = document.getElementById("taskList");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderTarefa(tarefa, index) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarefa.status;
  checkbox.dataset.index = index;

  checkbox.addEventListener("change", function () {
    tarefa.status = checkbox.checked;
    span.classList.toggle("completed", tarefa.status);
    salvarTarefas();
  });

  const span = document.createElement("span");
  span.className = "task-desc";
  span.textContent = tarefa.descricao;
  if (tarefa.status) {
    span.classList.add("completed");
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Excluir";
  deleteBtn.style.backgroundColor = "#e74c3c";
  deleteBtn.style.color = "#fff";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "6px";
  deleteBtn.style.padding = "6px 10px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", () => {
    tarefas.splice(index, 1);
    salvarTarefas();
    renderTodasTarefas();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function renderTodasTarefas() {
  taskList.innerHTML = "";
  tarefas.forEach((tarefa, index) => renderTarefa(tarefa, index));
}

renderTodasTarefas();
