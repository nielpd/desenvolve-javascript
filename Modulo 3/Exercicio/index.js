const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis", quantidade: 3 },
  { titulo: "O Alquimista", autor: "Paulo Coelho", quantidade: 5 },
  { titulo: "Capitães da Areia", autor: "Jorge Amado", quantidade: 2 },
  { titulo: "O Guarani", autor: "Jos  de Alencar", quantidade: 2 },
  { titulo: "Iracema", autor: "Jos  de Alencar", quantidade: 3 },
  { titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", quantidade: 1 },
  { titulo: "O Primo Bas lio", autor: "E a de Queir s", quantidade: 2 },
  { titulo: "O Corti o", autor: "Machado de Assis", quantidade: 3 },
  {
    titulo: "O Triste Fim de Policarpo Quaresma",
    autor: "Lima Barreto",
    quantidade: 2,
  },
  { titulo: "A Carta 22", autor: "Machado de Assis", quantidade: 2 },
];

function adicionarLivro(titulo, autor, quantidade) {
  livros.push({ titulo, autor, quantidade });
}

// adicionarLivro("1984", "George Orwell", 7);
// console.log(livros);

function removerLivro(titulo) {
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].titulo === titulo) {
      livros.splice(i, 1);
    } else {
      console.log("Livro não encontrado");
    }
  }
}

// removerLivro("A Moreninha");
// console.log(livros);

function atualizarQuantidadeLivro(titulo, quantidade) {
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].titulo === titulo) {
      livros[i].quantidade = quantidade;
    }
  }
}

// atualizarQuantidadeLivro("A Carta 22", 10);
// console.log(livros);

function listarLivros() {
  for (let livro of livros) {
    console.log(`${livro.titulo} - ${livro.autor} - ${livro.quantidade}`);
  }
}

// listarLivros();
