function onSecretClick() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const title = document.getElementsByClassName("titulo-site")[0];
  title.innerText = "Jornal Secreto";
  title.style.color = "red";

  const article = document.getElementsByClassName("artigo-politico")[0];
  article.style.borderColor = "red";

  const articleTitle = document.getElementsByClassName("titulo-artigo")[0];
  articleTitle.innerText = "A ordem secreta dos Illuminati";

  const firstParagraph = document.querySelectorAll(".texto-artigo p")[0];
  firstParagraph.innerText =
    "A ordem secreta dos Illuminati, respons vel pela manipula o dos governos e das economias mundiais, ordenou que todos os jornalistas do mundo fossem para casa e assistissem desenhos animados.";

  const secondParagraph = document.querySelectorAll(".texto-artigo p")[1];
  secondParagraph.innerText =
    "Afinal, como a ordem secreta dos Illuminati bem disse: 'Quem precisa de not cias quando tem desenhos animados?'.";

  const thirdParagraph = document.querySelectorAll(".texto-artigo p")[2];
  thirdParagraph.innerText =
    "E assim, todos os jornalistas do mundo foram para casa e assistiram desenhos animados.";

  const fourthParagraph = document.querySelectorAll(".texto-artigo p")[3];
  fourthParagraph.innerText =
    "Afinal, como a ordem secreta dos Illuminati bem disse: 'Quem precisa de not cias quando tem desenhos animados?'.";
}
