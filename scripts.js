const formulario = document.querySelector(".formPrincipal");
const campoNome = document.querySelector("#nomeCompleto");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#password");
const campoConfirmSenha = document.querySelector("#confirmPassword");
const mensagemErroSenha = document.querySelector(".erroSenha");
let senhaFoiVisitada = false;
const mensagemErroConfirmSenha = document.querySelector(".erroConfirmSenha");







formulario.addEventListener("submit",function(event){
    
    event.preventDefault();
    
    const nome =campoNome.value.trim();
    const email = campoEmail.value.trim();
    const senha = campoSenha.value;
    const confirmSenha = campoConfirmSenha.value;

    if (!nome ||!email ||!senha ||!confirmSenha){
        alert("Preencha os campos");
        return;
    }

    if (senha.length < 8){
        mensagemErroSenha.textContent = "A senha deve conter pelo menos 8 caracteres.";
        return
    }
    

    if (senha === confirmSenha){
        mensagemErroConfirmSenha.textContent ="Senhas iguais"
        
    }else {
        mensagemErroConfirmSenha.textContent ="As senhas estão diferentes"

        return;
    }
   
})



campoSenha.addEventListener('input',()=> {
    
    const senhaAtual = campoSenha.value;
    
        if (senhaFoiVisitada && senhaAtual.length < 8){
            mensagemErroSenha.textContent = "A senha deve conter pelo menos 8 caracteres.";

            console.log("entrei no if ");
        
        }else {
            mensagemErroSenha.textContent = "";
        };


});

campoSenha.addEventListener("blur", () => {
    senhaFoiVisitada = true;
    const senhaAtual = campoSenha.value;
    if (senhaAtual.length < 8){
        mensagemErroSenha.textContent = "A senha deve conter pelo menos 8 caracteres.";

    }
  
   

    console.log("O campo de senha perdeu o foco");
    console.log(senhaFoiVisitada);
    
});


    


