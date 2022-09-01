let cadastrarNovoModal = document.querySelector('#add-cadastrar')
let novoCaseContainer = document.querySelector('#novoCaseContainer')
let cadastrarCaseModel = document.querySelector('#cadastrarCaseModal')
let closeModal = document.querySelector('#closeModal')
let bgNovoCaseContainer = document.querySelector('#bgNovoCaseContainer')
let avisoModal = document.querySelector('#avisoModal')
let btnCadastrarModal = document.querySelector('#btnCadastrarModal')
let btnLimparModal = document.querySelector('#btnLimparModal')
let btnCancelarModal = document.querySelector('#btnCancelarModal')
let continuarCadastrando = document.querySelector('#continuarCadastrando')
let dividir = document.querySelector('.dividir')
let aviso = document.querySelector('#aviso')
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let avisoAdm = document.querySelector('#avisoAdm')
let userName = document.querySelector('#userName')
let userView = document.querySelector('#userView')
let admView = document.querySelector('#admView')
let painelTitle = document.querySelector('#painelTitle')
let tituloPage = document.querySelector('#tituloPage')

// INICIALIZAÇÃO
if (localStorage.getItem('token') == null) {
    window.location.href="login.html"
}

// FUNÇÃO ADMINISTRADOR
if (userLogado.user == 'admin') {
    userView.style = 'display: none'
    admView.style = 'display: block'
    cadastrarNovoModal.setAttribute('style', 'display: in-line')
    avisoAdm.setAttribute('style', 'display: none')
    painelTitle.setAttribute('style', 'display: block')
    tituloPage.textContent = 'Painel de Gestão'
    avisoAdm.innerHTML = ''
    userName.innerHTML = `<em>conectado: ${userLogado.nome}. (administrador)</em></span>`
} else {
    admView.style = 'display: none'
    userView.style = 'display: block'
    cadastrarNovoModal.setAttribute('style', 'display: none')
    avisoAdm.setAttribute('style', 'display: block')
    painelTitle.textContent = 'Escola Boulevard'
    tituloPage.textContent = 'Painel de Consultas'
    avisoAdm.innerHTML = `<em>"Faça login como administrador para acesso as informações"</em>`
    userName.innerHTML = `<em>conectado: ${userLogado.nome}.</em></span>`
}

// ALUNO //
const showPerfil = document.querySelector('.usuario')
const itemPerfil = document.querySelector('#itemPerfil')
const imgExpandirPerfil = document.querySelector('#expandir-perfil')
showPerfil.addEventListener('click', aparecerPerfil)

function aparecerPerfil() {
    if (itemPerfil.style.display == 'flex') {
        itemPerfil.style.display = 'none'
        imgExpandirPerfil.src = 'imagens/expandir.png'
    } else {
        itemPerfil.style.display = 'flex'
        imgExpandirPerfil.src = 'imagens/reduzir.png'
    }
}

// SAIR DA PÁGINA
function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href="login.html"
}

// ABRIR E FECHAR MODAL DE CADASTRO
cadastrarNovoModal.addEventListener('click', abrirModalCadastro)
function abrirModalCadastro() {
    novoCaseContainer.style.display = 'block'
    bgNovoCaseContainer.style.display = 'block'
}

closeModal.addEventListener('click', fecharModal)
btnCancelarModal.addEventListener('click', fecharModal)
function fecharModal() {
    novoCaseContainer.style.display = 'none'
    bgNovoCaseContainer.style.display = 'none'
    aviso.textContent= ''
}


// CADASTRAR ALUNO MODAL (FUNÇÃO INATIVA)

// PREVENÇÃO DE ATUALIZAÇÃO DA PÁGINA
btnCadastrarModal.addEventListener('click', function(e){
    e.preventDefault()
})
// VALIDAÇÃO
let cnome = document.querySelector('#cNomeAluno')
let labelNomeAluno = document.querySelector('#labelNomeAluno')
let validNomeAluno = false

let cserie = document.querySelector('#cSerieAluno')
let labelSerieAluno = document.querySelector('#labelSerieAluno')
let validSerieAluno = false

