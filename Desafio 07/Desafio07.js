var list_numeros = document.querySelectorAll('.numeros');
var operadores = document.querySelectorAll('.operadores');
var funcoes = document.querySelectorAll('.funcoes');
var numero1 = [];
var numero2 = [];
var operador;
console.log(numero1)
for (var i = 0; i < 10 ; i++) {
    const id = i;
    list_numeros[i].onclick = function() {
        if (operador == null) {
            numero1.push(list_numeros[id].innerHTML);
        }
        if (operador != null) {
            numero2.push(list_numeros[id].innerHTML);
        }
    }
    operadores[i].onclick = function() {
        operador = operadores[id].innerHTML;
    }
    funcoes[i].onclick = function() {
        if (funcoes[id] == '=') {
            console.log('Calculando')
        }
        if (funcoes[id] == 'c') {
            numero1 = [];
            numero2 = [];
            operador = [];
        }
    }
}
console.log(numero1)