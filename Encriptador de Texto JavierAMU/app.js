let botonDesencriptar = document.getElementById("boton-desencriptar");
let botonEncriptar = document.getElementById("boton-encriptar");
let botonCopiar = document.getElementById("boton-copiar");
let botones = document.getElementsByClassName(".boton");
let textoEntrada = document.getElementById("agregar-texto-encriptar");
let textoSalida = document.getElementById("copiar-texto-desencriptar");
let cuerpo = document.querySelector("body");
let contenedorPadre = document.querySelector(".resultado");

function habilitarBoton() {   
    botonDesencriptar.disabled = false;
    botonEncriptar.disabled = false;
}
function habilitarCopiado() {
    botonCopiar.disabled = false;
}
function focusTextArea() {
    var textarea = document.getElementById("agregar-texto-encriptar");
    textarea.focus();
}
function encriptarMensaje() {
    if (textoEntrada.value != "") {
      let regExp = /^[a-z\s]+$/;
  
      if (regExp.test(textoEntrada.value)) {
        let mensajeEncriptado = textoEntrada.value;
        mensajeEncriptado = mensajeEncriptado.replace(/e/gim, "enter");
        mensajeEncriptado = mensajeEncriptado.replace(/i/gim, "imes");
        mensajeEncriptado = mensajeEncriptado.replace(/a/gim, "ai");
        mensajeEncriptado = mensajeEncriptado.replace(/o/gim, "ober");
        mensajeEncriptado = mensajeEncriptado.replace(/u/gim, "ufat");
        textoSalida.innerHTML = mensajeEncriptado;
        textoSalida.value = mensajeEncriptado;
        actualizarWeb();
      } else {
        myAlert("Escribe un texto con solo letras minúsculas y espacios.");
        focusTextArea();
      }
    } else {
      myAlert("Escribe un texto");
      focusTextArea();
    }
  }
  function desencriptarMensaje() {
    if (textoEntrada.value != "") {
        let mensajeDesencriptado = textoEntrada.value;
        mensajeDesencriptado = mensajeDesencriptado.replace(/enter/gim, "e");
        mensajeDesencriptado = mensajeDesencriptado.replace(/imes/gim, "i");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ai/gim, "a");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ober/gim, "o");
        mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/gim, "u");
        textoSalida.innerHTML = mensajeDesencriptado;
        textoSalida.value = mensajeDesencriptado;
        actualizarWeb();
    }
    else {
        myAlert("Para desencriptar un mensaje, usa la caja de texto");
        focusTextArea();
    }
}
function copiarMensaje() {
    if (textoSalida.value != "") {
        navigator.clipboard.writeText(textoSalida.value);
        myAlert("Mensaje copiado");
    }
    else {
        myAlert("Nada que copiar");
    }
}
botonEncriptar.onclick = encriptarMensaje;
botonDesencriptar.onclick = desencriptarMensaje;
botonCopiar.onclick = copiarMensaje;
textoEntrada.onclick = habilitarBoton;
