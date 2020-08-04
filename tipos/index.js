"use strict";
// Tipos implícitos
//string
var nome = "Joao";
// nome = 28
console.log(nome);
//numbers
var idade = 27;
// idade = "Ana";
console.log(idade);
//boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
//array
var hobbies = ["Cozinhar", "Praticar Esportes"];
// hobbies = [100];
console.log(hobbies[1]);
// Tipos explícitos
//any
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: "2020" };
console.log(carro);
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);
//string
var nomeA = "Joao";
console.log(nomeA);
//numbers
var idadeA = 27;
console.log(idadeA);
//boolean
var possuiHobbiesA = false;
console.log(possuiHobbiesA);
//array
var hobbiesA = ["Cozinhar", "Praticar Esportes"];
console.log(hobbiesA[1]);
hobbiesA = [100, 200];
console.log(hobbiesA);
var hobbiesS = ["Cozinhar", "Praticar Esportes"];
console.log(hobbiesS);
var hobbiesN = [1, 2];
console.log(hobbiesN);
//tuplas
var endereco = ["Av principal", 99, ""];
console.log(endereco);
endereco = ["Rua Olival", 22, "Anexo a outra rua"];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Amarelo, Cor.Cinza);
// funcoes
var meuNome = "Rafael";
function retornaMeuNome(name) {
    return meuNome;
}
console.log(retornaMeuNome(meuNome));
function umNumero(number) {
    console.log(number);
}
function multiplicar(x, y) {
    return x + y;
}
umNumero(100);
// tipo funcao
var calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos
var usuario = {
    nome: "João",
    idade: 30,
};
console.log(usuario);
usuario = {
    idade: 28,
    nome: "Maria",
};
console.log(usuario);
var funcionario1 = {
    supervisores: ["Marcos", "Renata"],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
var funcionario2 = {
    supervisores: ["Roberta", "Roberto"],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return "Ponto normal";
        }
        else {
            return "Fora do horário";
        }
    },
};
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
nota = "10";
console.log("Minha nota \u00E9 " + nota);
var informacao = {
    nome: "Rafael",
    tel1: "2799876543",
    tel2: null,
};
console.log(informacao.nome);
console.log(informacao.tel1);
console.log(informacao.tel2);
//never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: "Sabão",
    preco: -1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preço inválido!");
        }
    },
};
produto.validarProduto();
