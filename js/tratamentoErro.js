function pacienteValido(paciente) {
    erros = []
    if (!validaAltura(paciente.altura)) erros.push('Altura inválida! ou Campo não preenchido')

    if (!validaPeso(paciente.peso)) erros.push('Peso inválido! ou Campo não preenchido')

    if (paciente.nome.length == 0) erros.push('Nome inválido! ou Campo não preenchido')

    if (paciente.gordura.length == 0) erros.push('Gordura inválida! ou Campo não preenchido')

    return erros
}

function exibiErro(erros) {
    let mensagemErro = document.querySelector('.mensagens-erros')
    apagaMensagemErro()
    erros.forEach(erro => {
        let li = document.createElement('li')
        li.textContent = erro
        mensagemErro.appendChild(li)
    });
}

function apagaMensagemErro(){
    let mensagemErro = document.querySelector('.mensagens-erros')
    mensagemErro.innerHTML = ""
}


