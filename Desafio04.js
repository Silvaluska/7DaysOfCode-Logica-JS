let numeroSorteado = Math.floor(Math.random() * 10);
var chute;

for (let i = 1; i <= 3; i++) {
    chute = prompt('Qual Seu chute?')
    if (chute == numeroSorteado) {
        alert('Pabens, você acertou o número')
        break
    }
}
if (chute != numeroSorteado) {
    alert(`Você errou o número sorteado era ${numeroSorteado}`)
}