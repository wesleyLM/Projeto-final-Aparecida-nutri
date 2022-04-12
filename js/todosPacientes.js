let btnTodosPaciente = document.querySelector('.mostrar-pacientes')

var check = false;

btnTodosPaciente.addEventListener('click', function () {
    if(check == false){
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
        xhr.send()

        let erroAjax = document.querySelector('.mensagens-erros-api')

        xhr.addEventListener('load', function () {
            
            if (xhr.status == 200) {
                erroAjax.classList.add('ocultar-elemento')
                let resposta = xhr.responseText
                let todosPacientes = JSON.parse(resposta)

                todosPacientes.forEach(paciente => {
                    adicionaPacientes(paciente)
                });
                
            } else {
                erroAjax.classList.remove('ocultar-elemento')
            }
        })

        xhr.addEventListener('error', function (){
            erroAjax.classList.remove('ocultar-elemento')
        })
    }
    check = true;
})
