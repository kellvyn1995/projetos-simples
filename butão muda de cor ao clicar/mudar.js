btn = document.getElementById("btn")
btn.innerHTML = "valor"

function mudaCor(){
    if (btn.value == 1) {
        btn.style.color = "blue"
        btn.value = `${0}`
        btn.innerHTML = "agora sou 1"
    } else {
        btn.style.color = "red"  
        btn.value = `${1}`
        btn.innerHTML = "agora sou 0"
    }
    console.log(btn.value);
}


function mudaNivel(btn) {
    let muda_nivel = document.getElementById(btn)
    console.log(muda_nivel.value);

    if(muda_nivel.value == 1){
        muda_nivel.classList.remove('btn_vermelho')
        muda_nivel.classList.add('btn_verde')
        muda_nivel.value = 0
    }else{
        muda_nivel.classList.remove('btn_verde')
        muda_nivel.classList.add('btn_vermelho')
        muda_nivel.value = 1
    }
    
}
