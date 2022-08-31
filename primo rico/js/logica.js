const quantidade = 0
const contador = 0
const produto = [
    {id:1, nome:'Combo Whopper', img:'<img src="../img/products/whopper.webp " alt="" class="img">', valor: 30.00},
    {id:2, nome:'Par de Havaianas', img:'<img src="../img/products/havaianas.webp " alt="" class="img">', valor:39.00},
    {id:3, nome:'Pack de Coca-Cola', img:'<img src="../img/products/coca-cola.webp " alt="" class="img">', valor:43.00},
    {id:4, nome:'Ingresso de Cinema', img:'<img src="../img/products/ingresso.webp " alt="" class="img">', valor:49.00},
    {id:5, nome:'Livro', img:'<img src="../img/products/livro.webp " alt="" class="img">', valor:69.00},
    {id:6, nome:'Jantar no Outback', img:'<img src="../img/products/outback.webp " alt="" class="img">', valor:89.00},
    {id:7, nome:'Jogo de Videogame', img:'<img src="../img/products/game.webp " alt="" class="img">', valor:250.00},
    {id:8, nome:'Alexa', img:'<img src="../img/products/alexa.webp " alt="" class="img">', valor:370.00},
    {id:9, nome:'Um ano de Netflix', img:'<img src="../img/products/netflix.webp " alt="" class="img">', valor:550.00},
    {id:10, nome:'Um ano de Academia', img:'<img src="../img/products/academia.webp " alt="" class="img">', valor:1200.00},
    {id:11, nome:'Apple Watch 3', img:'<img src="../img/products/smartwatch.webp " alt="" class="img">', valor:2000.00},
    {id:12, nome:'Geladeira Inox', img:'<img src="../img/products/geladeira.webp " alt="" class="img">', valor:2999.00},
    {id:13, nome:'Iphone 13', img:'<img src="../img/products/smartphone.webp " alt="" class="img">', valor:4999.00},
    {id:14, nome:'Fusca', img:'<img src="../img/products/fusca.webp " alt="" class="img">', valor:10000.00},
    {id:15, nome:'Peugeot 307', img:'<img src="../img/products/peugeot.webp " alt="" class="img">', valor:20000.00},
    {id:16, nome:'Viagem para a Disney', img:'<img src="../img/products/disney.webp " alt="" class="img">', valor:40000.00},
    {id:17, nome:'Casa', img:'<img src="../img/products/casa.webp " alt="" class="img">', valor:150000.00},
    {id:18, nome:'Hilux 2022', img:'<img src="../img/products/hilux.webp " alt="" class="img">', valor:220000.00},
    {id:19, nome:'Apartamento', img:'<img src="../img/products/apartamento.webp " alt="" class="img">', valor:500000.00},
    {id:20, nome:'Porsche 911', img:'<img src="../img/products/porsche.webp " alt="" class="img">', valor:1200000.00},
    {id:21, nome:'Franquia Burger King', img:'<img src="../img/products/franquia.webp " alt="" class="img">', valor:1700000.00},
    {id:22, nome:'Helicóptero', img:'<img src="../img/products/helicoptero.webp " alt="" class="img">', valor:3500000.00},
    {id:23, nome:'Mansão', img:'<img src="../img/products/mansao.webp " alt="" class="img">', valor:5000000.00},
    {id:24, nome:'Iate de Luxo', img:'<img src="../img/products/iate.webp " alt="" class="img">', valor:10000000.00},
    {id:25, nome:'Jato Particular', img:'<img src="../img/products/jato.webp " alt="" class="img">', valor:30000000.00},
    {id:26, nome:'Anunciar no BBB 22', img:'<img src="../img/products/bbb.webp " alt="" class="img">', valor:69000000.00},
    {id:27, nome:'Super Mansão', img:'<img src="../img/products/super-mansao.webp " alt="" class="img">', valor:100000000.00},
    {id:28, nome:'Candidatura para Presidente', img:'<img src="../img/products/eleicao.webp " alt="" class="img">', valor:130000000.00},
    {id:29, nome:'Filme de Hollywood', img:'<img src="../img/products/filme.webp " alt="" class="img">', valor:200000000.00},
    {id:30, nome:'Avião de Carga', img:'<img src="../img/products/boeing.webp " alt="" class="img">', valor:400000000.00},
    {id:31, nome:'Quadro Mona Lisa', img:'<img src="../img/products/monalisa.webp " alt="" class="img">', valor:1000000000.00},
    {id:32, nome:'Flamengo', img:'<img src="../img/products/flamengo.webp " alt="" class="img">', valor:2873000000.00},
]
for (let i = 0; i < produto.length; i++) { // usando o Jquery paara criar as tags HTML
    $(document).ready(function() {                
        $('#conteudo').append('<div class="card" id="card"><div class="nome_produto">'+ produto[i]['nome'] +'</div><div class="foto">'+ produto[i]['img'] +'</div><div class="valor"><h3>R$</h3> <input type="number" min="0" max="100" step="2" value="'+ produto[i]['valor'].toFixed(2) +'" class="input_valor" id="input_valor" readonly></div><div class="btn" id="btns"><button onclick="btnVermelho('+ produto[i]['id'] +')" class="btnvermelho" id="btnvermelho"> - </button><input type="number" min="0" max="100" step="2" value="0" class="quantidade" id="'+ produto[i]['id'] +'" readonly><button class="btnverde" id="btnverde" onclick="btnVerde('+ produto[i]['id'] +')" > + </button></div></div>' );
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

