let cadastrar    = document.querySelector('#cadastrar')
let caseModal    = document.querySelector('.caseModal')
let closeModal   = document.querySelector('#close')
let bg           = document.querySelector('.bgCaseModal')
let btnCadastrar = document.querySelector('#btnCadastrar')
let btnCancelar  = document.querySelector('#btnCancelar')
let btnLimpar    = document.querySelector('#btnLimpar')
let aviso        = document.querySelector('#aviso')

// ABRIR E FECHAR MODAL
cadastrar.addEventListener('click', abrir)
function abrir(){
    caseModal.style.display = 'block'
    bg.style.display = 'block'
}

closeModal.addEventListener('click', fechar)
btnCancelar.addEventListener('click', fechar)
function fechar() {
    caseModal.style.display = 'none'
    bg.style.display = 'none'
    aviso.textContent = ''
}

// LIMPAR MODAL
btnLimpar.addEventListener('click', limpar)
function limpar(){
    aviso.textContent = ''
}

// DADOS DO ALUNO
btnCadastrar.addEventListener('click', function(e){
    e.preventDefault()
})
btnCadastrar.addEventListener('click', novoAluno)

let csituacao = document.querySelector('#csituacao')

function novoAluno(){

    if (csituacao.value == "aprovado" || csituacao.value == "APROVADO" || csituacao.value == "Aprovado") {

        let tbAprovados = document.querySelector('#tbAlunosAprovados')
        let qtdLinhasAprovados = tbAprovados.rows.length
        let linhaAprovados = tbAprovados.insertRow(qtdLinhasAprovados)

        let cellNumeroAprovados = linhaAprovados.insertCell(0)
        let cellNomeAprovados = linhaAprovados.insertCell(1)
        let cellTurmaAprovados = linhaAprovados.insertCell(2)
        let cellSituacaoAprovados = linhaAprovados.insertCell(3)

        let alunoAprovado = {
            nome     : cnome.value,
            serie    : cserie.value,
            turma    : cturma.value,
            situacao : csituacao.value,
        }

        cellNumeroAprovados.innerHTML = qtdLinhasAprovados
        cellNomeAprovados.innerHTML = alunoAprovado.nome
        cellTurmaAprovados.innerHTML = `${alunoAprovado.serie}º ${alunoAprovado.turma.toUpperCase()}`
        cellSituacaoAprovados.textContent = 'Aprovado'
        aviso.textContent = ''

    } else if (csituacao.value == "reprovado" || csituacao.value == "REPROVADO" || csituacao.value == "Reprovado"){

        let tbReprovados = document.querySelector('#tbAlunosReprovados')
        let qtdLinhasReprovados = tbReprovados.rows.length
        let linhaReprovados = tbReprovados.insertRow(qtdLinhasReprovados)

        let cellNumeroReprovados = linhaReprovados.insertCell(0)
        let cellNomeReprovados = linhaReprovados.insertCell(1)
        let cellTurmaReprovados = linhaReprovados.insertCell(2)
        let cellSituacaoReprovados = linhaReprovados.insertCell(3)

        let alunoReprovado = {
            nome     : cnome.value,
            serie    : cserie.value,
            turma    : cturma.value,
            situacao : csituacao.value,
        }

        
        cellNumeroReprovados.innerHTML = qtdLinhasReprovados
        cellNomeReprovados.innerHTML = alunoReprovado.nome
        cellTurmaReprovados.innerHTML = `${alunoReprovado.serie}º ${alunoReprovado.turma.toUpperCase()}`
        cellSituacaoReprovados.textContent = 'Reprovado'
        aviso.textContent = ''
    } else {
        aviso.textContent = '- Por favor, insira as informações corretamente.'
}}




