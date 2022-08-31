    // criando estrutura HTML com javascript
    document.addEventListener('DOMContentLoaded', function(){
        var card = document.createElement('div')
        card.id = 'card'
        card.innerHTML = 'teste javascript'
        card.className = 'card'
        document.body.appendChild(card)

        var nome_produto = document.createElement('div')
        nome_produto.id = 'nome_produto'
        nome_produto.innerHTML = 'nome_produto'
        nome_produto.className = 'nome_produto'
        card.appendChild(nome_produto)

        var foto = document.createElement('div')
        foto.id = 'foto'
        foto.innerHTML = 'foto'
        foto.className = 'foto'
        card.appendChild(foto)
        
        var valor = document.createElement('div')
        valor.id = 'valor'
        valor.innerHTML = 'valor'
        valor.className = 'valor'
        card.appendChild(valor)

        var input_valor = document.createElement('input')
        input_valor.id = 'input_valor'
        input_valor.value = '100'
        input_valor.className = 'input_valor'
        input_valor.min = '0'
        input_valor.max="100"
        input_valor.step="2"
        input_valor.type="number"
        card.appendChild(input_valor)

    },false)