console.log("-------- Classes -------");

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 0) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(2, 3, 1992);
console.log(aniversario);
aniversario.dia = 3;
console.log(aniversario.dia);

const casamento = new Data();

casamento.ano = 2020;
console.log(casamento);

console.log("-------- Classes Esperta  -------");

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 0
  ) {}
}

const aniversarioEsperta = new Data(2, 3, 1992);
console.log(aniversarioEsperta);
aniversarioEsperta.dia = 3;
console.log(aniversarioEsperta.dia);

const casamentoEsperta = new Data();

casamentoEsperta.ano = 2020;
console.log(casamentoEsperta);
