const quantidade = 0
const contador = 0
const produto = [
    {id:1,nome:'casa',img:'<img src="../img/foto.png" alt="">',valor: 30.00},
    {id:2,nome:'carro',img:'<img src="../img/foto.png" alt="">',valor: 35.00},
    {id:3,nome:'iphone',img:'<img src="../img/foto.png" alt="">',valor: 100.00},
    {id:4,nome:'pc',img:'<img src="../img/foto.png" alt="">',valor: 52.00},
    {id:5,nome:'camisa',img:'<img src="../img/foto.png" alt="">',valor: 32.00}
]
for (let i = 0; i < produto.length; i++) {
    $(document).ready(function() {                
        $('#conteudo').append('<div class="card" id="card"><div class="nome_produto">'+ produto[i]['nome'] +'</div><div class="foto">'+ produto[i]['img'] +'</div><div class="valor"><h3>R$</h3> <input type="number" min="0" max="100" step="2" value="'+ produto[i]['valor'] +'" class="input_valor" id="input_valor" readonly></div><div class="btn" id="btns"><button onclick="btnVermelho('+ produto[i]['id'] +')" class="btnvermelho" id="btnvermelho"> - </button><input type="number" min="0" max="100" step="2" value="0" class="quantidade" id="'+ produto[i]['id'] +'" readonly><button class="btnverde" id="btnverde" onclick="btnVerde('+ produto[i]['id'] +')" > + </button></div></div>' );
    });

}
function btnVermelho(contador) { //localização do card no veto
    let quantidade = window.document.getElementById(contador)// quantidade do produto selecionado
    if (quantidade.value == 0) {
        console.log('não posso fazer nada')
    } else {
        console.log('contado:', contador)         
        console.log('quantidade:', quantidade.value)
        quantidade.value = Number(quantidade.value) - 1
        console.log('quantidade agora é:', quantidade.value)
        fortuna = window.document.getElementById('fortuna')
        fortuna.value = Number(fortuna.value) + produto[contador - 1]['valor']
        console.log('fortuna Agora é:', fortuna.value)

    }              
    }
    function btnVerde(contador) { //localização do card no veto    
        let quantidade = window.document.getElementById(contador)// quantidade do produto selecionado          
        console.log('contado:', contador)         
        console.log('quantidade:', quantidade.value)
        quantidade.value = Number(quantidade.value) + 1
        console.log('quantidade agora é:', quantidade.value)
        fortuna = window.document.getElementById('fortuna')
        fortuna.value = Number(fortuna.value) - produto[contador - 1]['valor']
        console.log('fortuna Agora é:', fortuna.value)
    }