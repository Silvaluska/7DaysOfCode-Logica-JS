let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (true) {
    var pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?')
    if (pergunta == 'sim') {
        var produto = prompt('Qual comida você deseja inserir?');
        var categoria = prompt('Qual categoria essa comida se encaixa');
        adicionarProduto(categoria, 'frutas', frutas, produto);
        adicionarProduto(categoria, 'laticinios', laticinios, produto);
        adicionarProduto(categoria, 'congelados', congelados, produto);
        adicionarProduto(categoria, 'doces', doces, produto);
        if (categoria != 'frutas' && categoria != 'laticinios' && categoria != 'congelados' && categoria != 'doces') {
            alert('Categoria inválida, produto não adicionado')
        }
    }
    else if (pergunta == 'não') {
        var perguntaRemover = prompt('Você deseja remover algum item da lista ?');
        if (perguntaRemover == 'sim') {
            mostrarCompras()
            var listaRemover = prompt('De qual lista você quer remover?');
            var produtoRemover = prompt('Qual produto você quer remover?');
            removerProduto(listaRemover, 'frutas', frutas, produtoRemover);
            removerProduto(listaRemover, 'laticinios', laticinios, produtoRemover);
            removerProduto(listaRemover, 'congelados', congelados, produtoRemover);
            removerProduto(listaRemover, 'doces', doces, produtoRemover);
        }
        else {
            break;
        }
    }
    else {
        alert('Você digitou nenhum dado válido');
    }
}

mostrarCompras()

function mostrarCompras() {
    console.log('Lista de compras:')
    console.log(`   Frutas: ${frutas}`)
    console.log(`   Laticínios: ${laticinios}`)
    console.log(`   Congelados: ${congelados}`)
    console.log(`   Doces: ${doces}`)
}

function removerProduto(listaRemover, categoriaStr, categoria, produto) {
    if (listaRemover == categoriaStr) {
        if (categoria.includes(produto)) {
            categoria.splice(frutas.indexOf(produto), 1);
        }
        else {
            alert('Não foi possível encontrar o item dentro da lista!')
        }
    }
}

function adicionarProduto(categoria, categoriaStr, lista, produto) {
    if (categoria == categoriaStr) {
        lista.push(produto);
    }
}