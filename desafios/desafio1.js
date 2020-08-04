"use strict";
/*
  Criar um objeto funcionário com?
  - Array de strings com os nomes dos supervisores
  - Função de bater ponto que recebe a hora (number) e retorna uma string
    -> Ponto normal (<= 8)
    -> Fora do horário (> 8)
  */
var funcionario = {
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
console.log(funcionario.baterPonto(9));
