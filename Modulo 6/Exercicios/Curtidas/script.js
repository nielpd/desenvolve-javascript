const nomesCurtidas = [];
const input = document.getElementById("nomeInput");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("curtirBtn");

botao.addEventListener("click", () => {
  const nome = input.value.trim();
  if (nome && !nomesCurtidas.includes(nome)) {
    nomesCurtidas.push(nome);
  }
  input.value = "";
  atualizarMensagem();
});

function atualizarMensagem() {
  const total = nomesCurtidas.length;
  if (total === 0) {
    resultado.textContent = "Ninguém curtiu";
  } else if (total === 1) {
    resultado.textContent = `${nomesCurtidas[0]} curtiu`;
  } else if (total === 2) {
    resultado.textContent = `${nomesCurtidas[0]} e ${nomesCurtidas[1]} curtiram`;
  } else {
    resultado.textContent = `${nomesCurtidas[0]}, ${nomesCurtidas[1]} e mais ${
      total - 2
    } pessoas curtiram`;
  }
}
