function criptografar() {
    const textoOriginal = document.getElementById('textoOriginal').value;
    const textoCriptografado = textoOriginal
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    document.getElementById('textoResultante').value = textoCriptografado;
}

function descriptografar() {
    const textoCriptografado = document.getElementById('textoOriginal').value;
    const textoDescriptografado = textoCriptografado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    document.getElementById('textoResultante').value = textoDescriptografado;
}

function copiarTexto() {
    const textoResultante = document.getElementById('textoResultante');
    textoResultante.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}