type Conta = {
  saldo: number;
  depositar: (valor: number) => void;
};

type User = {
  nome: string;
  contaBancaria: Conta;
  contatos: string[];
};

let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: User = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
