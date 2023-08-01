//Parametros de funcao
function soma(num1,num2){
    return  num1 + num2;
}


//console.log(soma(10,10));

//uma forma de contornar erros de funcao atribuimos 1 pois todo numero 
//multiplicado por 1 e ele mesmo 
function multiplica(num1 = 1,num2 = 1){
   return num1 * num2;
}

function exibir(texto){
    console.log(texto);
}

//multiplica(soma(4,5),soma(3,3));

exibir( multiplica(soma(10,10)),soma(20,20) )  ;