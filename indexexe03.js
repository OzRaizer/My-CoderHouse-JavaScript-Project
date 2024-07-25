let produtos = [];

function adicionarProduto() {
    const nome = document.getElementById('nome').value;
    const cor = document.getElementById('cor').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const tipo = document.getElementById('tipo').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const quantidade = parseInt(document.getElementById('quantidade').value, 10);

    const produtoValido = nome && preco > 0 ? true : false;

    if (produtoValido) {
        const produto = {
            nome,
            cor,
            peso,
            tipo,
            preco,
            quantidade
        };

        produtos = [...produtos, produto];

        document.getElementById('produtoForm').reset();
        atualizarCorSelecionada();
    } else {
        alert('Produto inválido. Verifique se todos os campos estão preenchidos corretamente.');
    }
}

function exibirCarrinho() {
    const resultado = document.getElementById('resultado');
    if (produtos.length === 0) {
        resultado.innerHTML = "O carrinho está vazio.";
        return;
    }

    let descricao = '';
    let total = 0;

    produtos.forEach(produto => {
        const { nome, cor, peso, tipo, preco, quantidade } = produto;

        descricao += `
            <div class="produto-item">
                <strong>Nome:</strong> ${nome}<br>
                <strong>Cor:</strong> ${cor}<br>
                <strong>Peso:</strong> ${peso}kg<br>
                <strong>Tipo:</strong> ${tipo}<br>
                <strong>Preço:</strong> R$${preco.toFixed(2)}<br>
                <strong>Quantidade:</strong> ${quantidade}
            </div>`;
        total += preco * quantidade;
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
