// Tipos implícitos

//string
let nome = "Joao";
// nome = 28
console.log(nome);

//numbers
let idade = 27;
// idade = "Ana";
console.log(idade);

//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);

//array
let hobbies = ["Cozinhar", "Praticar Esportes"];
// hobbies = [100];
console.log(hobbies[1]);

// Tipos explícitos

//any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: "2020" };
console.log(carro);

let minhaIdade: any;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);

//string
let nomeA: string = "Joao";
console.log(nomeA);

//numbers
let idadeA: number = 27;
console.log(idadeA);

//boolean
let possuiHobbiesA: boolean = false;
console.log(possuiHobbiesA);

//array
let hobbiesA: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbiesA[1]);
hobbiesA = [100, 200];
console.log(hobbiesA);

let hobbiesS: string[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbiesS);

let hobbiesN: number[] = [1, 2];
console.log(hobbiesN);

//tuplas
let endereco: [string, number, string] = ["Av principal", 99, ""];
console.log(endereco);

endereco = ["Rua Olival", 22, "Anexo a outra rua"];
console.log(endereco);

//enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);

console.log(Cor.Amarelo, Cor.Cinza);

// funcoes
let meuNome: string = "Rafael";

function retornaMeuNome(name: string): string {
  return name;
}
console.log(retornaMeuNome(meuNome));

function umNumero(number: number): void {
  console.log(number);
}
function multiplicar(x: number, y: number): number {
  return x + y;
}

umNumero(100);

// tipo funcao
let calculo: (x: number, y: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));

//objetos
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 30,
};
console.log(usuario);

usuario = {
  idade: 28,
  nome: "Maria",
};
console.log(usuario);

// type personalizado
// Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario1: Funcionario = {
  supervisores: ["Marcos", "Renata"],
  baterPonto(horas: number): string {
    if (horas <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

let funcionario2: Funcionario = {
  supervisores: ["Roberta", "Roberto"],
  baterPonto(horas: number): string {
    if (horas <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);

nota = "10";
console.log(`Minha nota é ${nota}`);

//valores nulos
type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const informacao: Contato = {
  nome: "Rafael",
  tel1: "2799876543",
  tel2: null,
};

console.log(informacao.nome);
console.log(informacao.tel1);
console.log(informacao.tel2);

//never
function falha(msg: string): never {
  throw new Error(msg);
}

type ProdutoObject = {
  nome: string;
  preco: number;
  validarProduto: () => void;
};

// const produto: ProdutoObject = {
//   nome: "Sabão",
//   preco: -1,
//   validarProduto() {
//     if (!this.nome || this.nome.trim().length == 0) {
//       falha("Precisa ter um nome");
//     }
//     if (this.preco <= 0) {
//       falha("Preço inválido!");
//     }
//   },
// };

// produto.validarProduto();
