
let btnVerSenhaLogin = document.querySelector('#verSenha')

btnVerSenhaLogin.addEventListener('click', ()=>{
    let inputSenhaLogin = document.querySelector('#senha')
    if (inputSenhaLogin.getAttribute('type') == 'password') {
        inputSenhaLogin.setAttribute('type', 'text')
    } else {
        inputSenhaLogin.setAttribute('type', 'password')
    }
})

btnEntrar.addEventListener('click', ()=> {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#usuarioLabel')
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    let msgError = document.querySelector('#msgError')

    if (usuario.value == '' || senha.value == '') {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        
    
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos!'
        msgSucess.setAttribute ('style', 'display: none')
        msgSucess.innerHTML = ''
    
        usuario.focus()
    }
})


function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#usuarioLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome : 'jnfhg4e5byy5g346@',
        user : 'g5b5ntjjrg560184@',
        senha: 'fef1fsfdsdc2s844@'
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome : item.nomeCad,
                user : item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        userLabel.setAttribute('style', 'color: black')
        usuario.setAttribute('style', 'border-color:rgb(189, 189, 189);')
        senhaLabel.setAttribute('style', 'color: black')
        senha.setAttribute('style', 'border-color:rgb(189, 189, 189)')

        msgSucess.setAttribute ('style', 'display: block')
        msgSucess.innerHTML = 'Redirecionando...'
        msgError.setAttribute ('style', 'display: none')
        msgError.innerHTML = ''

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
        
        setTimeout(()=> {
            window.location.href="index.html"
        },1500)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos!'
        msgSucess.setAttribute ('style', 'display: none')
        msgSucess.innerHTML = ''

        usuario.focus()
    }

}