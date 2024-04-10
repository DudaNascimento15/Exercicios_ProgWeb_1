function somaResultado(){

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);    
    var resultado; 
    var somaresult; 

    if(!isNaN(num1) && !isNaN(num2)){
      resultado = num1 + num2;     
    
    somaresult = document.getElementById('somaresult'); 
    somaresult.innerText = 'Resultado da soma: ' + resultado; 
    }
    else{
        alertaCampoVazio("Preencha os campos");   
    }

   
}

function comparaNumeros(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);     

    var mensagem = document.getElementById('mensagem'); 
    
   if(!isNaN(num1) && !isNaN(num2)) {
    if(num1 > num2){
        mensagem.innerHTML = '<p class="mensagem num1MaiorVermelho">Primeiro número é maior</p>';
    }
    else if (num1 < num2){
        mensagem.innerHTML = '<p class="mensagem num2MaiorVerde">Segundo número é maior</p>';
    }
    else{
        mensagem.innerHTML = '<p class="mensagem iguaisAmarelo">Ambos são iguais</p>';     
    }
    }
    else{
        alertaCampoVazio("Preencha os campos");   

    } 
}

function alertaCampoVazio(pMensagem) {
    alert(pMensagem);
}