const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const descricao = input.value.trim();

  if (descricao === "") return;

  const novaTarefa = {
    descricao,
    status: false,
  };

  tarefas.push(novaTarefa);
  renderTarefa(novaTarefa, tarefas.length - 1);
  input.value = "";
});
