function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto
    .replaceAll('e', "enter")
    .replaceAll('i', "imes")
    .replaceAll('a', "ai")
    .replaceAll('o', "ober")
    .replaceAll('u', "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
function encrip(){

}





    
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

function desencriptar (){ 
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto
    .replaceAll('enter', "e") 
    .replaceAll('imes', "i")
    .replaceAll('ai', "a")
    .replaceAll('ober', "o")
    .replaceAll('ufat', "u");
    document.querySelector(".text-input-salida").value = textoCifrado; 
    document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function copiarTexto(){
    
    var tocopt= document.querySelector("#msg");
    tocopt.select();
    navigator.clipboard.writeText(tocopt.value);
    
}
var botonCopiar = document.querySelector("#btn-copy"); botonCopiar.onclick = copiarTexto;