let btnSenha = document.querySelector('#verSenha')
let btnConfirmSenha = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', ()=>{
    if (nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Nome *min. 3 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: #3a3a3a')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validNome = true
    }
})

usuario.addEventListener('keyup', ()=>{
    if (usuario.value.length <= 4){
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *min. 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelUsuario.setAttribute('style', 'color: #3a3a3a')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validUsuario = true
    }
})

senha.addEventListener('keyup', ()=>{
    if (senha.value.length <= 4){
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *min. 5 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: #3a3a3a')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', ()=>{
    if (confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Senha *não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: #3a3a3a')
        labelConfirmSenha.innerHTML = 'Senha'
        confirmSenha.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validConfirmSenha = true
    }
})

// FUNÇÃO CADASTRAR
function cadastrar() {
    if(validNome && validUsuario && validSenha && validConfirmSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCad : nome.value,
                userCad : usuario.value,
                senhaCad : senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucess.setAttribute ('style', 'display: block')
        msgSucess.innerHTML = 'Cadastrando usuário...'
        msgError.setAttribute ('style', 'display: none')
        msgError.innerHTML = ''

        setTimeout(()=> {
            window.location.href="login.html"
        }, 3000)


    } else {
        msgError.setAttribute ('style', 'display: block')
        msgError.innerHTML = 'Preencha todos os campos corretamente!'
        msgSucess.setAttribute ('style', 'display: none')
        msgSucess.innerHTML = ''
    }
} 

// FUNÇÃO MOSTRAR SENHA
btnSenha.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirmSenha.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

