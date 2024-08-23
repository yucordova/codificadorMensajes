function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar() {
    let texto = document.getElementById("izquierdaTexto").value;
    
    if (!validarTexto(texto)) {
        alert("⚠️ Solo se permiten letras minúsculas y sin acentos.");
        return;
    }
    
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("mensaje").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("izquierdaTexto").value;
    
    if (!validarTexto(texto)) {
        alert("⚠️ Solo se permiten letras minúsculas y sin acentos.");
        return;
    }
    
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("mensaje").value = textoDesencriptado;
}

function copiarTexto() {
    let mensaje = document.getElementById("mensaje");
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + mensaje.value);
}

document.getElementById("izquierdaTexto").addEventListener("input", function() {
    document.getElementById("mensaje").value = "";
});
