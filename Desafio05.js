let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while (true) {
    var pergunta = prompt('Você deseja adicionar uma comida na sua lista de compras?')
    if (pergunta == 'sim') {
        var produto = prompt('Qual comida você deseja inserir?');
        var categoria = prompt('Qual categoria essa comida se encaixa');
        if (categoria == 'frutas') {
            frutas.push(produto);
        }
        else if (categoria == 'laticinios') {
            laticinios.push(produto);
        }
        else if (categoria == 'congelados') {
            congelados.push(produto);
        }
        else if (categoria == 'doces') {
            doces.push(produto);
        }
        else {
            alert('Categoria inválida, produto não adicionado')
        }
    }
    else if (pergunta == 'não') {
        break;
    }
    else {
        alert('Você digitou nenhum dado válido');
    }
}

console.log('Lista de compras:')
console.log(`   Frutas: ${frutas}`)
console.log(`   Laticínios: ${laticinios}`)
console.log(`   Congelados: ${congelados}`)
console.log(`   Doces: ${doces}`)
