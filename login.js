
let btnVerSenhaLogin = document.querySelector('#verSenha')

btnVerSenhaLogin.addEventListener('click', ()=>{
    let inputSenhaLogin = document.querySelector('#senha')
    if (inputSenhaLogin.getAttribute('type') == 'password') {
        inputSenhaLogin.setAttribute('type', 'text')
    } else {
        inputSenhaLogin.setAttribute('type', 'password')
    }
})