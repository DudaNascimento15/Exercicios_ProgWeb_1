function comidaMostra(pComida){
    var opcaoSelecionada = pComida.textContent.trim(); 

    if(opcaoSelecionada == 'Comida de Mãe'){
        alert("Comida selecionada: Bife a roulet" );

    }
    else if(opcaoSelecionada == 'Italia'){
        alert("Comida selecionada: Pizza" );

    }
    else if(opcaoSelecionada == 'McDonalds'){
        alert("Comida selecionada: Hamburguer" );

    }
    else if(opcaoSelecionada == 'Brasileiro'){
        alert("Comida selecionada: Feijão e arroz" );

    }
    else if(opcaoSelecionada == 'Cinema'){
        alert("Comida selecionada: Pipoca" );

    }   
   
}

function mudaCor(plinha){
    plinha.style.backgroundColor = "red";
}