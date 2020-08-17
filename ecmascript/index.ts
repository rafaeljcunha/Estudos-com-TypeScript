// rest spread
const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers));

const numbersA: number[] = [1, 2, 3, 4];

const numbersB: number[] = [...numbersA, 5, 6, 7, 8];

console.log(numbersB);

function retornarArray(...args: number[]): number[] {
  return args;
}

const numbersC: number[] = [...numbersA, ...numbersB, 9, 10, 11, 12];

console.log(numbersC);

console.log(retornarArray(...numbersC));

const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

//Destructuring (array)
const numeros = [1, 2];

const [um, dois] = numeros;

console.log(um);
console.log(dois);

const item = {
  nomePessoa: "Rafael",
  sobrenomePessoa: "Cunha",
  informacoes: {
    idadePessoa: 27,
  },
};

const {
  nomePessoa,
  sobrenomePessoa,
  informacoes: { idadePessoa },
} = item;

console.log(nomePessoa);
console.log(sobrenomePessoa);
console.log(idadePessoa);

// Promisse
function esperarPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois");
    }, 3000);
  });
}

esperarPromise().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1/")
  .then((response) => response.json())
  .then((personagem) => personagem.films)
  .then((films) => fetch(films[2]))
  .then((resFilm) => resFilm.json())
  .then((filme) => console.log(filme.title));
