
let fortuna = window.document.getElementById('fortuna') // input do valor da fortuna
let btn_Vermelho = window.document.getElementsByClassName('btnvermelho')//pegando o id dos botões
let btn_Verde = window.document.getElementsByClassName('btnverde')


let valor = window.document.getElementById('valor')
let quantidade = window.document.getElementById('quantidade')

for (let i = 0; i < btn_Vermelho.length; i++) {
    const element = btn_Vermelho[i];
    btn_Vermelho[i].addEventListener('click', clicarVermelho) // adicionando o evento click nos botões
}

for (let a = 0; a < btn_Verde.length; a++) {
    const element = btn_Verde[a];
    btn_Verde[a].addEventListener('click', clicarVerde)
}


let n1 = Number(fortuna.value) // convertendo para numero
let n2 = Number(valor.value)
let quant = Number(quantidade.value)



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



