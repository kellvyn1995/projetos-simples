const timeStemp = '1666723707';
const keyPublic = '958280368eeee368391edbda2073737f';
const md5Hash = '725d259cefb5bbdc855d1326610d3ede';

function criarCard(hqs){
    let totalCard = document.getElementById('totalCard');
    const hqsHTML = hqs.map(hq => {
        let cardElement = `        
            <div class="card" onclick="modal(${hq.id})">
                <div class="topCard">
                    <h2 class="titulo_top">${hq.title}</h2>
                </div>
                <img class="capa" src="${hq.thumbnail.path}.${hq.thumbnail.extension}" alt="">
                <span><button class="btn_env">Enviar</button></span>
            </div>
            <div class="detalhes" id="${hq.id}"> 
                <button class="btn" onclick="ocultaModal(${hq.id})">Fechar</button>
                <p class="det_p">${hq.description}</p>
                <h3 class="det_h3">${hq.creators.items[0]['role']}: ${hq.creators.items[0]['name']}</h3>
                <h3 class="det_h3">${hq.creators.items[1]['role']}: ${hq.creators.items[1]['name']}</h3>
                <button class="btn" onclick="getLocation()">Enviar</button>
            </div>`;
        return cardElement;
    })
    totalCard.innerHTML = hqsHTML.join(" ");
}

fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStemp}&apikey=958280368eeee368391edbda2073737f&hash=${md5Hash}&hasDigitalIssue=true&limit=10`)
.then(response => response.json())
.then(response => {
    const hqs = response.data.results;
    criarCard(hqs);
})

function modal(id_modal){
    let modal = document.getElementById(id_modal);
    modal.style.display = 'block';
}
function ocultaModal(id_modal){
    let modal = document.getElementById(id_modal);
    modal.style.display = 'none';
}
function ocultaModalMap() {
    let modal2 = document.getElementById('modal_envio');
    modal2.style.display = 'none';
}
function busca_hq() {
    let busca_hq = document.getElementById('input_iron').value;
    fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${timeStemp}&apikey=958280368eeee368391edbda2073737f&hash=${md5Hash}&hasDigitalIssue=true&titleStartsWith=${busca_hq}&limit=20`)
        .then(response => response.json())
        .then(response => {
        const hqs = response.data.results;
        criarCard(hqs);
    })
}