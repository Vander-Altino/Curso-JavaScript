




function exibirTexto(texto){
    console.log(texto);
}

// executa a funcao (1 ou  +  vezes)
exibirTexto(soma());// inclusive chama outra funcao 
exibirTexto("ola eu sou outro texto");

function soma(){
    return  2 + 2;
}


//console.log(soma());