const seccionCentral= document.querySelector(".seccionCentral");
const seccionMensaje= document.querySelector(".seccionMensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    if(!validarTexto()) {
    const textoEncriptado = encriptar(seccionCentral.value)
    seccionMensaje.value = textoEncriptado
    seccionCentral.value="";
    seccionMensaje.style.backgroundImage="none";
}   }
function btnDesencriptar(){
    const textoEncriptado = desencriptar(seccionCentral.value)
    seccionMensaje.value = textoEncriptado
    seccionCentral.value="";
    
}


function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"],["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}
    function desencriptar(stringDesencriptar){
        let matrizCodigo =[["e", "enter"],["i","imes"],["a","ai"], ["o","ober"], ["u","ufat"]];
        stringDesencriptar = stringDesencriptar.toLowerCase();
    
        for(let i=0;i<matrizCodigo.length;i++){
            if(stringDesencriptar.includes(matrizCodigo[i][1])){
                stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }
        }
        return stringDesencriptar
}

function copiar(){
    seccionMensaje.select();
    navigator.clipboard.writeText(seccionMensaje.value)
    seccionMensaje.value = "";
    alert("Texto Copiado")
}
function validarTexto(){
    let textoEscrito = document.querySelector(".seccionCentral").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}