let ccelular = document.querySelector('#cCelularAluno')
let labelCelularAluno = document.querySelector('#labelCelularAluno')
let validCelularAluno = false

let ctelefone = document.querySelector('#cTelefoneAluno')
let labelTelefoneAluno = document.querySelector('#labelTelefoneAluno')
let validTelefoneAluno = false

let cmae = document.querySelector('#cMaeAluno')
let labelMaeAluno = document.querySelector('#labelMaeAluno')
let validMaeAluno = false

let cpai = document.querySelector('#cPaiAluno')
let labelPaiAluno = document.querySelector('#labelPaiAluno')
let validPaiAluno = false

let cendereco = document.querySelector('#cEnderecoAluno')
let labelEnderecoAluno = document.querySelector('#labelEnderecoAluno')
let validEnderecoAluno = false

cnome.addEventListener('keyup', ()=>{
    if (cnome.value.length <= 8){
        labelNomeAluno.setAttribute('style', 'color: red')
        labelNomeAluno.innerHTML = 'Nome: *nome completo'
        cnome.setAttribute('style', 'border-color: red')
        validNomeAluno = false
    } else {
        labelNomeAluno.setAttribute('style', 'color: #3a3a3a')
        labelNomeAluno.innerHTML = 'Nome:'
        cnome.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validNomeAluno = true
    }
})
cserie.addEventListener('keyup', ()=>{
    if (cserie.value.length <= 7){
        labelSerieAluno.setAttribute('style', 'color: red')
        labelSerieAluno.innerHTML = 'Série: *série e turma'
        cserie.setAttribute('style', 'border-color: red')
        validSerieAluno = false
    } else {
        labelSerieAluno.setAttribute('style', 'color: #3a3a3a')
        labelSerieAluno.innerHTML = 'Série:'
        cserie.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validSerieAluno = true
    }
})
ccelular.addEventListener('keyup', ()=>{
    if (ccelular.value.length <= 10){
        labelCelularAluno.setAttribute('style', 'color: red')
        labelCelularAluno.innerHTML = 'Celular: *ddd + número'
        ccelular.setAttribute('style', 'border-color: red')
        validCelularAluno = false
    } else {
        labelCelularAluno.setAttribute('style', 'color: #3a3a3a')
        labelCelularAluno.innerHTML = 'Celular:'
        ccelular.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validCelularAluno = true
    }
})
ctelefone.addEventListener('keyup', ()=>{
    if (ctelefone.value.length <= 9){
        labelTelefoneAluno.setAttribute('style', 'color: red')
        labelTelefoneAluno.innerHTML = 'Telefone: *ddd + número'
        ctelefone.setAttribute('style', 'border-color: red')
        validTelefoneAluno = false
    } else {
        labelTelefoneAluno.setAttribute('style', 'color: #3a3a3a')
        labelTelefoneAluno.innerHTML = 'Telefone:'
        ctelefone.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validTelefoneAluno = true
    }
})
cmae.addEventListener('keyup', ()=>{
    if (cmae.value.length <= 3){
        labelMaeAluno.setAttribute('style', 'color: red')
        labelMaeAluno.innerHTML = 'Nome da Mãe: *'
        cmae.setAttribute('style', 'border-color: red')
        validMaeAluno = false
    } else {
        labelMaeAluno.setAttribute('style', 'color: #3a3a3a')
        labelMaeAluno.innerHTML = 'Nome da Mãe:'
        cmae.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validMaeAluno = true
    }
})
cpai.addEventListener('keyup', ()=>{
    if (cpai.value.length <= 3){
        labelPaiAluno.setAttribute('style', 'color: red')
        labelPaiAluno.innerHTML = 'Nome do Pai: *'
        cpai.setAttribute('style', 'border-color: red')
        validPaiAluno = false
    } else {
        labelPaiAluno.setAttribute('style', 'color: #3a3a3a')
        labelPaiAluno.innerHTML = 'Nome do Pai:'
        cpai.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validPaiAluno = true
    }
})
cendereco.addEventListener('keyup', ()=>{
    if (cendereco.value.length <= 5){
        labelEnderecoAluno.setAttribute('style', 'color: red')
        labelEnderecoAluno.innerHTML = 'Endereço: *'
        cendereco.setAttribute('style', 'border-color: red')
        validEnderecoAluno = false
    } else {
        labelEnderecoAluno.setAttribute('style', 'color: #3a3a3a')
        labelEnderecoAluno.innerHTML = 'Endereço:'
        cendereco.setAttribute('style', 'border-color:rgba(212, 212, 212, 0.719)')
        validEnderecoAluno = true
    }
})

