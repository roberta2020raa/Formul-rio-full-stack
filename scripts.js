const formulario = document.querySelector(".formPrincipal");
const campoNome = document.querySelector("#nomeCompleto");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#password");
const campoConfirmSenha = document.querySelector("#confirmPassword");


formulario.addEventListener("submit",function(event){
    
    event.preventDefault();
    

    const nome =campoNome.value;
    const email = campoEmail.value;
    const senha = campoSenha.value;
    const confirmSenha = campoConfirmSenha.value;

    if (!nome ||!email ||!senha ||!confirmSenha){
        alert("Preencha os campos");
        return;
    }
    

    if (senha ===confirmSenha){
        alert( "Senha correta");
    }else {
        alert("Senha Incorreta");

        return;
    }
    



    console.log("formulario clicado");
    console.log(nome);
    console.log(email);
    console.log(senha);
    console.log(confirmSenha);
    
    
})