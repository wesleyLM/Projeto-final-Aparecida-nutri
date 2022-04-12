let titulo = document.querySelector('.header_titulo');
titulo.textContent = 'Aparecida Nutricionista';

let pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]

    //td de peso,altura e imc 
    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');

    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    //variáveis de validação
    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if(!pesoEhValido) exibiErroPeso()
    if(!alturaEhValido) exibiErroAltura()


    let imc = tdImc;
    imc.textContent = calcImc(peso, altura);
}

//função para calcular imc com validação das variáveis 
function calcImc(peso, altura) {

    if (pesoEhValido && alturaEhValido) {
        var imc = peso / (altura * 2);
        return imc.toFixed(2);
    }
    tdImc.classList.add('campo-invalido')
    return 'Impossível Calcular IMC';
}

//função valida peso do paciente
function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000 || peso == "") {
        return false;
    } else
        return true;
}

//função valida altura do paciente
function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00 || altura == "") {
        return false;
    } else
        return true;
}

function exibiErroPeso(){
    tdPeso.textContent += ' (Peso inválido!)';
    tdPeso.classList.add('campo-invalido')
}

function exibiErroAltura(){
    tdAltura.textContent += ' (altura inválida!)';
    tdAltura.classList.add('campo-invalido')
}
//função valida nome do paciente

//função valida gordura do paciente