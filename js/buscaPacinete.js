let inputSearch = document.querySelector('#search')
let trPaciente = document.getElementsByClassName('paciente')

inputSearch.addEventListener('input',function(){
    
    if(this.value.length > 0){
        
        for(var i = 0;i < trPaciente.length; i++){
            var paciente = trPaciente[i]
            paciente.classList.add('ocultar-elemento')
            var nomePaciente =  paciente.querySelector('.info-nome').textContent 
    
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nomePaciente)) {
                paciente.classList.add("ocultar-elemento");
            } else {
                paciente.classList.remove("ocultar-elemento");
            }
        };
        
    }else{
        for(var i = 0;i < trPaciente.length; i++){
            var paciente = trPaciente[i]
            paciente.classList.remove("ocultar-elemento");
        }
    }

})