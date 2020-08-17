class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}
}

const cafeteira = new Produto("Cafeteira", 200);
cafeteira.desconto = 0.1;

const notebook = new Produto("Notebook", 1200, 0.2);

console.log(cafeteira);
console.log(notebook);
