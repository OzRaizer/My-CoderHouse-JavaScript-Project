// Primeira Versão do Simulador

/* class Produto {
  constructor(nome, cor, peso, tipo, preco, quantidade = 1) {
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
    this.tipo = tipo;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  descricao() {
    return `Nome: ${this.nome}\nCor: ${this.cor}\nPeso: ${this.peso}kg\nTipo: ${this.tipo}\nPreço: R$${this.preco.toFixed(2)}\nQuantidade: ${this.quantidade}`;
  }
}

class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    const produtoExistente = this.produtos.find(p => p.nome === produto.nome);
    if (produtoExistente) {
      produtoExistente.quantidade += produto.quantidade;
    } else {
      this.produtos.push(produto);
    }
  }

  removerProduto(nome) {
    this.produtos = this.produtos.filter(produto => produto.nome !== nome);
  }

  atualizarQuantidade(nome, quantidade) {
    const produto = this.produtos.find(p => p.nome === nome);
    if (produto) {
      produto.quantidade = quantidade;
    }
  }

  totalCarrinho() {
    return this.produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
  }

  quantidadeTotal() {
    return this.produtos.reduce((total, produto) => total + produto.quantidade, 0);
  }

  exibirCarrinho() {
    if (this.produtos.length === 0) {
      return "O carrinho está vazio.";
    }

    let descricao = "Produtos no carrinho:\n";
    this.produtos.forEach(produto => {
      descricao += produto.descricao() + "\n\n";
    });

    descricao += `Quantidade total de produtos: ${this.quantidadeTotal()}\n`;
    descricao += `Total: R$${this.totalCarrinho().toFixed(2)}`;
    return descricao;
  }
}

function capturarEntradas() {
  let continuar = true;
  const carrinho = new Carrinho();

  while (continuar) {
    let nome = prompt("Digite o nome do produto:");
    let cor = prompt("Digite a cor do produto:");
    let peso = parseFloat(prompt("Digite o peso do produto (kg):"));
    let tipo = prompt("Digite o tipo do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto (R$):"));
    let quantidade = parseInt(prompt("Digite a quantidade do produto:"), 10);

    const produto = new Produto(nome, cor, peso, tipo, preco, quantidade);
    carrinho.adicionarProduto(produto);

    continuar = confirm("Deseja adicionar mais produtos?");
  }

  return carrinho;
}

function executarSimulador() {
  const carrinho = capturarEntradas();


  console.log(carrinho.exibirCarrinho());
  alert(carrinho.exibirCarrinho());
}

executarSimulador(); 
*/



// Novo formato para HTML/CSS/Js

let produtos = [];

function adicionarProduto() {
  const nome = document.getElementById('nome').value;
  const cor = document.getElementById('cor').value;
  const peso = parseFloat(document.getElementById('peso').value);
  const tipo = document.getElementById('tipo').value;
  const preco = parseFloat(document.getElementById('preco').value);
  const quantidade = parseInt(document.getElementById('quantidade').value, 10);

  const produto = {
      nome,
      cor,
      peso,
      tipo,
      preco,
      quantidade
  };

  produtos.push(produto);

  document.getElementById('produtoForm').reset();
    atualizarCorSelecionada();}

    function exibirCarrinho() {
      const resultado = document.getElementById('resultado');
      if (produtos.length === 0) {
          resultado.innerHTML = "O carrinho está vazio.";
          return;
      }
  
      let descricao = '';
      let total = 0;
  
      produtos.forEach(produto => {
          descricao += `
              <div class="produto-item">
                  <strong>Nome:</strong> ${produto.nome}<br>
                  <strong>Cor:</strong> ${produto.cor}<br>
                  <strong>Peso:</strong> ${produto.peso}kg<br>
                  <strong>Tipo:</strong> ${produto.tipo}<br>
                  <strong>Preço:</strong> R$${produto.preco.toFixed(2)}<br>
                  <strong>Quantidade:</strong> ${produto.quantidade}
              </div>`;
          total += produto.preco * produto.quantidade;
      });
  
      descricao += `<div class="total-carrinho">Total: R$${total.toFixed(2)}</div>`;
      resultado.innerHTML = descricao;
  }

  function atualizarCorSelecionada() {
    const corSelecionada = document.getElementById('cor').value;
    const corQuadrado = document.getElementById('corSelecionada');
    corQuadrado.style.backgroundColor = corSelecionada;
}

document.getElementById('produtoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  adicionarProduto();
});

document.getElementById('exibirCarrinho').addEventListener('click', exibirCarrinho);

document.getElementById('cor').addEventListener('change', atualizarCorSelecionada);