let fortuna = window.document.getElementById('fortuna') // input do valor da fortuna
let btn_Vermelho = window.document.getElementById('btnvermelho')//pegando o id dos botões
let btn_Verde = window.document.getElementById('btnverde')


let valor = window.document.getElementById('valor')
let quantidade = window.document.getElementById('quantidade')

btn_Vermelho.addEventListener('click', clicarVermelho) // adicionando o evento click nos botões
btn_Verde.addEventListener('click', clicarVerde)

var n1 = Number(fortuna.value) // convertendo para numero
var n2 = Number(valor.value)
var quant = Number(quantidade.value)



function clicarVermelho(){ 
    quant = quant - 1
    quantidade.value = `${quant}`
    n1 = n1 + n2
    fortuna.value = `${n1}` //alterando o valor do input da fortuna
    fortuna.style.background = 'green'
    
}

function clicarVerde(){
    quant = quant + 1
    quantidade.value = `${quant}`
    n1 = n1 - n2
    fortuna.value = `${n1}` //alterando o valor do input da fortuna
    fortuna.style.background = 'red'
    
}
