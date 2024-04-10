function tamanho(){
    var frase = document.getElementById('frase').value;
    var tamanho1 = frase.length; 

    var resultado = document.getElementById('tamanho');
    resultado.innerHTML = '<p class="tamanho">O tamanho atual do campo é de: ' + tamanho1 + '</p>';
   
}

function copiaDigitado(frase) {
    document.getElementById('copia').innerHTML = frase;
}