btnCadastrarModal.addEventListener('click', dadosNovoAluno)
function dadosNovoAluno(){

    if (validNomeAluno == false && validSerieAluno  == false && validCelularAluno  == false && validTelefoneAluno  == false && validMaeAluno  == false && validPaiAluno  == false && validEnderecoAluno == false) {
        novoCaseContainer.style.display = 'block'
        bgNovoCaseContainer.style.display = 'block'
        aviso.textContent= `Preencha todas informações corretamente!`

    } else if (continuarCadastrando.checked == false && validNomeAluno == true && validSerieAluno  == true && validCelularAluno  == true && validTelefoneAluno  == true && validMaeAluno  == true && validPaiAluno  == true && validEnderecoAluno == true) {

        let dadosAlunosCadastrados = document.querySelector('#dadosAlunosCadastrados')
        let qtdLinhasAlunosCadastrados = dadosAlunosCadastrados.rows.length
        let linhaAlunosCadastrados = dadosAlunosCadastrados.insertRow(qtdLinhasAlunosCadastrados)
    
        dadosAlunosCadastrados.style.display = 'block'
        
        let cellNomeAluno = linhaAlunosCadastrados.insertCell(0)
        let cellSerieAluno = linhaAlunosCadastrados.insertCell(1)
        let cellCelularAluno = linhaAlunosCadastrados.insertCell(2)
        let cellTelefoneAluno = linhaAlunosCadastrados.insertCell(3)
        let cellNomeMaeAluno = linhaAlunosCadastrados.insertCell(4)
        let cellNomePaiAluno = linhaAlunosCadastrados.insertCell(5)
        let cellEnderecoAluno = linhaAlunosCadastrados.insertCell(6)
        let cellHR = linhaAlunosCadastrados.insertCell(7)
    
        let alunoDados = {
            nome     : cNomeAluno.value,
            serie    : cSerieAluno.value,
            celular  : cCelularAluno.value,
            telefone : cTelefoneAluno.value,
            mae      : cMaeAluno.value,
            pai      : cPaiAluno.value,
            endereco : cEnderecoAluno.value
        }
    
        cellNomeAluno.innerHTML = `<div class="modifyResultName"><span class="resAluno">${alunoDados.nome}</span></div>`
        cellSerieAluno.innerHTML = `Série:<br> <div class="modifyResult"><span class="resAluno">${alunoDados.serie}</span></div>`
        cellCelularAluno.innerHTML = `Celular:<br><div class="modifyResult"><span class="resAluno">${alunoDados.celular}</span></div>`
        cellTelefoneAluno.innerHTML = `Telefone:<br><div class="modifyResult"><span class="resAluno">${alunoDados.telefone}</span></div>`
        cellNomeMaeAluno.innerHTML = `Nome da Mãe:<br><div class="modifyResult"><span class="resAluno">${alunoDados.mae}</span></div>`
        cellNomePaiAluno.innerHTML = `Nome do Pai<br><div class="modifyResult"><span class="resAluno">${alunoDados.pai}</span></div>`
        cellEnderecoAluno.innerHTML = `Endereço:<br><div class="modifyResult"><span class="resAluno">${alunoDados.endereco}</span></div>`
        cellHR.innerHTML = `<div style="height:1px;width:60vw;background-color:rgb(177, 177, 177);margin:10px 0;"></div>`
    
        cellNomeAluno.style = 'font-weight:bold;font-size:20px;margin-bottom:5px;padding-left:0px;color:#000;'
    
        cellHR.style = 'max-width:1100vw;'
    
        let none = document.querySelector('.none')
        none.style.display = 'none'
        
        document.querySelector('#cNomeAluno').value = ''
        document.querySelector('#cSerieAluno').value = ''
        document.querySelector('#cCelularAluno').value = ''
        document.querySelector('#cTelefoneAluno').value = ''
        document.querySelector('#cMaeAluno').value = ''
        document.querySelector('#cPaiAluno').value = ''
        document.querySelector('#cEnderecoAluno').value = ''  

        aviso.textContent= ''

        novoCaseContainer.style.display = 'none'
        bgNovoCaseContainer.style.display = 'none'
        salvarLocalStorage()
    } else if (continuarCadastrando.checked == true && validNomeAluno == true && validSerieAluno  == true && validCelularAluno  == true && validTelefoneAluno  == true && validMaeAluno  == true && validPaiAluno  == true && validEnderecoAluno == true){

        let dadosAlunosCadastrados = document.querySelector('#dadosAlunosCadastrados')
        let qtdLinhasAlunosCadastrados = dadosAlunosCadastrados.rows.length
        let linhaAlunosCadastrados = dadosAlunosCadastrados.insertRow(qtdLinhasAlunosCadastrados)
    
        dadosAlunosCadastrados.style.display = 'block'
        
        let cellNomeAluno = linhaAlunosCadastrados.insertCell(0)
        let cellSerieAluno = linhaAlunosCadastrados.insertCell(1)
        let cellCelularAluno = linhaAlunosCadastrados.insertCell(2)
        let cellTelefoneAluno = linhaAlunosCadastrados.insertCell(3)
        let cellNomeMaeAluno = linhaAlunosCadastrados.insertCell(4)
        let cellNomePaiAluno = linhaAlunosCadastrados.insertCell(5)
        let cellEnderecoAluno = linhaAlunosCadastrados.insertCell(6)
        let cellHR = linhaAlunosCadastrados.insertCell(7)
    
        let alunoDados = {
            nome     : cNomeAluno.value,
            serie    : cSerieAluno.value,
            celular  : cCelularAluno.value,
            telefone : cTelefoneAluno.value,
            mae      : cMaeAluno.value,
            pai      : cPaiAluno.value,
            endereco : cEnderecoAluno.value
        }
    
        cellNomeAluno.innerHTML = `<div class="modifyResult"><span class="resAluno">${alunoDados.nome}</span></div>`
        cellSerieAluno.innerHTML = `Série:<br> <div class="modifyResult"><span class="resAluno">${alunoDados.serie}</span></div>`
        cellCelularAluno.innerHTML = `Celular:<br><div class="modifyResult"<span class="resAluno">${alunoDados.celular}</span></div>`
        cellTelefoneAluno.innerHTML = `Telefone:<br><div class="modifyResult"><span class="resAluno">${alunoDados.telefone}</span></div>`
        cellNomeMaeAluno.innerHTML = `Nome da Mãe:<br><div class="modifyResult"><span class="resAluno">${alunoDados.mae}</span></div>`
        cellNomePaiAluno.innerHTML = `Nome do Pai<br><div class="modifyResult"><span class="resAluno">${alunoDados.pai}</span></div>`
        cellEnderecoAluno.innerHTML = `Endereço:<br><div class="modifyResult"><span class="resAluno">${alunoDados.endereco}</span></div>`
        cellHR.innerHTML = `<div style="height:1px;width:60vw;background-color:rgb(177, 177, 177);margin:10px 0;"></div>`
    
        cellNomeAluno.style = 'font-weight:bold;font-size:20px;margin-bottom:5px;padding-left:0px;color:#000;'
    
        cellHR.style = 'max-width:1100vw;opacity:.5;'
    
        let none = document.querySelector('.none')
        none.style.display = 'none'
        
        document.querySelector('#cNomeAluno').value = ''
        document.querySelector('#cSerieAluno').value = ''
        document.querySelector('#cCelularAluno').value = ''
        document.querySelector('#cTelefoneAluno').value = ''
        document.querySelector('#cMaeAluno').value = ''
        document.querySelector('#cPaiAluno').value = ''
        document.querySelector('#cEnderecoAluno').value = '' 

        aviso.textContent= ''

        novoCaseContainer.style.display = 'block'
        bgNovoCaseContainer.style.display = 'block'

        cNomeAluno.focus()
        salvarLocalStorage()
    } else {
        alert('erro')
    }
}