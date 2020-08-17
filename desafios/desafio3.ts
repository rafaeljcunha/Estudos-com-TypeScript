// Exercicio 1
console.log("------------ Desafio --------------");

const dobro = (valor: number): number => valor * 2;
console.log(dobro(10));

// Exercicio 2
const dizerOla = (nome: string = "Pessoa"): void => {
  // if (nome === undefined) { nome = "Pessoa" }
  console.log(`Olá, ${nome}`);
};

dizerOla();
dizerOla("Anna");

// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));

// Exercicio 4
let array = [55, 20];
array.push(...nums);
console.log(array);

// Exercicio 5
const notas = [8.5, 6.3, 9.4];
// var notas1 = notas[0];
// var notas2 = notas[1];
// var notas3 = notas[2];

const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);

// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
const { primeiroNome, experiencia } = cientista;

console.log(primeiroNome, experiencia);
