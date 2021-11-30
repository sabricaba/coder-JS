let formuLogin = document.getElementById("loginUsuario")

function submit (evento) {
    evento.preventDefault();
    let loginUsuario = evento.target;
    saludar(loginUsuario.usuario.value);
}

function saludar (usuario) {
    let titulo = document.createElement("h1");
    titulo.innerText = "Bienvenid@ " + usuario;
    document.body.appendChild(titulo);

    let form2 = document.getElementById ("loginUsuario");
    form2.parentNode.removeChild(form2);    
}

formuLogin.addEventListener("submit", submit)


