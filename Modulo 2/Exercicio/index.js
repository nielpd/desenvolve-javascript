const somaNumeros = (num1, num2) => {
  return num1 + num2;
};

const subtraiNumeros = (num1, num2) => {
  return num1 - num2;
};

const multiplicaNumeros = (num1, num2) => {
  return num1 * num2;
};

const divideNumeros = (num1, num2) => {
  return num1 / num2;
};

const mostraResultados = (num1, num2) => {
  console.log(`Soma entre ${num1} e ${num2} = ${somaNumeros(num1, num2)}`);
  console.log(
    `Subtração entre ${num1} e ${num2} = ${subtraiNumeros(num1, num2)}`
  );
  console.log(
    `Multiplicação entre ${num1} e ${num2} = ${multiplicaNumeros(num1, num2)}`
  );
  console.log(`Divisão entre ${num1} e ${num2} = ${divideNumeros(num1, num2)}`);
};

mostraResultados(10, 5);
