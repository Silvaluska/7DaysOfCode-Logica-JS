let resp01 = prompt('Seguir para área de Front-End (1) ou seguir para a área de Back-End (2).');
var area;
var aprender;
var seguir;
if (resp01 == 1) {
    area = 'Front-End';
    let resp02 = prompt('Quer aprender React (1) ou aprender Vue (2).');
    if (resp02 == 1) {
        aprender = 'React';
    }
    else if (resp02 == 2) {
        aprender = 'Vue';
    }
}
else if (resp01 == 2) {
    area = 'Back-End';
    let resp02 = prompt('Quer aprender C# (1) ou aprender Java (2).');
    if (resp02 == 1) {
        aprender = 'C#';
    }
    else if (resp02 == 2) {
        aprender = 'Java';
    }
}
let resp03 = prompt('Seguir se especializando na área escolhida (1) ou seguir se desenvolvendo para se tornar Fullstack (2).');
    if (resp03 == 1) {
        seguir = 'especializando na área escolhida';
        alert(`Parabens Você decidiu ser um dev ${area} que quer aprender ${aprender} e continuar se ${seguir}`);
    }
    else if (resp03 == 2) {
        seguir = 'desenvolvendo para se tornar Fullstack';
        alert(`Parabens Você decidiu ser um dev ${area} que quer aprender ${aprender} e continuar se ${seguir}`);
    }
let lista_tec = [];
while (true) {
    let resp04 = prompt('Quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer?');
    alert('Esse tecnologia é incrivel');
    let resp05 = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
    if (resp05 !== 'sim') {
        break;
    }
}