tabelaPaciente.addEventListener('dblclick',evento =>{
    evento.target.parentNode.classList.add("fadeOut")
    setTimeout(()=>{ 
        evento.target.parentNode.remove()
    }, 500)
    console.log('clicou')
})