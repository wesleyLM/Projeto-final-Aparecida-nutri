let btnAdiciona = document.querySelector('#adicionar-paciente')
let form = document.querySelector('#form-adiciona')
let tabelaPaciente = document.querySelector('#tabela-pacientes')

btnAdiciona.addEventListener('click', novoPaciente)

function novoPaciente(evento) {
    evento.preventDefault()

    
    let paciente = dadosPaciente(form)

    let erros = pacienteValido(paciente)

    if (erros.length > 0) {
        exibiErro(erros)
        return
    }
    
    adicionaPacientes(paciente)

    form.reset()

    apagaMensagemErro()
}

function adicionaPacientes(paciente){
    tabelaPaciente.appendChild(criarTr(paciente))
}

function criarTr(paciente) {
    let trPaciente = document.createElement('tr')
    trPaciente.classList.add("paciente")

    trPaciente.appendChild(criarTd(paciente.nome, "info-nome"))
    trPaciente.appendChild(criarTd(paciente.peso, "info-peso"))
    trPaciente.appendChild(criarTd(paciente.altura, "info-altura"))
    trPaciente.appendChild(criarTd(paciente.gordura, "info-gordura"))
    trPaciente.appendChild(criarTd(paciente.imc, "info-imc"))

    return trPaciente
}

function criarTd(valor, classe) {
    let td = document.createElement('td')
    td.textContent = valor
    td.classList.add(classe)

    return td
}

function dadosPaciente(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }

    return paciente
}
