const nombre = document.getElementById("name");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

 form.addEventListener("button", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        warnings += 'el nombre no es valido';
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += 'el email no es valido'
        entrar = true
    }
    if(telefono.value.length <8){
        warnings += 'el numero no es valido'
        entrar = true

    }
    if(entrar){
        parrafo.innerHTML = warnings

    }

 })