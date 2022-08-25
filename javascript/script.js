// MENU RESPONSIVO 
const iconShowMenu = document.querySelector('#iconMenu')
const showMenu = document.querySelector('#menu-responsivo')

iconShowMenu.addEventListener('click', aparecerMenu)

function aparecerMenu() {
    if (showMenu.style.display == 'block') {
        showMenu.style.display = 'none'
    } else {
        showMenu.style.display = 'block'
    }
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


// MODAL CADASTRO //

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
}

// DADOS DO ALUNO
btnCadastrarModal.addEventListener('click', function(e){
    e.preventDefault()
})

btnCadastrarModal.addEventListener('click', dadosNovoAluno)
function dadosNovoAluno(){
    if (continuarCadastrando.checked == true) {
        novoCaseContainer.style.display = 'block'
        bgNovoCaseContainer.style.display = 'block'
    } else {
        novoCaseContainer.style.display = 'none'
        bgNovoCaseContainer.style.display = 'none'
    }
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

    cellNomeAluno.innerHTML = alunoDados.nome
    cellSerieAluno.innerHTML = `<span class="resAlunoResult">Série: </span>${alunoDados.serie}`
    cellCelularAluno.innerHTML = `<span class="resAlunoResult">Celular: </span>${alunoDados.celular}`
    cellTelefoneAluno.innerHTML = `<span class="resAlunoResult">Telefone: </span>${alunoDados.telefone}`
    cellNomeMaeAluno.innerHTML = `<span class="resAlunoResult">Mãe:</span>${alunoDados.mae}`
    cellNomePaiAluno.innerHTML = `<span class="resAlunoResult">Pai: </span>${alunoDados.pai}`
    cellEnderecoAluno.innerHTML = `<span class="resAlunoResult">Endereço: </span>${alunoDados.endereco}`
    cellHR.innerHTML = `<div style="height:1px;width:60vw;background-color:rgb(177, 177, 177);"></div>`

    cellNomeAluno.style = 'font-weight:bold;font-size:25px;margin-bottom:3px;color:#363636;'
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

}

/*
//IMG
const inputFile = document.querySelector('#picture__input')
const pictureImage = document.querySelector('.picture__img')
const pictureImageDocument = document.querySelector('#img-camera')
const bgPicture = document.querySelector('.picture')
const imgCamera = document.querySelector('#img-camera')

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target
    const file = inputTarget.files[0]
    let remove = document.querySelector('.remove')

    if(file) {
        const reader = new FileReader()

        reader.addEventListener('load', function(e){
            const readerTarget = e.target

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add('picture__img')
            pictureImageDocument.style.display = 'none'

            pictureImage.innerHTML = ''
            pictureImage.appendChild(img)
            bgPicture.style.backgroundColor = 'transparent'
        })

        reader.readAsDataURL(file)
    } else {
        bgPicture.style.backgroundColor = '#cecece'
        pictureImage.innerHTML = 'Adicionar uma imagem'
    }
})
*/