/*
  Criar um objeto funcionário com?
  - Array de strings com os nomes dos supervisores
  - Função de bater ponto que recebe a hora (number) e retorna uma string
    -> Ponto normal (<= 8)
    -> Fora do horário (> 8)
  */

let funcionario: {
  supervisores: string[];
  baterPonto: (horas: number) => string;
} = {
  supervisores: ["Marcos", "Renata"],
  baterPonto(horas: number): string {
    if (horas <= 8) {
      return "Ponto normal";
    } else {
      return "Fora do horário";
    }
  },
};

console.log(funcionario.baterPonto(9));
